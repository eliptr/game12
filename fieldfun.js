
function fieldcl() {
  if (one === 1 && seeds > 0) {
    one = 2;
    time = wheattm;
    seeds -= 1;
  }

  if (one === 3) {
    wheat += 2;
    one = 1;
  }
}

function fieldcl2() {
  if (two === 1 && seeds > 0) {
    two = 2;
    time2 = wheattm;
    seeds -= 1;
  }

  if (two === 3) {
    wheat += 2;
    two = 1;
  }
}

function fieldcl3() {
  if (three === 1 && seeds > 0) {
    three = 2;
    time3 = wheattm;
    seeds -= 1;
  }

  if (three === 3) {
    wheat += 2;
    three = 1;
  }
}

function fieldcl4() {
  if (four === 1 && seeds > 0) {
    four = 2;
    time4 = wheattm;
    seeds -= 1;
  }
  if (four === 3) {
    wheat += 2;
    four = 1;
  }
}

function fieldcl5() {
  if (five === 1 && seeds > 0) {
    five = 2;
    time5 = wheattm;
    seeds -= 1;
  }
  if (five === 3) {
    wheat += 2;
    five = 1;
  }
}

function fieldcl6() {
  if (six === 1 && seeds > 0) {
    six = 2;
    time6 = wheattm;
    seeds -= 1;
  }
  if (six === 3) {
    wheat += 2;
    six = 1;
  }
}

function buycl() {
  seeds += 1;
}
