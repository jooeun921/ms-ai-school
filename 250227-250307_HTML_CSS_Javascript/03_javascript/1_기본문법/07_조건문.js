// 현재 기온이 30도 이상이면 집에 있기
// 20도 이상이면 공원
// 10도 이상이면 카페
// 10도 미만이면 영화관

let temperature = 27;
if (temperature >= 30) {
  console.log("집에 있기");
} else if (temperature >= 20) {
  console.log("공원");
} else if (temperature >= 10) {
  console.log("카페");
} else if (temperature < 10) {
  console.log("영화관");
}
