
function maximumLength(arr) {
  let max = Math.max(...arr.map((str) => str.length));
  return arr.filter((str) => str.length === max);
}
console.log(maximumLength(["bltm", "ice", "cream", "cake", "bbq"]));
// bai 2
users = [
  {
    name: "Bùi Công Sơn",
    age: 30,
    isStatus: true,
  },
  {
    name: "Nguyễn Thu Hằng",
    age: 27,
    isStatus: false,
  },
  {
    name: "Phạm Văn Dũng",
    age: 20,
    isStatus: false,
  },
];

// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
function userAgeAndIsStatus(users) {
  return users.filter((user) => user.age > 25 && user.isStatus);
}
console.log(userAgeAndIsStatus(users));

function ageGraduallyIncreases(users) {
  return users.slice().sort((a, b) => a.age - b.age);
}
console.log(ageGraduallyIncreases(users));

//  Bài 3. Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần
function getCountElement(arr) {
  const count = {};
  arr.forEach((str) => {
    if (count[str]) {
      count[str]++;
    } else {
      count[str] = 1;
    }
  });
  return count;
}

console.log(getCountElement(["yi", "er", "san", "yi", "yi", "san"]));

