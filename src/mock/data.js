import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Akshay | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Akshay',
  subtitle: "I'm a Devloper",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "I'am Akshay Turkar a Student/Devloper/Coder. A creative, imaginative full stack devloper with sound skills.Passionate about new technologies and stuff.",
  paragraphTwo: "I'am from India(Bhopal). From the city of Lakes And Begums.",
  paragraphThree: "I am a engineering under grad from Sagar Institute of Science and Technology.",
  resume: 'https://1drv.ms/w/s!AhtnmwAl6ksyhBMchVNFzBS3yoHe', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project4.png',
    title: 'Cook-D-Book',
    info: 'This website can be use for buying selling used and refurbished books. This is an user based website where a user can be a buyer and as well as a seller just like olx.',
    info2: 'Our website is mainly focuses on trading of books amongst the users.',
    url: 'https://cook-d-book.000webhostapp.com/',
    repo: 'https://github.com/akshay-turkar/Cook-d-Book', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Robofriends',
    info: 'Robofriends is a simple single page developed using React and npm and with diffrent packages.',
    info2: 'Easy seamless page with JSON parsing and API integration.',
    url: 'https://akshay-turkar.github.io/robofriends/',
    repo: 'https://github.com/akshay-turkar/robofriends', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Lifestyle-Store',
    info: 'Lifestyle sotre i an e-Commerce website for shirts, cameras and watches. this website is enabled with responsive UI, User autentications and validations, Database to store users data and Security. Some of the founctionalities are Signup, login, add to cart, settings etc.',
    info2: 'Easy to use website with good UX. Shop online be safe.',
    url: 'https://github.com/akshay-turkar/Lifestylestore',
    repo: 'https://github.com/akshay-turkar/Lifestylestore', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project5.png',
    title: 'COLOUR JENGA',
    info: 'Colour Jenga is a game where you have to fill the colurs and each colour have specific points for each block. and the more colours you can extrat the more points will get, and if you select the cross block the game gets over. ',
    info2: 'This game is devloped using HTML, CSS and JavaScript',
    url: 'https://akshay-turkar.github.io/colour-jenga/',
    repo: 'https://github.com/akshay-turkar/colour-jenga', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Gradient Generator',
    info: 'This is a Background generator page. Developed using HTML,CSS,Java Script. Developers face difficulty while selecting the colors or gradient this project help them to select the colors and see the bigger picture of selected gradient for easy selection. ',
    info2: 'Easy to generate gradient background, Beautiful gradients are on your way.',
    url: 'https://akshay-turkar.github.io/background-generator/',
    repo: 'https://github.com/akshay-turkar/background-generator', // if no repo, the button will not show up
  },
  
  
  
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'turkarakshay186@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Ak29491313?s=08',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/akshay-turkar',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/akshay-turkar-88a145198/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/akshay-turkar',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
