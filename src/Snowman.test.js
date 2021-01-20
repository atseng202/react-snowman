import React from "react";
import { render, fireEvent, queryByTestId } from "@testing-library/react";
import Snowman from "./Snowman";

const BASE_URL = "http://localhost";

/********** Snapshot Tests *********************/  
describe("snapshot test for losing game", function () {
  it("should render a losing message and correct word after maxWrong guesses reached", function () {
    const { container } = render(<Snowman words={["apple"]} />);
    fireEvent.click(container.querySelector("[value='b']"));
    fireEvent.click(container.querySelector("[value='c']"));
    fireEvent.click(container.querySelector("[value='d']"));
    fireEvent.click(container.querySelector("[value='f']"));
    fireEvent.click(container.querySelector("[value='g']"));
    fireEvent.click(container.querySelector("[value='h']"));

    expect(container).toMatchSnapshot();
  });
});

/********** Functionality Tests *********************/  

describe("Ending games", function () {
  it("should have the 6th gallow image after maxWrong guesses reached", function () {
    const { container } = render(<Snowman words={["apple"]} />);
    fireEvent.click(container.querySelector("[value='b']"));
    fireEvent.click(container.querySelector("[value='c']"));
    fireEvent.click(container.querySelector("[value='d']"));
    fireEvent.click(container.querySelector("[value='f']"));
    fireEvent.click(container.querySelector("[value='g']"));
    fireEvent.click(container.querySelector("[value='h']"));
    // fireEvent.click(container.querySelector("[value='i']"));

    // "./6.png" exists
    expect(container.querySelector("img").src).toEqual(`${BASE_URL}/6.png`);
  });
});
