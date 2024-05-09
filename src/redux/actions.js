export const TOGGLE_ENROLL= "TOGGLE_ENROLL";
export const REMOVE_COURSE_FROM_USER = "REMOVE_COURSE_FROM_USER";
export const ADD_COURSE_TO_USER = "ADD_COURSE_TO_USER";

export const toggleEnroll = (courseId) => ({
  type: TOGGLE_ENROLL,
  payload:  courseId ,
});

export const removeCourseFromUser = (courseId) => ({
  type: REMOVE_COURSE_FROM_USER,
  payload:  courseId ,
});

export const addCoursetoUser = (courseId) => ({
  type: ADD_COURSE_TO_USER,
  payload: courseId,
});

