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
const os = require('os');
const { tlang, botpic,cmd, prefix, runtime,Config,formatp } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
//---------------------------------------------------------------------------
cmd({
        pattern: "chatdectakag",
        desc: "chat with an AI",
        category: "general",
        use: '<Hii,Secktor>',
        filename: __filename,
    },
    async(Void, citel,text) => {
        let zx = text.length;
        if (zx < 30) {
            let {data} = await axios.get(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${citel.sender.split("@")[0]}]&msg=[${text}]`);
            return citel.reply(data.cnt);  
        }
        if (!text) return citel.reply(`Hey there! ${citel.pushName}. How are you doing these days?`);
        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
            apiKey: Config.OPENAI_API_KEY || "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",
        });
        const openai = new OpenAIApi(configuration);
        const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: text,
            temperature: 0.5,
            max_tokens: 80,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
            stop: ['"""'],
        });
        citel.reply(completion.data.choices[0].text);
    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "script",
        alias: ["git", "github", "repo"],
        desc: "Sends info about repo.",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://api.github.com/repos/SamPandey001/Secktor-Md')
        let cap = `*🌐 Sofia _Bot ♦️*

●. *Support group :* https://chat.whatsapp.com/KwFkWjI8qJ6B174esar8IM

●. *Github:* https://github.com/PrabathLK/PRABATH_MD

●. *Developer:* https://github.com/PrabathLK

ᴘʀᴀʙᴀᴛʜ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴘʀᴀʙᴀᴛʜ
ʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸
`
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: cap,
            headerType: 4,
            }
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

//---------------------------------------------------------------------------

cmd({

            pattern: "logo",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "🎲",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `
.logo1 text
.logo2 text
.logo3 text
.logo4 text
.logo5 text
.logo6 text
.logo7 text
.logo8 text
.logo9 text
.logo10 text
.logo11 text
.logo12 text
.logo13 text
.logo14 text
.logo15 text
.logo16 text
.logo17 text
.logo18 text
.logo19 text
.logo20 text
.logo21 text
.logo22 text
.logo23 text
.logo24 text
.logo25 text
.logo26 text
.logo27 text
.logo28 text
.logo29 text
.logo30 text


ᴘʀᴀʙᴀᴛʜ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴘʀᴀʙᴀᴛʜ
ʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------

cmd({

            pattern: "groupcmdnew",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "📂",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}git`,

                    buttonText: {

                        displayText: "Github",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "Info",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

                

📟 *Command:-* .ملصق
ℹ️ *Description:-* صورة الى نلصق
🔥 *Help:-* .ملصق منشن صورة او فيديو 


📟 *Command:-* .رقي
ℹ️ *Description:-* رقي الى مشرف
🔥 *Help:-*رقي منشن اي عضو

📟 *Command:-* .خفض
ℹ️ *Description:-* خفض مشرف الى عضو
🔥 *Help:-* .خفض مشرف الى عضو


📟 *Command:-* .حظر
ℹ️ *Description:-* أستخدام الامر للحظر 
🔥 *Help:-* . احظر منشن اي عضو 

📟 *Command:-* .الغاء حظر
ℹ️ *Description:-* الغاء حظر المستخدم
🔥 *Help:-* .الغاء الحظر منشن اي عضو


📟 *Command:-* .طرد
ℹ️ *Description:-* حذف عضو من الجروب
🔥 *Help:-* .طرد منشن اي عضو


📟 *Command:-* .ضيف
ℹ️ *Description:-*ضيف اعضاء للجروب
🔥 *Help:-* .ضيف رقم الموبايل 


📟 *Command:-* .تصويت
ℹ️ *Description:-* انشاء تصويت بالجروب
🔥 *Help:-* .سؤال استطلاع خيار واحد او اتنين او ثلاثه


📟 *Command:-* .البروفايل
ℹ️ *Description:-* احصل على معلومات البروفايل
🔥 *Help:-* .بروفايل منشن اي عضو


📟 *Command:-* .الجروب
ℹ️ *Description:-* كتم الجروب او فتح الجروب
🔥 *Help:-* .جروب


📟 *Command:-* .gdp
ℹ️ *Description:-* غير صورة الجروب
🔥 *Help:-* .gdp منشن اي صورة


📟 *Command:-* .احذف
ℹ️ *Description:-* حذف رسالة
🔥 *Help:-* .حذف منشن اي رسالة


📟 *Command:-* .مضاد الروابط
ℹ️ *Description:-* حاذف الروابط
🔥 *Help:-* .مضاد الوابط مفعل او غير مفعل


📟 *Command:-* .منشن
ℹ️ *Description:-* منشن اعضاء الجروب
🔥 *Help:-* .منشن


📟 *Command:-* .getjids
ℹ️ *Description:-* Get Jid
🔥 *Help:-* .getjids


📟 *Command:-* .المستوى
ℹ️ *Description:-* تحقق المستوى
🔥 *Help:-* .المستوى منشن اي عضو


📟 *Command:-* .الترحيب
ℹ️ *Description:-* تغير رسالة الترحيب
🔥 *Help:-* .رسالة الترحيب


📟 *Command:-* .الوداع
ℹ️ *Description:-* تغير رسالة الوداع 
🔥 *Help:-* .رسالة الوداع


📟 *Command:-* .gs
ℹ️ *Description:-* تغير اعدادات الجروب
🔥 *Help:-* .gs


📟 *Command:-* .اعدادات
ℹ️ *Description:-* تغيير اعدادات الجروب
🔥 *Help:-* .اعدادات


⦿. *REQUEST BY:* ${citel.pushName}

`,

                footer: tlang().footer,

                buttons: buttons,

                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

    

    

    //---------------------------------------------------------------------------

cmd({

            pattern: "mjakageksjsgwusksgaisjsgajhshshshshehbenu",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "🔖",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {


            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

┌────────────────────────────
│  👨‍💻 *Sofia-Bot* 👨‍💻  *ااوامر* 🎗️
└────────────────────────────


┌─(📥 اوامر التحميل)
│.اغنية
│.فيديو
│.تطبيق
│.ملف اغنية 
│.ملف فيديو
│.fb
│.تيك توك
│.صورة
│.mp4تحميل
│.fbs
└─────────◉
┌─(🔍 اوامر البحث)
│.ابحث عن فيديو
│.ابحث عن اغنية
│.بحث يوتيوب
│.الطقس
│.فيلم
└─────────◉
┌─(🧰 اوامر التحويل)
│.ملصق
│.attp
│.ttp
│.لوجو
│.ss
│.ترجم
└─────────◉
┌─(👥 اوامر الجروب)
│.اطرد
│.رقي
│.خفض
│.مخفي
│.الترحيب
│.الوداع
│.اعدادات الجروب
│.حظر
│.الغاء الحظر
│.الانترنت
│.حذف
│.gdp
└─────────◉
┌─(🧑‍💻 اةوامر المشرفين)
│.ujid
│.حظر
│.الغاء الحظر
│.اعادة تشغيل
│.انضم
│.احفظ
│.اتبرع
│.dallnote
└─────────◉
┌─( 🎮 اوامر الالعاب)
│.اكس او
│.بولينج
└─────────◉
┌─(💬 اوامر اخرى)
│.اونلاين
│.المستوى
│البروفايل
│.نظام
│.eval
│.كود
│.sn
└─────────◉

Sofia-Bot ⦁ ᴍᴀᴅᴇ ʙʏ ITR
ʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------

cmd({

            pattern: "gs",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "⚙️",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

┏━━━━━━━━━━━━━━━━━━━━━━━━━
┃  *تغيير اعدادات الجروب*
┗━━━━━━━━━━━━━━━━━━━━━━━━━



🔇 *MUTE GROUP -* .اغلق الجروب
🔊 *UNMUTE GROUP -* .افتح الجروب


✅ *ACTIVE ANTILINK -* .تشغيل مضاد الروابط
❌ *DEACTIVE ANTILINK -* .ايقاف مضاد الروابط


✅ *ACTIVE BOT THIS GROUP -* .تشغيل البوت
❌ *DEACTIVE BOT THIS GROUP -* .ايقاف البوت


✅ *ACTIVE ADD AND LEFT MSJ -* .act events
❌ *DEACTIVE ADD AND LEFT MSJ -* .deact events

Sofia-Bot ⦁ ᴍᴀᴅᴇ ʙʏ ITR
ʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸
`,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------

cmd({

            pattern: "ownercmdnew",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "👨‍💻",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text,{isCreator}) => {

         

            let buttons = [{

                    buttonId: `${prefix}owner`,

                    buttonText: {

                        displayText: "Owner",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}git`,

                    buttonText: {

                        displayText: "Deploy Site",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

📟 *Command:-* .تثبيت
ℹ️ *Description:-* تثبيت الاضافات
🔥 *Help:-* .تثبيت رابط الاضافات 


📟 *Command:-* .الاضافات
ℹ️ *Description:-* تثبيت عرض الاضافات 
🔥 *Help:-* .الاضافات 


📟 *Command:-* .حظر
ℹ️ *Description:-* حظر مستخدم 
🔥 *Help:-* .حظر منشن المستخدم او المحادثة


📟 *Command:-* .الغاء الحظر
ℹ️ *Description:-* الغاء حظر مستخدم
🔥 *Help:-* .الغاء حظر منشن المستخدم او المحادثة


📟 *Command:-* .ازاله
ℹ️ *Description:-* اازالة الاضافات 
🔥 *Help:-* .ازالة رابط الاضافات


📟 *Command:-* .انضم
ℹ️ *Description:-* انضم للجروب باستخدام رابط المجموعة
🔥 *Help:-* .انضم للجروب باستخدام رابط المجموعة


*📟Command:-* .اعادة تشغيل
ℹ️ *Description:-* اعادة تشغيل البوت 
🔥 *Help:-* .اعادة تشغيل


📟 *Command:-* .احفظ
ℹ️ *Description:-* Save notes from mongodb 
🔥 *Help:-* .save Sofia-Bot


📟 *Command:-* .get
ℹ️ *Description:-* Get saved notes
🔥 *Help:-* .get


📟 *Command:-* .dnote
ℹ️ *Description:-* Delete saved notes
🔥 *Help:-* .dnote ENTER NOTE ID


📟 *Command:-* .dallnote
ℹ️ *Description:-* Delete all saved notes
🔥 *Help:-* .dallnote


⦿. *REQUEST BY:* ${citel.pushName}

`,

                footer: tlang().footer,

                buttons: buttons,

                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------

cmd({

            pattern: "othercmdnew",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "🎊",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}Owner`,

                    buttonText: {

                        displayText: "Owner",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}install https://gist.github.com/prabathLK/01f3859256a7130f234ac54aeebf486e/raw`,

                    buttonText: {

                        displayText: "Install Voice Reply",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

📟 *Command:-* .النظام
ℹ️ *Description:-* حالى النظام
🔥 *Help:-* .النظام


📟 *Command:-* .الطقس
ℹ️ *Description:-* معرفة الطقس
🔥 *Help:-* .الطقس على حسب معلومات موقعة

📟 *Command:-* .eval
ℹ️ *Description:-* run codes
🔥 *Help:-* .eval 


📟 *Command:-* .مراسلة
ℹ️ *Description:-* مراسلة البوت
🔥 *Help:-* . .مراسلة البوت


📟 *Command:-* .ترجم
ℹ️ *Description:-* جوجل ترجمة  
🔥 *Help:-* .الترجمة تعمل


⦿. *REQUEST BY:* ${citel.pushName}

`,

                footer: tlang().footer,

                buttons: buttons,

                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------

cmd({

            pattern: "concmdnew",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "🔄",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}Git`,

                    buttonText: {

                        displayText: "Github",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}rank`,

                    buttonText: {

                        displayText: "Rank",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

📟 *Command:-* .ترجم
ℹ️ *Description:-* ترجمة اي لغة
🔥 *Help:-* . ترجم منشن نص


📟 *Command:-* .ملصق
ℹ️ *Description:-* صورة او فيديو الى ملصق 
🔥 *Help:-* .ملصق منشن صورة او فيديو

⦿. *REQUEST BY:* ${citel.pushName}

`,

                footer: tlang().footer,

                buttons: buttons,

                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )



//---------------------------------------------------------------------------

cmd({

            pattern: "gitadmin",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "😾",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}promote 94762280384`,

                    buttonText: {

                        displayText: "Get Admin",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `



මොනවද පගෝ බලන්නෙ 😹💔

`,

                footer: tlang().footer,

                buttons: buttons,

                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {


            });

        }

    )

