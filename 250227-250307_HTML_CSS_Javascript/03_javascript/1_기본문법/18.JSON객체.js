// object --> json
let user1 = { userName: "John", age: 30 };
console.log(user1, typeof user1);
//object --> JSON
let user1Json = JSON.stringify(user1);
console.log(user1Json, typeof user1Json);

// json --> object
let user1Obj = JSON.parse(user1Json);
console.log(user1Obj, typeof user1Obj);
