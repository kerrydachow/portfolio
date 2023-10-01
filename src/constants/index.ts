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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const infoLinks: { github: string; linkedin: string; resume: string } = {
  github: "https://github.com/kerrydachow",
  linkedin: "https://www.linkedin.com/in/kerrykchow/",
  resume:
    "https://drive.google.com/file/d/1iDyzwyB_2zbvuizaruEc691vorZMTn5u/view?usp=sharing",
};

const expertise: Array<{
  title: string;
  description: string;
  icons: Array<{ name: string; icon: string }>;
}> = [
  {
    title: "Software Development",
    description:
      "Experience in both procedural and object-oriented programming.",
    icons: [
      { name: "Java", icon: images.java },
      { name: "Python", icon: images.python },
      { name: "C++", icon: images.cpp },
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
      { name: "Linux Terminal", icon: images.linux },
    ],
  },
  {
    title: "Full Stack Engineer",
    description:
      "Experience in developing web applications from start to finish.",
    icons: [
      { name: "JavaScript", icon: images.javascript },
      { name: "TypeScript", icon: images.typescript },
      { name: "Node.js", icon: images.nodejs },
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
      "Championed a UI overhaul prioritizing non-technical users, resulting in a 95% satisfaction rate and a decrease in XML/JSON editing errors by end-users",
      "Introduced intuitive error messages based on user inputs, reducing user support requests by 75%",
      "Spearheaded the development of a full-stack web application using ASP.NET and AWS DynamoDB",
      "Technologies: ASP.NET, Visual Basic, JavaScript, AWS DynamoDB, jQuery, Bootstrap 4",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "MyLivingCity",
    icon: images.mlc,
    iconBg: "#383E56",
    date: "Sep 2022 - Dec 2022",
    points: [
      "Reduced API costs by 94.4% by identifying the cause and implementing caching",
      "Reduced moderation dashboard page load time by 3 seconds through optimizing data filtration",
      "Designed REST APIs using Prisma and Express.js for seamless interaction with a PostgreSQL database",
      "Reviewed, documented, and automated testing for newly implemented features",
      "Technologies: TypeScript, PostgreSQL, ReactJS, Node.js, Prisma, Bootstrap, GitHub, AWS Amplify",
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
  images: Array<{ src: string; alt: string }>;
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
        alt: "socialio1",
      },
      {
        src: images.socialio2,
        alt: "socialio2",
      },
      {
        src: images.socialio3,
        alt: "socialio3",
      },
      {
        src: images.socialio4,
        alt: "socialio4",
      },
      {
        src: images.socialio5,
        alt: "socialio5",
      },
      {
        src: images.socialio6,
        alt: "socialio6",
      },
      {
        src: images.socialio7,
        alt: "socialio7",
      },
      {
        src: images.socialio8,
        alt: "socialio8",
      },
      {
        src: images.socialio9,
        alt: "socialio9",
      },
      {
        src: images.socialio10,
        alt: "socialio10",
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
      {
        name: "Node.js",
        color: "#68A053",
      },
    ],
    updated: "...",
    images: [
      {
        src: images.sss1,
        alt: "sss1",
      },
      {
        src: images.sss2,
        alt: "sss2",
      },
      {
        src: images.sss3,
        alt: "sss3",
      },
      {
        src: images.sss4,
        alt: "sss4",
      },
    ],
  },
  {
    title: "LeetCode Submission Scraper Discord Bot",
    description:
      "Automate the task of checking friends' daily LeetCode submissions.",
    longDescription:
      "Webscraper Discord Bot to automate and centralize the task of checking my friends' daily LeetCode submissions.",
    link: "https://github.com/kerrydachow/leetcode-activity-scraper-discord-bot",
    techStack: [
      {
        name: "Python",
        color: "#4B8BBE",
      },
    ],
    updated: "...",
    images: [
      {
        src: images.lcs1,
        alt: "leetcode-scraper-1",
      },
      {
        src: images.lcs2,
        alt: "leetcode-scraper-2",
      },
      {
        src: images.lcs3,
        alt: "leetcode-scraper-3",
      },
      {
        src: images.lcs4,
        alt: "leetcode-scraper-4",
      },
    ],
  },
  {
    title: "Text-Based Adventure Game",
    description: "Text-Based Adventure Game developed and tested in Python.",
    longDescription:
      "Text-Based Adventure that includes combat, 25x25 grid, level system, monsters, and a final boss.",
    link: "https://github.com/kerrydachow/text-based-adv",
    techStack: [
      {
        name: "Python",
        color: "#4B8BBE",
      },
    ],
    updated: "...",
    images: [
      {
        src: images.ptb1,
        alt: "text-based-adv-1",
      },
      {
        src: images.ptb2,
        alt: "text-based-adv-2",
      },
      {
        src: images.ptb3,
        alt: "text-based-adv-3",
      },
      {
        src: images.ptb4,
        alt: "text-based-adv-4",
      },
      {
        src: images.ptb5,
        alt: "text-based-adv-5",
      },
      {
        src: images.ptb6,
        alt: "text-based-adv-6",
      },
      {
        src: images.ptb7,
        alt: "text-based-adv-7",
      },
    ],
  },
];

export { navLinks, infoLinks, expertise, experiences, projects };
