import { createSlice, createSelector } from "@reduxjs/toolkit";
import {mockAPI} from "../util/mockAPI"
import createStudent from "../util/createStudent"
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchAPIData = createAsyncThunk(
  "courses/fetchAPIData",
  async () => {
    return mockAPI;
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState: [],
  reducers: {
    toggleEnroll: (state, action) => {
      const courseId = action.payload;
      const course = state.find(course => course.id === courseId)
      if (course) course.enrolled = !course.enrolled;
    },
    getCourse: (state, action) => {
      const courseId = action.payload;
      return state.find(course => course.id === courseId)
    },
    setCompletionStatus: (state, action) => {
      const  course = action.payload;
      console.log(course)
      state.find(c => c.id === course.id).isCompleted = !course.isCompleted;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAPIData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

const userSlice = createSlice({
  name: "user",
  initialState: createStudent("Sandor Clegane", "alsocool@email,com"),
  reducers: {
    addCourseToUser: (state, action) => {
      let courseId = action.payload;
      state.enrolledCoursesIds.push(courseId);
    },
    removeCourseFromUser: (state, action) => {
      const courseId = action.payload;
      const courses = state.enrolledCoursesIds;
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


export const {setAPIData, toggleEnroll, getCourse, setCompletionStatus} = coursesSlice.actions;
export const { addCourseToUser, removeCourseFromUser} = userSlice.actions;
export default [coursesSlice.reducer, userSlice.reducer];

