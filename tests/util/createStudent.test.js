import createStudent from "../../src/util/createStudent";
import {describe, it, expect,  beforeAll, } from "vitest";


describe("createStudent", () => {
  let student;

  beforeAll(() => {
    student = createStudent("joe", "justan@example.com");
  })
  
  it("returns an object with an id, a name, and an email key", () => {
    expect(student).toHaveProperty("id");
    expect(student).toHaveProperty("name");
    expect(student).toHaveProperty("email");
  })

  it("assigns the values passed as arguments to the correct fields", () => {
    expect(student.name).toBe("joe");
    expect(student.email).toBe("justan@example.com");
  })
 
})

  
