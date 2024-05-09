import { createSlice, createSelector } from "@reduxjs/toolkit";
import {mockAPI} from "../util/mockAPI"
import createStudent from "../util/createStudent"

const coursesSlice = createSlice({
  name: "courses",
  initialState: mockAPI,
  reducers: {
    toggleEnroll: (state, action) => {
      const courseId = action.payload;
      const course = state.find(course => course.id === courseId)
      if (course) course.enrolled = !course.enrolled;
    },
  },
});

const userSlice = createSlice({
  name: "user",
  initialState: createStudent("My Cool Name", "alsocool@email,com"),
  reducers: {
    addCourseToUser: (state, action) => {
      let courseId = action.payload;
      state.enrolledCorsesIDs.push(courseId);
    },
    removeCourseFromUser: (state, action) => {
      const courseId = action.payload;
      const courses = state.enrolledCorsesIDs;
      const index = courses.indexOf(courseId)
      if (index !== -1) courses.splice(index, 1);
    },
  },
});

export const selectUser = (state) => state[1];
export const selectCourses = (state) => state[0];

export const selectUserCourses = createSelector(
  [selectUser],
  (user) => user
);

export const selectGetCourses = createSelector(
  [selectCourses], 
  courses =>  courses
);


export const { toggleEnroll } = coursesSlice.actions;
export const { addCourseToUser, removeCourseFromUser } = userSlice.actions;
export default [coursesSlice.reducer, userSlice.reducer];

