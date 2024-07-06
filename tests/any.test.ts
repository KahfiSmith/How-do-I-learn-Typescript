describe("any", () => {
  it("should support in ts", () => {
    const person: any = {
      id: 1,
      name: "Kahfi Smith",
      age: 20,
    };

    (person.age = 22), (person.address = "Jl. Jendral Sudirman");

    console.info(person);
  });
});
    