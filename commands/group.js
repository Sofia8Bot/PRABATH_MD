/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const { sck, sck1,cmd, jsonformat, botpic, TelegraPh, RandomXP, Config, tlang, warndb, sleep,getAdmin,getBuffer, prefix } = require('../lib')
const moment = require("moment-timezone");
const fs = require('fs-extra')
const Levels = require("discord-xp");
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
//---------------------------------------------------------------------------
cmd({
            pattern: "انضم",
            desc: "joins group by link",
            category: "owner",
            react: "📎",
            use: '<group link.>',
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner);
            if (!text) return citel.reply(`*Please give me a group link* ${tlang().greet}`);
            if (!text.split(" ")[0] && !text.split(" ")[0].includes("whatsapp.com"))
                citel.reply("الرابط غير صالح ، يرجى إرسال رابط مجموعة واتس اب صالح!");
            let result = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
            await Void.groupAcceptInvite(result)
                .then((res) => citel.reply("*انضم إلى المجموعة* ✅"))
                .catch((err) => citel.reply("*الانضمام إلى المجموعة غير ناجح* ❌"));

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "ملصق",
            alias: ["س","لملصق"],
            desc: "Makes sticker of replied image/video.",
            category: "group",
            react: "🔄",
            use: '<reply to any image/video.>',
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply(`*Mention any Image.*`);
            let mime = citel.quoted.mtype
            pack = `ITOSHI (𝟺.𝟷.𝟶) ✔️`
            author = `Reouzaki\nᴍᴀᴅᴇ ʙʏ Sofia_bot 🎊`
            if (citel.quoted) {
                let image = await citel.quoted.download();
                citel.react("✔️");
                let sticker = new Sticker(image, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: text.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 75, // The quality of the output file
                    background: "transparent", // The sticker background color (only for full stickers)
                });
                const stikk = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {  sticker: stikk   }, {    quoted: citel });
            } else {
                citel.reply("*اوه، الرجاء الرد على اي صورة او فيديو*");
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "الدعم",
        desc: "Sends official support group link.",
        category: "group",
        react: "🤖",
        filename: __filename,
    },
    async(Void, citel, text) => {

        citel.reply(`*شوف خاصك*`);

        await Void.sendMessage(`${citel.sender}`, {

            image: log0,

            caption: `*جروب الدعم:* https://chat.whatsapp.com/CffUKQaeNPKAIQ1j4faO6y`,

        });

    }

)

//---------------------------------------------------------------------------
cmd({
            pattern: "تحذير",
            desc: "Warns user in Group.",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Void, citel, text,{ isCreator }) => {
             if (!citel.isGroup) return citel.reply('هذا الأمر للمجموعة فقط.')
            const groupAdmins = await getAdmin(Void, citel)
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            if (!isAdmins) return citel.reply('هذا الأمر للمشرفين فقط.')
 const S=m;function Z(){const F=['126402oKAcRa','date','Removing\x20User\x20because\x20Warn\x20limit\x20exceeded\x0a\x0a*All\x20Warnings.*\x0a','chat','8qachoN','580yXDZAo','groupParticipantsUpdate','114528WgITIL','reply','groupMetadata','│\x20*🔰Time:-*\x20','find','locale','log','196311jXGmuc','quoted','save','*\x0a╭─────────────◆\x0a│\x20*🍁In\x20Group:-*\x20','759700KYdstU','warnedby','pushName','reason','8dUtMfa','2BlOCqD','550MdvhLT','*----Warn----*\x0aUser:\x20@','54828ViphBF','subject','1100323uEahgH','30204512uUuJcj','*There\x20are\x20total\x20','split','│\x20*⚠️Warned\x20by:-*\x20','length','sender','setDefault','group','Asia/KOLKATA','../config','215XZLRSE','HH:mm:ss','warn','remove'];Z=function(){return F;};return Z();}(function(U,w){const c=m,s=U();while(!![]){try{const q=parseInt(c(0x1eb))/0x1*(parseInt(c(0x1f0))/0x2)+parseInt(c(0x1e7))/0x3*(parseInt(c(0x1ef))/0x4)+-parseInt(c(0x200))/0x5*(-parseInt(c(0x204))/0x6)+-parseInt(c(0x1f5))/0x7*(-parseInt(c(0x1dd))/0x8)+-parseInt(c(0x1f3))/0x9*(-parseInt(c(0x1de))/0xa)+parseInt(c(0x1f1))/0xb*(parseInt(c(0x1e0))/0xc)+-parseInt(c(0x1f6))/0xd;if(q===w)break;else s['push'](s['shift']());}catch(B){s['push'](s['shift']());}}}(Z,0x707d4));function m(Y,U){const w=Z();return m=function(s,q){s=s-0x1dd;let B=w[s];return B;},m(Y,U);}if(!citel['quoted'])return citel[S(0x1e1)]('Please\x20quote\x20a\x20user\x20master.');const timesam=moment(moment())['format'](S(0x201));moment['tz'][S(0x1fc)](S(0x1fe))[S(0x1e5)]('id');try{let metadata=await Void[S(0x1e2)](citel[S(0x207)]);await new warndb({'id':citel['quoted'][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202),'reason':text,'group':metadata[S(0x1f4)],'warnedby':citel[S(0x1ed)],'date':timesam})[S(0x1e9)]();let ment=citel[S(0x1e8)][S(0x1fb)];Void['sendMessage'](citel['chat'],{'text':S(0x1f2)+citel[S(0x1e8)][S(0x1fb)][S(0x1f8)]('@')[0x0]+'\x0aWith\x20Reason:\x20'+text+'\x0aWarned\x20by:\x20'+citel[S(0x1ed)],'mentions':[citel[S(0x1e8)][S(0x1fb)]]},{'quoted':citel});let h=await warndb[S(0x1e4)]({'id':citel['quoted'][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202)});const Config=require(S(0x1ff));if(h[S(0x1fa)]>Config['warncount']){teskd=S(0x206);let h=await warndb[S(0x1e4)]({'id':citel[S(0x1e8)][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202)});teskd+=S(0x1f7)+h[S(0x1fa)]+'\x20\x20warnings.*\x0a';for(let i=0x0;i<h[S(0x1fa)];i++){teskd+='*'+(i+0x1)+S(0x1ea)+h[i][S(0x1fd)]+'\x0a',teskd+=S(0x1e3)+h[i][S(0x205)]+'\x0a',teskd+=S(0x1f9)+h[i][S(0x1ec)]+'\x0a',teskd+='│\x20_📍Reason:\x20'+h[i][S(0x1ee)]+'_\x0a╰─────────────◆\x0a\x0a';}citel[S(0x1e1)](teskd),await Void[S(0x1df)](citel['chat'],[citel['quoted'][S(0x1fb)]],S(0x203));}}catch(Y){console[S(0x1e6)](Y);}
            
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "الغي البلوك",
            alias: ["فك البلوك","unblock"],
            desc: "Unblocked to the quoted user.",
            category: "owner",
            filename: __filename,

        },
        async(Void, citel, text,{ isCreator }) => {

            if (!citel.quoted) return citel.reply("منشن الشخص");
            if (!isCreator) citel.reply(tlang().owner);
            let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await Void.updateBlockStatus(users, "unblock")
                .then((res) => console.log(jsonformat(res)))
                .catch((err) => console.log(jsonformat(err)));
        }
    )
    //---------------------------------------------------------------------------
    cmd({
        pattern: "جد",
        desc: "get jid of all user in a group.",
        category: "owner",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(tlang().owner)
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
		const participants = citel.isGroup ? await groupMetadata.participants : "";
    let textt = `_هنا هو عنوان jid لجميع مستخدمي_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `📍 ${mem.id}\n`;
        }
      citel.reply(textt)

    }
)

    //---------------------------------------------------------------------------
cmd({
        pattern: "منشن",
        alias: ["tag"],
        desc: "Tags every person of group.",
        category: "group",
         react: "🔖",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
        const participants = citel.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins) return citel.reply(tlang().admin);

        let textt = `
══✪〘   *منشن جماعي*   〙✪══

➲ *الرساله :* ${text ? text : "blank"}\n\n
➲ *طالب المنشن:* ${citel.pushName} 🔖
`
        for (let mem of participants) {
            textt += `📍 @${mem.id.split("@")[0]}\n`;
        }
        Void.sendMessage(citel.chat, {
            text: textt,
            المنشن: participants.map((a) => a.id),
        }, {
            quoted: citel,
        });
    }
)

//---------------------------------------------------------------------------
cmd({
            pattern: "طلب",
            desc: "Sends requst to main Bot developer.",
            category: "group",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            if (!text) return reply(`مثال : ${
        prefix + command
      } مرحبًا ايها المطور ، يرجى إضافة ميزة التنزيل`);
            textt = `*| طلب |*`;
            teks1 = `\n\n*المستخدم* : @${
    citel.sender.split("@")[0]
  }\n*Request* : ${text}`;
            teks2 = `\n\n*مرحبا ${pushname},لقد تمت إعادة توجيه طلبك إلى المطورين*.\n*انتظر رجاءا.......*`;
            for (let i of owner) {
                Void.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [citel.sender],
                }, {
                    quoted: citel,
                });
            }
            Void.sendMessage(citel.chat, {
                text: textt + teks2 + teks1,
                mentions: [citel.sender],
            }, {
                quoted: citel,
            });

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "مره واحده",
            desc: "Copies and Forwords viewonce message.",
            category: "group",
            filename: __filename,
            use: '<reply to a viewonce message.>',
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return reply("الرجاء الرد على أي رسالة صورة أو فيديو!");
            let mime = citel.quoted.mtype
            if (/viewOnce/.test(mime)) {
                const mtype = Object.keys(quoted.message)[0];
                delete quoted.message[mtype].viewOnce;
                const msgs = proto.Message.fromObject({
                    ...quoted.message,
                  });
                const prep = generateWAMessageFromContent(citel.chat, msgs, { quoted: citel });
                await Void.relayMessage(citel.chat, prep.message, { messageId: prep.key.id });
            } else {
                await citel.reply("من فضلك ، قم بالرد لعرض رسالة واحدة");
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "اعادة التحذير",
            desc: "Deletes all previously given warns to quoted user.",
            category: "group",
           filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Void, citel, text) => {
            if (!isCreator) return citel.reply(tlang().owner)
            await warndb.deleteOne({ id: citel.quoted.sender.split('@')[0] + 'warn' });
            citel.reply('المستخدم حر كطائر.\nتم حذف جميع التحذيرات المقدمة مسبقًا.')
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "تصويت",
            desc: "Makes poll in group.",
            category: "group",
            filename: __filename,
            use: `question;option1,option2,option3.....`,
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            let [poll, opt] = text.split(";");
            if (text.split(";") < 2)
                return await citel.reply(
                    `${prefix}تصويت السؤال;الاقتراح1,الاقتراح2,الاقتراح3.....`
                );
            let options = [];
            for (let i of opt.split(',')) {
                options.push(i);
            }
            await Void.sendMessage(citel.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "بروفايل",
            alias: ["profile","dp"],
            desc: "Shows profile of user.",
            category: "group",
            react: "ℹ️",
            filename: __filename,
        },
        async(Void, citel, text) => {
            var bio = await Void.fetchStatus(citel.sender);
            var bioo = bio.status;
            let meh = citel.sender;
            const userq = await Levels.fetch(citel.sender, "RandomXP");
            const lvpoints = userq.level;
            var role = "مبتدأ✨";
            if (lvpoints <= 2) {
                var role = "🏳مواطن";
            } else if (lvpoints <= 4) {
                var role = "👼معالج الطفل";
            } else if (lvpoints <= 6) {
                var role = "🧙‍♀️ساحر";
            } else if (lvpoints <= 8) {
                var role = "🧙‍♂️سيد الساحر";
            } else if (lvpoints <= 10) {
                var role = "🧚🏻جامد";
            } else if (lvpoints <= 12) {
                var role = "🧜جااامد قوي";
            } else if (lvpoints <= 14) {
                var role = "🧜‍♂️جااااااامد";
            } else if (lvpoints <= 16) {
                var role = "🌬طفل سيء";
            } else if (lvpoints <= 18) {
                var role = "❄طفل نبيل";
            } else if (lvpoints <= 20) {
                var role = "⚡سرعة النخبة";
            } else if (lvpoints <= 22) {
                var role = "🎭نخبة";
            } else if (lvpoints <= 24) {
                var role = "🥇مفيش منك اتنين";
            } else if (lvpoints <= 26) {
                var role = "🥈برونز";
            } else if (lvpoints <= 28) {
                var role = "🥉سيلفر";
            } else if (lvpoints <= 30) {
                var role = "🎖جولد";
            } else if (lvpoints <= 32) {
                var role = "🏅بلاتينيوم";
            } else if (lvpoints <= 34) {
                var role = "🏆دايموند";
            } else if (lvpoints <= 36) {
                var role = "💍 I هيرويك";
            } else if (lvpoints <= 38) {
                var role = "💎هيرويك II";
            } else if (lvpoints <= 40) {
                var role = "🔮هيرويك III";
            } else if (lvpoints <= 42) {
                var role = "🛡Legend III";
            } else if (lvpoints <= 44) {
                var role = "🏹جراااند ماستر I";
            } else if (lvpoints <= 46) {
                var role = "⚔جراند ماستر II";
            } else if (lvpoints <= 55) {
                var role = "🐉اسطووووره";
            }
            let ttms = `${userq.xp}` / 8;
            const timenow = moment(moment())
                .format('HH:mm:ss')
            moment.tz.setDefault('Asia/Kolakata')
                .locale('id')
            try {
                pfp = await Void.profilePictureUrl(citel.sender, "image");
            } catch (e) {
                pfp = await botpic();
            }
            const profile = `
*Hii ${citel.pushName},*
*Here is your profile information*
*👤اسم المستخدم:* ${citel.pushName}
*⚡البايو:* ${bioo}
*🧩التصنيف:* ${role}
*🍁اللفل:* ${userq.level}
*📥 عدد الرسائل* ${ttms}
*بواسطة ${tlang().title}*
`;
            const buttonsd = [{
                    buttonId: `${prefix}رانك`,
                    buttonText: {
                        displayText: "رانك",
                    },
                    type: 1,
                },
                {
                    buttonId: `${prefix}الاوامر`,
                    buttonText: {
                        displayText: " الاوامر",
                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: pfp,
                },
                caption: profile,
                footer: tlang().footer,
                buttons: buttonsd,
                headerType: 4,
            };
            Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "رانك",
            desc: "Sends rank card of user.",
            category: "group",
            react: "👑",
            filename: __filename,
        },
        async(Void, citel, text) => {
            const userq = await Levels.fetch(citel.sender, "RandomXP");
            const lvpoints = userq.level;
               var role = "مبتدأ✨";
            if (lvpoints <= 2) {
                var role = "🏳مواطن";
            } else if (lvpoints <= 4) {
                var role = "👼معالج الطفل";
            } else if (lvpoints <= 6) {
                var role = "🧙‍♀️ساحر";
            } else if (lvpoints <= 8) {
                var role = "🧙‍♂️سيد الساحر";
            } else if (lvpoints <= 10) {
                var role = "🧚🏻جامد";
            } else if (lvpoints <= 12) {
                var role = "🧜جااامد قوي";
            } else if (lvpoints <= 14) {
                var role = "🧜‍♂️جااااااامد";
            } else if (lvpoints <= 16) {
                var role = "🌬طفل سيء";
            } else if (lvpoints <= 18) {
                var role = "❄طفل نبيل";
            } else if (lvpoints <= 20) {
                var role = "⚡سرعة النخبة";
            } else if (lvpoints <= 22) {
                var role = "🎭نخبة";
            } else if (lvpoints <= 24) {
                var role = "🥇مفيش منك اتنين";
            } else if (lvpoints <= 26) {
                var role = "🥈برونز";
            } else if (lvpoints <= 28) {
                var role = "🥉سيلفر";
            } else if (lvpoints <= 30) {
                var role = "🎖جولد";
            } else if (lvpoints <= 32) {
                var role = "🏅بلاتينيوم";
            } else if (lvpoints <= 34) {
                var role = "🏆دايموند";
            } else if (lvpoints <= 36) {
                var role = "💍 I هيرويك";
            } else if (lvpoints <= 38) {
                var role = "💎هيرويك II";
            } else if (lvpoints <= 40) {
                var role = "🔮هيرويك III";
            } else if (lvpoints <= 42) {
                var role = "🛡Legend III";
            } else if (lvpoints <= 44) {
                var role = "🏹جراااند ماستر I";
            } else if (lvpoints <= 46) {
                var role = "⚔جراند ماستر II";
            } else if (lvpoints <= 55) {
                var role = "🐉اسطووووره";
            }
            let disc = citel.sender.substring(3, 7);
            let textr = '';
            textr += `*Hii ${tlang().greet} ,🌟 ${citel.pushName}♡${disc}'s* Exp\n\n`;
            let ttms = `${userq.xp}` / 8;
            textr += `*🌟تصنيفك*: ${role}\n*🟢الxp*: ${userq.xp} / ${Levels.xpFor(
    userq.level + 1
  )}\n*🏡اللفل*: ${userq.level}\n*Total Messages:*- ${ttms}`;
            try {
                ppuser = await Void.profilePictureUrl(citel.sender, "image");
            } catch {
                ppuser = THUMB_IMAGE;
            }
                    Void.sendMessage(citel.chat, {
                        image: await getBuffer(ppuser),
                        caption: textr,
                    }, {
                        quoted: citel,
                    });
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "المستويات",
            alias: ["deck"],
            desc: "To check leaderboard",
            category: "general",
            filename: __filename,
        },
        async(Void, citel) => {
            const fetchlb = await Levels.fetchLeaderboard("RandomXP", 5);
            let leadtext = `
*-------------------------------*
*----● المستويات ● -----*
*-------------------------------*
\n\n`
            for (let i = 0; i < fetchlb.length; i++) {
                const lvpoints = fetchlb[i].level
                var role = "مبتدأ✨";
            if (lvpoints <= 2) {
                var role = "🏳مواطن";
            } else if (lvpoints <= 4) {
                var role = "👼معالج الطفل";
            } else if (lvpoints <= 6) {
                var role = "🧙‍♀️ساحر";
            } else if (lvpoints <= 8) {
                var role = "🧙‍♂️سيد الساحر";
            } else if (lvpoints <= 10) {
                var role = "🧚🏻جامد";
            } else if (lvpoints <= 12) {
                var role = "🧜جااامد قوي";
            } else if (lvpoints <= 14) {
                var role = "🧜‍♂️جااااااامد";
            } else if (lvpoints <= 16) {
                var role = "🌬طفل سيء";
            } else if (lvpoints <= 18) {
                var role = "❄طفل نبيل";
            } else if (lvpoints <= 20) {
                var role = "⚡سرعة النخبة";
            } else if (lvpoints <= 22) {
                var role = "🎭نخبة";
            } else if (lvpoints <= 24) {
                var role = "🥇مفيش منك اتنين";
            } else if (lvpoints <= 26) {
                var role = "🥈برونز";
            } else if (lvpoints <= 28) {
                var role = "🥉سيلفر";
            } else if (lvpoints <= 30) {
                var role = "🎖جولد";
            } else if (lvpoints <= 32) {
                var role = "🏅بلاتينيوم";
            } else if (lvpoints <= 34) {
                var role = "🏆دايموند";
            } else if (lvpoints <= 36) {
                var role = "💍 I هيرويك";
            } else if (lvpoints <= 38) {
                var role = "💎هيرويك II";
            } else if (lvpoints <= 40) {
                var role = "🔮هيرويك III";
            } else if (lvpoints <= 42) {
                var role = "🛡Legend III";
            } else if (lvpoints <= 44) {
                var role = "🏹جراااند ماستر I";
            } else if (lvpoints <= 46) {
                var role = "⚔جراند ماستر II";
            } else if (lvpoints <= 55) {
                var role = "🐉اسطووووره";
            }
                let data = await sck1.findOne({ id: fetchlb[i].userID })
                let namew = fetchlb[i].userID
                let ttms = fetchlb[i].xp / 8
                leadtext += `*${i + 1}●الاسم*: ${data.name}\n*●اللفل*: ${fetchlb[i].level}\n*●النقاط*: ${fetchlb[i].xp}\n*●التصنيف*: ${role}\n*●عدد الرسائل*: ${ttms}\n\n`;
            }
            return citel.reply(leadtext)
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "رفع",
            desc: "Provides admin role to replied/quoted user",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

            if (!isAdmins) return citel.reply(tlang().admin);
            if (!isBotAdmins) return citel.reply(tlang().botAdmin);
            try {
                let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                if (!users) return;
                await Void.groupParticipantsUpdate(citel.chat, [users], "promote");
            } catch {
                //		citel.reply(tlang().botAdmin);

            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "طرد",
            alias: ["kick","اطرد"],
            desc: "Kicks replied/quoted user from group.",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

            if (!isAdmins) return citel.reply(tlang().admin);
            if (!isBotAdmins) return citel.reply(tlang().botAdmin);
            try {
                let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                if (!users) return;
                await Void.groupParticipantsUpdate(citel.chat, [users], "remove");
            } catch {
                //		citel.reply(tlang().botAdmin);

            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "ميم",
            desc: "Write text on quoted image.",
            category: "group",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            let mime = citel.quoted.mtype
            if (!/image/.test(mime)) return citel.reply(`الرد على الصورة مع التسمية التوضيحية *كتابه*`)
            mee = await Void.downloadAndSaveMediaMessage(citel.quoted)
            mem = await TelegraPh(mee)
            meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
            memek = await Void.sendImageAsSticker(citel.chat, meme, citel, { packname: citel.pushName, author: 'Secktor' })
            await fs.unlinkSync(memek)

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "جروب",
            alias: ["ගෘප්"],
            desc: "mute and unmute group.",
            category: "group",
            react: "📢",
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            if (!citel.isGroup) return citel.reply(tlang().group);
            if (!isBotAdmins) return citel.reply(tlang().botAdmin);
            if (!isAdmins) return citel.reply(tlang().admin);
            if (text.split(" ")[0] === "قفل") {
                await Void.groupSettingUpdate(citel.chat, "announcement")
                    .then((res) => reply(`Group Chat Muted :)`))
                    .catch((err) => console.log(err));
            } else if (text.split(" ")[0] === "فتح") {
                await Void.groupSettingUpdate(citel.chat, "not_announcement")
                    .then((res) => reply(`Group Chat Unmuted :)`))
                    .catch((err) => console.log(err));
            } else {
                let buttons = [{
                        buttonId: `${prefix}جروب فتح`,
                        buttonText: {
                            displayText: "🔊 فتح",
                        },
                        type: 1,
                    },
                    {
                        buttonId: `${prefix}جروب قفل`,
                        buttonText: {
                            displayText: "🔇 قفل",
                        },
                        type: 1,
                    },
                ];
                await Void.sendButtonText(citel.chat, buttons, `Group Mode`, Void.user.name, citel);
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "الصوره",
            alias: ["الصورة"],
            desc: "Sets a profile pic in Group..",
            category: "group",
            react: "🖼️",
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;


            let mime = citel.quoted.mtype
            if (!citel.isGroup) citel.reply(tlang().group);
            if (!isAdmins) citel.reply(tlang().admin);
            if (!isBotAdmins) citel.reply(tlang().botadmin);
            if (!citel.quoted) return citel.reply(`إرسال / الرد على الصورة مع التسمية التوضيحية ${command}`);
            if (!/image/.test(mime)) return citel.reply(`إرسال / الرد على الصورة مع التسمية التوضيحية ${command}`);
            if (/webp/.test(mime)) return citel.reply(`إرسال / الرد على الصورة مع التسمية التوضيحية ${command}`);
            let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
            await Void.updateProfilePicture(citel.chat, {
                    url: media,
                })
                .catch((err) => fs.unlinkSync(media));
            citel.reply(tlang().success);

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "مخفي",
            alias: ["htg"],
            desc: "Tags everyperson of group without mentioning their numbers",
            category: "group",
            react: "😾",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
            const participants = citel.isGroup ? await groupMetadata.participants : "";
            const groupAdmins = await getAdmin(Void, citel)
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            if (!isAdmins) return citel.reply(tlang().admin);

            if (!isAdmins) citel.reply(tlang().admin);
            Void.sendMessage(citel.chat, {
                text: text ? text : "",
                mentions: participants.map((a) => a.id),
            }, {
                quoted: citel,
            });
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "اضافة",
            desc: "Add that person in group",
            fromMe: true,
            category: "group",
            filename: __filename,
            use: '<number>',
        },
        async(Void, citel, text,{isCreator}) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

            if (!text) return citel.reply("Please provide me number.");
            if (!isCreator) return citel.reply(tlang().owner)
            if (!isBotAdmins) return citel.reply(tlang().botAdmin);
            let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await Void.groupParticipantsUpdate(citel.chat, [users], "add");

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "getjids",
            desc: "Sends chat id of every groups.",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            let getGroups = await Void.groupFetchAllParticipating();
            let groups = Object.entries(getGroups)
                .slice(0)
                .map((entry) => entry[1]);
            let anu = groups.map((v) => v.id);
            let jackhuh = `All groups jid\n\n`
            citel.reply(`Fetching jid from ${anu.length} Groups`)
            for (let i of anu) {
                let metadata = await Void.groupMetadata(i);
                await sleep(500)
                jackhuh += `*Subject:-* ${metadata.subject}\n`
                jackhuh += `*Member :* ${metadata.participants.length}\n`
                jackhuh += `*Jid:-* ${i}\n\n`

            }
            citel.reply(jackhuh)

        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "خفض",
        desc: "Demotes replied/quoted user from group",
        category: "group",
        filename: __filename,
        use: '<quote|reply|number>',
    },
    async(Void, citel, text) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupAdmins = await getAdmin(Void, citel)
        const botNumber = await Void.decodeJid(Void.user.id)
        const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

        if (!isAdmins) return citel.reply(tlang().admin);
        if (!isBotAdmins) return citel.reply(tlang().botAdmin);
        try {
            let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            if (!users) return;
            await Void.groupParticipantsUpdate(citel.chat, [users], "demote");
        } catch {
            //		citel.reply(tlang().botAdmin);

        }
    }
)

//---------------------------------------------------------------------------
cmd({
            pattern: "حذف",
            alias: [",","دلت"],
            desc: "Deletes message of any user",
            category: "group",
            react: "⛔",
            filename: __filename,
            use: '<quote/reply message.>',
        },
        async(Void, citel, text) => {
            if (citel.quoted.Bot) {
                const key = {
                    remoteJid: citel.chat,
                    fromMe: false,
                    id: citel.quoted.id,
                    participant: citel.quoted.sender
                }
                await Void.sendMessage(citel.chat, { delete: key })

            }
            if (!citel.quoted.isBot) {
                if (!citel.isGroup) return citel.reply(tlang().group)
                const groupAdmins = await getAdmin(Void, citel)
                const botNumber = await Void.decodeJid(Void.user.id)
                const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
                const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
                if (!isAdmins) return citel.reply('يسمح بحذف رسالة أشخاص آخرين فقط للمشرفين.')
                if (!isBotAdmins) return citel.reply('هات اشراف الاول.')
                if (!citel.quoted) return citel.reply(`رد على الرساله اللي عايزها تتحذف. ${tlang().greet}`);
                let { chat, fromMe, id } = citel.quoted;
                const key = {
                    remoteJid: citel.chat,
                    fromMe: false,
                    id: citel.quoted.id,
                    participant: citel.quoted.sender
                }
                await Void.sendMessage(citel.chat, { delete: key })
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "تفقد التحذيرات",
            desc: "Check warns",
            category: "group",
            filename: __filename,
            use: '<quoted/reply user.>',
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply('هذا الامر فقط في الجروبات.')
            if (!citel.quoted) return citel.reply('اقتباس مستخدم رئيسي.')
            teskd = `*جميع التحذيرات.*\n\n`
            let h = await warndb.find({ id: citel.quoted.sender.split('@')[0] + 'warn' })
            console.log(h)
            teskd += `*There are total ${h.length}  warnings.*\n`
            for (let i = 0; i < h.length; i++) {
                teskd += `*${i+1}*\n╭─────────────◆\n│ *🍁In Group:-* ${h[i].group}\n`
                teskd += `│ *🔰الوقت:-* ${h[i].date}\n`
                teskd += `│ *⚠️بواسطة:-* ${h[i].warnedby}\n`
                teskd += `│ _📍السبب: ${h[i].reason}_\n╰─────────────◆\n\n`
            }
            citel.reply(teskd)
        }

    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "بلوك",
            alias: ["بلك","block"],
            desc: "blocks that person",
            fromMe: true,
            category: "owner",
            filename: __filename,
            use: '<quote/reply user.>',
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply("ارجو الرد على المستخدم");
            if (!isCreator) citel.reply(tlang().owner);
            let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await Void.updateBlockStatus(users, "block")
                .then((res) => console.log(jsonformat(res)))
                .catch((err) => console.log(jsonformat(err)));

        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "بث",
        alias: ["bc"],
        desc: "Bot makes a broadcast in all groups",
        fromMe: true,
        category: "group",
        filename: __filename,
        use: '<text for broadcast.>',
    },
    async(Void, citel, text) => {
        if (!isCreator) return citel.reply(tlang().owner)
        let getGroups = await Void.groupFetchAllParticipating();
        let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
        let anu = groups.map((v) => v.id);
        citel.reply(`إرسال البث إلى ${anu.length} دردشة الجروب, وقت الانتهاء ${
          anu.length * 1.5
        } ثانيه`);
        for (let i of anu) {
            await sleep(1500);
            let txt = `*--❗${tlang().title} البث❗--*\n\n *🍀المقدم:* ${citel.pushName}\n\n${text}`;
            let buttonMessaged = {
                image: log0,
                caption: txt,
                footer: citel.pushName,
                headerType: 1,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: false,
                    externalAdReply: {
                        title: 'Broadcast by ' + citel.pushName,
                        body: tlang().title,
                        thumbnail: log0,
                        mediaUrl: '',
                        mediaType: 2,
                        sourceUrl: gurl,
                        showAdAttribution: true,
                    },
                },
            };
            await Void.sendMessage(i, buttonMessaged, {
                quoted: citel,
            });
        }
        citel.reply(`*تم ارسال البث بنجاح الى ${anu.length} جروب*`);
    }
)

//---------------------------------------------------------------------------
cmd({ on: "text" }, async(Void, citel) => {
    const randomXp = 8;
    let usrname = citel.pushName
    const hasLeveledUp = await Levels.appendXp(citel.sender, "RandomXP", randomXp);
    if (hasLeveledUp) {
        const sck1 = await Levels.fetch(citel.sender, "RandomXP");
        const lvpoints = sck1.level;
         var role = "مبتدأ✨";
            if (lvpoints <= 2) {
                var role = "🏳مواطن";
            } else if (lvpoints <= 4) {
                var role = "👼معالج الطفل";
            } else if (lvpoints <= 6) {
                var role = "🧙‍♀️ساحر";
            } else if (lvpoints <= 8) {
                var role = "🧙‍♂️سيد الساحر";
            } else if (lvpoints <= 10) {
                var role = "🧚🏻جامد";
            } else if (lvpoints <= 12) {
                var role = "🧜جااامد قوي";
            } else if (lvpoints <= 14) {
                var role = "🧜‍♂️جااااااامد";
            } else if (lvpoints <= 16) {
                var role = "🌬طفل سيء";
            } else if (lvpoints <= 18) {
                var role = "❄طفل نبيل";
            } else if (lvpoints <= 20) {
                var role = "⚡سرعة النخبة";
            } else if (lvpoints <= 22) {
                var role = "🎭نخبة";
            } else if (lvpoints <= 24) {
                var role = "🥇مفيش منك اتنين";
            } else if (lvpoints <= 26) {
                var role = "🥈برونز";
            } else if (lvpoints <= 28) {
                var role = "🥉سيلفر";
            } else if (lvpoints <= 30) {
                var role = "🎖جولد";
            } else if (lvpoints <= 32) {
                var role = "🏅بلاتينيوم";
            } else if (lvpoints <= 34) {
                var role = "🏆دايموند";
            } else if (lvpoints <= 36) {
                var role = "💍 I هيرويك";
            } else if (lvpoints <= 38) {
                var role = "💎هيرويك II";
            } else if (lvpoints <= 40) {
                var role = "🔮هيرويك III";
            } else if (lvpoints <= 42) {
                var role = "🛡Legend III";
            } else if (lvpoints <= 44) {
                var role = "🏹جراااند ماستر I";
            } else if (lvpoints <= 46) {
                var role = "⚔جراند ماستر II";
            } else if (lvpoints <= 55) {
                var role = "🐉اسطووووره";
        }
        if (Config.levelupmessage !== 'false') {
            await Void.sendMessage(citel.chat, {
                image: {
                    url: await botpic(),
                },
                caption: `
╔════◇
║ *Wow,Someone just*
║ *leveled Up huh⭐*
║ *👤Name*: ${citel.pushName}
║ *🎐Level*: ${sck1.level}🍭
║ *🛑Exp*: ${sck1.xp} / ${Levels.xpFor(sck1.level + 1)}
║ *📍Role*: *${role}*
║ *Enjoy🥳*
╚════════════╝
`,
            }, {
                quoted: citel,
            });
        }
    }

})
