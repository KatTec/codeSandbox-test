// map
const xxxArr = ["AAA", "BBB", "CCC"];
console.log(xxxArr);

xxxArr.map((name, i) => {
  if (i === 2) {
    console.log("IndexNo2を呼び出します");
  }
  console.log(`No:${i} is ${name}`);
  return i;
});

// 三項演算子
const val1 = 10 < 3 ? "trueです" : "falseです";
console.log(val1); //false

const num = 1300;
console.log(num.toLocaleString()); // 1,300

const num2 = "1300";
const formattedNum =
  typeof num2 === "number" ? num.toLocaleString() : "数値を入れるように";
console.log(formattedNum); // 数値をいれるように

const checkSum = (num3, num4) => {
  return num3 + num4 > 100 ? "over100!!" : "under100";
};
console.log(checkSum(30, 50)); // under100

// 論理演算子の本当の意味
// ||は左側がfalseなら右側を実行する。という意味
// &&は左側がtrue なら右側を返す
const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("1 or 2 is True");
}

if (flag1 && flag2) {
  console.log("1 or 2 is True");
} else {
  console.log("1 and 2 is False");
}
