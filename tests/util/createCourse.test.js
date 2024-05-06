import createCourse from "../../src/util/createCourse";

describe("createCourse", () => {
  const course = createCourse(
    "Learn something new", 
    "joe", 
    "abc", 
    "open",
    "/cool-pic.png",
    "2 weeks",
    "Mondays and Tuesdays, 6pm",
    "online",
    ["none"],
    [{topic: "def"}],
    [{name: "jeff"}]
  );
  
  it("returns an object with the expected keys", () => {
    expect(course).toHaveProperty("id");
    expect(course).toHaveProperty("name");
    expect(course).toHaveProperty("instructor");
    expect(course).toHaveProperty("description");
    expect(course).toHaveProperty("enrollmentStatus");
    expect(course).toHaveProperty("thumbnail");
    expect(course).toHaveProperty("duration");
    expect(course).toHaveProperty("schedule");
    expect(course).toHaveProperty("location");
    expect(course).toHaveProperty("prerequisites");
    expect(course).toHaveProperty("syllabus");
    expect(course).toHaveProperty("students");
  })

  it("assigns the values passed as arguments to the correct fields", () => {
    expect(course.name).toBe("Learn something new");
    expect(course.instructor).toBe("joe");
    expect(course.description).toBe("abc");
    expect(course.enrollmentStatus).toBe("open");
    expect(course.thumbnail).toBe("/cool-pic.png");
    expect(course.duration).toBe("2 weeks");
    expect(course.schedule).toBe("Mondays and Tuesdays, 6pm");
    expect(course.location).toBe("online");
    expect(course.prerequisites[0]).toBe("none");
    expect(course.syllabus[0].topic).toBe("def");
    expect(course.students[0].name).toBe("jeff");
  })

})
