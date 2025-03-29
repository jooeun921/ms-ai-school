// 요일 이름 변환하기 (0:Sun ~ 6:Sat)
let week = 5;
let weekName;
switch (week) {
  case 0:
    weekName = "Sun";
    break;
  case 1:
    weekName = "Mon";
    break;
  case 2:
    weekName = "Tue";
    break;
  case 3:
    weekName = "Wed";
    break;
  case 4:
    weekName = "Thu";
    break;
  case 5:
    weekName = "Fri";
    break;
  case 6:
    weekName = "Sat";
    break;
  default:
    weekName = "Invalid Week";
}
console.log(weekName);
