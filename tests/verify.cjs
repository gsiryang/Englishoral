'use strict';
// State and rendering checks without a browser engine or external dependencies.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const nodes=new Map(),listeners={},local=new Map(),downloads=[];
let now=0,intervals=new Map(),intervalId=0;
function node(selector){if(!nodes.has(selector))nodes.set(selector,{innerHTML:'',textContent:'',value:'',disabled:false,files:[],querySelectorAll:()=>[],classList:{add(){},remove(){},toggle(){}},addEventListener(){},setAttribute(){},removeAttribute(){},showModal(){this.open=true;},close(){this.open=false;},select(){},click(){},remove(){},scrollIntoView(){},getBoundingClientRect(){return {left:0,right:600,top:0,bottom:600};}});return nodes.get(selector);}
const context={console,Date,Math,JSON,Map,Set,String,Number,Boolean,Array,Object,Error,Promise,RegExp,Uint8Array,Blob,atob,btoa,URL,performance:{now:()=>now},setTimeout:()=>0,clearTimeout(){},setInterval:fn=>{intervals.set(++intervalId,fn);return intervalId;},clearInterval:id=>intervals.delete(id),queueMicrotask,location:{hash:'#today',protocol:'http:'},navigator:{},document:{hidden:false,querySelector:node,querySelectorAll:()=>[],addEventListener:(type,fn)=>listeners[type]=fn,body:{append(){}},createElement:()=>node('download')},localStorage:{getItem:k=>local.get(k)||null,setItem:(k,v)=>local.set(k,v)},window:{addEventListener(){},scrollTo(){}}};
context.window=context;context.addEventListener=()=>{};
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root,'curriculum.js'),'utf8'),context);
const source=fs.readFileSync(path.join(root,'app.js'),'utf8').replace(/init\(\);\s*\}\)\(\);\s*$/,'globalThis.TEST={fresh,validateState,home,plan,studio,practice,records,settings,nextSession,session,completeStep,parseRoute,stepMinutes,plannedDate,taskCard,prepareImport,toggleTimer,tick,stopTimer,esc,render,sourceImport,startRecording,getState:()=>state,setState:v=>state=v,setDB:v=>db=v,getMedia:()=>media,setMedia:v=>media=v};\n})();');
assert(source.includes('globalThis.TEST='));vm.runInContext(source,context);
const t=context.TEST,plain=value=>JSON.parse(JSON.stringify(value));
function check(name,fn){try{fn();console.log('PASS '+name);}catch(e){console.error('FAIL '+name);throw e;}}
const rendered={};
check('12 distinct weeks, 60 day tasks, complete English and Chinese material',()=>{
 assert.equal(context.CURRICULUM.length,12);const titles=new Set(),tasks=new Set();
 for(const c of context.CURRICULUM){titles.add(c.title);assert.equal(c.tasks.length,5);assert(c.lines.length>=6);assert.equal(c.prompts.length,3);assert(c.chunks.length>=3);for(const line of c.lines)assert(line.every(Boolean));for(const task of c.tasks)tasks.add(task);}
 assert.equal(titles.size,12);assert.equal(tasks.size,60);
});
check('30, 45, 60 minute schedules sum to the selected duration',()=>{for(const n of [30,45,60]){t.getState().profile.minutes=n;assert.equal(t.stepMinutes().reduce((a,b)=>a+b,0),n);}t.setState(t.fresh());});
check('progress resumes the first incomplete session, without skipping missed days',()=>{
 assert.deepEqual(plain(t.nextSession()),{week:0,day:0});for(let s=0;s<5;s++)t.completeStep(0,0,s);assert.deepEqual(plain(t.nextSession()),{week:0,day:1});assert(t.session(0,0).completedAt);assert.equal(new Set(t.session(0,0).steps).size,5);t.completeStep(0,0,4);assert.equal(t.session(0,0).steps.length,5);t.setState(t.fresh());
});
check('calendar handles weekend start and month boundaries',()=>{
 t.getState().profile.startDate='2026-10-31';assert.equal(t.plannedDate(0).getDay(),1);assert.equal(t.plannedDate(0).getDate(),2);assert.equal(t.plannedDate(5).getDate(),9);t.setState(t.fresh());
});
check('timer counts active time, preserves it on pause, and does not complete a task',()=>{
 now=0;t.toggleTimer(0,0,0);now=5700;t.tick();assert.equal(t.session(0,0).seconds[0],5);now=8900;t.stopTimer();assert.equal(t.session(0,0).seconds[0],8);now=100000;t.tick();assert.equal(t.session(0,0).seconds[0],8);assert.equal(t.session(0,0).steps.length,0);assert.equal(intervals.size,0);t.setState(t.fresh());
});
check('imported state rejects corruption and sanitizes unsupported fields',()=>{
 assert.throws(()=>t.validateState({version:9}));const s=t.fresh();s.sessions.w1d1={steps:[0,0,1,100,-1],seconds:{0:-5,1:Infinity},ratings:{speaking:'forged'},notes:'<img src=x onerror=alert(1)>'};s.profile.minutes=999;const clean=t.validateState(s);assert.deepEqual(plain(clean.sessions.w1d1.steps),[0,1]);assert.equal(clean.sessions.w1d1.seconds[0],0);assert.equal(clean.profile.minutes,45);assert.equal(clean.sessions.w1d1.ratings.speaking,'');assert.equal(clean.sessions.w1d1.completedAt,null);t.setState(clean);assert(!t.records().includes('<img src=x'));assert(t.records().includes('&lt;img'));t.setState(t.fresh());
});
check('route parameters are bounded and unknown routes fall back safely',()=>{for(const [hash,expected]of [['#practice/999/999/999',{name:'practice',w:11,d:4,s:4}],['#unknown',{name:'today',w:0,d:0,s:0}],['#studio/-1',{name:'studio',w:0,d:0,s:0}]]){context.location.hash=hash;assert.deepEqual(plain(t.parseRoute()),expected);}context.location.hash='#today';});
check('AI handoff includes actual notes, feedback and stage-specific tasks',()=>{
 t.session(0,0).feedback='放慢重点词';t.session(3,4).notes='追问时容易忘词';const text=t.taskCard(3,4);assert(text.includes('追问时容易忘词'));assert(text.includes('放慢重点词'));assert(text.includes('阶段复测'));assert(text.includes('只有文字时请明确评价范围'));t.setState(t.fresh());
});
check('all 300 lesson steps and primary views render without undefined values',()=>{
 rendered.today=t.home();rendered.plan=t.plan();rendered.studio=t.studio(0);rendered.records=t.records();rendered.settings=t.settings();
 for(let w=0;w<12;w++)for(let d=0;d<5;d++)for(let s=0;s<5;s++){const html=t.practice(w,d,s);assert(!html.includes('undefined'),`w${w}d${d}s${s}`);assert(!html.includes('NaN'));if(w===0&&d===0)rendered['practice'+s]=html;}
 for(const html of Object.values(rendered)){assert(!html.includes('undefined'));assert(!html.includes('NaN'));}t.setState(t.fresh());
});
async function runAsync(){
 const stored=[];t.setDB({transaction:()=>{const tx={objectStore:()=>({clear:()=>{stored.length=0;},put:m=>stored.push(m)})};queueMicrotask(()=>tx.oncomplete());return tx;}});
 const backup={app:'shengzhang',version:1,state:t.fresh(),media:[{id:'source-0',kind:'source',week:0,name:'original.mp3',data:'data:audio/mpeg;base64,AQID',createdAt:new Date().toISOString()},{id:'rec-123-abc',kind:'recording',week:0,sessionId:'w1d1',name:'recording',data:'data:audio/webm;codecs=opus;base64,BAUG',createdAt:new Date().toISOString(),duration:3}]};
 await t.prepareImport(new Blob([JSON.stringify(backup)]));assert(node('#modal-content').innerHTML.includes('确认导入'));assert.equal(typeof node('#confirm-import').onclick,'function');await node('#confirm-import').onclick();assert.equal(stored.length,2);assert.equal(t.getMedia().size,2);assert.equal(t.getMedia().get('rec-123-abc').blob.type,'audio/webm;codecs=opus');assert.equal(t.getMedia().get('rec-123-abc').blob.size,3);console.log('PASS full backup restores source audio and codec-bearing recordings');
 const before=t.getMedia();backup.media[1].sessionId='w12d9';await t.prepareImport(new Blob([JSON.stringify(backup)]));assert.equal(t.getMedia(),before);assert(node('#toast').textContent.includes('不匹配'));console.log('PASS invalid backup leaves current records and audio intact');
 t.setState(t.fresh());t.setMedia(new Map());
 let stopped=0,lastRecorder;context.navigator.mediaDevices={getUserMedia:async()=>({getTracks:()=>[{stop:()=>stopped++}]})};
 context.MediaRecorder=class {static isTypeSupported(type){return type==='audio/webm;codecs=opus';}constructor(stream,opts){this.state='inactive';this.mimeType=opts.mimeType;lastRecorder=this;}start(){this.state='recording';}stop(){this.state='inactive';this.ondataavailable({data:new Blob(['recording-test'],{type:this.mimeType})});this.stopPromise=this.onstop();}};
 context.location.hash='#studio/0';await t.startRecording(0,0);assert.equal(lastRecorder.state,'recording');await t.startRecording(0,0);await lastRecorder.stopPromise;assert.equal(stopped,1);assert.equal(t.getMedia().size,1);assert.equal([...t.getMedia().values()][0].sessionId,'w1d1');assert.equal(intervals.size,0);console.log('PASS recording stop saves the audio and releases the microphone');
 context.navigator.mediaDevices.getUserMedia=async()=>{const e=new Error();e.name='NotAllowedError';throw e;};await t.startRecording(0,0);assert(node('#toast').textContent.includes('权限'));assert.equal(node('#record-toggle').disabled,false);console.log('PASS microphone denial offers recovery and re-enables the button');
 t.setState(t.fresh());t.setMedia(new Map());
 const escaped=t.fresh();escaped.sessions.w1d1={steps:[],seconds:{},notes:'<script>alert(1)</script>',feedback:'',ratings:{}};t.setState(t.validateState(escaped));rendered.recordsWithNotes=t.records();
 fs.mkdirSync(path.join(root,'tests','.output'),{recursive:true});for(const [name,html]of Object.entries(rendered))fs.writeFileSync(path.join(root,'tests','.output',name+'.html'),html);console.log('PASS generated HTML samples for structural validation');
}
runAsync().catch(e=>{console.error(e);process.exitCode=1;});
