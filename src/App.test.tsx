import { describe, it } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

describe("App test", () => {
  it("should render app ", () => {
    render(<App />);

    const input = screen.getByRole("textbox", {
      name: /Add a title/i,
    }) as HTMLInputElement;
    const textarea = screen.getByRole("textbox", {
      name: /Add your post/i,
    }) as HTMLInputElement;

    fireEvent.change(input, { target: { value: "Title" } });
    expect(input.value).toBe("Title");

    fireEvent.change(textarea, { target: { value: "Content" } });
    expect(textarea.value).toBe("Content");
  });
});
