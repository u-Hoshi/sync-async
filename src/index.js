import "./styles.css";

// 非同期処理とは
// 通信が発生する処理で起きる、実行完了を待たずに並行して次の処理を実行する

// 3.2.1とカウントダウンさせたい

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementsByClassName("btn5");
const btn5_1 = document.getElementById("btn5");

btn1.addEventListener("click", function () {
  setTimeout(() => console.log(3), 1000);
  setTimeout(() => console.log(2), 1000);
  setTimeout(() => console.log(1), 1000);
});
// これだと３つとも同じバックグラウンドに送られるため、３カウントともに１秒後に出力される

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

// 俗に言うJSのコールバック地獄
// めっちゃ複雑
// で俺が生まれたってわけ

// Promiseは連続した非同期処理をフラットにかける
// 状態をもつ

btn3.addEventListener("click", () => {
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(3);
      resolve();
    }, 1000);
  })
    .then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(2);
          resolve();
        }, 1000);
      });
    })
    .then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(1);
          resolve();
        }, 1000);
      });
    });
});

// これでもかなり描きやすくなったけどもっと見やすくしたいよね、、、

btn4.addEventListener("click", () => {
  // async function func() {
  const func = async () => {
    await log(3);
    await log(2);
    await log(1);
  };
  // function log(num) {
  const log = (num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(num);
        resolve();
      }, 1000);
    });
  };

  func(); //関数だから書いたsだけでは実行されない
});

btn5[0].addEventListener("click", () => {
  // console.log(1);
  // setTimeout(function () {
  //   console.log(2);
  // }, 1000);
  // console.log(3);
  const time = () => {
    return new Promise((resolve) => {
      setTimeout(function sample() {
        console.log(2);
      }, 1000);
    });
  };

  const time2 = () => {
    return new Promise((resolve) => {
      setTimeout(function sample() {
        console.log(3);
      }, 500);
    });
  };

  const countFnc = async () => {
    await time();
    await time2();
  };
  countFnc();
});
