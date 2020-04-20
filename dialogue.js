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
            ea0: "well this happened blah blah blah",


            // declines hearing her story
            f0: "Oh... I see... It doesn't matter anyway. What's done is done and there's no use dwelling on it.",
            f1: "",

            // declines to hear the second half of the story
            fa0: "how dare you",

            g0: "???: ",


            // Game over dialogue (gg = Good Game; a common online gaming term used when a game is finished)
            gg0: "I've had enough of this!",
            gg1: "It seems you never should have come to this place, mortal. Farewell, you will be forgotten.",
            gg2: "GAME OVER",
            gg3: "",
        }

        return dialogue;
    }


