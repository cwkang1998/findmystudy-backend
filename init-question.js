const mongoose = require("mongoose");
const config = require("./config");
mongoose.connect(config.DB_URL, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
mongoose.connection.on(
    "error",
    console.error.bind(console, "mongodb connection err:")
);
const models = require("./survey/models");
const Survey = models.Survey;

Survey.insertMany(
    [
        {
            no: 1,
            content: "I am able to adapt to new situation/environment quickly.",
            color: "gold"
        },
        {
            no: 2,
            content: "The maturity of my mind is older than actual age.",
            color: "green"
        },
        {
            no: 3,
            content: "I am very friendly with people.",
            color: "blue"
        },
        {
            no: 4,
            content: "I am in the category of 'clever'/'intelligent' group of people.",
            color: "orange"
        },
        {
            no: 5,
            content: "I am comfortable in maintaining a traditional life.",
            color: "gold"
        },
        {
            no: 6,
            content: "I like mental simulating subjects.",
            color: "green"
        },
        {
            no: 7,
            content: "I like to look differernt from other people.",
            color: "blue"
        },
        {
            no: 8,
            content: "I like to use my spare time doing fun outdoor activities.",
            color: "orange"
        },
        {
            no: 9,
            content: "I truly appreciate family togetherness and living.",
            color: "gold"
        },
        {
            no: 10,
            content: "I always read to increase my knowledge.",
            color: "green"
        },
        {
            no: 11,
            content: "I love to show my intrinsic nature and traits in every situation.",
            color: "blue"
        },
        {
            no: 12,
            content: "I like to socialize with everyone.",
            color: "orange"
        },
        {
            no: 13,
            content: "I do all task systematically.",
            color: "gold"
        },
        {
            no: 14,
            content: "I always consult my teachers about questions that boggle my mind.",
            color: "green"
        },
        {
            no: 15,
            content: "I often give guidance to other people when doing a task.",
            color: "blue"
        },
        {
            no: 16,
            content: "I am not intimidated by the challenge.",
            color: "green"
        },
        {
            no: 17,
            content: "I am comfortable in respecting higher authority.",
            color: "gold"
        },
        {
            no: 18,
            content: "Teachers are the people I respect the most.",
            color: "orange"
        },
        {
            no: 19,
            content: "I can easily interact with other people.",
            color: "blue"
        },
        {
            no: 20,
            content: "I love camping activities.",
            color: "orange"
        },
        {
            no: 21,
            content: "I have stable emotional state.",
            color: "gold"
        },
        {
            no: 22,
            content: "I am interested in exploring all fields.",
            color: "green"
        },
        {
            no: 23,
            content: "I am prone to choose a career in education.",
            color: "blue"
        },
        {
            no: 24,
            content: "Competition is good for me.",
            color: "orange"
        },
        {
            no: 25,
            content: "I always obey the rules no matter where I am.",
            color: "gold"
        },
        {
            no: 26,
            content: "I am a patient person.",
            color: "green"
        },
        {
            no: 27,
            content: "I am suitable for activities that involve helping people.",
            color: "blue"
        },
        {
            no: 28,
            content: "I like things that are in form of practical and theory.",
            color: "orange"
        },
        {
            no: 29,
            content: "I appreciate time.",
            color: "gold"
        },
        {
            no: 30,
            content: "I like to analyze myself and other people.",
            color: "green"
        },
        {
            no: 31,
            content: "I like to do work that is art based.",
            color: "blue"
        },
        {
            no: 32,
            content: "I like to create a cheerful scenario in a tense situation.",
            color: "orange"
        },
        {
            no: 33,
            content: "I would work hard for the importance of the organization.",
            color: "gold"
        },
        {
            no: 34,
            content: "I would be satisfied after completing a task successfully.",
            color: "green"
        },
        {
            no: 35,
            content: "I have the ability to understand people's feelings.",
            color: "blue"
        },
        {
            no: 36,
            content: "I always give a spontaneous reaction in every action I take.",
            color: "orange"
        },
        {
            no: 37,
            content: "I am more comfortable in obeying fixed rules and regulations.",
            color: "gold"
        },
        {
            no: 38,
            content: "I like to discuss philosophies of different issues or topics.",
            color: "green"
        },
        {
            no: 39,
            content: "I have the traits of a caregiver/nanny.",
            color: "blue"
        },
        {
            no: 40,
            content: "I like to do something that is unusual and challenging.",
            color: "orange"
        },
        {
            no: 41,
            content: "I will spend my money widely and have some savings too.",
            color: "gold"
        },
        {
            no: 42,
            content: "I always ask for an explanation to a question.",
            color: "green"
        },
        {
            no: 43,
            content: "I believe everyone has self worth.",
            color: "blue"
        },
        {
            no: 44,
            content: "I like dangerous but fun activities.",
            color: "orange"
        },
        {
            no: 45,
            content: "I don't like to dress untidily.",
            color: "gold"
        },
        {
            no: 46,
            content: "I like activities which require research.",
            color: "green"
        },
        {
            no: 47,
            content: "I would be more motivated if guidance are given.",
            color: "blue"
        },
        {
            no: 48,
            content: "I am a funny and hilarious person.",
            color: "orange"
        },
        {
            no: 49,
            content: "I am often concrete about things.",
            color: "gold"
        },
        {
            no: 50,
            content: "I love to debate/discuss about a theory.",
            color: "green"
        },
        {
            no: 51,
            content: "I do not like activities that involve competition.",
            color: "blue"
        },
        {
            no: 52,
            content: "I do not like studying material that has a lot of reading involved.",
            color: "orange"
        },
        {
            no: 53,
            content: "I am a responsible person.",
            color: "gold"
        },
        {
            no: 54,
            content: "I have principals in life that I am clear about and stand by.",
            color: "green"
        },
        {
            no: 55,
            content: "I want to get compliments and acknowledgement on everything that I have successfully achieved.",
            color: "blue"
        },
        {
            no: 56,
            content: "I like rough and tough co-curriculum activities.",
            color: "orange"
        },
        {
            no: 57,
            content: "I have parental instincts.",
            color: "gold"
        },
        {
            no: 58,
            content: "I am bound to create something new.",
            color: "green"
        },
        {
            no: 59,
            content: "An argumentative situation would disturb my emotional state.",
            color: "blue"
        },
        {
            no: 60,
            content: "I get bored of rigid work.",
            color: "orange"
        },
        {
            no: 61,
            content: "I place to importance in harmony.",
            color: "gold"
        },
        {
            no: 62,
            content: "I can carry out a task perfectly.",
            color: "green"
        },
        {
            no: 63,
            content: "I am a good listener.",
            color: "blue"
        },
        {
            no: 64,
            content: "I will get bored of rigid work.",
            color: "orange"
        },
        {
            no: 65,
            content: "I am trustworthy.",
            color: "gold"
        },
        {
            no: 66,
            content: "I have a high curiosity towards anything.",
            color: "green"
        },
        {
            no: 67,
            content: "I will easily give my love to people.",
            color: "blue"
        },
        {
            no: 68,
            content: "I am bored of routine work.",
            color: "orange"
        },
        {
            no: 69,
            content: "I am always ready to do any tasks.",
            color: "gold"
        },
        {
            no: 70,
            content: "I am a tensed person.",
            color: "green"
        },
        {
            no: 71,
            content: "Now and then I become sensitive when people talk about me.",
            color: "blue"
        },
        {
            no: 72,
            content: "I will satisfy with works that give me freedom.",
            color: "orange"
        },
        {
            no: 73,
            content: "I am always able to to differentiate between good and bad.",
            color: "gold"
        },
        {
            no: 74,
            content: "I am interested in mind challenging competitions.",
            color: "green"
        },
        {
            no: 75,
            content: "I dislike stories that revolve around violence.",
            color: "blue"
        },
        {
            no: 76,
            content: "I am satisfied with works that involve physical coordination.",
            color: "orange"
        },
        {
            no: 77,
            content: "I am satisfied if I am able to help someone in need.",
            color: "gold"
        },
        {
            no: 78,
            content: "For me, work is fun.",
            color: "green"
        },
        {
            no: 79,
            content: "I will easily feel guilty when I do not obey my parent's advice.",
            color: "blue"
        },
        {
            no: 80,
            content: "I am satisfied with job that uses machinery/tools/gadgets.",
            color: "orange"
        },
        {
            no: 81,
            content: "I always ensure stability in the work environment.",
            color: "gold"
        },
        {
            no: 82,
            content: "I am a person who loves challenging work/task.",
            color: "green"
        },
        {
            no: 83,
            content: "I easily forgive other people's wrong doings.",
            color: "blue"
        },
        {
            no: 84,
            content: "I am a natural performer.",
            color: "orange"
        },
        {
            no: 85,
            content: "I am very detailed when doing a task.",
            color: "gold"
        },
        {
            no: 86,
            content: "I like to design/create a model.",
            color: "green"
        },
        {
            no: 87,
            content: "I will easily sympathize with people even though I know they were wrong.",
            color: "blue"
        },
        {
            no: 88,
            content: "I do not like to be trapped.",
            color: "orange"
        },
        {
            no: 89,
            content: "I always behave practical in making my decisions.",
            color: "gold"
        },
        {
            no: 90,
            content: "I love to explore new ideas.",
            color: "green"
        },
        {
            no: 91,
            content: "I like to copy other people's style.",
            color: "blue"
        },
        {
            no: 92,
            content: "I do not like rules.",
            color: "orange"
        },
        {
            no: 93,
            content: "I am able to do a task that involves specification.",
            color: "gold"
        },
        {
            no: 94,
            content: "I am interested in joining educational based activities.",
            color: "green"
        },
        {
            no: 95,
            content: "My school years were boring because I had to follow rules and regulations.",
            color: "blue"
        },
        {
            no: 96,
            content: "A job without a schedule interests me.",
            color: "orange"
        },
        {
            no: 97,
            content: "I am skilled in arrangement of the workplace.",
            color: "gold"
        },
        {
            no: 98,
            content: "Once finishing an old task, I will start a new one.",
            color: "green"
        },
        {
            no: 99,
            content: "I like to dream about the future.",
            color: "blue"
        },
        {
            no: 100,
            content: "I like to do work which is stress free.",
            color: "orange"
        }
    ],
    (err) => {
        if (err) {
            console.log(err);
        }
        mongoose.disconnect()
        process.exit(0);
    }
);