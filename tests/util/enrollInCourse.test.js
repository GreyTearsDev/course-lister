import enrollInCourse from "../../src/util/enrollInCourse";
import {describe, it, expect, vi } from "vitest";


const createStudentMock = vi.fn((name, email) => ({
  id: "student-id",
  name,
  email,
  addCourse: vi.fn(),
  removeCourse: vi.fn(),
  getCoursesIDs: vi.fn(),
}));


vi.mock("../../src/util/createStudent", () => ({
  __esModule: true,
  default: createStudentMock,
}));

describe("enrollInCourse", () => {
  it("add student object to array of enrolled students of a course", () => {
    const student = createStudentMock("joe", "example@example.com");
    const courseMock = {students: []};
    enrollInCourse(student , courseMock);
    expect(courseMock.students).toContain(student);
  });
})
