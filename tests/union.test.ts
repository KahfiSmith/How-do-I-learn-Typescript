describe("union", () => {
  it("should support in ts", () => {
    let sample: number | string | boolean = "Kahfi";
    console.info(sample);

    sample = 100;
    console.info(sample);

    sample = true;
    console.info(sample);
  });

  it("should support typeof operator", () => {
    const process = (value: number | string | boolean) => {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 2;
      } else if (typeof value === "boolean") {
        return !value;
      }
    };
    expect(process("Kahfi")).toBe("KAHFI");
    expect(process(100)).toBe(200);
    expect(process(true)).toBe(false);
  });
});
