    const createDialogue = () => {
        objDialogue = {
            // intro dialogue
            z0: (`The name's detective ${playerName}. Only two days ago I was contacted by the head honcho of the united nations' secret services.`),
            z1: "He sat me down and started talking about some absolute jibberish. Sayin' there's some super secret ancient relic that has magical powers.. blah blah blah...",
            z2: "I'm supposed to travel 6,000 fricken miles across the planet to some small-time village and investigate a chick who lives there.",
            z3: "They didn't tell me her name, they didn't even tell me what she looks like. All they told me was her blood type... how is that supposed to help...",
            z4: "Well anyway, here I am at the airport. At least they gave me my own private jet for this mission. They must be really serious about this.",
            z5: "Gonna miss my wife, Enya. She has always understood my craft and trusted me to return in one piece.",
            z6: "*Romance scene that was too cringy to include*",
            z7: "Ah... it's time to go.",
            z8: "",
            z9: "Here we are. In the middle of nowhere... ",
            z10: "Rolling hills as far as the eye can see, yet not a single soul in sight...",
            z11: "After some walking around, I can see smoke in the distance. Maybe a mile or two away. Might aswell go check that out.",
            z12: "",
            z13: "Ah! It's a village... All the way out here?",
            z14: "It looks like quite a nice place, I'm not gonna lie.",
            z15: "",

            // Walks into the centre of town dialogue
            a0: "I walk into the centre of town, doesn’t seem anyone is here… it's strange… and kinda creepy.",
            a1: "Everything seems clean and well maintained. There's a soft warm atmosphere in the air here. It sort'a feels like home...",
            a2: "After standing around for a couple of minutes, I notice a door pop open and a person come walking out.",
            a3: "They don't seem to have noticed that I'm here...",
            a4: "???: Eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeek!!!",
            a5: "Uh... Nevermind. They noticed me.",
            a6: "",
            a7: "???: Wh-wh-who are you?",
            a8: "",

            // Back alley dialogue
            b0: "Empty, empty and even more empty...",
            b1: "Something really doesn't feel right here...",
            b2: "I can sense something is off, but I'm not sure what is it.",
            b3: "Am I being watched... no, somethings coming... where from... I can sense it.",
            b4: "???: Behind you.",
            b5: "What the?!",
            b6: "Wh-who...?",
            b7: "???: Do you want to explain what you're doing sneaking around here?",
            b8: "Errrm...",
            b9: "",

            // pretends to be a traveller dialogue
            c0: "???: Unbelieveable! We never get travellers here, not after what happened all those years ago...",
            c1: "Eh? What happened, might I ask?",
            c2: "???: If you really want to know, I'll tell you. But it's quite the depressing story...",
            c3: "",


            // Warning for threatening
            d0: "???: what...?",
            d1: "",
            d2: "???: Seriously. Stop it. Who are you?",
            d3: "",
            d4: "???: I'm not going to ask again.",
            
            
            // accepts to hear her story
            e0: "???: Well then... It was only two years ago that a number of strange travellers showed up at this village.",
            e1: "???: They were foreigners just like you are, except they were more manly and intimidating...",
            e2: "???: We housed and provided them with the utmost friendly experience. Yet, they were always aggressive and quite rude to us.",
            e3: "???: We weren't the kind of people who would force wandering travellers outside into the wild, that would be horrible.",
            e4: "???: So instead we simply dealt with their behaviour and waited for them to leave... except they never left.",
            e5: "???: More and more of these strange and rough looking travellers kept coming until there were at least 20 of them here.",
            e6: "???: Then one night I decided to go for a walk out to the fields, where I could look at the ocean and stars, I heard a loud banging sound in the distance.",
            e7: "???: I was immediately curious, but not concerned. I followed the sound and realised I was headed back to the village.",
            e8: "???: As I got closer I could begin to hear the sounds of screaming in the distance and the banging sounds got louder and louder.",
            e9: "???: There were trucks and various men and women dressed in military uniforms, however, I was unable to see who they belonged to.",
            e10: "???: I waited over the hills for a night or two until they had all left and then returned to the village.",
            e11: "???: I don't think I'll ever forget what my eyes had seen when I stepped foot into the village streets.",
            e12: "",


            // second half of story
            ea0: "???: I walked into the streets only to find the bodies of all my friends and family layed out, covered in blood and bullet holes...",
            ea1: "???: I remember how my vision became more and more blurry as the tears filled my eyes...",
            ea2: "???: I checked every heartbeat and every building for anyone... anyone at all... I just needed someone to say something.",
            ea3: "???: But it was already too late, those strangers took everything from me!",
            ea4: "???: W-wh-what am I supposed to do to avenge those who were mercilessly murdered..?",
            ea5: "???: Someone has to pay for what happened here! If only I could... If only I could find out who they were.",
            ea6: "???: I would travel to the ends of the planet to find them and take everything from them, as they did to me.",
            ea7: "???: But how am I supposed to...",
            ea8: "",

            // declines to hear the second half of the story
            eb0: "???: H-h-how dare you?!",
            eb1: "Woah, okay. Calm down, I didn't mean to-",
            eb2: "???: Don't you dare tell me to calm down, you don't know what I've been through!",
            eb3: "Look, I'm sure you've got your problems, but I'm a busy man.",
            eb4: "???: My own problems? MY OWN PROBLEMS?!",
            eb5: "",
            eb6: "Yeah, your own problems. Wait. No. That sounds bad. I-I mean-",
            eb7: "???: You need to leave.",
            eb8: "Wait, wait, wait! Look, I've been travelling for days and I haven't had a chance to rest.",
            eb9: "Could you imagine trying to listen to a really intense story *cough* tale! after such a long journey?",
            eb10: "I lost my wife recently too, we were baking in the bakery that we own and she fell into the pizza cooker",
            eb11: "???: Wh-what...?",
            eb12: "*I begin to fake cry*",
            eb13: "She- she was my world, my everything, and now she's gone...",
            eb14: "*I cover my face to hide my slight grin*",
            eb15: "???: Eh.. eh, it's okay.. eh- I didn't mean to- ah- I'm sorry...",
            eb16: "No! I'm sorry! I shouldn't have used my words so lightly. I would love to hear your story. Just not right now, okay?",
            eb17: "???: It's okay, I shouldn't allow myself to get so angry so easily...",
            eb18: "???: Anyway... erm... hm...",
            eb19: "*The girl stands up straight and takes a deep breath*",
            eb20: "",

            ec0: "???: Ah... Thank you, it means a lot that you'd believe in me despite not known who or what I am.",
            ec1: "???: I have to thank you for being so willing to listen to my story, I'm truly grateful.",
            ec2: "It's okay, I can't begin to imagine what you're feeling right now... erm...",
            ec3: "*The girl looks a little shocked for a second*",
            ec4: "???: I can't believe I forgot to introduce myself!",
            ec5: "",

            ed0: "???: Oh...? So you know who they are?",
            ed1: "**crap! i shouldn't have said that**",
            ed2: "Ermm... well it's common knowledge where I'm from.",
            ed3: "???: The information of a secret military group is 'common knowledge'...?",
            ed4: "Yeah...?",
            ed5: "???: Do you think I'm stupid?",
            ed6: "No, no, of course you're not stupi-",
            ed7: "???: Stop talking!",
            ed8: "???: The only travellers that have ever came to this village turned out to be military murderers.",
            ed9: "???: Now another traveller shows up claiming that they're just a traveller, yet they somehow know who the muderers were...",
            ed10: "???: When your military friends arrive, you won't be around to tell them what you've found.",
            ed11: "Wait wait, what are you talking about! I told you that everybody knows about this kind of stuff.",
            ed12: "???: Then you probably already know who I am... don't you?",
            ed13: "*You watch as her skin begins to crack around the edges and turn a dark purple as she grows in height*",
            ed14: "What... the... fudge...",
            ed15: "*Large bloody spines errupt from her back, tearing all the clothes from her body, revealing a scaled skinned torso*",
            ed16: "*Her hair turns black and her spines begin to form wings as the skin across her body turn to scales*",
            ed17: "???: I never wanted to hurt anyone, but your kind keep coming to hunt me down for your petty experiments.",
            ed18: "???: Looks like I will have to start taking action in order to keep you all from trying to hurt me.",
            ed19: "*You stand in shock, every inch of your body is frozen in fear as her claws begin to glow with a dark gold*",
            ed20: "???: First I will tear you limb from limb and then I will travel to your homelands and do the same to all your kind.",
            ed21: "???: Once there is nobody left to hunt me, I will return to my slumber as an innocent creature, peacfully.",
            ed22: "??? Farewell, Human. It will only hurt for a moment.",
            ed23: "*She swoops in close within the blink of an eye and begins to tear you to pieces, the pain is overwhelming*",
            ed24: "GAME OVER",
            ed25: "",

            // declines hearing her story
            f0: "Oh... I see... It doesn't matter anyway. What's done is done and there's no use dwelling on it.",
            f1: "",

            g0: "Aiko: My name is Aiko, it is a pleasure to have you here. I want you to feel welcomed here at Shilo Village.",


            // Game over dialogue (gg = Good Game; a common online gaming term used when a game is finished)
            gg0: "I've had enough of this!",
            gg1: "It seems you never should have come to this place, mortal. Farewell, you will be forgotten.",
            gg2: "GAME OVER",
            gg3: "",
        }

        return dialogue;
    }


