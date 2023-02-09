var lemonadeChange = function (bills) {
  let fiv = 0;
  let ten = 0;
  let tw = 0;

  for (let n of bills) {
    if (n == 5) {
      fiv++;
    } else if (n == 10) {
      if (fiv > 0) {
        ten++;
        fiv--;
      } else {
        return false;
      }
    } else if (n == 20) {
      if (fiv > 0 && ten > 0) {
        tw++;
        ten--;
        fiv--;
      } else if (fiv >= 3 && ten === 0) {
        tw++;
        fiv = fiv - 3;
      } else {
        return false;
      }
    }
  }

  return true;
};

let bills1 = [5,5,5,10,20]
let bills2 = [5,5,10,10,20]
console.log(lemonadeChange(bills1))
console.log(lemonadeChange(bills2))