import images from "../assets/";

const navLinks: Array<{ id: string; title: string }> = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const infoLinks: { github: string; linkedin: string } = {
  github: "https://github.com/kerrydachow",
  linkedin: "https://www.linkedin.com/in/kerrykchow/",
};

const skills: Array<{ skill: string; icon: string }> = [
  {
    skill: "React JS",
    icon: "reactjs",
  },
  {
    skill: "Python",
    icon: "python",
  },
  {
    skill: "Java",
    icon: "java",
  },
  {
    skill: "TypeScript",
    icon: "typescript",
  },
  {
    skill: "JavaScript",
    icon: "javascript",
  },
  {
    skill: "Docker",
    icon: "docker",
  },
  {
    skill: "SQL",
    icon: "sql",
  },
  {
    skill: "Node.js",
    icon: "nodejs",
  },
  {
    skill: "Express.js",
    icon: "expressjs",
  },
  {
    skill: "MongoDB",
    icon: "mongodb",
  },
  {
    skill: "AWS",
    icon: "aws",
  },
];

const expertise: Array<{
  title: string;
  description: string;
  icons: Array<{ name: string; icon: string }>;
}> = [
  {
    title: "Software Development",
    description: "Experience in both functional programming and OOP.",
    icons: [
      { name: "Java", icon: images.java },
      { name: "Python", icon: images.python },
      { name: "C", icon: images.c },
      { name: "SQL", icon: images.sql },
    ],
  },
  {
    title: "Cloud/DevOps Engineer",
    description: "Experience with AWS, building CI/CD pipelines, and Docker.",
    icons: [
      { name: "AWS", icon: images.aws },
      { name: "Docker", icon: images.docker },
      { name: "Linux", icon: images.linux },
    ],
  },
  {
    title: "Full Stack Engineer",
    description:
      "Experience in developing web applications from start to finish.",
    icons: [
      { name: "JavaScript", icon: images.javascript },
      { name: "TypeScript", icon: images.typescript },
      { name: "React", icon: images.react },
      { name: "MongoDB", icon: images.mongodb },
    ],
  },
];

const experiences: Array<{
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: Array<string>;
}> = [
  {
    title: "Software Developer",
    company_name: "PaymentSource",
    icon: images.paymentsource,
    iconBg: "#383E56",
    date: "Apr 2022 - May 2022",
    points: [
      "Engineered a web application that seamlessly transforms existing JSON data within the database into an editable web form and subsequently persisted the modified data back to the database",
      "Attained 100% consistency in data modification without unintended side-effects",
      "Conducted unit tests on code, and documented the process to enhance integration with legacy software",
      "Technologies: ASP.NET, Visual Basic, JavaScript, HTML, CSS, GitHub, AWS DynamoDB, jQuery, Bootstrap 4",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "MyLivingCity",
    icon: images.mlc,
    iconBg: "#383E56",
    date: "Sep 2022 - Dec 2022",
    points: [
      "Implemented moderation features for user and post management",
      "Reduced API costs by 94.4% by identifying the cause and implementing caching",
      "Reduced moderation dashboard page load time by 3 seconds through optimizing data filtration",
      "Reviewed, documented, and automated testing for newly implemented features",
      "TypeScript, PostgreSQL, ReactJS, Node.js, Prisma, Bootstrap, GitHub, AWS Amplify",
    ],
  },
];

const projects: Array<{
  title: string;
  description: string;
  longDescription: string;
  link: string;
  techStack: Array<{ name: string; color: string }>;
  updated: string;
  images: Array<{ src: string, alt: string }>;
}> = [
  {
    title: "Social Media Application",
    description: "Social Media Application built with the MERN stack.",
    longDescription:
      "This project is a simple Social Media application with user posts, post interactions, and user interactions. This project uses the MERN stack along with Redux and Material UI. Link: socialio-z0in.onrender.com",
    link: "https://github.com/kerrydachow/social-media-mern",
    techStack: [
      {
        name: "MongoDB",
        color: "#4DB33D",
      },
      {
        name: "Express.js",
        color: "#F0DB4F",
      },
      {
        name: "ReactJS",
        color: "#61DBFB",
      },
      {
        name: "Node.js",
        color: "#68A053",
      },
    ],
    updated: "...",
    images: [
      {
        src: images.socialio1,
        alt: "socialio1"
      },
    ],
  },
  {
    title: "AWS E-commerce Platform",
    description: "E-commerce web application built with AWS.",
    longDescription:
      "This project entails the development of a fully serverless e-commerce platform leveraging AWS microservices.\
      With an emphasis on scalability and efficiency, the system optimally handles user requests and data storage.\n\
      Pair programming was utilized to increase productivity as the project has a start-finish timeline of 2 weeks.",
    link: "https://github.com/kerrydachow/aws_serverless_ecommerce",
    techStack: [
      {
        name: "AWS",
        color: "#FF9900",
      },
      {
        name: "ReactJS",
        color: "#61DBFB",
      },
      {
        name: "MySQL",
        color: "#f29111",
      },
    ],
    updated: "...",
    images: [
      {
        src: images.sss1,
        alt: "sss1"
      },
      {
        src: images.sss2,
        alt: "sss2"
      },
      {
        src: images.sss3,
        alt: "sss3"
      },
      {
        src: images.sss4,
        alt: "sss4"
      },
    ],
  },
];

export { navLinks, infoLinks, skills, expertise, experiences, projects };
