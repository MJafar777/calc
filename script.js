////////////////////////////////// VARIABLES ///////////////////////////////////////////////

const oyna = document.querySelector(".oyna");
const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");
const item4 = document.querySelector(".item4");
const item5 = document.querySelector(".item5");
const item6 = document.querySelector(".item6");
const item7 = document.querySelector(".item7");
const item8 = document.querySelector(".item8");
const item9 = document.querySelector(".item9");
const item0 = document.querySelector(".item0");
const itemnuqta = document.querySelector(".itemnuqta");
const ac = document.querySelector(".ac");
const plusAyrish = document.querySelector(".plusAyrish");
const foiz = document.querySelector(".foiz");
const bolish = document.querySelector(".bolish");
const kopaytirish = document.querySelector(".kopaytirish");
const ayrish = document.querySelector(".ayrish");
const qoshish = document.querySelector(".qoshish");
const javob = document.querySelector(".javob");

////////////////////////////////// MAIN  FUNCTION///////////////////////////////////////////////

let oynaArr = [];
function oynaFun() {
  let oynaraqam = oynaArr.join("");
  oyna.textContent = oynaraqam;
}

////////////////////////////////// LISTENERS///////////////////////////////////////////////

item0.addEventListener("click", () => {
  oynaArr.push(0);
  oynaFun();
});
item1.addEventListener("click", () => {
  oynaArr.push(1);
  oynaFun();
});
item2.addEventListener("click", () => {
  oynaArr.push(2);
  oynaFun();
});
item3.addEventListener("click", () => {
  oynaArr.push(3);
  oynaFun();
});
item4.addEventListener("click", () => {
  oynaArr.push(4);
  oynaFun();
});
item5.addEventListener("click", () => {
  oynaArr.push(5);
  oynaFun();
});
item6.addEventListener("click", () => {
  oynaArr.push(6);
  oynaFun();
});
item7.addEventListener("click", () => {
  oynaArr.push(7);
  oynaFun();
});
item8.addEventListener("click", () => {
  oynaArr.push(8);
  oynaFun();
});
item9.addEventListener("click", () => {
  oynaArr.push(9);
  oynaFun();
});
itemnuqta.addEventListener("click", () => {
  oynaArr.push(".");
  oynaFun();
});
qoshish.addEventListener("click", () => {
  oynaArr.push("+");
  oynaFun();
});
ayrish.addEventListener("click", () => {
  oynaArr.push("-");
  oynaFun();
});
kopaytirish.addEventListener("click", () => {
  oynaArr.push("*");
  oynaFun();
});
bolish.addEventListener("click", () => {
  oynaArr.push("/");
  oynaFun();
});
foiz.addEventListener("click", () => {
  oynaArr.push("%");
  oynaFun();
});
ac.addEventListener("click", () => {
  oyna.textContent = "";
  oynaArr = [];
});
plusAyrish.addEventListener("click", () => {
  oynaArr.pop();
  oynaFun();
});

////////////////////////////////// FUNCTIONS///////////////////////////////////////////////

javob.addEventListener("click", () => {
  let tekshirish = oyna.textContent.split("");
  if (tekshirish.includes("+")) {
    let qosh = oyna.textContent.split("+");
    let qosh1 = +qosh[0];
    let qosh2 = +qosh[1];
    let qoshnatija = qosh1 + qosh2;
    oyna.textContent = qoshnatija;
  }
  if (tekshirish.includes("-")) {
    let ayrish = oyna.textContent.split("-");
    let ayrish1 = +ayrish[0];
    let ayrish2 = +ayrish[1];
    let ayrishnatija = ayrish1 - ayrish2;
    oyna.textContent = ayrishnatija;
  }
  if (tekshirish.includes("*")) {
    let kopaytirish = oyna.textContent.split("*");
    let kopaytirish1 = +kopaytirish[0];
    let kopaytirish2 = +kopaytirish[1];
    let kopaytirishnatija = kopaytirish1 * kopaytirish2;
    oyna.textContent = kopaytirishnatija;
  }
  if (tekshirish.includes("/")) {
    let bolish = oyna.textContent.split("/");
    let bolish1 = +bolish[0];
    let bolish2 = +bolish[1];
    let bolishnatija = bolish1 / bolish2;
    oyna.textContent = bolishnatija;
  }
  if (tekshirish.includes("%")) {
    let bolish = oyna.textContent.split("%");
    let bolish1 = +bolish[0];
    let bolish2 = +bolish[1];
    let bolishnatija = bolish1 % bolish2;
    oyna.textContent = bolishnatija;
  }
  if (tekshirish.includes("+") && tekshirish.includes("*")) {
    let otaArr = tekshirish.join("").split("");
    if (otaArr.indexOf("*") < otaArr.indexOf("+")) {
      let strArr = oynaArr.join("");
      let bolish = strArr.split("*");
      let qiymat1 = +bolish[0];
      let arr2 = bolish[1].split("+");
      let qiymat2 = +arr2[0];
      let qiymat3 = +arr2[1];
      let bolishnatija = qiymat1 * qiymat2 + qiymat3;
      oyna.textContent = bolishnatija;
    } else {
      let strArr = oynaArr.join("");
      let bolish = strArr.split("+");
      let qiymat1 = +bolish[0];
      let arr2 = bolish[1].split("*");
      let qiymat2 = +arr2[0];
      let qiymat3 = +arr2[1];
      let bolishnatija = qiymat1 + qiymat2 * qiymat3;
      oyna.textContent = bolishnatija;
    }
  }
  if (tekshirish.includes("-") && tekshirish.includes("*")) {
    let otaArr = tekshirish.join("").split("");
    if (otaArr.indexOf("*") < otaArr.indexOf("-")) {
      let strArr = oynaArr.join("");
      let bolish = strArr.split("*");
      let qiymat1 = +bolish[0];
      let arr2 = bolish[1].split("-");
      let qiymat2 = +arr2[0];
      let qiymat3 = +arr2[1];
      let bolishnatija = qiymat1 * qiymat2 - qiymat3;
      oyna.textContent = bolishnatija;
    } else {
      let strArr = oynaArr.join("");
      let bolish = strArr.split("-");
      let qiymat1 = +bolish[0];
      let arr2 = bolish[1].split("*");
      let qiymat2 = +arr2[0];
      let qiymat3 = +arr2[1];
      let bolishnatija = qiymat1 - qiymat2 * qiymat3;
      oyna.textContent = bolishnatija;
    }
  }
  if (tekshirish.includes("+") && tekshirish.includes("/")) {
    let otaArr = tekshirish.join("").split("");
    if (otaArr.indexOf("/") < otaArr.indexOf("+")) {
      let strArr = oynaArr.join("");
      let bolish = strArr.split("/");
      let qiymat1 = +bolish[0];
      let arr2 = bolish[1].split("+");
      let qiymat2 = +arr2[0];
      let qiymat3 = +arr2[1];
      let bolishnatija = qiymat1 / qiymat2 + qiymat3;
      oyna.textContent = bolishnatija;
    } else {
      let strArr = oynaArr.join("");
      let bolish = strArr.split("+");
      let qiymat1 = +bolish[0];
      let arr2 = bolish[1].split("/");
      let qiymat2 = +arr2[0];
      let qiymat3 = +arr2[1];
      let bolishnatija = qiymat1 + qiymat2 / qiymat3;
      oyna.textContent = bolishnatija;
    }
  }
  if (tekshirish.includes("-") && tekshirish.includes("/")) {
    let otaArr = tekshirish.join("").split("");
    if (otaArr.indexOf("/") < otaArr.indexOf("-")) {
      let strArr = oynaArr.join("");
      let bolish = strArr.split("/");
      let qiymat1 = +bolish[0];
      let arr2 = bolish[1].split("-");
      let qiymat2 = +arr2[0];
      let qiymat3 = +arr2[1];
      let bolishnatija = qiymat1 / qiymat2 - qiymat3;
      oyna.textContent = bolishnatija;
    } else {
      let strArr = oynaArr.join("");
      let bolish = strArr.split("-");
      let qiymat1 = +bolish[0];
      let arr2 = bolish[1].split("/");
      let qiymat2 = +arr2[0];
      let qiymat3 = +arr2[1];
      let bolishnatija = qiymat1 - qiymat2 / qiymat3;
      oyna.textContent = bolishnatija;
    }
  }
  if (tekshirish.includes("*") && tekshirish.includes("/")) {
    let otaArr = tekshirish.join("").split("");
    if (otaArr.indexOf("/") < otaArr.indexOf("*")) {
      let strArr = oynaArr.join("");
      let bolish = strArr.split("/");
      let qiymat1 = +bolish[0];
      let arr2 = bolish[1].split("*");
      let qiymat2 = +arr2[0];
      let qiymat3 = +arr2[1];
      let bolishnatija = (qiymat1 / qiymat2) * qiymat3;
      oyna.textContent = bolishnatija;
    } else {
      let strArr = oynaArr.join("");
      let bolish = strArr.split("*");
      let qiymat1 = +bolish[0];
      let arr2 = bolish[1].split("/");
      let qiymat2 = +arr2[0];
      let qiymat3 = +arr2[1];
      let bolishnatija = (qiymat1 * qiymat2) / qiymat3;
      oyna.textContent = bolishnatija;
    }
  }
  oynaArr = [];
});
