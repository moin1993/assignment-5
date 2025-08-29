const now = new Date();
const timeString = now.toLocaleTimeString();

const card1Cost = 20;

const cardbtns = document.getElementsByClassName("card-btn");
for (let cardbtn of cardbtns) {
  cardbtn.addEventListener("click", function () {
    const topCoinElement = document.getElementById("top-coin");
    const topCoin = parseInt(topCoinElement.innerText);

    const title =
      cardbtn.parentNode.parentNode.parentNode.childNodes[3].childNodes[3]
        .innerText;

    const number = cardbtn.parentNode.parentNode.childNodes[6].innerText;

    if (topCoin < card1Cost) {
      alert("Not enough coins, 20 coins needed.");
      return;
    }

    const totalNew = topCoin - card1Cost;
    topCoinElement.innerText = totalNew;

    alert(`calling ${title} ${number} `);

    const recentCallHistory = document.getElementById("recent-call-history");
    const newCart = document.createElement("div");
    newCart.innerHTML = `<div class="flex justify-between items-center p-10">
            <div class="border-2 bg-blue-500">
              <h1>${title}</h1>
              <p>${number}</p>
            </div>
            <div>
              <p>${timeString}</p>
            </div>
          </div>`;

    recentCallHistory.append(newCart);
  });
}

const lovebtns = document.getElementsByClassName("love-btn");
for (let lovebtn of lovebtns) {
  lovebtn.addEventListener("click", function () {
    const topLove = document.getElementById("top-love");
    const topLoveElement = parseInt(topLove.innerText);

    const totalLove = topLoveElement + 1;
    topLove.innerText = totalLove;
  });
}

document.getElementById("btn-clear").addEventListener("click", function () {
  const recentCallHistory = document.getElementById("recent-call-history");
  recentCallHistory.innerHTML = "";
});

const copybtns = document.getElementsByClassName("copy-btn");
for (let copybtn of copybtns) {
  copybtn.addEventListener("click", function () {
    const number = copybtn.parentNode.parentNode.childNodes[6].innerText;
    navigator.clipboard.writeText(number).then(() => {
      alert(`number just copied ${number}`);
    });

    const topCopy = document.getElementById("top-copy");
    const topCopyElement = parseInt(topCopy.innerText);

    const totalCopy = topCopyElement + 1;
    topCopy.innerText = totalCopy;
  });
}
