import createCourse from "./createCourse";
import createStudent from "./createStudent"
import createWeeklyContentInfo from "./createWeeklyContentInfo"


const users = [
  createStudent("Tirso Samalungo", "tirso@example.com"),
  createStudent("Rayanna Maber", "ray@example.com"),
  createStudent("Kassandra dos Santos", "kassy@example.com"),
  createStudent("Elsa Torres", "elsa@example.com"),
  createStudent("Daniela Conrado", "dani@example.com"),
  createStudent("Arminda Rodrigues", "arminda@example.com"),
  createStudent("Lulena Benjamin", "joa@example.com"),
];

const syllabi = {
  accessibleHtml: [
    createWeeklyContentInfo(1, "Meet ARIA (not the Stark girl)", "You will probably learn something usefull"),
    createWeeklyContentInfo(2, "The Accessibility tree", "You won't believe how cool it is"),
    createWeeklyContentInfo(3, "The things that are definetly important", "Commiting early and often... ?"),
  ],  
  introToHtml: [
    createWeeklyContentInfo(1, "Hello World!", "Take the first steps"),
    createWeeklyContentInfo(2, "Semantic HTML", "Use the right tool for the right taks"),
    createWeeklyContentInfo(3, "Wrap up", "Create a Capstone project hehehe"),
  ],  
  fullStack: [
    createWeeklyContentInfo(1, "Basic to do App", "Start by brushing up on the basics of web dev"),
    createWeeklyContentInfo(2, "Shopping Cart", "Create a shopping cart app insoired by Amazon's website (or whatever, idk)"),
  ],  
}

const enrolledStudents = {
  groupOne: users.slice(0, 2),
  groupTwo: users.slice(2, 4),
  groupThree: users.slice(4),
}


const prerequisites = {
  beginner: ["None"],
  intermediate: ["HTML, CSS, Javascript"],
  advanced: ["HTML, CSS, Javascript, React, Tailwind, Node.js, Express.js"]
}

const accessibleHtml = createCourse(
  "Write accessible HTML", 
  "Josh Something", 
  "Learn about accessibility features of HTML",
  "open", 
  "/accessibleHtml.png",
  "3 hours",
  "Any time",
  "Online",
  prerequisites.intermediate,
  syllabi.accessibleHtml,
  enrolledStudents.groupOne,  
)

const introToHtml = createCourse(
  "Intro to HTML", 
  "Josh More Things", 
  "Learn about the basic building block of the web, HTML",
  "closed", 
  "/introTohtml.png",
  "1 hour",
  "Any time",
  "Online",
  prerequisites.beginner,
  syllabi.introToHtml,
  enrolledStudents.groupThree,  
)

const fullStack = createCourse(
  "Full Stack Projects", 
  "Josh No Things", 
  "Create stunning full stack applications",
  "In Progress", 
  "/fullStack.png",
  "6 hour",
  "Any time",
  "Online",
  prerequisites.advanced,
  syllabi.fullStack,
  enrolledStudents.groupTwo,  
)

export default function mockAPI() {
  return [accessibleHtml, introToHtml, fullStack ] 
}

