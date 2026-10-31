'use strict';
// Original learning material. No third-party course audio is redistributed.
window.CURRICULUM = [
  {
    title:'从介绍自己开始', en:'A little about you', domain:'日常交流', goal:'不用逐字翻译，介绍自己并自然追问。', sound:'词重音与句子里的重点词', soundTip:'重读姓名、工作和兴趣等信息词。小词轻一点，避免每个词同样用力。',
    lines:[['A',"Hey, I’m Alex. I don’t think we’ve met.",'嗨，我是 Alex。我们好像还没见过。'],['B',"I’m Sam. Nice to meet you. What do you do?",'我是 Sam。很高兴认识你。你做什么工作？'],['A',"I work in design. How about you?",'我做设计。你呢？'],['B',"I’m in sales. I just moved here last month.",'我做销售。我上个月刚搬来。'],['A',"Oh, nice. How do you like it so far?",'不错呀。到目前为止，你觉得这里怎么样？'],['B',"Pretty good. I’m still getting to know the neighborhood.",'挺好的。我还在熟悉附近的环境。']],
    chunks:['I don’t think we’ve met.','How do you like … so far?','I’m still getting to know …'], focus:'在 “I work in DESIGN” 里突出 DESIGN；不要把每个词都念成一个节拍。',
    tasks:['用自己的情况替换姓名、职业和居住地，录一段 30–45 秒介绍。','挑选两句，先模仿重音，再跟着整段音频说。','不看文本介绍自己，并向新同事提出两个问题。','你更喜欢独处还是社交？给出一个理由和自己的例子。','进行一次初次见面的交流；请陪练追问你的工作和兴趣。'],
    prompts:['What do you enjoy doing after work?','What brought you to this city?','Do you prefer a small group or a big party?'], transfer:'在新同事入职时介绍自己，而不是在聚会上。', debate:'Making friends online is easier than making friends in person.', check:'能否不用原文介绍自己 45–60 秒，并接住两个追问？'
  },
  {
    title:'把需求说清楚', en:'Could I get…?', domain:'日常交流', goal:'提出请求、确认细节，不懂时主动澄清。', sound:'意群停顿与礼貌请求的语调', soundTip:'把一句话分成有意义的小组。请求语调可以柔和，但不要刻意把每句末尾都抬高。',
    lines:[['A',"Hi, could I get a small coffee, please?",'你好，请给我一小杯咖啡。'],['B',"Sure. Would you like room for milk?",'好的。需要留一点加牛奶的空间吗？'],['A',"Sorry, what do you mean by room for milk?",'不好意思，留加奶的空间是什么意思？'],['B',"Should I leave some space at the top?",'要不要在杯子上面留点空间？'],['A',"Oh, got it. Yes, please. And can I get it to go?",'哦，明白了。需要，谢谢。可以打包吗？'],['B',"Of course. That’ll be three dollars.",'当然。一共三美元。']],
    chunks:['Could I get …, please?','What do you mean by …?','Oh, got it.'], focus:'把 “Could I get / a small COFFEE / please?” 分成意群，先清楚，再连起来。',
    tasks:['听懂顾客要什么、店员确认什么，用中文或简单英文概括。','模仿请求和澄清的两种语调，录音比较。','不看文本完成点餐，再主动确认一个细节。','店员给错了饮料，礼貌解释问题并提出解决办法。','请陪练扮演店员，临时加入缺货或听不清的情况。'],
    prompts:['What would you order for a friend?','How would you ask someone to repeat that?','What would you do if your order was wrong?'], transfer:'在酒店前台请求换房，并澄清费用。', debate:'Small local stores are better than large chain stores.', check:'能否提出请求、澄清一次、确认一次，而不需要完整台词？'
  },
  {
    title:'讲一件发生过的事', en:'Here’s what happened', domain:'日常交流', goal:'用时间顺序讲清一段经历。', sound:'过去式词尾与清楚的辅音结尾', soundTip:'注意 missed、started、called 的词尾并不完全相同。先分辨，再放回整句，不额外加一个元音。',
    lines:[['A',"How was your weekend?",'你周末过得怎么样？'],['B',"A little stressful. I missed my train on Saturday.",'有点折腾。我周六错过了火车。'],['A',"Oh no. What happened?",'糟糕，发生什么了？'],['B',"I left home late, and then the bus got stuck in traffic.",'我出门晚了，然后公交又堵车了。'],['A',"So what did you do?",'那你怎么办的？'],['B',"I called my friend and booked a later train. It worked out in the end.",'我给朋友打了电话，订了晚一点的车。最后还是解决了。']],
    chunks:['What happened?','… got stuck in traffic.','It worked out in the end.'], focus:'比较 missed /t/、called /d/ 与 started /ɪd/；不要为了快而吞掉影响理解的结尾。',
    tasks:['按起因、经过、结果整理对话，不背原文。','模仿包含过去式的句子，留意词尾是否清楚。','用 45–60 秒讲一次迟到、迷路或小意外。','同一件事，分别向朋友和主管解释，调整措辞。','请陪练追问事情发生的顺序和你的感受。'],
    prompts:['What happened first?','What would you do differently next time?','Who helped you solve the problem?'], transfer:'向主管解释一次任务延误，补上你采取的行动。', debate:'Being late is sometimes acceptable.', check:'能否交代清楚发生了什么、为什么、最后怎样？'
  },
  {
    title:'解释自己的选择', en:'Here’s why', domain:'观点表达', goal:'给出选择、理由和例子，完成第一次复测。', sound:'对比重音', soundTip:'在表达 A 与 B 的差别时突出真正不同的信息。语调服务于意思，不追求刻意夸张。',
    lines:[['A',"Would you rather live downtown or outside the city?",'你更想住市中心还是城外？'],['B',"I’d choose downtown, mostly because I don’t want a long commute.",'我会选市中心，主要是不想通勤太久。'],['A',"But isn’t it more expensive?",'但那不是更贵吗？'],['B',"It is, but I’d save time on the way to work.",'是的，但我上班路上能省时间。'],['A',"That makes sense. I’d rather have more space.",'有道理。我更希望空间大一点。'],['B',"I get that. I guess it depends on what matters most to you.",'我理解。我想这取决于你最看重什么。']],
    chunks:['I’d choose …, mostly because …','It depends on …','I get that.'], focus:'对比 “save TIME” 与 “more SPACE”，用重音让听者知道分歧在哪里。',
    tasks:['找出双方的选择和理由，并用自己的话各说一句。','模仿比较与让步句，突出 time 和 space。','回答一个二选一问题，包含理由和亲身例子。','加入一个缺点，再解释你为何仍然这样选择。','复测：新题回答 60–90 秒，然后接受两个追问。'],
    prompts:['Would you rather work alone or with a team?','What is one drawback of your choice?','When would you choose the other option?'], transfer:'比较两种通勤方案，向同事解释你的选择。', debate:'Living downtown is worth the higher cost.', check:'能否在新题中说出观点、理由、例子，并承认一个缺点？'
  },
  {
    title:'确认任务，汇报进度', en:'Are we on the same page?', domain:'工作沟通', goal:'确认要求、汇报进展、提出下一步。', sound:'信息词重音与数字日期的清晰度', soundTip:'优先让 deadline、进度和下一步听清楚。录音时检查 Friday、fifteen 等信息是否易混。',
    lines:[['A',"How’s the report coming along?",'报告进展怎么样？'],['B',"The first draft is done. I’m checking the numbers now.",'初稿完成了。我正在核对数字。'],['A',"Great. Can you send it over by Friday?",'很好。周五之前能发过来吗？'],['B',"Just to confirm, do you mean Friday morning?",'确认一下，你指的是周五上午吗？'],['A',"Yes, before our ten o’clock meeting.",'对，十点开会之前。'],['B',"Got it. I’ll send it by nine and flag anything that needs a decision.",'明白。我会九点前发出，并标出需要决定的事项。']],
    chunks:['How’s … coming along?','Just to confirm, …','I’ll … by …'], focus:'突出 first DRAFT、FRIDAY morning、by NINE，使关键信息清楚。',
    tasks:['听出已经完成什么、现在做什么、截止时间是什么。','练习 deadline 和确认句，录音检查时间是否清楚。','用三句话汇报一项真实或虚构任务的进展。','发现要求不清楚，主动提出两个澄清问题。','请陪练扮演主管，改变截止时间并询问风险。'],
    prompts:['What have you finished so far?','What do you need help with?','What could delay the task?'], transfer:'向客户汇报进度，使用更完整、明确的表达。', debate:'Daily progress meetings help teams work better.', check:'能否独立说出已完成、待完成、风险和下一步？'
  },
  {
    title:'礼貌提出请求', en:'Could we work something out?', domain:'工作沟通', goal:'说明请求的原因，同时给出可行方案。', sound:'弱读与自然节奏', soundTip:'can、to、for 在句中常读得较轻。先听出轻重差别，不强行把词粘在一起。',
    lines:[['A',"Do you have a minute? I’d like to talk about the deadline.",'你有空吗？我想谈一下截止时间。'],['B',"Sure. What’s going on?",'可以。怎么了？'],['A',"We’re still waiting for the client’s feedback. Could we move it to Monday?",'我们还在等客户反馈。能改到周一吗？'],['B',"We need something for Friday’s meeting, though.",'不过周五开会需要有东西可看。'],['A',"I can send a summary on Friday and the full version on Monday.",'我可以周五发摘要，周一发完整版。'],['B',"That works. Please make the remaining questions clear.",'可以。请把剩下的问题列清楚。']],
    chunks:['I’d like to talk about …','Could we move it to …?','I can … and …'], focus:'听 “Could we move it to MONDAY?” 中 to 的轻读；保持 Monday 清楚。',
    tasks:['找出请求、原因和折中方案。','模仿请求句与替代方案，比较语气是否合适。','把原因换成自己的情况，提出一个有方案的请求。','对方不能接受原方案，提出第二个选择。','请陪练先拒绝你的请求，再与你协商折中方案。'],
    prompts:['Why do you need more time?','What can you deliver by the original deadline?','What is your backup plan?'], transfer:'与朋友协商改变旅行安排，调整正式程度。', debate:'Flexible deadlines lead to better work.', check:'能否提出请求、回应一次拒绝，并给出替代方案？'
  },
  {
    title:'比较方案，做出建议', en:'Let’s weigh the options', domain:'工作沟通', goal:'用标准比较方案，说明取舍。', sound:'意群与并列信息的节奏', soundTip:'把价格、时间、质量分开表达，给听者处理信息的停顿。',
    lines:[['A',"We have two options for the new website.",'新网站有两个方案。'],['B',"What’s the main difference?",'主要区别是什么？'],['A',"The first is cheaper, but the second is easier to maintain.",'第一个更便宜，第二个更容易维护。'],['B',"How much time would the second one save?",'第二个能省多少时间？'],['A',"About two hours a week. I think that matters more in the long run.",'每周大概两小时。我认为长期看这更重要。'],['B',"Then let’s choose the second one, as long as it fits our budget.",'那就选第二个，只要不超预算。']],
    chunks:['The main difference is …','In the long run, …','… as long as …'], focus:'在 “CHEAPER / but … easier to MAINTAIN” 中用停顿区分两项标准。',
    tasks:['列出两个方案的优缺点，口头各说一句。','模仿对比句，留意并列信息的节奏。','比较你熟悉的两种产品或方法，给出建议。','对方改变预算或时间限制，调整你的建议。','请陪练要求你解释标准，并提出一个反例。'],
    prompts:['Which factor matters most?','What are you giving up with your choice?','Would your answer change with a smaller budget?'], transfer:'比较线上与线下课程，面向朋友给建议。', debate:'The cheapest option is rarely the best option.', check:'能否按两个标准比较方案，并说明什么条件会改变选择？'
  },
  {
    title:'把问题讲清楚', en:'Let’s figure it out', domain:'工作沟通', goal:'区分事实与猜测，提出解决步骤并复测。', sound:'清楚的辅音与有意义的停顿', soundTip:'遇到复杂内容先减小意群，不用把整句话一口气说完。',
    lines:[['A',"The app keeps closing when I upload a photo.",'我上传照片时，应用总是关闭。'],['B',"Does it happen every time?",'每次都会发生吗？'],['A',"Only with large files. Small ones seem to work.",'只有大文件会。小文件好像没问题。'],['B',"It might be a size limit. Have you tried a smaller image?",'可能是大小限制。你试过小一点的图片吗？'],['A',"Yes, that worked. But we should explain the limit to users.",'试过，那样可以。但我们应该向用户说明限制。'],['B',"Agreed. Let’s add a clear message and check the upload process.",'同意。我们加个清楚的提示，再检查上传流程。']],
    chunks:['It happens when …','It might be …','Have you tried …?'], focus:'在现象、条件、猜测之间停顿；区分 “it IS” 与 “it MIGHT be”。',
    tasks:['用自己的话描述问题出现的条件和已知结果。','模仿提出猜测与建议的句子，保持语气区别。','解释一个真实的小问题，并区分事实和猜测。','提出两个解决步骤，再说明如何检查结果。','复测：解释一个新问题，接受三个追问，并给出下一步。'],
    prompts:['When did the problem start?','What have you tried already?','How will you know the problem is solved?'], transfer:'向不了解技术的客户解释问题，减少术语。', debate:'A simple solution is usually better than a complex one.', check:'能否说明现象、证据、猜测和下一步，而不混为一谈？'
  },
  {
    title:'让观点站得住', en:'Make your case', domain:'观点表达', goal:'把观点、理由和具体例子连接起来。', sound:'逻辑重点与句子收尾', soundTip:'重要结论说清楚，句尾不要因气息不足而越来越含糊。',
    lines:[['A',"Do you think people should work from home more often?",'你认为人们应该更多在家工作吗？'],['B',"Yes, especially when the work needs a lot of focus.",'是的，尤其是工作需要高度专注的时候。'],['A',"Why do you think that?",'你为什么这样认为？'],['B',"There are fewer interruptions. For example, I finish writing faster at home.",'打扰更少。比如我在家写东西更快。'],['A',"But some people feel isolated.",'但有些人会感到孤立。'],['B',"That’s a fair point. A mix of home and office days could work better.",'这个观点有道理。居家和办公室结合可能更好。']],
    chunks:['Especially when …','For example, …','That’s a fair point.'], focus:'突出原因中的 fewer INTERRUPTIONS，结论中的 a MIX；句尾保留清晰度。',
    tasks:['找出主张、理由、例子和让步。','模仿强调理由和承认异议的句子。','就一个观点说 60–90 秒，包含具体例子。','找出自己理由中的一个例外，并修改主张。','请陪练要求你澄清理由，并指出例子是否支持结论。'],
    prompts:['What is your strongest reason?','Can you give a specific example?','Who might disagree with you, and why?'], transfer:'讨论学习工具，而不是远程工作，沿用论证结构。', debate:'Companies should let employees work from home three days a week.', check:'能否给出与主张有关的理由和具体例子，而不只重复观点？'
  },
  {
    title:'听懂分歧，再回应', en:'I see your point, but…', domain:'讨论与辩论', goal:'准确复述对方观点，再提出有针对性的回应。', sound:'态度语调与礼貌异议', soundTip:'先表达理解，再说分歧。重音落在不同意见的内容上，避免每句都显得强硬。',
    lines:[['A',"Schools should ban phones during the day.",'学校应该在白天禁止使用手机。'],['B',"So you’re worried that phones distract students?",'所以你担心手机分散学生注意力？'],['A',"Exactly. It’s hard to focus with constant notifications.",'对。一直有通知很难专心。'],['B',"I see your point, but a complete ban could create other problems.",'我理解，但全面禁止可能带来其他问题。'],['A',"Like what?",'比如呢？'],['B',"Students may need to contact their families. Clear rules might work better.",'学生可能需要联系家人。明确规则可能更有效。']],
    chunks:['So you’re saying …?','I see your point, but …','A complete ban could …'], focus:'在 “I SEE your point / but …” 后留一点停顿，不急着抢着反驳。',
    tasks:['先准确复述双方观点，暂不加入自己的立场。','练习理解、确认和反对的语调差别。','对一个观点先复述，再用一个理由回应。','交换立场，为你原先反对的一方提出合理理由。','请陪练扮演持不同意见的人，检查你是否回应了实际论点。'],
    prompts:['What is the other person’s main concern?','Which part do you agree with?','What alternative would address both concerns?'], transfer:'与同事讨论会议时长，先确认顾虑再提出方案。', debate:'Schools should ban students from using phones during the school day.', check:'能否先正确复述对方观点，再回应其中一个具体理由？'
  },
  {
    title:'追问、反例与让步', en:'Does that always hold?', domain:'讨论与辩论', goal:'检查主张的适用范围，用反例推进讨论。', sound:'疑问语调与信息焦点', soundTip:'开放式追问不一定都用升调。先确保提问内容明确，再观察范本的语调。',
    lines:[['A',"Online classes are better because they’re more convenient.",'网课更好，因为更方便。'],['B',"Does that apply to every subject?",'这适用于每个学科吗？'],['A',"Maybe not. What are you thinking of?",'也许不是。你想到什么了？'],['B',"Lab courses, for example. Students need hands-on practice.",'比如实验课，学生需要动手练习。'],['A',"That’s true. I should have said online classes work better for some subjects.",'确实。我应该说网课更适合某些学科。'],['B',"I can agree with that, especially when students get enough feedback.",'这点我同意，尤其在学生能得到充分反馈时。']],
    chunks:['Does that apply to …?','I should have said …','Especially when …'], focus:'突出 EVERY subject 与 SOME subjects，让适用范围的改变听得见。',
    tasks:['找出原主张、反例和修改后的主张。','模仿追问与修正观点，不把让步读成不情愿。','为一个宽泛观点找出具体例外。','修改主张，说明它在什么条件下成立。','请陪练提出反例，要求你回应或合理让步。'],
    prompts:['When would your claim not be true?','Is that an example or a general rule?','How would you make your claim more precise?'], transfer:'讨论“开会越少效率越高”，补充适用条件。', debate:'Online education can replace most in-person classes.', check:'能否接受有效反例，并修改主张而不是重复原句？'
  },
  {
    title:'第一次完整的小辩论', en:'Put it all together', domain:'讨论与辩论', goal:'整合立论、回应和总结，完成 12 周复测。', sound:'长段表达的节奏与自然停顿', soundTip:'先让逻辑层次清楚，再追求速度。允许思考停顿，重点检查是否让听者跟得上。',
    lines:[['A',"I think cities should invest more in public transportation.",'我认为城市应该增加公共交通投入。'],['B',"What makes that a priority?",'为什么这应该优先？'],['A',"It helps people who don’t drive and can reduce traffic.",'它能帮助不开车的人，也可能减少拥堵。'],['B',"But it’s expensive, and not everyone will use it.",'但它很贵，而且不是所有人都会用。'],['A',"That’s true. I’d start with the busiest routes and measure the results.",'确实。我会先从最繁忙的路线开始，再评估效果。'],['B',"So your proposal is a targeted investment, not a system-wide expansion?",'所以你的提议是针对性投入，而不是全面扩张？']],
    chunks:['What makes … a priority?','I’d start with …','To sum up, …'], focus:'在主张、理由、让步和方案之间停顿，用重音突出每部分的新信息。',
    tasks:['标出主张、理由、质疑和回应，口头概括双方立场。','选择最难的两句，比较第一周与本周的录音习惯。','准备 90 秒立论，包含理由、例子和一个限制条件。','限时回应两个异议，然后做 30 秒总结。','复测：围绕新议题进行三轮交锋，并决定下一周期的训练重点。'],
    prompts:['What is your proposal?','What is the strongest objection?','What would change your mind?'], transfer:'换成城市公园或公共图书馆投入，避免只背熟原题。', debate:'Cities should spend more on public transportation than on new roads.', check:'能否在准备后完成立论、三轮回应和总结，并准确回应对方？'
  }
];
window.ROADMAP = [
  {range:'0–3 个月',title:'让声音和表达起步',en:'Find your voice',desc:'短句听辨、美式发音习惯、简短脱稿表达。',gate:'借助准备完成 45–90 秒表达，能回答两个追问；用新材料检查听辨。'},
  {range:'3–6 个月',title:'从句子走向交流',en:'Keep it going',desc:'讲经历、解释选择、澄清需求，逐步减少文本依赖。',gate:'围绕熟悉场景连续交流，并能主动澄清和换种说法。'},
  {range:'6–12 个月',title:'把事情讲清楚',en:'Make yourself clear',desc:'工作汇报、比较方案、解释问题，建立有理由的观点。',gate:'完成包含条件变化的工作任务，说清理由、风险和下一步。'},
  {range:'12–24 个月',title:'从流畅走向深入',en:'Go beyond the surface',desc:'较流畅的日常与工作讨论，处理分歧与复杂追问。',gate:'熟悉场景下交流 10–15 分钟；能准确复述异议并回应。'},
  {range:'24–36 个月',title:'让观点经得起交锋',en:'Make your case',desc:'准备议题、立论、质询、反驳和总结，持续精修美式表达。',gate:'对准备过的议题完成多轮交锋；由陪练反馈决定下一步。'}
];
