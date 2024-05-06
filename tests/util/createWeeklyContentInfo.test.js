import createWeeklyContentInfo from "../../src/util/createWeeklyContentInfo"

describe("createWeeklyContentInfo", () => {
  const info = createWeeklyContentInfo(
    1,
    "testing topic", 
    "testing content"
  );
  
  it("returns an object with week, a topic, and content key", () => {
    expect(info).toHaveProperty("week");
    expect(info).toHaveProperty("topic");
    expect(info).toHaveProperty("content");
  })

  it("assigns the values passed as arguments to the correct fields", () => {
    expect(info.week).toBe(1);
    expect(info.topic).toBe("testing topic");
    expect(info.content).toBe("testing content");
  })

})
