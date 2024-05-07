import {mockAPI} from "./mockAPI";

export default function findCourse(courseID) {
  return mockAPI.find(element => element.id === courseID);  
}
