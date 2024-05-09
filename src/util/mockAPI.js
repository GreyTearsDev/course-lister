import createCourse from "./createCourse";
import createWeeklyContentInfo from "./createWeeklyContentInfo"


const syllabi = {
courseAccessibleHTML: [
    createWeeklyContentInfo(1, "Introduction to Web Accessibility", "Understanding the importance of web accessibility and its impact on users"),
    createWeeklyContentInfo(2, "Accessible HTML Elements", "Learning how to use semantic HTML elements for better accessibility"),
    createWeeklyContentInfo(3, "ARIA Landmarks and Roles", "Exploring ARIA landmarks and roles to improve accessibility for screen readers"),
  ],
  courseIntroToHTML: [
    createWeeklyContentInfo(1, "HTML Basics", "Learning the basic structure of HTML and how to create a simple webpage"),
    createWeeklyContentInfo(2, "Semantic HTML", "Understanding the use of semantic tags to improve website structure and accessibility"),
    createWeeklyContentInfo(3, "HTML Forms", "Creating forms in HTML to collect user input and submit data"),
  ],
  courseFullStack: [
    createWeeklyContentInfo(1, "Introduction to Full Stack Development", "Understanding the role of front-end and back-end development in creating web applications"),
    createWeeklyContentInfo(2, "Building a To-Do App", "Creating a simple to-do list application to practice full stack development concepts"),
    createWeeklyContentInfo(3, "Creating a Shopping Cart", "Implementing a shopping cart feature using full stack development principles"),
  ],
  courseReact: [
    createWeeklyContentInfo(1, "Getting Started with React", "Setting up a React development environment and creating your first components"),
    createWeeklyContentInfo(2, "React State Management", "Managing state in React applications using hooks and context"),
    createWeeklyContentInfo(3, "React Router", "Implementing routing in React applications for navigation"),
  ],
  courseCSS: [
    createWeeklyContentInfo(1, "Responsive Web Design", "Designing websites that work well on all devices and screen sizes"),
    createWeeklyContentInfo(2, "CSS Grid Layout", "Using CSS Grid to create complex layouts with ease"),
    createWeeklyContentInfo(3, "CSS Flexbox", "Mastering CSS Flexbox for efficient layout design"),
  ],
  courseJS: [
    createWeeklyContentInfo(1, "Advanced JavaScript", "Deep dive into JavaScript concepts like closures, prototypes, and asynchronous programming"),
    createWeeklyContentInfo(2, "ES6+", "Exploring the latest features of ECMAScript for modern JavaScript development"),
    createWeeklyContentInfo(3, "Functional Programming", "Understanding functional programming concepts and applying them in JavaScript"),
  ],
  courseNode: [
    createWeeklyContentInfo(1, "Node.js Basics", "Introduction to Node.js and building server-side applications with JavaScript"),
    createWeeklyContentInfo(2, "Express.js", "Creating RESTful APIs using Express.js for Node.js applications"),
    createWeeklyContentInfo(3, "MongoDB and Mongoose", "Working with MongoDB and Mongoose for database management in Node.js applications"),
  ],
  coursePerformance: [
    createWeeklyContentInfo(1, "Web Performance Optimization", "Optimizing website performance for faster loading times and better user experience"),
    createWeeklyContentInfo(2, "Progressive Web Apps (PWAs)", "Building progressive web apps that offer a native app-like experience"),
    createWeeklyContentInfo(3, "Web Accessibility Best Practices", "Implementing accessibility best practices to ensure inclusivity in web design"),
  ],
  courseGit: [
    createWeeklyContentInfo(1, "Version Control with Git", "Mastering Git for version control and collaboration in software development"),
    createWeeklyContentInfo(2, "GitHub Workflow", "Understanding the GitHub workflow for managing and contributing to projects"),
    createWeeklyContentInfo(3, "Open Source Contribution", "Contributing to open source projects and understanding the open source community"),
  ], 
}

const prerequisites = {
  beginner: ["None"],
  intermediate: ["HTML, CSS, Javascript"],
  advanced: ["HTML, CSS, Javascript, React, Tailwind, Node.js, Express.js"]
}

const courseAccessibleHTML = createCourse(
  "Write accessible HTML", 
  "Josh Something", 
  "Learn about accessibility features of HTML",
  "Open", 
  "/img/eye.jpeg",
  "3 hours",
  "Any time",
  "Online",
  prerequisites.intermediate,
  syllabi.courseAccessibleHTML,
)

const courseIntroToHTML= createCourse(
  "Intro to HTML", 
  "Josh More Things", 
  "Learn about the basic building block of the web, HTML",
  "Closed", 
  "/img/website.jpeg",
  "1 hour",
  "Any time",
  "Online",
  prerequisites.beginner,
  syllabi.courseIntroToHTML,
)

const courseFullStack = createCourse(
  "Full Stack Projects", 
  "Josh No Things", 
  "Create stunning full stack applications",
  "In Progress", 
  "/img/hacker.jpeg",
  "6 hours",
  "Any time",
  "Online",
  prerequisites.advanced,
  syllabi.courseFullStack,
)

const courseReact = createCourse(
  "Getting Started with React",
  "John Doe",
  "Learn the basics of React and build your first React application",
  "Open",
  "/img/react.jpg",
  "4 weeks",
  "Any time",
  "Online",
  prerequisites.intermediate,
  syllabi.courseReact,
)

const courseCSS = createCourse(
  "Responsive Web Design",
  "Jane Smith",
  "Master the art of designing websites that work seamlessly on all devices",
  "Closed",
  "/img/responsive.jpg",
  "3 weeks",
  "Any time",
  "Online",
  prerequisites.beginner,
  syllabi.courseCSS,
)

const courseJS = createCourse(
  "Advanced JavaScript",
  "Alex Johnson",
  "Deep dive into advanced JavaScript concepts and become a JavaScript ninja",
  "In Progress",
  "/img/js.jpg",
  "5 weeks",
  "Any time",
  "Online",
  prerequisites.intermediate,
  syllabi.courseJS,
)

const courseNode = createCourse(
  "Node.js Basics",
  "Emily Brown",
  "Learn the basics of Node.js and build your first server-side application",
  "Open",
  "/img/nodejs.jpg",
  "4 weeks",
  "Any time",
  "Online",
  prerequisites.intermediate,
  syllabi.courseNode,
)

const coursePerformance = createCourse(
  "Web Performance Optimization",
  "Michael Wilson",
  "Optimize website performance for faster loading times and better user experience",
  "Closed",
  "/img/performance.jpg",
  "3 weeks",
  "Any time",
  "Online",
  prerequisites.advanced,
  syllabi.coursePerformance,
)

const courseGit = createCourse(
  "Version Control with Git",
  "Sarah Adams",
  "Master Git for version control and collaboration in software development",
  "In Progress",
  "/img/git.jpg",
  "5 weeks",
  "Any time",
  "Online",
  prerequisites.beginner,
  syllabi.courseGit,
)

export const mockAPI = [
  courseAccessibleHTML, 
  courseIntroToHTML, 
  courseFullStack,
  courseReact,
  courseCSS,
  courseJS,
  courseNode,
  coursePerformance,
  courseGit,
]
