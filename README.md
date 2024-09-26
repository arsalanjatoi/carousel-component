# Carousel Component

## Overview

This project implements a responsive and modular carousel component using HTML, SCSS, and JavaScript. The carousel features smooth transitions, gradient effects.

## Technologies Used

- **HTML**: Semantic HTML structure for accessibility and SEO.
- **SCSS**: For styling with a focus on modularity, reusability, and adherence to DRY principles.
- **JavaScript (ES6)**: For dynamic functionality with class-based methods and event handling.

## Features

- **Responsive Design**: The carousel adapts to various screen sizes, displaying different numbers of items per row.
- **Gradient Backgrounds**: Gradient effects on both sides of the carousel enhance visual appeal.
- **Navigation Controls**: Prev and Next buttons with SVG icons for easy navigation between items.
- **Accessibility**: Implemented ARIA labels for navigation buttons.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/arsalanjatoi/carousel-component.git
   cd carousel-component

HTML Structure: Created a semantic structure with div elements for the carousel, items, and controls. Each item in the carousel is wrapped in a .carousel__item class.

Styling with SCSS:
Used SCSS for styling, applying variables, mixins, and functions to maintain a clean codebase.
Implemented a gradient background using a linear gradient for aesthetic purposes.
Used media queries to ensure responsiveness, adjusting styles for different breakpoints.

JavaScript Functionality:
Created a Carousel class to manage state and behavior.
Implemented methods for navigating between items (next and prev).
Calculated the offset based on the current index to slide items correctly.
Disabled navigation buttons appropriately when at the ends of the carousel.

Responsive Behavior:
Utilized a function to determine the number of items to display per row based on screen size.
Ensured that the carousel operates smoothly on both desktop and mobile devices.

Usage
To use the carousel component, simply include the necessary HTML structure in your project. Adjust the CSS as needed to fit your design preferences. Ensure that you have the required images for the carousel items.
