let user = {
  userName: "홍길동",
  userAge: 20,
  nextAge: function () {
    this.userAge++;
    return this.userAge;
  },
};

console.log(user);
console.log(user["userName"]);
console.log(user.userName);
user.userName = "김철수";
console.log(user.userName);

// 메소드 호출하여 속성 변경
console.log(user.nextAge());
console.log(user);

// 객체의 프로퍼티 추가/수정
user.height = 170.5;
console.log(user);

user.height = 173.5;
console.log(user);

// 프로퍼티 삭제
delete user.height;
console.log(user);
