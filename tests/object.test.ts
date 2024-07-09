describe("object", () => {
  it("should support in ts", () => {
    const person: { name: string; age: number } = {
      name: "Kahfi Smith",
      age: 20,
    };
    console.info(person);

    person.name = "Kahfi";
    person.age = 20;

    console.info(person);
  });
});
