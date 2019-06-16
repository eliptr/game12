var canvasMain = document.getElementById('canvas');
var ctx = canvasMain.getContext('2d');
var fieldbtn = document.getElementById('field');


function onload() {
  document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
  document.addEventListener("pause", onPause, false);
  document.addEventListener("resume", onResume, false);
  test()
}

function onPause() {
  localStorage.ogls = og;
  localStorage.unlogls = new Date();
  localStorage.onels = one;
  localStorage.twols = two;
  localStorage.threels = three;
  localStorage.fourls = four;
  localStorage.fivels = five;
  localStorage.sixls = six;
}

function onResume() {
    test()
}

//variabels
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var pixelRatio = window.devicePixelRatio || 1; /// get pixel ratio of device

var og = 100;
var unlog = "Hello, World!";
var log = Date();

var d1; //"now"
var d2 = Date.parse(localStorage.getItem('unlogls'));
var diff;  // difference in milliseconds
var finaldif = "Hello, World!";

var one = true;
var two = true;
var three = true;
var four = true;
var five = true;
var six = true;

var time = 0;

var minutes = Math.floor(time / 60);
var seconds = time - minutes * 60;


// load images
field = new Image();
field2 = new Image();
field3 = new Image();
field4 = new Image();
field5 = new Image();
field6 = new Image();
info = new Image();
oven = new Image();
orders = new Image();

field.src = "images/field.png";
field2.src = "images/field.png";
field3.src = "images/field.png";
field4.src = "images/field.png";
field5.src = "images/field.png";
field6.src = "images/field.png";
info.src = "images/info.png";
oven.src = "images/oven.png";
orders.src = "images/orders.png";

// onlaod runs one time and in the end runs draw with requestAnimationFrame
function test() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  pixelRatio = window.devicePixelRatio || 1; /// get pixel ratio of device

  // fixed canvas resolution
  canvasMain.width = windowWidth * pixelRatio;   /// resolution of canvas
  canvasMain.height = windowHeight * pixelRatio;
  canvasMain.style.width = windowWidth + 'px';   /// CSS size of canvas
  canvasMain.style.height = windowHeight + 'px';

  log = Date();

  d1 = new Date(); //"now"
  d2 = Date.parse(localStorage.getItem('unlogls'));
  diff = Math.abs(d1-d2);  // difference in milliseconds
  finaldif = Math.floor(diff / 1000);


  // positions var
  fX = 21.5;
  fY = 1131.3;
  fY2 = 1473.6;
  fY3 = 1818;
  fX4 = 566.9;
  iX = 38.9;
  iY = 886.5;
  oX = 35.2;
  oY = 483.3;
  oX2 = 297.2;
  oX3 = 555.1;
  oX4 = 812.1;
  orX = 34.3;
  orY = 67.1;

  one = JSON.parse(localStorage.onels);
  two = JSON.parse(localStorage.twols);
  three = JSON.parse(localStorage.threels);
  four = JSON.parse(localStorage.fourls);
  five = JSON.parse(localStorage.fivels);
  six = JSON.parse(localStorage.sixls);

  if (!one) {
    one = false;
    field.src = "images/mid.png";
  }
  if (!two) {
    two = false;
    field2.src = "images/mid.png";
  }
  if (!three) {
    three = false;
    field3.src = "images/mid.png";
  }
  if (!four) {
    four = false;
    field4.src = "images/mid.png";
  }
  if (!five) {
    five = false;
    field5.src = "images/mid.png";
  }
  if (!six) {
    field6.src = "images/mid.png";
  }

  draw()
}

// runs after test is finished and has an requestAnimationFrame
function draw() {

  canvasMain.width = windowWidth * pixelRatio;   /// resolution of canvas
  canvasMain.height = windowHeight * pixelRatio;
  canvasMain.style.width = windowWidth + 'px';   /// CSS size of canvas
  canvasMain.style.height = windowHeight + 'px';

  //drawImage
  ctx.drawImage(field, fX, fY);
  ctx.drawImage(field2, fX, fY2);
  ctx.drawImage(field3, fX, fY3);
  ctx.drawImage(field4, fX4, fY);
  ctx.drawImage(field5, fX4, fY2);
  ctx.drawImage(field6, fX4, fY3);
  ctx.drawImage(info, iX, iY);
  ctx.drawImage(oven, oX, oY);
  ctx.drawImage(oven, oX2, oY);
  ctx.drawImage(oven, oX3, oY);
  ctx.drawImage(oven, oX4, oY);
  ctx.drawImage(orders, orX, orY);

  ctx.font = "100 40px Roboto";
  ctx.fillText(time, 10 , 50);

  //requestAnimationFrame
  requestAnimationFrame(draw, 10);
}

setInterval(function () {
  minutes = Math.floor(time / 60);
  seconds = time - minutes * 60;

  if (time > 0) {
    time = time - 1;
  }
}, 1000);
/*function counter() {
    var i = 0;
    var num = 0;
    // This block will be executed 100 times.
    setInterval(function(){
        if (i == 100) clearInterval(this);
        else num = num + 1; text = num;
    }, 1000);
} // End
counter()*/
