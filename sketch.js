// sketch.js
let currentMenu;

function preload() {
  // Load any resources or data here
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // Set up your initial menu here
  currentMenu = new Menu1();
}

function draw() {
  background(240, 248, 254);
  currentMenu.display();
}
