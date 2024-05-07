import createStudent from "../../src/util/createStudent";
import {describe, it, expect, vi, beforeAll, beforeEach} from "vitest";


describe("createStudent", () => {
  let student;

  beforeAll(() => {
    student = createStudent("joe", "justan@example.com");
  })
  
  it("returns an object with an id, a name, and an email key", () => {
    expect(student).toHaveProperty("id");
    expect(student).toHaveProperty("name");
    expect(student).toHaveProperty("email");
    expect(student).toHaveProperty("addCourse");
    expect(student).toHaveProperty("removeCourse");
    expect(student).toHaveProperty("getCoursesIDs");
  })

  it("assigns the values passed as arguments to the correct fields", () => {
    expect(student.name).toBe("joe");
    expect(student.email).toBe("justan@example.com");
  })
 
})

describe("addCourse", () => {
  let student;
  let courseMock;
  let addCourseSpy;

  beforeEach(() => {
    student = createStudent("joe", "justan@example.com");
    courseMock = { id: "1" };
    addCourseSpy = vi.spyOn(student, "addCourse");
  });

  it("gets correctly called called", () => {
    student.addCourse(courseMock);
    expect(student.addCourse).toHaveBeenCalled();
    addCourseSpy.mockRestore();
  })

  it("saves the id of the desired course to the array of course ids", () => {
    student.addCourse(courseMock);
    expect(student.getCoursesIDs()).toContain(courseMock.id);
    addCourseSpy.mockRestore();
  })
})

describe("removeCourse", () => {
  let student;
  let courseMock;
  let removeCourseSpy;

  beforeEach(() => {
    student = createStudent("joe", "justan@example.com");
    courseMock = { id: "1" };
    removeCourseSpy = vi.spyOn(student, "removeCourse");
  });

  it("gets correctly called called", () => {
    student.removeCourse(courseMock);
    expect(student.removeCourse).toHaveBeenCalled();
    removeCourseSpy.mockRestore();
  })
  
  it("remove the id of the desired course from the array of course ids", () => {
    student.removeCourse(courseMock);
    expect(student.getCoursesIDs()).not.toContain(courseMock.id);
    removeCourseSpy.mockRestore();
  })

  
  
})
