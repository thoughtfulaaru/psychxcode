/* ==========================================================================
   Psych X Code - Enhanced JavaScript
   ========================================================================== */

// Platform Data with 5 scenario-based questions per topic, clean flow, and jargon-free actionable conclusions
const platformData = {
    mind: {
        title: "🧠 Mind Lab",
        topics: [
            { 
                id: 'biases', 
                name: "Mental Loops & Shortcuts", 
                desc: "Explore how your mind processes unexpected setbacks, opinions, and daily surprises.",
                questions: [
                    {
                        text: "You try a new strategy or project and it doesn't work out on the first try. What is your immediate mental take?",
                        options: [
                            "A. 'I knew it wouldn't work from the start; I should have trusted my gut.'",
                            "B. 'This proves I'm bad at this sort of thing overall.'",
                            "C. 'Well, that approach failed. Let's look at what went wrong and adjust.'"
                        ]
                    },
                    {
                        text: "When someone offers feedback that contradicts an opinion you felt strongly about, how do you usually react internally?",
                        options: [
                            "A. You look for reasons why their data is flawed so you can completely dismiss it.",
                            "B. You immediately assume you were completely wrong and feel inadequate.",
                            "C. You listen carefully and weigh their points against your own objectively."
                        ]
                    },
                    {
                        text: "You notice someone looking in your direction and whispering. What is your first assumption?",
                        options: [
                            "A. They are definitely talking negatively about me or judging my appearance.",
                            "B. They are probably discussing something completely unrelated to me.",
                            "C. I wonder if I have something on my face, but I quickly brush it off."
                        ]
                    },
                    {
                        text: "You invest money or months of hard work into a plan that is clearly failing. Why do you hesitate to quit?",
                        options: [
                            "A. 'I've already put so much into it; if I stop now, all that time is wasted.'",
                            "B. 'Everyone is watching me; quitting means admitting defeat publicly.'",
                            "C. 'Past costs don't matter; it's time to cut losses and pivot.'"
                        ]
                    },
                    {
                        text: "When things go well for you, what reason do you usually give yourself?",
                        options: [
                            "A. 'It was pure luck; I just happened to be in the right place at the right time.'",
                            "B. 'I worked hard, but I'm waiting for the other shoe to drop.'",
                            "C. 'My effort, preparation, and skill contributed directly to this outcome.'"
                        ]
                    }
                ],
                conclusion: "Where you stand:\nBased on your responses, your mind has developed a clever self-protection system. When uncertainty or high stakes pop up, your brain tends to use mental shortcuts—like assuming the worst, rewriting the past to say you 'knew it all along,' or staying stuck in things just because you've already invested time. While this is your mind's way of trying to keep you safe from feeling foolish or hurt, it often ends up draining your energy and keeping you stuck in overthinking.\n\nSteps you can take to heal and grow:\n1. Pause and check the facts: The next time a heavy or negative assumption hits you out of nowhere, pause and ask yourself, 'What is the actual, concrete proof for this thought?'\n2. Treat slip-ups as data, not verdicts: Remind yourself that a single setback or failed project doesn't mean you are a failure; it simply means you've gathered useful information on what doesn't work.\n3. Keep a reality log: When your mind predicts a terrible outcome, write it down. Look back a week later to see how often your fears actually came true—you'll likely find your mind was exaggerating." 
            },
            { 
                id: 'triggers', 
                name: "Emotional Triggers & Energy", 
                desc: "Discover how your body and emotions react to waiting, sudden changes, and criticism.",
                questions: [
                    {
                        text: "A friend or colleague takes hours to reply to a simple text message. What goes through your mind?",
                        options: [
                            "A. 'They are pulling away or losing interest in talking to me.'",
                            "B. 'They are probably just busy with something else.'",
                            "C. 'If they don't value my time, I shouldn't bother replying either.'"
                        ]
                    },
                    {
                        text: "Someone gives you unexpected constructive criticism in front of others. How does your body react?",
                        options: [
                            "A. Your heart races, your face gets hot, and you feel instantly defensive or cornered.",
                            "B. You feel a brief sting of embarrassment, but you stay calm and listen.",
                            "C. You shut down completely, go quiet, and try to escape the conversation."
                        ]
                    },
                    {
                        text: "Plans change at the very last minute due to someone else's disorganization. How do you respond internally?",
                        options: [
                            "A. Intense irritation; you feel like your time and respect were completely disregarded.",
                            "B. Annoyance, but you quickly pivot and find something else productive to do.",
                            "C. Relief; you secretly love having free unexpected time to yourself."
                        ]
                    },
                    {
                        text: "You are asked to speak up or share your opinion unexpectedly in a group meeting. What happens?",
                        options: [
                            "A. Panic sets in; your mind goes blank and you worry everyone is judging your intelligence.",
                            "B. Mild nervousness, but you collect your thoughts and express yourself clearly.",
                            "C. Irritation that you were put on the spot without preparation."
                        ]
                    },
                    {
                        text: "Someone expresses frustration or a bad mood around you, even though it has nothing to do with you. How does it affect you?",
                        options: [
                            "A. You immediately absorb their energy and feel anxious, wondering what you did wrong.",
                            "B. You notice their mood, but you keep your own emotional boundaries intact.",
                            "C. You get annoyed with them for bringing negative energy into your space."
                        ]
                    }
                ],
                conclusion: "Where you stand:\nYour responses reveal that your nervous system tends to go into high alert when faced with delays, sudden changes, or social pressure. You might find yourself taking other people's delays personally, absorbing the moods around you like a sponge, or feeling a rush of physical panic when put on the spot. Your system is treating everyday social friction like a major emergency, which leaves you feeling exhausted.\n\nSteps you can take to heal and grow:\n1. Soothe your physical body first: When you feel that sudden rush of heat or anxiety, take slow, deep belly breaths (inhale for 4 seconds, exhale for 4). This tricks your nervous system into realizing you are physically safe.\n2. Remind yourself whose backpack it is: When someone around you is in a bad mood or taking forever to reply, repeat internally: 'Their mood and timeline belong to them, not me.'\n3. Buy yourself a buffer zone: Give yourself a mandatory 5-second pause before responding to unexpected changes or friction. It gives your logical brain time to catch up with your emotional reaction." 
            },
            { 
                id: 'communication', 
                name: "Communication Style", 
                desc: "Uncover how you share your needs, handle friction, and speak up for yourself.",
                questions: [
                    {
                        text: "Someone cuts in front of you in a line or takes a slot you were waiting for. What do you do?",
                        options: [
                            "A. Say nothing, smile awkwardly, and let it go while feeling resentful inside.",
                            "B. Call them out directly, loudly, and with immediate frustration.",
                            "C. Calmly and clearly let them know that you were waiting there."
                        ]
                    },
                    {
                        text: "When you are upset with someone close to you, how do you usually start the conversation?",
                        options: [
                            "A. You drop hints, sigh, or act cold until they ask what's wrong.",
                            "B. You list everything they've done wrong in the past to prove your point.",
                            "C. You state clearly what happened and how it made you feel without attacking them."
                        ]
                    },
                    {
                        text: "Someone asks for your opinion on a creative project or outfit that you actually dislike. What do you say?",
                        options: [
                            "A. 'It's amazing!' (enthusiastic lie to avoid hurting their feelings at all costs).",
                            "B. 'It's terrible, I wouldn't wear or use that.' (blunt brutality without tact).",
                            "C. 'It's unique! It might look great if you tweaked X or Y.' (balanced honesty)."
                        ]
                    },
                    {
                        text: "You need a favor from a busy friend. How do you make the request?",
                        options: [
                            "A. You apologize profusely beforehand and feel like a massive burden for asking.",
                            "B. You demand or expect help because of what you've done for them in the past.",
                            "C. You ask directly, explicitly giving them an easy out if they are too busy."
                        ]
                    },
                    {
                        text: "During a discussion, someone interrupts you mid-sentence. What is your reaction?",
                        options: [
                            "A. You immediately stop talking, shrink back, and let them take over the floor.",
                            "B. You talk louder over them to reclaim your space and finish your point.",
                            "C. You pause, and calmly say, 'Let me finish my thought, and then I'd love to hear yours.'"
                        ]
                    }
                ],
                conclusion: "Where you stand:\nWhen it comes to expressing your needs and dealing with disagreements, you often bounce between keeping things bottled up to keep the peace, dropping subtle hints hoping others will guess what's wrong, or bracing yourself for a fight. Because you may worry that speaking up will cause conflict or make you look difficult, you end up carrying hidden frustration.\n\nSteps you can take to heal and grow:\n1. Stop dropping hints: People are notoriously bad mind-readers. Commit to asking directly for what you want or need, while giving the other person the freedom to say yes or no.\n2. Use 'I' statements: When addressing something that bothered you, focus entirely on your own experience (e.g., 'I felt overwhelmed when...') rather than accusing ('You always...').\n3. Tolerate the wobble: Understand that speaking your truth might feel scary or uncomfortable at first if you are used to people-pleasing. That discomfort is just growth happening." 
            },
            { 
                id: 'decisions', 
                name: "Decision-Making Habits", 
                desc: "Look at how you weigh choices, deal with risk, and handle second-guessing.",
                questions: [
                    {
                        text: "You've spent months on a project or book that is clearly not working out. What is your next move?",
                        options: [
                            "A. Keep pushing through just because you've already invested so much time into it.",
                            "B. Drop it instantly and feel a deep sense of failure for starting it.",
                            "C. Cut your losses objectively and redirect that energy toward something better."
                        ]
                    },
                    {
                        text: "You need to choose a simple product online, but there are 50 great options. What happens?",
                        options: [
                            "A. You spend hours reading every single review trying to find absolute perfection.",
                            "B. You pick a solid option quickly based on your top 2 priorities and move on.",
                            "C. You get overwhelmed, close the tab, and put off buying it for weeks."
                        ]
                    },
                    {
                        text: "You are faced with two major career or life paths with equal pros and cons. How do you decide?",
                        options: [
                            "A. You poll everyone you know, seeking someone else to make the choice for you.",
                            "B. You agonize for weeks, paralyzed by the fear of making the 'wrong' choice.",
                            "C. You pick one path decisively, knowing you can course-correct later if needed."
                        ]
                    },
                    {
                        text: "After making a major purchase or career choice, what does your mind do?",
                        options: [
                            "A. You keep looking at other options, wondering if you made a mistake (buyer's remorse loop).",
                            "B. You feel confident and commit fully to your choice.",
                            "C. You second-guess yourself every time a minor issue arises with your choice."
                        ]
                    },
                    {
                        text: "When a decision carries a small amount of financial or social risk, how do you handle it?",
                        options: [
                            "A. You avoid it entirely; the fear of failure outweighs any potential upside.",
                            "B. You take calculated risks after reviewing reasonable pros and cons.",
                            "C. You jump in impulsively without thinking, just to escape the anxiety of waiting."
                        ]
                    }
                ],
                conclusion: "Where you stand:\nYour responses show that making choices can sometimes feel heavy, stressful, or paralyzing. Whether you get stuck trying to find the absolute 'perfect' choice, worry endlessly about making a mistake, or hold on to projects long past their expiration date just because you've already put time into them, decision-making often drains your mental battery.\n\nSteps you can take to heal and grow:\n1. Practice 'good enough': Give yourself a time limit for decisions. Once you find an option that meets your main criteria, pull the trigger instead of hunting for perfection.\n2. Embrace course-correction: Remind yourself that very few life choices are permanent prison sentences. Most paths allow you to pivot, adjust, and learn as you go.\n3. Trust your inner voice: When asking friends for advice on a choice, check in with yourself first—are you looking for genuine guidance, or are you just trying to get someone else to take the blame if things go wrong?" 
            },
            { 
                id: 'habits', 
                name: "Daily Habits & Momentum", 
                desc: "Understand what keeps you consistent and what triggers burnout in your routines.",
                questions: [
                    {
                        text: "You miss two days of your new morning routine because life got busy. How do you handle day three?",
                        options: [
                            "A. 'Well, I broke the streak, so the whole routine is ruined now.'",
                            "B. You jump right back in as if nothing happened without beating yourself up.",
                            "C. You feel guilty and decide to completely redesign a much harder routine."
                        ]
                    },
                    {
                        text: "What usually makes you abandon a positive habit after a couple of weeks?",
                        options: [
                            "A. It stops feeling exciting or novel, and the friction of daily effort sets in.",
                            "B. You didn't structure your environment properly to support it automatically.",
                            "C. You set your goals way too high from the beginning and burned out."
                        ]
                    },
                    {
                        text: "When you want to start a new habit, how do you set it up?",
                        options: [
                            "A. You commit to doing it every single day for an hour right from the start.",
                            "B. You start tiny (e.g., 5 minutes a day) and focus on showing up consistently.",
                            "C. You buy a lot of gear or apps, but struggle to take consistent action."
                        ]
                    },
                    {
                        text: "You feel lazy or unmotivated on a given day. What is your internal dialogue?",
                        options: [
                            "A. 'I'm so undisciplined and lazy; I'll never reach my goals.'",
                            "B. 'I'm feeling low energy today. Let me just do a tiny 2-minute version of my habit.'",
                            "C. 'I'll just quit this goal entirely for a few months until I feel inspired.'"
                        ]
                    },
                    {
                        text: "How do you evaluate whether a habit routine is actually working for you?",
                        options: [
                            "A. By how many days in a row I can maintain an unbroken streak without fail.",
                            "B. By how sustainable and aligned it feels with my actual lifestyle and energy levels.",
                            "C. By whether other people notice and praise my new discipline."
                        ]
                    }
                ],
                conclusion: "Where you stand:\nWhen it comes to building habits and routines, you tend to swing between two extremes: setting intense, high-pressure goals and expecting perfection, or abandoning things entirely the moment life gets busy or you miss a day. This all-or-nothing cycle makes consistency feel like an exhausting uphill battle rather than a natural flow.\n\nSteps you can take to heal and grow:\n1. Embrace the 2-minute rule: On days when your energy is low, shrink your habit down to a micro-version that takes less than two minutes. Showing up keeps the momentum alive.\n2. Ditch the streak obsession: Remind yourself that consistency is about your overall average over time, not an unbroken calendar streak.\n3. Design your physical space: Stop relying purely on willpower. Make positive habits super easy to access in your environment, and put extra friction between yourself and distractions." 
            }
        ]
    },
    love: {
        title: "❤️ Love Lab",
        topics: [
            { 
                id: 'attachment', 
                name: "Relationships & Closeness", 
                desc: "Explore how you handle emotional closeness, personal space, and security in close bonds.",
                questions: [
                    {
                        text: "Your partner or close friend needs a quiet weekend alone without much contact. How does that sit with you?",
                        options: [
                            "A. It makes you deeply anxious; you worry they are pulling away or losing feelings.",
                            "B. It feels like a relief because you enjoy your own space and independence just as much.",
                            "C. You feel a bit annoyed or confused, wondering why they need space from you."
                        ]
                    },
                    {
                        text: "When someone gets very close to you emotionally, what is your subconscious gut reaction?",
                        options: [
                            "A. You crave even more closeness and worry it will never be enough.",
                            "B. You feel an urge to pull back or create distance so you don't feel trapped.",
                            "C. You feel comfortable sharing your inner world while letting them share theirs."
                        ]
                    },
                    {
                        text: "In a romantic relationship, how do you handle minor flaws or quirks in your partner?",
                        options: [
                            "A. You overlook them easily and accept that no one is perfect.",
                            "B. You fixate on them, wondering if they are a red flag or sign of incompatibility.",
                            "C. You try to subtly change or fix them so they match your ideal partner."
                        ]
                    },
                    {
                        text: "If a conflict arises and your partner goes quiet to cool down, how do you react?",
                        options: [
                            "A. You panic and pursue them relentlessly, demanding they talk right now.",
                            "B. You give them space, trusting that you can revisit the conversation when calm.",
                            "C. You match their silence with cold resentment and stonewall back."
                        ]
                    },
                    {
                        text: "What is your deep, underlying core fear when it comes to love and close relationships?",
                        options: [
                            "A. That I will be abandoned, rejected, or left behind.",
                            "B. That I will lose my freedom, be controlled, or suffocated.",
                            "C. That I am fundamentally unlovable underneath my achievements."
                        ]
                    }
                ],
                conclusion: "Where you stand:\nYour responses show that close relationships can sometimes feel emotionally charged—either making you worry deeply about being left behind and pulling away, or making you crave independence so intensely that deep closeness feels suffocating. You carry a protective blueprint around love, which is your heart's way of trying to make sure you don't get hurt.\n\nSteps you can take to heal and grow:\n1. Learn to self-soothe: When anxiety flares up in a relationship, take a breath before demanding reassurance. Practice comforting yourself internally first.\n2. Communicate your needs clearly: If you need space, state it kindly without disappearing; if you need reassurance, ask for it openly without playing games or getting angry.\n3. Recognize your pattern: Notice whether you tend to chase when things feel distant, or pull away when things get too close, and gently guide yourself back to a balanced middle ground." 
            },
            { 
                id: 'boundaries', 
                name: "Personal Boundaries", 
                desc: "Check how easily you protect your time, energy, and peace of mind.",
                questions: [
                    {
                        text: "A friend asks you for a major favor when you are already exhausted and overwhelmed. What do you say?",
                        options: [
                            "A. 'Sure, no problem!' even though you are crying inside from exhaustion.",
                            "B. 'I'd love to help, but my plate is completely full this week so I have to pass.'",
                            "C. You agree resentfully and then complain about it to other people later."
                        ]
                    },
                    {
                        text: "How do you feel after telling someone 'no' when they cross a line with you?",
                        options: [
                            "A. Overwhelmed with intense guilt, worrying that they hate you now.",
                            "B. Calm and grounded, knowing your peace is worth protecting.",
                            "C. Angry and defensive, ready for them to argue back with you."
                        ]
                    },
                    {
                        text: "Someone vents to you for an hour about drama without asking how you are doing. What do you do?",
                        options: [
                            "A. Listen patiently and swallow your own needs because you don't want to seem selfish.",
                            "B. Gently interrupt after a while and say, 'I care about this, but I'm low on energy today.'",
                            "C. Zone out, get resentful, and start looking at your phone."
                        ]
                    },
                    {
                        text: "How easy is it for you to share your true feelings when someone crosses your emotional boundaries?",
                        options: [
                            "A. Very difficult; I keep quiet until I explode from accumulated frustration.",
                            "B. Natural; I address small boundary slips early before they become massive issues.",
                            "C. I don't bother; I just quietly distance myself from them permanently."
                        ]
                    },
                    {
                        text: "When you set a boundary, what is your biggest internal worry?",
                        options: [
                            "A. That people will think I am selfish, mean, or uncaring.",
                            "B. That people will push through my boundary anyway, so what's the point?",
                            "C. That I will end up totally alone if I start saying no."
                        ]
                    }
                ],
                conclusion: "Where you stand:\nWhen it comes to setting limits, you often find yourself putting everyone else's comfort ahead of your own well-being. Because you may worry that saying 'no' makes you look selfish or will cause people to pull away, you tend to over-extend yourself until you feel drained or resentful. You take on an emotional sponge role for others while neglecting your own tank.\n\nSteps you can take to heal and grow:\n1. Reframe the word 'no': Remind yourself that every time you say 'no' to something draining, you are saying 'yes' to your mental health and authenticity.\n2. Drop the complex excuses: When declining a request, you do not need to invent an elaborate story. A polite, firm 'I won't be able to make that work right now' is completely enough.\n3. Catch resentment as an alarm bell: Resentment is your internal smoke detector telling you a boundary was crossed. Listen to it early before it builds into an explosion." 
            },
            { 
                id: 'conflict', 
                name: "Handling Disagreements", 
                desc: "Discover your automatic reactions when conversations turn into arguments.",
                questions: [
                    {
                        text: "An argument with someone close to you starts getting heated and emotional. What is your natural reflex?",
                        options: [
                            "A. Shutting down completely, going silent, or walking away to avoid the noise.",
                            "B. Apologizing immediately just to stop the fighting, even if you weren't wrong.",
                            "C. Staying engaged, keeping your voice steady, and trying to find a mutual solution."
                        ]
                    },
                    {
                        text: "During a disagreement, how do you handle winning or losing the argument?",
                        options: [
                            "A. You keep score of past mistakes to make sure you win the point.",
                            "B. You give in to keep the peace, letting your own feelings stay buried.",
                            "C. You focus on understanding their perspective rather than winning the argument."
                        ]
                    },
                    {
                        text: "When someone brings up a legitimate complaint about your behavior, how do you respond initially?",
                        options: [
                            "A. Instantly defensive: 'Well, what about when you did X, Y, and Z?'",
                            "B. Shame spiral: 'I'm a terrible person, I always ruin everything.'",
                            "C. Curious listening: 'I hear you. Tell me more about how that impacted you.'"
                        ]
                    },
                    {
                        text: "How do you feel about anger—either your own or someone else's?",
                        options: [
                            "A. Terrified of it; anger equals danger, screaming, or loss of love in my mind.",
                            "B. Comfortable with it; anger is just information about a boundary that needs attention.",
                            "C. Uncomfortable; I suppress my own anger and judge others when they express it."
                        ]
                    },
                    {
                        text: "After a major argument is resolved, how do you return to normalcy?",
                        options: [
                            "A. It takes me days to warm back up; I hold onto residual guardedness.",
                            "B. We repair quickly, hug or laugh, and fully return to warmth.",
                            "C. We pretend it never happened without ever actually talking about the root issue."
                        ]
                    }
                ],
                conclusion: "Where you stand:\nWhen disagreements heat up, your natural defense mechanisms kick in—whether that means shutting down and going silent, apologizing instantly just to make the tension stop, or putting up armor to defend yourself. Because you may have learned that intense feelings or arguments are unsafe, you often struggle to stay grounded and work through the issue together.\n\nSteps you can take to heal and grow:\n1. Shift the goal of arguments: Remind yourself during conflicts that the objective is 'Us versus the problem,' not 'Me versus you.'\n2. Call a regulated timeout: If you feel flooded or overwhelmed, communicate clearly: 'I'm feeling overwhelmed right now and need 20 minutes to calm down so we can talk productively.'\n3. Separate your actions from your worth: Practice receiving feedback without turning it into a story that you are a bad or broken person." 
            }
        ]
    },
    childhood: {
        title: "🌱 Childhood & Early Roots",
        topics: [
            { 
                id: 'conditioning', 
                name: "Early Roots & Inner Scripts", 
                desc: "Unearth the early beliefs you formed about your worth, safety, and perfection.",
                questions: [
                    {
                        text: "Growing up, how did you feel you had to act to receive praise, love, or approval?",
                        options: [
                            "A. You had to achieve high grades, be perfect, and never cause any trouble.",
                            "B. You had to manage everyone else's moods so the house stayed calm.",
                            "C. You felt loved and accepted just for being yourself, even when you made mistakes."
                        ]
                    },
                    {
                        text: "When you make a mistake today as an adult, what voice sounds loudest in your head?",
                        options: [
                            "A. A harsh, critical voice telling you that you are incompetent or careless.",
                            "B. A panicky voice telling you that people are going to be disappointed or leave you.",
                            "C. A kind, reassuring voice reminding you that mistakes are normal and how you learn."
                        ]
                    },
                    {
                        text: "In your childhood home, how were strong emotions like anger, sadness, or frustration handled?",
                        options: [
                            "A. They were punished, dismissed, or met with cold silence.",
                            "B. They caused chaos, yelling, or emotional explosions.",
                            "C. They were welcomed, talked about, and met with emotional support."
                        ]
                    },
                    {
                        text: "How do you feel when you take time to rest, relax, or do nothing productive?",
                        options: [
                            "A. Plagued by intense guilt; I feel like I have to be constantly earning my right to exist.",
                            "B. Comfortable; I know rest is a vital part of taking care of my well-being.",
                            "C. Restless; I distract myself with busywork because stillness makes me anxious."
                        ]
                    },
                    {
                        text: "What is your core belief about whether people will stick around when things get hard?",
                        options: [
                            "A. Deep down, I believe people will leave once they see my messy or difficult parts.",
                            "B. I trust that secure people can handle normal ups and downs together.",
                            "C. I expect people to let me down, so I keep my distance first."
                        ]
                    }
                ],
                conclusion: "Where you stand:\nYour responses show that you likely learned early in life that love, safety, or approval had to be earned—through high achievement, keeping the peace, or being effortless. Because of this early programming, you may still carry an inner critic that rides you hard, feel guilty when you try to rest, or worry that people will pull away if they see your messy, imperfect human side.\n\nSteps you can take to heal and grow:\n1. Practice inner self-compassion: Notice when your inner critic is being harsh, and consciously offer yourself the kindness you would give to a young child in your shoes.\n2. Rewrite your core script: Write down your old mental rule (e.g., 'I am only valuable when I am productive and helpful') and replace it with a liberating truth: 'My worth is inherent and does not need to be earned.'\n3. Unlearn productivity guilt: Treat rest and relaxation not as lazy luxuries you have to earn, but as essential maintenance for a healthy human mind." 
            }
        ]
    }
};

class AuditApp {
    constructor() {
        this.currentLab = null;
        this.currentTopic = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
    }

    switchView(viewId) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById(viewId).classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    selectLab(labKey) {
        this.currentLab = labKey;
        const lab = platformData[labKey];
        document.getElementById('lab-title').innerText = lab.title;
        
        const grid = document.getElementById('topics-grid');
        grid.innerHTML = '';
        
        lab.topics.forEach(topic => {
            const card = document.createElement('div');
            card.className = 'topic-card';
            card.innerHTML = `
                <div>
                    <h3>${topic.name}</h3>
                    <p>${topic.desc}</p>
                </div>
                <span class="topic-link">Explore Insights &rarr;</span>
            `;
            card.onclick = () => this.startQuiz(topic);
            grid.appendChild(card);
        });

        this.switchView('topics-view');
    }

    goHome() {
        this.switchView('home-view');
    }

    backToTopics() {
        this.selectLab(this.currentLab);
    }

    startQuiz(topic) {
        this.currentTopic = topic;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        document.getElementById('quiz-title').innerText = topic.name;
        this.renderQuestion();
        this.switchView('quiz-view');
    }

    renderQuestion() {
        const container = document.getElementById('question-container');
        const questions = this.currentTopic.questions;
        const q = questions[this.currentQuestionIndex];
        
        let html = `<h3>Question ${this.currentQuestionIndex + 1} of ${questions.length}</h3>`;
        html += `<p style="margin-bottom: 1.5rem; font-size: 1.1rem; color: var(--text-primary);">${q.text}</p>`;
        html += `<div class="options-list">`;
        
        q.options.forEach((opt, idx) => {
            html += `
                <label class="option-label">
                    <input type="radio" name="quiz-option" value="${idx}">
                    <span>${opt}</span>
                </label>
            `;
        });
        html += `</div>`;
        
        container.innerHTML = html;
        
        const nextBtn = document.getElementById('next-btn');
        if (this.currentQuestionIndex === questions.length - 1) {
            nextBtn.innerText = "View Insights & Conclusion";
        } else {
            nextBtn.innerText = "Next Question";
        }
    }

    handleNext() {
        const selected = document.querySelector('input[name="quiz-option"]:checked');
        if (!selected) {
            alert('Please select an option to proceed.');
            return;
        }

        const selectedIdx = parseInt(selected.value);
        this.userAnswers.push(selectedIdx);
        
        if (this.currentQuestionIndex === this.currentTopic.questions.length - 1) {
            this.showResults();
        } else {
            this.currentQuestionIndex++;
            this.renderQuestion();
        }
    }

    showResults() {
        document.getElementById('result-text').style.whiteSpace = "pre-line";
        document.getElementById('result-text').innerText = this.currentTopic.conclusion;
        this.switchView('result-view');
    }
}

// Instantiate the application
const app = new AuditApp();