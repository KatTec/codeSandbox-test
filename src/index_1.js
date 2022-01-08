import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

var var1 = "var1";
console.log(var1);

// オブジェクト
const val4 = {
  name: "Abe",
  age: 22
};
console.log(val4.name);

val4.name = "Bebe";
console.log(val4.name);

// 配列
const val5 = ["dog", "bird"];
val5[0] = "wild";
console.log(val5[1], val5[0]);

// テンプレート文字列
console.log(`私の名前は ${val4.name} です`);

// アロー関数
const aaa = "aab";
const func2 = (arg1) => {
  console.log(`アロー関数 ${arg1}`);
  return aaa;
};
func2("func2です");

console.log(func2("cons.Log内"));

// 分割代入 ～オブジェクトは同じ要素名で受け取る～
const { age, name } = val4;
console.log(`名前は${name} 年齢は${age}`);
// const msg2 = `名前：${name} 年齢:${age}`;
// console.log(msg2);

// スプレット構文(...arg1)
const arg1 = [1, 2, 3];
console.log(arg1);
console.log(...arg1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(...arg1); // 3

// スプレット構文 まとめ(...arg1)
const arr2 = [1, 2, 3, 4, 5];
const [num01, num02, ...arr3] = arr2;
console.log(num01);
console.log(num02);
console.log(arr3);

// 配列のコピー・結合
const arr4 = [10, 20];
const arr5 = [100, 200];

const arr6 = [...arr4]; //コピー
console.log(arr6);

const arr7 = [...arr4, ...arr5]; //結合
console.log(arr7);

// mapやFilterを使った配列の処理
const nameArr = ["田中", "山田", "佐藤"];
console.log(nameArr); // (3) ["田中", "山田", "佐藤"]

const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2); // (3) ["田中", "山田", "佐藤"]

nameArr.map((name) => console.log(name));
// 田中
// 山田
// 佐藤

// 番号付与(arg2にindexを追加する)
nameArr.map((name, index) => console.log(`${index}番目は${name}さんです`));

const numArr = [1, 2, 3, 4, 5];
// あまりが１の数値をnumArr2に格納
const numArr2 = numArr.filter((num) => {
  if (num === 1) {
    console.log("dd1dd");
  }
  return num % 2 === 1;
});
console.log(numArr2); // (3) [1, 3, 5]
