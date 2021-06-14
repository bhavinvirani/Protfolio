
// Summary And Greeting Section
import emoji from "react-easy-emoji";


const greeting = {
    username: "Bhavin Virani",
    greetingText: "Hi all, I'm ",
    greetingName: "Bhavin",
    subTitle: emoji(
        "A passionate Full Stack Software Developer 🚀 having an experience of designing and "
    ),
    resumeLink:
        "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/bhavinvirani",
    linkedin: "https://www.linkedin.com/in/bhavin-virani-2a14441b7/",
    dev: "https://dev.to/bhavinvirani",
    gmail: "bhavinvirani45@gmail.com",
    twitter: 'https://twitter.com/BhavinVirani45',
    discord: 'https://discordapp.com/705788162516975667',
    // medium: "https://medium.com/@bhavinvirani45",
    // stackoverflow: "https://stackoverflow.com/users/14687344/bhavin-virani",
    // instagram: 'https://www.instagram.com/bhavinn_45',
    // gitlab: "https://gitlab.com/",
};

// Skills Section

const skillsSection = {
    title: "What I do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji(
            "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
        ),
        emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
        emoji(
            "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
        )
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

    softwareSkills: [

        {
            skillName: "html-5",
            fontAwesomeClassname: "fab fa-html5",
            id: "html-5"
        },
        {
            skillName: "css3",
            fontAwesomeClassname: "fab fa-css3-alt",
            id: "css3"
        },
        {
            skillName: "javascript",
            fontAwesomeClassname: "fab fa-js",
            id: "js"
        },
        {
            skillName: "reactjs",
            fontAwesomeClassname: "fab fa-react",
            id: "reactjs"
        },
        {
            skillName: "nodejs",
            fontAwesomeClassname: "fab fa-node",
            id: "nodejs"
        },
        {
            skillName: "npm",
            fontAwesomeClassname: "fab fa-npm",
            id: "npm"
        },
        {
            skillName: "sql-database",
            fontAwesomeClassname: "fas fa-database",
            id: "sql"
        },
        {
            skillName: "mongoDb",
            fontAwesomeClassname: "fas fa-leaf",
            id: "mongodb"
        },
        {
            skillName: "python",
            fontAwesomeClassname: "fab fa-python",
            id: "python"
        },
        {
            skillName: "git",
            fontAwesomeClassname: "fab fa-git",
            id: "git"
        }
    ],
};

// Education Section


// Your top 3 proficient stacks/tech experience
const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [
        {
            Stack: "Backend",
            progressPercentage: "85%"
        },
        {
            Stack: "Programming",
            progressPercentage: "90%"
        },
        {
            Stack: "Frontend / Design", //Insert stack or technology you have experience in
            progressPercentage: "70%" //Insert relative proficiency in percentage
        },

    ],
    displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const certifications = {
    certifications: [
        {
            title: "Fullstack Web Development Bootcamp",
            subtitle: "- Dr. Angela Yu",
            logo_path: "udemy.png",
            certificate_link:
                "https://www.udemy.com/certificate/UC-c697cc98-4792-44b9-a816-95880238769e/",
            alt_name: "udemy",
            color_code: "#F6EAEA",
        },
        {
            title: "SQL for Data Science",
            subtitle: "- courses",
            logo_path: "coursera.png",
            certificate_link:
                "https://www.coursera.org/account/accomplishments/verify/YHZVLK4CE789",
            alt_name: "coursera",
            color_code: "#F0FFDD",
        },
        {
            title: "Data Modeling",
            subtitle: "- MongoDB",
            logo_path: "mongodb.png",
            certificate_link:
                "https://university.mongodb.com/courses/M320/2021_May_25/completion",
            alt_name: "MongoDB University",
            color_code: "#FEF6E6",
        },
        {
            title: "MongoDB for JavaScript Developers",
            subtitle: "- MongoDB",
            logo_path: "mongodb.png",
            certificate_link:
                "https://university.mongodb.com/courses/M220JS/2021_May_25/completion",
            alt_name: "MongoDB University",
            color_code: "#FDE9EA",
        }
    ],
};



/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
    githubUserName: "bhavinvirani", // Change to your github username to view your profile in Contact Section.
    showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
    display: true // Set false to hide this section, defaults to true
};






const blogSection = {
    title: "Blogs",
    subtitle:
        "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

    blogs: [
        {
            url:
                "https://dev.to/bhavinvirani/2d-vector-in-c-23gh",
            title: "2D Vector in C++",
            description:
                "We can define 2D Vector as Vector of Vector followed by N number of rows where each of the row is individual a vector..."
        },
        {
            url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
            title: "Why REACT is The Best?",
            description:
                "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
        }
    ],
    display: true // Set false to hide this section, defaults to true
};


const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle:
        "Discuss a project or just want to say hi? My Inbox is open for all.",
    email_address: "bhavinvirani45@gmail.com"
};


export {
    greeting,
    socialMediaLinks,
    skillsSection,
    techStack,
    openSource,
    blogSection,
    contactInfo,
    certifications
};