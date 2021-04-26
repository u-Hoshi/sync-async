import "./styles.css";

// 非同期処理とは
// 通信が発生する処理で起きる、実行完了を待たずに並行して次の処理を実行する

// 3.2.1とカウントダウンさせたい

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

btn1.addEventListener("click", function () {
  setTimeout(() => console.log(3), 1000);
  setTimeout(() => console.log(2), 1000);
  setTimeout(() => console.log(1), 1000);
});

btn2.addEventListener("click", function () {
  setTimeout(() => {
    console.log(3);
    setTimeout(() => {
      console.log(2);
      setTimeout(() => {
        console.log(1);
      }, 1000);
    }, 1000);
  }, 1000);
});
