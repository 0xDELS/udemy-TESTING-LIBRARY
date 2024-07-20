import { screen } from "@testing-library/react";
import Options from "../Options.jsx";
import { render } from "../../../utils/test-util.jsx";

test("displays image for each scoop from server", async () => {
  render(<Options optionType={"scoops"} />);

  // find the images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm all text of images
  const altText = scoopImages.map((e) => e.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("displays image for each topping from server", async () => {
  render(<Options optionType={"toppings"} />);

  // find the images
  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);

  // confirm all text of images
  const altText = toppingImages.map((e) => e.alt);
  expect(altText).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
