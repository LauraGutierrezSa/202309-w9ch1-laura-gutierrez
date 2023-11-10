import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

beforeEach(() => {
  vi.resetAllMocks();
});

describe("Given a Button component", () => {
  describe("When it receives an action and the user clicks the button", () => {
    test("Then it should call the received action", async () => {
      const text = "test";

      const actionOnClick = vi.fn();

      render(
        <Button type="button" actionOnClick={actionOnClick} text={text} />,
      );

      const buttonElement = screen.getByRole("button", { name: text });

      await userEvent.click(buttonElement);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
