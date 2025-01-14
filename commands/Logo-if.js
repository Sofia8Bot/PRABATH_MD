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

const { tlang,cmd } = require('../lib')

const Config = require('../config')

const prefix = Config.prefix

const maker = require('mumaker')

    //---------------------------------------------------------------------------

cmd({ pattern: "محيط", alias: ["logo1"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

        let anu = await maker.textpro('https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html', text)

        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })

    })

    //---------------------------------------------------------------------------

cmd({ pattern: "رعب", alias: ["logo2"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

        let anu = await maker.textpro('https://textpro.me/horror-blood-text-effect-online-883.html', text)

        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })

    })

    //---------------------------------------------------------------------------

cmd({ pattern: "اسودوابيض", alias: ["logo3"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

        let anu = await maker.textpro('https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html', text)

        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })

    })

    //---------------------------------------------------------------------------

cmd({ pattern: "جوكر", alias: ["logo4"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')


        let anu = await maker.textpro('https://textpro.me/create-logo-joker-online-934.html', text)

        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })

    })

    //---------------------------------------------------------------------------

cmd({ pattern: "ميتاليك", alias: ["logo5"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

        let anu = await maker.textpro('https://textpro.me/create-a-metallic-text-effect-free-online-1041.html', text)

        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })

    })

    //---------------------------------------------------------------------------

cmd({ pattern: "فولاذ", alias: ["logo6"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

        let anu = await maker.textpro('https://textpro.me/steel-text-effect-online-921.html', text)

        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })

    })

    //---------------------------------------------------------------------------

cmd({ pattern: "هاريبوتر", alias: ["logo7"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو_')

        let anu = await maker.textpro('https://textpro.me/create-harry-potter-text-effect-online-1025.html', text)

        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })

    })

    //---------------------------------------------------------------------------

cmd({ pattern: "مياه", alias: ["logo8"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو_')

        let anu = await maker.textpro('https://textpro.me/3d-underwater-text-effect-generator-online-1013.html', text)

        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })

    })

    //---------------------------------------------------------------------------

cmd({ pattern: "ترف", alias: ["logo9"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

        let anu = await maker.textpro('https://textpro.me/3d-luxury-gold-text-effect-online-1003.html', text)

        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })

    })

    //---------------------------------------------------------------------------

cmd({ pattern: "جلو", alias: ["logo10"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

        let anu = await maker.textpro('https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html', text)

        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })

    })

    //---------------------------------------------------------------------------

cmd({ pattern: "فابريك", alias: ["logo11"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

        let anu = await maker.textpro('https://textpro.me/fabric-text-effect-online-964.html', text)

        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })

    })

    //---------------------------------------------------------------------------

cmd({ pattern: "توكسيك", alias: ["logo12"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

        let anu = await maker.textpro('https://textpro.me/toxic-text-effect-online-901.html', text)

        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })

    })

    //---------------------------------------------------------------------------

cmd({ pattern: "قديم", alias: ["logo13"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

        let anu = await maker.textpro('https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html', text)

        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })

    })

    //---------------------------------------------------------------------------

cmd({

            pattern: "سحاب",

            alias: ["logo14"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

            let anu = await maker.textpro('https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "ترانسفورمر",

            alias: ["logo15"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

            let anu = await maker.textpro('https://textpro.me/create-a-transformer-text-effect-online-1035.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "برق",

            alias: ["logo16"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

            let anu = await maker.textpro('https://textpro.me/online-thunder-text-effect-generator-1031.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "الخيال",

            alias: ["logo17"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

            let anu = await maker.textpro('https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "رمل",

            alias: ["logo18"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

            let anu = await maker.textpro('https://textpro.me/write-in-sand-summer-beach-free-online-991.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "رينبو",

            alias: ["logo19"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

            let anu = await maker.textpro('https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "رصاص",

            alias: ["logo20"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

            let anu = await maker.textpro('https://textpro.me/create-a-sketch-text-effect-online-1044.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "نيون",

            alias: ["logo21"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

            let anu = await maker.textpro('https://textpro.me/create-3d-neon-light-text-effect-online-1028.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "ماجما",

            alias: ["logo22"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

            let anu = await maker.textpro('https://textpro.me/create-a-magma-hot-text-effect-online-1030.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "اوراق",

            alias: ["logo23"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

            let anu = await maker.textpro('https://textpro.me/natural-leaves-text-effect-931.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "جلتش",

            alias: ["logo24"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

            let anu = await maker.textpro('https://textpro.me/create-impressive-glitch-text-effects-online-1027.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "ديسكفري",

            alias: ["logo25"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

            let anu = await maker.textpro('https://textpro.me/create-space-text-effects-online-free-1042.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "كريسماس",

            alias: ["logo26"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

            let anu = await maker.textpro('https://textpro.me/christmas-tree-text-effect-online-free-1057.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "حلوى",

            alias: ["logo27"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

            let anu = await maker.textpro('https://textpro.me/create-christmas-candy-cane-text-effect-1056.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "1917",

            alias: ["logo28"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

            let anu = await maker.textpro('https://textpro.me/1917-style-text-effect-online-980.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "نص_جديد",

            alias: ["logo30"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

            let anu = await maker.textpro('https://textpro.me/create-a-metallic-text-effect-free-online-1041.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

        pattern: "بلاك_بينك",

        alias: ["logo29"],

        category: "textpro",

        desc: "Some text to image feature with various styles."

    },

    async(Void, citel, text) => {

        if (!text) return citel.reply('_تعذر فهم طلبك يمكنك كتابة الشئ المراد تحويله إلى لوجو !_')

        let anu = await maker.textpro('https://textpro.me/create-blackpink-logo-style-online-1001.html', text)

        Void.sendMessage(citel.chat, {

            image: {

                url: anu

            },

            caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

        }, {

            quoted: citel

        })

    }

)
