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

  localStorage.timels = time;
  localStorage.time2ls = time2;
  localStorage.time3ls = time3;
  localStorage.time4ls = time4;
  localStorage.time5ls = time5;
  localStorage.time6ls = time6;

  localStorage.wheatls = wheat;
  localStorage.seedsls = seeds;

  localStorage.whtordls = whtord;
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

var d1; //"now"
var d2 = Date.parse(localStorage.getItem('unlogls'));
var diff;  // difference in milliseconds
var finaldif = "Hello, World!";

var one = 1;
var two = 1;
var three = 1;
var four = 1;
var five = 1;
var six = 1;

var time = 0;
var time2 = 0;
var time3 = 0;
var time4 = 0;
var time5 = 0;
var time6 = 0;

var minutes = Math.floor(time / 60);
var seconds = time - minutes * 60;

var minutes2 = Math.floor(time2 / 60);
var seconds2 = time2 - minutes2 * 60;

var minutes3 = Math.floor(time3 / 60);
var seconds3 = time3 - minutes3 * 60;

var minutes4 = Math.floor(time4 / 60);
var seconds4 = time4 - minutes4 * 60;

var minutes5 = Math.floor(time5 / 60);
var seconds5 = time5 - minutes5 * 60;

var minutes6 = Math.floor(time6 / 60);
var seconds6 = time6 - minutes6 * 60;

var minus = 1;
var minus2 = 1;
var minus3 = 1;
var minus4 = 1;
var minus5 = 1;
var minus6 = 1;

var wheattm = 1200;
var space = -1500;
var gain = 2;

var wheat = 0;
var seeds = 6;

var whtord;

var mX1 = 385;
var mX2 = 385;
var mX3 = 385;
var mX4 = 905;
var mX5 = 905;
var mX6 = 905;


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

  if (localStorage.onels) {
    one = JSON.parse(localStorage.onels);
    two = JSON.parse(localStorage.twols);
    three = JSON.parse(localStorage.threels);
    four = JSON.parse(localStorage.fourls);
    five = JSON.parse(localStorage.fivels);
    six = JSON.parse(localStorage.sixls);
  }

  if (localStorage.timels) {
    time = localStorage.timels - finaldif;
  }

  if (localStorage.time2ls) {
    time2 = localStorage.time2ls - finaldif;
  }

  if (localStorage.time3ls) {
    time3 = localStorage.time3ls - finaldif;
  }

  if (localStorage.time4ls) {
    time4 = localStorage.time4ls - finaldif;
  }

  if (localStorage.time5ls) {
    time5 = localStorage.time5ls - finaldif;
  }

  if (localStorage.time6ls) {
    time6 = localStorage.time6ls - finaldif;
  }
  if (localStorage.wheatls) {
    wheat = Number(localStorage.wheatls);
  }
  if (localStorage.seedsls) {
    seeds = Number(localStorage.seedsls);
  }
  if (localStorage.whtordls) {
    whtord = localStorage.whtordls;
  } else {
    whtord = Math.floor((Math.random() * 30) + 1);
  }


  draw()
  checks()
}

// runs after test is finished and has an requestAnimationFrame
function draw() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  pixelRatio = window.devicePixelRatio || 1; /// get pixel ratio of device

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
  ctx.fillText(time, 50 , 50);
  ctx.fillText(time2, 300 , 50);
  ctx.fillText(time3, 450 , 50);
  ctx.fillText(time4, 570 , 50);
  ctx.fillText(time5, 700 , 50);
  ctx.fillText(time6, 830 , 50);

  ctx.font = "100 72px Roboto";
  ctx.fillText(minutes + ":" + seconds, mX1, 1420);
  ctx.fillText(minutes2 + ":" + seconds2, mX2, 1760);
  ctx.fillText(minutes3 + ":" + seconds3, mX3, 2110);
  ctx.fillText(minutes4 + ":" + seconds4, mX4, 1430);
  ctx.fillText(minutes5 + ":" + seconds5, mX5, 1780);
  ctx.fillText(minutes6 + ":" + seconds6, mX6, 2120);

  ctx.font = "100 82px Roboto";
  ctx.fillText(seeds, 825, 990);
  ctx.font = "100 90px Roboto";
  ctx.fillText(wheat, 560, 990);
  ctx.font = "100 72px Roboto";
  ctx.fillText(whtord, 200, 245);

  //requestAnimationFrame
  requestAnimationFrame(draw, 10);
}

setInterval(function () {
  minutes = Math.floor(time / 60);
  seconds = time - minutes * 60;

  minutes2 = Math.floor(time2 / 60);
  seconds2 = time2 - minutes2 * 60;

  minutes3 = Math.floor(time3 / 60);
  seconds3 = time3 - minutes3 * 60;

  minutes4 = Math.floor(time4 / 60);
  seconds4 = time4 - minutes4 * 60;

  minutes5 = Math.floor(time5 / 60);
  seconds5 = time5 - minutes5 * 60;

  minutes6 = Math.floor(time6 / 60);
  seconds6 = time6 - minutes6 * 60;

  if (time > 0) {
    minus = 1;
    time -= minus;
  }
  if (time <= 0) {
    time -= minus;
  }

  if (time2 > 0) {
    minus2 = 1;
    time2 -= minus2;
  }
  if (time2 <= 0) {
    time2 -= minus2;
  }

  if (time3 > 0) {
    minus3 = 1;
    time3 -= minus3;
  }
  if (time3 <= 0) {
    time3 -= minus3;
  }

  if (time4 > 0) {
    minus4 = 1;
    time4 -= minus4;
  }
  if (time4 <= 0) {
    time4 -= minus4;
  }

  if (time5 > 0) {
    minus5 = 1;
    time5 -= minus5;
  }
  if (time5 <= 0) {
    time5 -= minus5;
  }

  if (time6 > 0) {
    minus6 = 1;
    time6 -= minus6;
  }
  if (time6 <= 0) {
    time6 -= minus6;
  }

}, 1000);

function checks() {
  //one
  if (one === 1) {
    field.src = "images/field.png";
    time = 0;
    minus = 0;
    mX1 = 3000;
  }
  if (one === 2) {
    field.src = "images/mid.png";
    minus = 1;
    mX1 = 385;
  }
  if (one === 3) {
    field.src = "images/hay.png";
    mX1 = 3000;
  }
  if (one === 2 && time <= 0) {
    one = 3;
  }
//two
  if (two === 1) {
    field2.src = "images/field.png";
    time2 = 0;
    minus2 = 0;
    mX2 = 3000;
  }
  if (two === 2) {
    field2.src = "images/mid.png";
    minus2 = 1;
    mX2 = 385;
  }
  if (two === 3) {
    field2.src = "images/hay.png";
    mX2 = 3000;
  }
  if (two === 2 && time2 <= 0) {
    two = 3;
  }
//three
  if (three === 1) {
    field3.src = "images/field.png";
    time3 = 0;
    minus3 = 0;
    mX3 = 3000;
  }
  if (three === 2) {
    field3.src = "images/mid.png";
    minus3 = 1;
    mX3 = 385;
  }
  if (three === 3) {
    field3.src = "images/hay.png";
    mX3 = 3000;
  }
  if (three === 2 && time3 <= 0) {
    three = 3;
  }
//four
  if (four === 1) {
    field4.src = "images/field.png";
    time4 = 0;
    minus4 = 0;
    mX4 = 3000;
  }
  if (four === 2) {
    field4.src = "images/mid.png";
    minus4 = 1;
    mX4 = 905;
  }
  if (four === 3) {
    field4.src = "images/hay.png";
    mX4 = 3000;
  }
  if (four === 2 && time4 <= 0) {
    four = 3;
  }
//five
  if (five === 1) {
    field5.src = "images/field.png";
    time5 = 0;
    minus5 = 0;
    mX5 = 3000;
  }
  if (five === 2) {
    field5.src = "images/mid.png";
    minus5 = 1;
    mX5 = 905;
  }
  if (five === 3) {
    field5.src = "images/hay.png";
    mX5 = 3000;
  }
  if (five === 2 && time5 <= 0) {
    five = 3;
  }
//six
  if (six === 1) {
    field6.src = "images/field.png";
    time6 = 0;
    minus6 = 0;
    mX6 = 3000;
  }
  if (six === 2) {
    field6.src = "images/mid.png";
    minus6 = 1;
    mX6 = 905;
  }
  if (six === 3) {
    field6.src = "images/hay.png";
    mX6 = 3000;
  }
  if (six === 2 && time6 <= 0) {
    six = 3;
  }

  if (seeds < 0) {
    seeds = 0;
  }

  requestAnimationFrame(checks, 10);
}
