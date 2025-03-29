// // 현재 날짜와 시간
// const now = new Date();

// // UTC+9 시간대 (한국 시간)
// const optionsKST = { timeZone: "Asia/Seoul", timeZoneName: "short" };
// const timeInKST = now.toLocaleString("ko-KR", optionsKST);
// console.log(`현재 한국 시간 (UTC+9): ${timeInKST}`);

// // UTC 시간대
// const optionsUTC = { timeZone: "UTC", timeZoneName: "short" };
// const timeInUTC = now.toLocaleString("en-GB", optionsUTC);
// console.log(`현재 UTC 시간: ${timeInUTC}`);

// // UTC+8 시간대 (예: 베이징 시간)
// const optionsCST = { timeZone: "Asia/Shanghai", timeZoneName: "short" };
// const timeInCST = now.toLocaleString("zh-CN", optionsCST);
// console.log(`현재 베이징 시간 (UTC+8): ${timeInCST}`);

function getTimeByOffset(offset) {
  const now = new Date();
  const timeWithOffset = new Date(
    now.getTime() + (offset * 60 + now.getTimezoneOffset()) * 60000
  );

  return timeWithOffset.toLocaleString();
}

// UTC+9 (한국 시간)
console.log(`현재 UTC+9 시간: ${getTimeByOffset(9)}`);

// UTC+0 (기준 시간)
console.log(`현재 UTC+0 시간: ${getTimeByOffset(0)}`);

// UTC+8 (베이징 시간)
console.log(`현재 UTC+8 시간: ${getTimeByOffset(8)}`);
