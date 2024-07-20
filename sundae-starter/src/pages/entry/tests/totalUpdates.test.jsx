import { screen } from "@testing-library/react";
import Options from "../Options.jsx";
import userEvent from "@testing-library/user-event";
import { render } from "../../../utils/test-util.jsx";

test("update scoops subtotal when scoops change", async () => {
  const user = userEvent.setup();
  render(<Options optionType="scoops" />);

  //Make sure total starts out at $0.00
  const scoopsSubtotal = screen.getByText("Scoops total: $", { exact: false });
  expect(scoopsSubtotal).toHaveTextContent("0.00");

  // update vanilla scoops to 1 and check subtotal
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "1");
  expect(scoopsSubtotal).toHaveTextContent("2.00");

  //update chocolate scoops to 2 and check subtotal
  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });
  await user.clear(chocolateInput);
  await user.type(chocolateInput, "2");
  expect(scoopsSubtotal).toHaveTextContent("6.00");
});

test("update toppings subtotal when toppings change", async () => {
  const user = userEvent.setup();
  render(<Options optionType="toppings" />);

  //Make sure total starts out at $0.00
  const toppingsSubtotal = screen.getByText("Toppings total: $", {
    exact: false,
  });
  expect(toppingsSubtotal).toHaveTextContent("0.00");

  // update cherries toppings to 1 and check subtotal
  const cherriesInput = await screen.findByRole("spinbutton", {
    name: "Cherries",
  });
  await user.clear(cherriesInput);
  await user.type(cherriesInput, "1");
  expect(toppingsSubtotal).toHaveTextContent("1.50");

  //update M&Ms toppings to 2 and check subtotal
  const mmsTopping = await screen.findByRole("spinbutton", {
    name: "M&Ms",
  });
  await user.clear(mmsTopping);
  await user.type(mmsTopping, "2");
  expect(toppingsSubtotal).toHaveTextContent("4.50");

  //update hot fudge scoops to 3 and check subtotal
  const hotFudgeTopping = await screen.findByRole("spinbutton", {
    name: "Hot fudge",
  });
  await user.clear(hotFudgeTopping);
  await user.type(hotFudgeTopping, "3");
  expect(toppingsSubtotal).toHaveTextContent("9.00");
});
