import { render, fireEvent } from "@testing-library/react";
import Flip from "./Flip.js";
import TEST_IMAGES from "./_testCommon.js";

beforeEach(function() {
  jest
    .spyOn(Math, "random")
    .mockReturnValueOnce(0.25)
    .mockReturnValueOnce(0.75);
});

afterEach(function() {
  Math.random.mockRestore();
});


it("renders", function(){
  render(<Flip photos={TEST_IMAGES} title="snapshot testing"/>)
})

it("it matches flip snapshot", function(){
  const {asFragment} = render(<Flip photos={TEST_IMAGES} title="snapshot testing"/>);
  expect(asFragment()).toMatchSnapshot();
})

it("works when you click the flip button", function() {
  const { container } = render(
    <Flip
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect no coin image to show
  expect(
    container.querySelector('.coin-image')
  ).not.toBeInTheDocument();

  // show coin
  const flipButton = container.querySelector(".FlipCoin-Button");
  fireEvent.click(flipButton);

  // expect a coin image to show
  expect(
    container.querySelector("img[class='Coin-image']")
  ).toBeInTheDocument();
});

it("correct image is displayed", function(){
  const { container } = render(<Flip photos={TEST_IMAGES} title="snapshot testing"/>);

  // expect no coin image to show
  expect(
    container.querySelector('.coin-image')
  ).not.toBeInTheDocument();

  // first flip
  const flipButton = container.querySelector(".FlipCoin-Button");
  fireEvent.click(flipButton);

  // expect a coin image to show
  expect(
    container.querySelector("img[alt='Heads']")
  ).toBeInTheDocument();
  expect(
    container.querySelector("img[alt='Tails']")
  ).not.toBeInTheDocument();

  // second flip
  fireEvent.click(flipButton);

  // expect a coin image to show
  expect(
    container.querySelector("img[alt='Tails']")
  ).toBeInTheDocument();
  expect(
    container.querySelector("img[alt='Heads']")
  ).not.toBeInTheDocument();


})



