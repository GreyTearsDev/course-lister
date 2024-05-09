const TOGGLE_ENROLL= "TOGGLE_ENROLL";
const GET_COURSE = "GET_COURSE";
const REMOVE_COURSE_FROM_USER = "REMOVE_COURSE_FROM_USER";
const ADD_COURSE_TO_USER = "ADD_COURSE_TO_USER";
const SET_COMPLETION_STATUS = "SET_COMPLETION_STATUS";

export const toggleEnroll = (courseId) => ({
  type: TOGGLE_ENROLL,
  payload:  courseId ,
});

export const getCourse = (courseId) => ({
  type: GET_COURSE,
  payload:  courseId ,
});

export const setCompletionStatus = (course) => ({
  type: SET_COMPLETION_STATUS,
  payload:  course,
});

export const removeCourseFromUser = (courseId) => ({
  type: REMOVE_COURSE_FROM_USER,
  payload:  courseId ,
});

export const addCoursetoUser = (courseId) => ({
  type: ADD_COURSE_TO_USER,
  payload: courseId,
});

