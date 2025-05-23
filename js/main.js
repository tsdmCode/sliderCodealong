const imageArray = [
  'assets/image1.jpg',
  'assets/image2.jpg',
  'assets/image3.jpg',
  'assets/image4.jpg',
  'assets/image5.jpg',
  'assets/image6.jpg',
];

const sliderImage = document.getElementById('sliderImage');
let sliderIndex = 0;
sliderImage.src = imageArray[sliderIndex];

function increment() {
  if (sliderIndex < imageArray.length - 1) {
    sliderIndex++;
  } else {
    sliderIndex = 0;
  }
  sliderImage.src = imageArray[sliderIndex];
}

function decrement() {
  if (sliderIndex > 0) {
    sliderIndex--;
  } else {
    sliderIndex = imageArray.length - 1;
  }
  sliderImage.src = imageArray[sliderIndex];
}
