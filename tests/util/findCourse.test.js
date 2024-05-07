import {describe, it, expect} from "vitest"
import findCourse from "../../src/util/findCourse"
import { mockAPI } from "../../src/util/mockAPI";

describe("findCourse", () => {
  it("returns the course with the given ID", () => {
    const course = mockAPI[2];
    const result = findCourse(course.id);
    expect(result).toEqual(course);
  });

  it("returns undefined if course with given ID is not found", () => {
    const courseID = "4";
    const result = findCourse(courseID);
    expect(result).toBeUndefined();
  });
});
