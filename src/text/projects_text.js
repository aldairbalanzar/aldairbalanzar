import d8Picker_img from '../media/d8Picker_screenshot.png'
import signtific_img from '../media/signtific_screenshot.png'
import pokemon_img from '../media/pokemon_screenshot.png'
import international_img from '../media/international_screenshot.png'

const projects = [
    {
        id: 1,
        name: 'D8Picker',
        description: 'I contributed to D8Picker\'s back-end and front-end development where I implemented CRUD functionality, adjusted our database schema for more customization to our application, and tested endpoints for our test cases',
        img: d8Picker_img,
        technologies: ['Google API', 'OAuth', 'Styled Components', 'NodeJS', 'PostgreSQL', 'Supertest'],
        website_url: 'https://www.d8picker.com/',
        github_repo: ['https://github.com/aldairbalanzar/school-calendar-fe', 'https://github.com/aldairbalanzar/school-calendar-be']
    },
    {
        id: 2,
        name: 'SIGNtific',
        description: 'SIGNtific is what inspired me to pursue a career in web development. The application is a basic demo that provides a user with the American Sign Language sign of the image they click on. Videos were a collaborative effort with Mrs. Gini.',
        img: signtific_img,
        technologies: ['Vanilla Javascript', 'Bootstrap', 'MAGIX Vegas Pro 15'],
        website_url: 'https://signtific.github.io/',
        github_repo: ['https://github.com/SIGNtific/signtific.github.io']
    },
    {
        id: 3,
        name: 'Pokédex',
        description: 'This Pokémon application is a basic web app that provides a user with pokémon data from across all generations. This application also uses two APIs, one for overall data and a second one to retrieve the official artwork image.',
        img: pokemon_img,
        technologies: ['Context API', 'SASS', 'React Modal', 'React Toastify'],
        website_url: 'https://pokemon-context-api.now.sh/',
        github_repo: ['https://github.com/aldairbalanzar/pokemon-context-api']
    },
    {
        id: 4,
        name: 'School Social Worker',
        description: 'This project is a basic static marketing page for an application in which a user can store basic student information and access it as they require it.',
        img: international_img,
        technologies: ['Semantic HTML', 'LESS', 'FontAwesome'],
        website_url: 'https://internationalschoolsocialworer.netlify.app/',
        github_repo: ['https://github.com/build-international-school/User-Interface']
    }
];

export default projects