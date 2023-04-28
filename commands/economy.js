/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : @jayjay-ops <https://github.com/jayjay-ops>
 * @modified by : @SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

 const { sck,sck1,cmd, getBuffer, tlang, prefix } = require('../lib')
 const Config = require('../config')
 const eco = require('discord-mongoose-economy')
 const ty = eco.connect(mongodb);
 /*
  cmd({
         pattern: "economy",
         desc: "daily gold.",
         category: "economy",
     },
     */
     //---------------------------------------------------------------------------
 cmd({
         pattern: "اليومي",
         desc: "daily gold.",
         category: "economy",
         filename: __filename,
         react: "💷"
     },
     async(Void, citel, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return citel.reply("*🚦اقتصاد* غير نشط في المجموعة الحالية.");
         if (!citel.isGroup) return citel.reply(tlang().group);
	const secktor = "secktor"
	const daily  = await eco.daily(citel.sender, secktor, 2000); //give 500 for daily, can be changed
	 if (daily.cd) { //cdL is already formatted cooldown Left
            let buttons = [{
                buttonId: `${prefix}المحفظه`,
                buttonText: {
                    displayText: "المحفظه👛",
                },
                type: 1,
            },
            {
                buttonId: `${prefix}بنك`,
                buttonText: {
                    displayText: "البنك🏦",
                },
                type: 1,
            },
        ];
        return await Void.sendButtonText(citel.chat, buttons, `🧧 لقد اخذت بالفعل يوميتك اليوم, تعال تاني في ${daily.cdL}🫡`, `${Config.ownername.split(' ')[0]}-Economy
Version: 0.0.6`, citel);
	 } else {
	 citel.reply(`انت اخذت ${daily.amount} 🪙 النهارده🎉.`);   
	 }
 }
 )

 cmd({
         pattern: "اعادة المحفظه",
         desc: "reset wallet of quoted user.",
         category: "economy",
         filename: __filename,
         react: "💷"
     },
     async(Void, citel, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return citel.reply("*🚦الاقتصاد* غير نشط في المجموعة الحالية.");
	 if(!isCreator) return citel.reply(tlang().owner)
        let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
	if(!users) return citel.reply('Please give me user.')
        const balance  = await eco.balance(users, "secktor")
        await eco.deduct(users, "secktor", balance.wallet);
        return await citel.reply(`⛩️ User: @${users.split('@')[0]} \n *🧧 @${users.split('@')[0]} فقدت كل 🪙 في المحفظة.*\n_الآن نعيش مع هذا الفقر.🫡_`,{mentions:[users]})
 }
 )
    //---------------------------------------------------------------------------
 cmd({
    pattern: "سعة",
    desc: "update capacity.",
    category: "economy",
    filename: __filename,
    react: "💷"
},
async(Void, citel, text,{ isCreator }) => {
    let zerogroup = (await sck.findOne({
        id: citel.chat,
    })) || (await new sck({
            id: citel.chat,
        })
        .save());
    let mongoschemas = zerogroup.economy || "false";
    if (mongoschemas == "false") return citel.reply("*🚦الاقتصاد* غير نشط في المجموعة الحالية.");
    if (!citel.isGroup) return citel.reply(tlang().group);
    if (!text) return citel.reply(`💴 *Bank-capacity* 💳\n\n1 | *1000 sp* = 🪙100\n\n2 | *100000 sp* = 🪙1000\n\n3 | *10000000 sp* = 🪙10000000\n\nExample- ${prefix}capacity 1 OR ${prefix}bankupgrade 1000`)
    let user = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
    const secktor = "secktor"
	let value = text.trim();
	let k = parseInt(value)
    const balance  = await eco.balance(user, secktor)
    switch (value) {
        case '1000':
        case '1':
        if (k > balance.wallet ) return citel.reply(`*_You need to pay 🪙100 لزيادة قدرة البنك ~ 1000 sp_*`);
          const deduct1 = await eco.deduct(user, secktor, 100);
          const add1 = eco.giveCapacity(user, secktor, 1000);
              let buttons = [{
                buttonId: `${prefix}المحفظه`,
                buttonText: {
                    displayText: "المحفظه👛",
                },
                type: 1,
            },
            {
                buttonId: `${prefix}بنك`,
                buttonText: {
                    displayText: "البنك🏦",
                },
                type: 1,
            },
        ];
        return await Void.sendButtonText(citel.chat, buttons, `*1000 🪙تمت إضافة تخزين الماس في ${citel.pushName} بنك*`, `${Config.ownername.split(' ')[0]}-Economy
Version: 0.0.6`, citel);

              break
        case '100000':
        case '2':
        if (k < balance.wallet) return citel.reply(`*تحتاج الى دفع 🪙1000 لزيادة قدرة البنك ~ 100000 sp*`);
          const deduct2 = await eco.deduct(user, secktor, 1000);
          const add2 = eco.giveCapacity(user, secktor, 100000);
              let buttonss = [{
                buttonId: `${prefix}المحفظه`,
                buttonText: {
                    displayText: "المحفظه👛",
                },
                type: 1,
            },
            {
                buttonId: `${prefix}بنك`,
                buttonText: {
                    displayText: "البنك🏦",
                },
                type: 1,
            },
        ];
        return await Void.sendButtonText(citel.chat, buttonss, `*100000 🪙تمت إضافة تخزين الماس في ${citel.pushName} بنك*`, `${Config.ownername.split(' ')[0]}-Economy
Version: 0.0.6`, citel);


              break
        case '10000000':
        case '3':
        if (k < balance.wallet) return citel.reply(`تحتاج الى دفع 🪙10000 لزيادة سعة البنك ~ 1000 sp`);
           const deduct3 = await eco.deduct(user, secktor, 10000);
           const add3 = eco.giveCapacity(user, secktor, 10000000);
               let buttonst = [{
                buttonId: `${prefix}المحفظه`,
                buttonText: {
                    displayText: "المحفظه👛",
                },
                type: 1,
            },
            {
                buttonId: `${prefix}بنك`,
                buttonText: {
                    displayText: "البنك🏦",
                },
                type: 1,
            },
        ];
        return await Void.sendButtonText(citel.chat, buttonst, `*10000000 🪙تمت إضافة تخزين الماس في ${citel.pushName}\'s بنك*`, `${Config.ownername.split(' ')[0]}-Economy
Version: 0.0.6`, citel);


             break
default:
 await citel.reply('*ماذا تحاول أن تفعل📉*.')

 }
}
)

     //---------------------------------------------------------------------------
     cmd({
        pattern: "ايداع",
        desc: "deposit gold.",
        category: "economy",
        filename: __filename,
        react: "💷"
    },
    async(Void, citel, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return citel.reply("*🚦الاقتصاد* غير نشط في المجموعة الحالية.");
      //  let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
        if (!text) return citel.reply("باااكاااا!! حدد 💰القدر الذي تريد عمل له ايداع!");
        let d = parseInt(text)
        const deposit = await eco.deposit(citel.sender, "secktor", d);
        const balance = await eco.balance(citel.sender, "secktor")
        if(deposit.noten) return citel.reply('لا تستطيع ايداع ما لا تملك💰.'); //if user states more than whats in his wallet
         let buttons = [{
            buttonId: `${prefix}المحفظه`,
            buttonText: {
                displayText: "المحفظه👛",
            },
            type: 1,
        },
        {
            buttonId: `${prefix}بنك`,
            buttonText: {
                displayText: "البنك🏦",
            },
            type: 1,
        },
    ];
    return await Void.sendButtonText(citel.chat, buttons, `⛩️ المرسل: ${citel.pushName}\n🍀تم ايداع 🪙${deposit.amount} للبنك بتاعك.زد سعة بنكك لاضافة المزيد📈.`, `${Config.ownername.split(' ')[0]}-Economy
Version: 0.0.6`, citel);
    }
)
     cmd({
        pattern: "لوحة الصداره",
        desc: "check leaderboard.",
        category: "economy",
        filename: __filename,
        react: "💷"
    },
    async(Void, citel, text,{ isCreator }) => {
	let h = await eco.lb('secktor',10);
	let str = `*اول ${h.length} مستخدمين لديهم أموال أكثر في المحفظة.*\n`
	const { sck1 } = require('../lib');
	let arr = []
	 for(let i=0;i<h.length;i++){
            let username = await sck1.findOne({ id: h[i].userID })
            var tname;
            if (username.name && username.name !== undefined) {
                tname = username.name
            } else {
                tname = Void.getName(h[i].userID)
            }
str+= `*${i+1}*\n╭─────────────◆\n│ *الاسم:-* _${tname}_\n│ *المستخدم:-* _@${h[i].userID.split('@')[0]}_\n│ *المحفظه:-* _${h[i].wallet}_\n│ *مبلغ البنك:-* _${h[i].bank}_\n│ *سعة البنك:-* _${h[i].bankCapacity}_\n╰─────────────◆\n\n`  	 
	 arr.push(h[i].userID)
	 }
	     citel.reply(str,{mentions:arr})
	     
     })

cmd({
    pattern: "تحويل",
    desc: "transfer gold.",
    category: "economy",
    filename: __filename,
    react: "💷"
},
async(Void, citel, text,{ isCreator }) => {
    let zerogroup = (await sck.findOne({
        id: citel.chat,
    })) || (await new sck({
            id: citel.chat,
        })
        .save());
    let mongoschemas = zerogroup.economy || "false";
    if (mongoschemas == "false") return citel.reply("*🚦الاقتصاد* غير نشط في المجموعة الحالية.");
    let value = text.trim().split(" ");
    if (value[0] === "") return citel.reply(`اكتب ${prefix}تحويل 100 @اللي عايز تحؤل له`);
    let user = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
    if(!user) return citel.reply('من فضلك أعطني أي مستخدم🤦‍♂️.');
    const secktor = "secktor"
        const user1 = citel.sender
        const user2 = user
        const word = value[0];
		const code = value[1];
        let d = parseInt(word)
		if (!d) return citel.reply("تفقد كتابتك رجاءا أنت تستخدم الأمر بطريقة خاطئة👀");
        const balance = await eco.balance(user1, secktor);
        let a = (balance.wallet) < parseInt(word)
        //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
        if(a == true) return citel.reply("انت لم تحدد المبلغ الذي تريد تحويله👎");

        const deduct = await eco.deduct(user1, secktor, value[0]);
        const give = await eco.give(user2, secktor, value[0]);
        let buttons = [{
            buttonId: `${prefix}المحفظه`,
            buttonText: {
                displayText: "المحفظه👛",
            },
            type: 1,
        },
        {
            buttonId: `${prefix}بنك`,
            buttonText: {
                displayText: "البنك🏦",
            },
            type: 1,
        },
    ];
    return await Void.sendButtonText(citel.chat, buttons, `*📠 Transaction successful of ${value[0]} 💰*`, `${Config.ownername.split(' ')[0]}-Economy
Version: 0.0.6`, citel);


}
)

     //---------------------------------------------------------------------------
     cmd({
        pattern: "المحفظه",
        desc: "shows wallet.",
        category: "economy",
        filename: __filename,
        react: "💷"
    },
    async(Void, citel, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return citel.reply("*🚦الاقتصاد* غير نشط في المجموعة الحالية.");
         const secktor = "secktor"
         const balance = await eco.balance(citel.sender, secktor); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
         let buttons = [{
            buttonId: `${prefix}ايداع`,
            buttonText: {
                displayText: "ايداع",
            },
            type: 1,
        },
        {
            buttonId: `${prefix}بنك`,
            buttonText: {
                displayText: "البنك🏦",
            },
            type: 1,
        },
    ];
    return await Void.sendButtonText(citel.chat, buttons, `*👛 ${citel.pushName}'s Purse:*\n\n_🪙${balance.wallet}_`, `${Config.ownername.split(' ')[0]}-Economy
Version: 0.0.6`, citel);

    }
)

     //---------------------------------------------------------------------------
     cmd({
        pattern: "اعطاء",
        desc: "Add money in wallet.",
        category: "economy",
        filename: __filename,
        react: "💷"
    },
    async(Void, citel, text,{ isCreator }) => {
        if(!isCreator) return

         const secktor = "secktor"
         let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
         if(!users) return citel.reply('من فضلك أعطني المستخدم لإضافة المال.')
         await eco.give(users, secktor, parseInt(text.split(' ')[0]));
        return await Void.sendMessage(citel.chat,{text: `Added 📈 ${parseInt(text.split(' ')[0])} to @${users.split('@')[0]} wallet🛸.`,mentions:[users]},{quoted:citel})

    }
)

     //---------------------------------------------------------------------------
     cmd({
        pattern: "بنك",
        desc: "shows bank amount.",
        category: "economy",
        filename: __filename,
        react: "💷"
    },
    async(Void, citel, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return citel.reply("*🚦الاقتصاد* غير نشط في المجموعة الحالية.");
        const balance = await eco.balance(citel.sender, "secktor"); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
        let buttons = [{
            buttonId: `${prefix}حظ`,
            buttonText: {
                displayText: "حظ🎰",
            },
            type: 1,
        },
        {
            buttonId: `${prefix}المحفظه`,
            buttonText: {
                displayText: "المحفظه👛",
            },
            type: 1,
        },
    ];
    return await Void.sendButtonText(citel.chat, buttons, `🍀User: ${citel.pushName}\n\n_🪙${balance.bank}/${balance.bankCapacity}_`, `${Config.ownername.split(' ')[0]}-Economy
Version: 0.0.6`, citel);

    }
)

     //---------------------------------------------------------------------------
     cmd({
        pattern: "استيلاء",
        desc: "rob bank amount.",
        category: "economy",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return citel.reply("*🚦الاقتصاد* غير نشط في المجموعة الحالية.");
        let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
	if(!users) return citel.reply('Please give me user to rob.')
        const user1 = citel.sender
        const user2 = users
	const secktor = "secktor"
	    const k = 1000
        const balance1  = await eco.balance(user1, secktor)
	const balance2  = await eco.balance(user2, secktor)
	const typ = ['ran','rob','caught'];
    const random = typ[Math.floor(Math.random() * typ.length)];
    if (k > balance1.wallet) return citel.reply(`*☹️ ليس لديك ما يكفي من المال للدفع في حالة القبض عليك*`);
    if (k > balance2.wallet) return citel.reply(`*عذرا ، ضحيتك فقيرة جدا 🤷🏽‍♂️ دعه يذهب🫤.*`);
    let tpy = random    
    switch (random) {
       
        case 'ran':
              await citel.reply(`*هرب ضحيتك ، كن أكثر رعبا في المرة القادمة🫰.*`)
              ////citel.react('🥹')

              break
        case 'rob':
	  const deduff = Math.floor(Math.random() * 1000)	    
          await eco.deduct(user2, secktor, deduff);
          await eco.give(citel.sender, secktor, deduff);
          await citel.reply(`*🤑 تمت عملية السرقة بنجاح.🗡️*\nركضت مع ${deduff} المبلغ في محفظتك.`)
          ////citel.react('💀')
              break
        case 'caught':
           const rmoney = Math.floor(Math.random() * 1000)
           await eco.deduct(user1, secktor, rmoney);
           await citel.reply(`*اسف FBI👮 اللحاق بك ، لقد دفعت ${rmoney} 🪙 من المحفظه🥹.*`)
           ////citel.react('😦')
             break
default:
 await citel.reply('*ماذا تحاول أن تفعل👀*.')
 //citel.react('🤔')

 }

    }
)

     //---------------------------------------------------------------------------
     cmd({
        pattern: "سحب",
        desc: "withdraw money from bank account.",
        category: "economy",
        filename: __filename,
        react: "💷"
    },
    async(Void, citel, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return citel.reply("*🚦الاقتصاد* غير نشط في المجموعة الحالية.");
        const user = citel.sender
		if (!text) return citel.reply("*قم بذكر مبلغ💰 الذي تريد سحبه💳!*");
		const query = text.trim();
        const secktor = "secktor"
        const withdraw = await eco.withdraw(user, secktor, query);
        if(withdraw.noten) return citel.reply('*🏧 صندوق غير كاف في البنك🫤*'); //if user states more than whats in his wallet
        const add = eco.give(user, secktor, query);
          citel.reply(`*🏧 يُحذًِر* \n _🪙${withdraw.amount} تم سحبه من محفظتك💰._`)
    }
)

     //---------------------------------------------------------------------------
     cmd({
        pattern: "قمار",
        desc: "gamble money.",
        category: "economy",
        filename: __filename,
        react: "💷"
    },
    async(Void, citel, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return citel.reply("*🚦Economy* is not active in current group.");
        const user = citel.sender
	//	if(citel.chat!=="120363043857093839@g.us") return citel.reply('هذه ليست مجموعة اقتصادية.')
        var texts = text.split(" ");
     var opp = texts[1];// your value
     var value = texts[0].toLowerCase();
     var gg = parseInt(value)
 ///.mentionedJid[0] ? m.mentionedJid[0] : m.sender
     const secktor = "secktor"
     const balance = await eco.balance(user, secktor);
     const g = (balance.wallet) > parseInt(value)
     const k = 50
     const a = (k) > parseInt(value)
     const twice = gg*2
          var hjkl;
     if(opp==='left')
     {
         hjkl = 'https://github.com/SecktorBot/Brandimages/blob/main/Nezuko/leftr.webp?raw=true'
     } 
    else if(opp==='right') 
    {
        hjkl = 'https://github.com/SecktorBot/Brandimages/blob/main/Nezuko/rightr.webp?raw=true'
    } else if(opp==='up') 
    {
        hjkl = 'https://github.com/SecktorBot/Brandimages/blob/main/Nezuko/upr.webp?raw=true'
    } else if (opp==='down'){
        hjkl = 'https://github.com/SecktorBot/Brandimages/blob/main/Nezuko/downr.webp?raw=true'
    } else{
        citel.reply(`Please provide direction(left,right,up,down).\nEg:- ${prefix}قمار 200 left`)
    }
   let media = await getBuffer(hjkl)
   citel.reply(media,{packname:'Secktor',author:'Economy'},"sticker")
     const f = ["up", "right", "left", "down", "up", "left", "down", "right", "up", "down", "right", "left"]
     const r = f[Math.floor(Math.random () * f.length)]
     if (!text) return citel.reply(
				`Example:  ${prefix}gamble 100 direction(left,right,up,down)`
			);

            if (!value) return citel.reply("*من فضلك ، حدد المبلغ الذي تقوم بالمقامرة به!*");
            if (!opp) return citel.reply("*حدد الاتجاه الذي تراهن عليه!*");
            if (!gg) return citel.reply("*تحقق من النص الخاص بك من فضلك ، أنت تستخدم الأمر بطريقة خاطئة*")
            if (g == false) return citel.reply(`*ليس لديك ما يكفي من الألماس للمقامرة*`);
        if (a == true) return citel.reply(`*اسف ${citel.pushName}, يمكنك المقامرة بأكثر من 🪙50.*`);
        if ( r == opp){
           let give = await eco.give(user , secktor, twice);
           let buttons = [{
            buttonId: `${prefix}حظ`,
            buttonText: {
                displayText: "حظ🎰",
            },
            type: 1,
        },
        {
            buttonId: `${prefix}بنك`,
            buttonText: {
                displayText: "البنك🏦",
            },
            type: 1,
        },
    ];
    //citel.react('⭐️')
    return await Void.sendButtonText(citel.chat, buttons, `*📈 You won 🪙${twice}*`, `${Config.ownername.split(' ')[0]}-Economy
Version: 0.0.6`, citel);

        }
        else{
           let deduct = await eco.deduct(user, secktor, texts[0]);
           let buttons = [{
            buttonId: `${prefix}حظ`,
            buttonText: {
                displayText: "حظ🎰",
            },
            type: 1,
        },
        {
            buttonId: `${prefix}المحفظه`,
            buttonText: {
                displayText: "المحفظه👛",
            },
            type: 1,
        },
    ];
    //citel.react('🤮')
    return await Void.sendButtonText(citel.chat, buttons,`*📉 You lost 🪙${texts[0]}*`, `${Config.ownername.split(' ')[0]}-Economy
Version: 0.0.6`, citel);

         }
    }
)




     //---------------------------------------------------------------------------
     cmd({
        pattern: "حظ2",
        desc: "withdraw money from bank account.",
        category: "economy",
        filename: __filename,
        react: "💷"
    },
    async(Void, citel, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return citel.reply("*🚦الاقتصاد* غير نشط في المجموعة الحالية.");
        var today = new Date();
        if (today.getDay() == 6 || today.getDay() == 5 || today.getDay() == 0){
            if (text == 'help') return citel.reply(`*1:* اكتب ${prefix}حظ للعب\n\n*2:* يجب ان تملك 🪙100 في محفظتك\n\n*3:* إذا لم يكن لديك نقود في المحفظة إذن 👛اسحب من البنك الخاص بك🏦\n\n*4:* اذا لم تملك 🤑 نقودا في  🏦البنك ايضا ثم استخدام ميزات الاقتصاد 📈لكسب المال`)
            if (text == 'money') return citel.reply(`*1:* ربح قليل --> +🪙20\n\n*2:* خساره قليله --> -🪙20\n\n*3:* مكسب كبير --> +🪙100\n\n*4:* خساره كبيره --> -🪙50\n\n*5:* 🎉 الفوز بالجائزة الكبرى --> +🪙1000`)
            const fruit1= ["🥥", "🍎", "🍇"]
            const fruit2 = ["🍎", "🍇", "🥥"]
            const fruit3 = ["🍇", "🥥", "🍎"]
            const fruit4 = "🍇"
            const lose = ['*أنت فاشل في لعب هذه اللعبة*\n\n_--> 🍍-🥥-🍎_', '*خارج الخط تماما*\n\n_--> 🥥-🍎-🍍_', '*هل انت مبتدئ؟*\n\n_--> 🍎-🍍-🥥_']
            const smallLose = ['*لا يمكنك حصاد جوز الهند 🥥 في حقل الأناناس 🍍*\n\n_--> 🍍>🥥<🍍_', '*التفاح وجوز الهند ليست أفضل كومبو*\n\n_--> 🍎>🥥<🍎_', '*جوز الهند وأبل ليست صفقة كبيرة*\n\n_--> 🥥>🍎<🥥_']
            const won = ['*لقد حصدت سلة من*\n\n_--> 🍎+🍎+🍎_', '*بديع, يجب أن تكون متخصصًا في قطف جوز الهند*\n\n_--> 🥥+🥥+🥥_', '*مدهش, ستصنع عصير أناناس للعائلة*\n\n_--> 🍍+🍍+🍍_']
            const near = ['*وااو, كنت قريبًا جدًا من ربح الأناناس*\n\n_--> 🍎-🍍+🍍_', '*هممم, كنت قريبًا جدًا من ربح التفاح*\n\n_--> 🍎+🍎-🍍_']
            const jack = ['*🥳 الفوز بالجائزة الكبرى 🤑*\n\n_--> 🍇×🍇×🍇×🍇_', '*🎉الفوز بالجاااائزه الكبرررى!*\n\n_--> 🥥×🥥×🥥×🥥_', '*🎊 لقد حصلت للتو على الفوز بالجائزة الكبرى 🪙1000*']
            const user = citel.sender
            const secktor = "secktor"
            const k = 100
            const balance1  = await eco.balance(user, secktor)
            if (k > balance1.wallet) return citel.reply(`You are going to be spinning on your wallet, you need at least 🪙100`);
            const f1 = fruit1[Math.floor(Math.random() * fruit1.length)];
            const f2 = fruit2[Math.floor(Math.random() * fruit2.length)];
            const f3 = fruit3[Math.floor(Math.random() * fruit3.length)];
            //const f4 = fruit4[Math.floor(Math.random() * fruit4.length)];
            const mess1 = lose[Math.floor(Math.random() * lose.length)];
            const mess2 = won[Math.floor(Math.random() * won.length)];
            const mess3 = near[Math.floor(Math.random() * near.length)];
            const mess4 = jack[Math.floor(Math.random() * jack.length)];
            const mess5 = smallLose[Math.floor(Math.random() * smallLose.length)];
            if(text.split(' ')[0]){
let value = text.split(' ')[0]
const balance = await eco.balance(citel.sender, secktor)
console.log(balance.wallet)
if(value<=balance.wallet){
    const deduff = Math.floor(Math.random() * value)
    if ((f1 !== f2) && f2 !== f3){
        const deduct1 = await eco.deduct(user, secktor, deduff);
        return citel.reply(`${mess1}\n\n*خساره كبيره -->* _🪙${deduff}_`)
     }
     else if ((f1 == f2) && f2 == f3){
        const give1 = await eco.give(user, secktor, deduff/2);
        return citel.reply(`${mess2}\n*_جائزه معقوله -->* _🪙${deduff/2}_`)
     }
     else if ((f1 == f2) && f2 !== f3){
        const give2 = await eco.give(user, secktor, deduff);
        return citel.reply(`${mess3}\n*ربح صغير -->* _🪙${deduff}_`)
     }
     else if ((f1 !== f2) && f1 == f3){
        const deduct2 = await eco.deduct(user, secktor, deduff);
        return citel.reply(`${mess5}\n\n*خساره صغيره -->* _🪙${deduff}_`)
     }
     else if ((f1 !== f2) && f2 == f3){
        const give4 = eco.give(user, secktor, deduff);
        return citel.reply(`${mess3}\n\n*ربح قليل -->* _🪙${deduff}_`)
     }
     else if ((f1 == f2) && (f2 == f3) && (f3 == f4)){
        const give5 = eco.give(user, secktor, deduff*20);
        return citel.reply(`${mess4}\n\n_🎊 الفوز بالجائزة الكبرى --> _🪙${deduff*20}_`)
     }
     else {
        return citel.reply(`هل تفهم ما تفعله؟`)
     }

} else{
    return citel.reply('ليس لديك ما يكفي في محفظتك.\n- يرجى عدم تقديم اي مبلغ.')
}
            }
            if ((f1 !== f2) && f2 !== f3){
               const deduct1 = await eco.deduct(user, secktor, 50);
                      citel.reply(`${mess1}\n\n*خسارة كبيره -->* _🪙50_`)
            }
            else if ((f1 == f2) && f2 == f3){
               const give1 = await eco.give(user, secktor, 100);
                     citel.reply(`${mess2}\n*_جائزه معقوله -->* _🪙100_`)
            }
            else if ((f1 == f2) && f2 !== f3){
               const give2 = await eco.give(user, secktor, 20);
                     citel.reply(`${mess3}\n*ربح قليل -->* _🪙20_`)
            }
            else if ((f1 !== f2) && f1 == f3){
               const deduct2 = await eco.deduct(user, secktor, 20);
                     citel.reply(`${mess5}\n\n*خساره قليله -->* _🪙20_`)
            }
            else if ((f1 !== f2) && f2 == f3){
               const give4 = eco.give(user, secktor, 20);
                     citel.reply(`${mess3}\n\n*ربح قليل -->* _🪙20_`)
            }
            else if ((f1 == f2) && (f2 == f3) && (f3 == f4)){
               const give5 = eco.give(user, secktor, 1000);
                    citel.reply(`${mess4}\n\n_🎊 الفوز بالجائزة الكبرى --> _🪙1000_`)
            }
            else {
                    citel.reply(`هل تفهم ما تفعله؟`)
            }
         }
         else{
                citel.reply(`*يمكنك فقط لعب هذه اللعبة خلال عطلات نهاية الأسبوع*\n\n*🌿 الجمعه*\n*🎏 السبت*\n*🎐 الاحد*`)
         }
    }
)

cmd({
    pattern: "حظ",
    desc: "slot game.",
    category: "economy",
    filename: __filename,
    react: "💷"
},
async(Void, citel, text,{ isCreator }) => {
    let zerogroup = (await sck.findOne({
        id: citel.chat,
    })) || (await new sck({
            id: citel.chat,
        })
        .save());
    let mongoschemas = zerogroup.economy || "false";
    if (mongoschemas == "false") return citel.reply("*🚦الاقتصاد* غير نشط في المجموعة الحالية.");
    const kg = 100
            const balance1  = await eco.balance(citel.sender, "secktor")
            if (kg > balance1.wallet) return citel.reply(`أنت ستدور على محفظتك ، ما تحتاجه على الأقل 🪙100`);
    var r_ban = new Array ();
    r_ban[0] =    "1 : 2 : 3"
    r_ban[1] = "1 : 2 : 3"
    r_ban[2] = "1 : 2 : 3"
    r_ban[3] = "4 : 3 : 3"
    r_ban[4] = "1 : 1 : 1"
    r_ban[5] = "5 : 2 : 5"
    r_ban[6] = "3 : 5 : 3"
    r_ban[7] = "1 : 3 : 6"
    r_ban[8] = "6 : 2 : 7"
    r_ban[9] = "1 : 6 : 3"
    r_ban[10]= "6 : 3 : 2"
    r_ban[11]= "5 : 5 : 6"
    r_ban[12]= "1 : 5 : 3"
    r_ban[13]= "4 : 1 : 7"
    r_ban[14]= "4 : 3 : 2"
    r_ban[15]= "4 : 3 : 2"
    r_ban[16]= "7 : 4 : 6"
    r_ban[17]= "6 : 5 : 1"
    r_ban[18]= "5 : 7 : 2"


    var p = Math.floor(19*Math.random())
    var q = Math.floor(19*Math.random())
    var r = Math.floor(19*Math.random())
    var i = (r_ban[p]);
    var j = (r_ban[q]);
    var k = (r_ban[r]);
    console.log(i+'\n'+j+'\n'+k)
    let t = i.split(':');
    let tt = j.split(':');
    let ttt = k.split(':');
    var lol;
    if(t[2]===tt[1] && tt[1]===ttt[0]) lol = true
    if(t[0]===tt[1] && tt[1]===ttt[2]) lol = true
    if(t[0]===tt[0] && tt[0]===ttt[0]) lol = true
    if(t[1]===tt[1] && tt[1]===ttt[1]) lol = true
    if(t[2]===tt[2] && tt[2] ===ttt[2]) lol = true
    if(t[0]===tt[1] && tt[1]===ttt[2]) lol = true
    if(t[2]===tt[1] && tt[1]===ttt[0]) lol = true
    if(t[0]===t[1] && t[0]===t[2]) lol = true
    if(tt[0]===tt[1] && tt[0]===tt[2]) lol = true
    if(ttt[0]===ttt[1] && ttt[0]===ttt[2]) lol = true
    if(t[0]===ttt[1] && t[0]===ttt[2]) lol = true
    if(lol){
        const deduff = Math.floor(Math.random() * 5000)
        const give2 = await eco.give(citel.sender, "secktor", deduff*2);
        let st = `🎰 Slot Machine Result\n     ${i}\n\n     ${j}\n\n     ${k}\n\nWow Jackpot🎊.`
        let str = st.replace(/1/g, `🔴`).replace(/2/g, `🔵`).replace(/3/g, `🟣`).replace(/4/g, `🟢`).replace(/5/g, `🟡`).replace(/6/g, `⚪️`).replace(/7/g, `⚫️`).replace(/:/g, `  `)
        let buttons = [{
            buttonId: `${prefix}slot`,
            buttonText: {
                displayText: "Slot🎰",
            },
            type: 1,
        },
        {
            buttonId: `${prefix}Bank`,
            buttonText: {
                displayText: "Bank🏦",
            },
            type: 1,
        },
    ];
    return await Void.sendButtonText(citel.chat, buttons,str+`You got ${deduff*10} in your wallet.`, `${Config.ownername.split(' ')[0]}-Economy
Version: 0.0.6`, citel);

    } else {
    const deduff = Math.floor(Math.random() * 300)
    const deduct1 = await eco.deduct(citel.sender, "secktor", deduff);
    let st = `\n🎰 Slot Machine Result\n     ${i}\n\n      ${j}\n\n      ${k}\n\nNot Jacpot📉 but lost `
            let str = st.replace(/1/g, `🔴`).replace(/2/g, `🔵`).replace(/3/g, `🟣`).replace(/4/g, `🟢`).replace(/5/g, `🟡`).replace(/6/g, `⚪️`).replace(/7/g, `⚫️`).replace(/:/g, `    `)
    let buttons = [{
        buttonId: `${prefix}حظ`,
        buttonText: {
            displayText: "حظ🎰",
        },
        type: 1,
    },
    {
        buttonId: `${prefix}بنك`,
        buttonText: {
            displayText: "البنك🏦",
        },
        type: 1,
    },
];
return await Void.sendButtonText(citel.chat, buttons,str+` ${deduff}.`, `${Config.ownername.split(' ')[0]}-Economy
Version: 0.0.6`, citel);
}
}
) 
