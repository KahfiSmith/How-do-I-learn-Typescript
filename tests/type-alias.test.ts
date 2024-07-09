import { Category } from "../src/type-alias";
import { Product } from "../src/type-alias";

describe("alias", () => {
  it("should support in ts", () => {
    const category: Category = {
      id: "1",
      name: "Laptop",
    };

    const product: Product = {
      id: "1",
      name: "Lenovo",
      price: 10000000,
      category: category
    };

    console.info(category)
    console.info(product)
  });
});
