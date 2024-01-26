import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("renders", function(){
  render(<Carousel photos={TEST_IMAGES} title="snapshot testing"/>)
})

it("it matches carousel snapshot", function(){
  const {asFragment} = render(<Carousel photos={TEST_IMAGES} title="snapshot testing"/>);
  expect(asFragment()).toMatchSnapshot();
})

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("works when you click on the left arrow", function(){
  const { container } = render(<Carousel photos={TEST_IMAGES} title="snapshot testing"/>);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

  // move backwards in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);
  //expect first image to show
  expect(container.querySelector('img[alt="testing image 1"]')).toBeInTheDocument();
})

it("shouldn't display left arrow in the beginnng", function(){
  const {container} = render(<Carousel photos={TEST_IMAGES} title="snapshot testing"/>);
  expect(container.querySelector('.bi-arrow-left-circle')).not.toBeInTheDocument();
})

it("shouldn't display right arrow at the end", function(){
  const {container} = render(<Carousel photos={TEST_IMAGES} title="snapshot testing"/>);
  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  for(let i = 0; i<TEST_IMAGES.length; i++){
    fireEvent.click(rightArrow);
  }

  expect(container.querySelector('.bi-arrow-right-circle')).not.toBeInTheDocument();
})

