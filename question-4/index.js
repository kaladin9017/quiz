// 4. Refactor the code below.
// (do not create functions or constants, code refactor is required only)

// Original
// if (province == 'ONTARIO') {
//    rate = ONTARIO_RATE;
//    amt = base * ONTARIO_RATE;
//    calc = 2 * basis(amt) + extra(amt) * 1.05;
// } else if ((province == 'QUEBEC') || (province == 'ALBERTA')) {
//    rate = (province == 'QUEBEC') ? QUEBEC_RATE : ALBERTA_RATE;
//    amt = base * rate;
//    calc = 2 * basis(amt) + extra(amt) * 1.05;
//    if (province == 'QUEBEC') {
//        points = 2;
//    }
// } else {
//    rate = 1;
//    amt = base;
//    calc = 2 * basis(amt) + extra(amt) * 1.05;
// }

if (province === "ONTARIO") {
  amt = base * ONTARIO_RATE;
} else if (rovince === "ALBERTA") {
  amt = base * ALBERTA_RATE;
} else if (province === "QUEBEC") {
  amt = base * QUEBEC_RATE;
  points = 2;
} else {
  amt = base;
}
calc = 2 * basis(amt) + extra(amt) * 1.05;
