import enrollInCourse from "../../src/util/enrollInCourse";

describe("enrollInCourse", () => {
  it("add student object to array of enrolled students of a course", () => {
    const studentMock = {name: "joe", email: "mine@example.com"};
    const courseMock = {students: []};
    enrollInCourse(studentMock, courseMock);
    expect(courseMock.students).toContain(studentMock);
  })
})
