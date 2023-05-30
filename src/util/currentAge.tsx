function currentAge() {
  var today = new Date();
  var birthdate = new Date("11-8-1996");

  var age = today.getFullYear() - birthdate.getFullYear();
  var monthDiff = today.getMonth() - birthdate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthdate.getDate())
  ) {
    age--;
  }

  return age;
}

export default currentAge;
