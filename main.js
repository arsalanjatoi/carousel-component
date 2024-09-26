class Carousel {
  constructor(carouselElement, itemsPerRow = 1) {
    this.carousel = carouselElement;
    this.inner = this.carousel.querySelector('.carousel__inner');
    this.items = this.carousel.querySelectorAll('.carousel__item');
    this.totalItems = this.items.length;
    this.currentIndex = 0;
    this.itemsPerRow = itemsPerRow; // Number of items visible per row
    this.nextButton = this.carousel.querySelector('.carousel__control--next');
    this.prevButton = this.carousel.querySelector('.carousel__control--prev');
    this.nextButton.addEventListener('click', () => this.next());
    this.prevButton.addEventListener('click', () => this.prev());

    this.update();
    window.addEventListener('resize', () => this.update());
  }

  next() {
    // Move to the next item if it's not the last one
    if (this.currentIndex < this.totalItems - 1) {
      this.currentIndex++;
      this.update();
    }
  }

  prev() {
    // Move to the previous item if it's not the first one
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.update();
    }
  }

  update() {
    var margin = 3.5;
    if (this.itemsPerRow == 1 || this.itemsPerRow == 2) {
      margin = 0;
    }
    const itemWidth = (100 / this.itemsPerRow) - margin;
    const offset = -this.currentIndex * itemWidth;
    this.inner.style.transform = `translateX(${offset}%)`;
    this.items.forEach(item => {
      item.style.minWidth = `${itemWidth}%`;
    });

    // Disable the next button if at the last item
    if (this.currentIndex >= this.totalItems - this.itemsPerRow) {
      this.nextButton.disabled = true;
    } else {
      this.nextButton.disabled = false;
    }

    // Disable the prev button if at the first item
    if (this.currentIndex === 0) {
      this.prevButton.disabled = true;
    } else {
      this.prevButton.disabled = false;
    }
  }

  // Optional method to change the number of items per row dynamically
  setItemsPerRow(itemsPerRow) {
    this.itemsPerRow = itemsPerRow;
    this.update();
  }
}

document.querySelectorAll('.carousel').forEach(carousel => {
  const carouselInstance = new Carousel(carousel, getItemsPerRow());
  window.addEventListener('resize', () => {
    const itemsPerRow = getItemsPerRow();
    console.log(itemsPerRow);
    carouselInstance.setItemsPerRow(itemsPerRow);
  });
});

function getItemsPerRow() {
  if (window.innerWidth > 1200) {
    return 4;
  } else if (window.innerWidth > 767) {
    return 2;
  } else {
    return 1;
  }
}
