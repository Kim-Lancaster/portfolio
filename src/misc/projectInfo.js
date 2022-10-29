import myKeeper from '../media/mykeeper-thumbnail.png';
import ticTacToe from '../media/tictactoe-thumbnail.png';
import dinner from '../media/whats-for-dinner-thumbnail.png';
import cupcake from '../media/cupcake-thumbnail.png';

const myProjects = [
    {
        projectTitle: "My Keeper",
        image: myKeeper,
        alt: "my keeper thumbnail",
        githubLink: "#home",
        liveLink: "#home",
        text: "This is my latest project.  It is super awesome because everything I touch is gold.  Honestly, I don't know why you haven't hired me yet.  I'm fighting companies off with a stick I'm so sought after.  Like Helen of Tory for the software engineering world.  Probably going to be a huge war just to have me. The Gods wept when I was born.",
        icons: [
            {
                icon: "devicon-sass-original",
                iconName: "SASS"
            },
            {
                icon: "devicon-react-original",
                iconName: "REACT"
            }
        ],
    },
    {
        projectTitle: "Tic Tac Toe",
        image: ticTacToe,
        alt: "Tic tac toe game" ,
        githubLink: "#home",
        liveLink: "#home",
        text: "This is an absolute treasure of a game.  Built with state of the art vanilla JavaScript.  Using the very best of Node.js backend.  If you like your databases nosql we have got great news for you.  This ingenious game sports a MongoDB database to keep all your high scores when you've pownd your friends.",
        icons: [     {
            icon: "devicon-html5-plain",
            iconName: "HTML5"
            },
            {
                icon: "devicon-sass-original",
                iconName: "SASS"
            },
            {
                icon: "devicon-javascript-plain",
                iconName: "JAVASCRIPT"
            },
            {
                icon: "devicon-nodejs-plain",
                iconName: "NODE.JS"
            },
            {
                icon: "devicon-express-original",
                iconName: "Express"
            },
            {
                icon: "devicon-mongodb-plain",
                iconName: "MongoDB"
            }],
    },
    {
        projectTitle: "Random Meal Decider",
        image: dinner,
        alt: "Random meal thumbnail",
        githubLink: "#home",
        liveLink: "#home",
        text: "I built this arbitrary piece of software with JQuery.  Nobody told me that JQuery was a dying library... understandable because React is way better.  But, I spent time and tears on it so I'm keeping this ",
        icons: [
            {
            icon: "devicon-html5-plain",
            iconName: "HTML5"
            },
            {
                icon: "devicon-sass-original",
                iconName: "SASS"
            },
            {
                icon: "devicon-javascript-plain",
                iconName: "JAVASCRIPT"
            },
            {
                icon: "devicon-jquery-plain",
                iconName: "JQUERY"
            }
        ],
    },
    {
        projectTitle: "Eleanor's Cupcakes Website",
        image: cupcake,
        alt: "Eleanor's cupcake thumbnail" ,
        githubLink: "#home",
        liveLink: "#home",
        text: "My first website created from scratch.  Utilizes HTML, CSS and Javascript.  It has responsive design.",
        icons: [
            {
                icon: "devicon-html5-plain",
                iconName: "HTML5"
            },
            {
                icon: "devicon-css3-plain",
                iconName: "CSS3"
            },
            {
                icon: "devicon-javascript-plain",
                iconName: "JAVASCRIPT"
            }
        ],
    }
]

export default myProjects;