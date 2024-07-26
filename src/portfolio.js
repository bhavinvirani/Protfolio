// Summary And Greeting Section
import emoji from "react-easy-emoji";

const greeting = {
  username: "Bhavin Virani",
  greetingText: "Hi all, I'm ",
  greetingName: "Bhavin",
  subTitle: emoji(" IT Student 👨‍💻 || Tech Writer ✍️ "),
  resumeLink:
    "https://drive.google.com/file/d/1Dry_N32vEzUVklFVv2iIISzhJJqWgcta/view?usp=share_link",
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bhavinvirani",
  linkedin: "https://www.linkedin.com/in/bhavin-virani-2a14441b7/",
  dev: "https://dev.to/bhavinvirani",
  gmail: "bhavinvirani45@gmail.com",
  twitter: "https://twitter.com/BhavinVirani45",
  discord: "https://discordapp.com/705788162516975667",
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY GEEK WHO WANTS TO EXPLORE SOMETHING NEW EVERYDAY.",
  skills: [
    emoji("⚡  Problem solving"),
    emoji(
      "⚡  Integration of third party services such as  OAuth 2.0 / Bootstrap "
    ),
    emoji("⚡ Interested in Blockchain technology and backend development "),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
      id: "html-5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
      id: "css3",
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js",
      id: "js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
      id: "reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
      id: "nodejs",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
      id: "npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
      id: "sql",
    },
    {
      skillName: "mongoDb",
      fontAwesomeClassname: "fas fa-leaf",
      id: "mongodb",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
      id: "python",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git",
      id: "git",
    },
  ],
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
    },
  ],
};


const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "bhavinvirani", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt",
  blogs: [
    {
      url: "https://dev.to/bhavinvirani/getting-started-with-git-1jlj",
      title: "Getting Started with 'Git'",
      description:
        "Git is a version control system (VCS) that makes easier to track changes to files(code). For example, when you edit a file, git can help you to determine...",
    },
    {
      url: "https://dev.to/bhavinvirani/2d-vector-in-c-23gh",
      title: " about Mongoose",
      description:
        "MnongoDB provides it's native driver to work with our project at server side but it may be large amount of code or repetition in code but...",
    },
    {
      url: "https://dev.to/bhavinvirani/vector-in-c-4550",
      title: "Vector in C++",
      description:
        "Vectors in C++ are sequence containers representing arrays that can change their size during runtime. They use contiguous storage locations for their elements...",
    },
    {
      url: "https://dev.to/bhavinvirani/2d-vector-in-c-23gh",
      title: "2D Vector in C++",
      description:
        "We can define 2D Vector as Vector of Vector followed by N number of rows where each of the row is individual a vector...",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all",
  email_address: "bhavinvirani45@gmail.com",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  openSource,
  blogSection,
  contactInfo,
  certifications,
};
