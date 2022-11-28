function yCalculation(leapYear) {
  const reminder = leapYear % 4;
  if (reminder == 0) {
    console.log("Your year is a leap year.");
  } else {
    console.log("Your year is not a leap year.");
  }
}
yCalculation(2022);
yCalculation(2024)
