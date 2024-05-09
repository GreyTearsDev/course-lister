import createCourse from "./createCourse";
import createWeeklyContentInfo from "./createWeeklyContentInfo"


const syllabi = {
  accessibleHtml: [
    createWeeklyContentInfo(1, "Meet ARIA (A tag has no name)", "You will probably learn something usefull"),
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

const prerequisites = {
  beginner: ["None"],
  intermediate: ["HTML, CSS, Javascript"],
  advanced: ["HTML, CSS, Javascript, React, Tailwind, Node.js, Express.js"]
}

const accessibleHtml = createCourse(
  "Write accessible HTML", 
  "Josh Something", 
  "Learn about accessibility features of HTML",
  "Open", 
  "/img/eye.jpeg",
  "3 hours",
  "Any time",
  "Online",
  prerequisites.intermediate,
  syllabi.accessibleHtml,
)

const introToHtml = createCourse(
  "Intro to HTML", 
  "Josh More Things", 
  "Learn about the basic building block of the web, HTML",
  "Closed", 
  "/img/website.jpeg",
  "1 hour",
  "Any time",
  "Online",
  prerequisites.beginner,
  syllabi.introToHtml,
)

const fullStack = createCourse(
  "Full Stack Projects", 
  "Josh No Things", 
  "Create stunning full stack applications",
  "In Progress", 
  "/img/hacker.jpeg",
  "6 hour",
  "Any time",
  "Online",
  prerequisites.advanced,
  syllabi.fullStack,
)

export const mockAPI = [accessibleHtml, introToHtml, fullStack ]

