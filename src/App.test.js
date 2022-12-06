import { render, screen } from "@testing-library/react";
import App from "./App";
import { getData } from "./helpers/helpers";

test("renders learn react link", () => {
    render(<App />);
    expect(getData()).not.toBeUndefined();
});
