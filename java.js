const now = new Date();
const timeString = now.toLocaleTimeString();

// console.log(timeString); // Example output: "9:05:30 AM" or "09:05:30" depending on locale

// const card1 = 20;

// document.getElementById("card-1").addEventListener("click", function (e) {
//   e.preventDefault();
//   //   console.log("card-1");
//   alert("20 getting minus");
//   const card1 = parseInt(document.getElementById("card-1").Value);
//   const topCoin = parseInt(document.getElementById("top-coin").innerText);

//   //   if (card1 < 20) {
//   //     alert("less then 20");
//   //     return;
//   //   }

//   const totalNew = topCoin - card1;
//   document.getElementById("top-coin").innerText = totalNew;
// });

const card1Cost = 20;

// document.getElementById("card-1").addEventListener("click", function (e) {
//   e.preventDefault();

//   const topCoinElement = document.getElementById("top-coin");
//   const topCoin = parseInt(topCoinElement.innerText);

//   // Check if there are enough coins before proceeding
//   if (topCoin < card1Cost) {
//     alert("Not enough coins. Please add more.");
//     return; // Stop the function here
//   }
//   // Deduct the coins
//   const totalNew = topCoin - card1Cost;
//   topCoinElement.innerText = totalNew;
//   // Show a success message
//   alert("20 coins have been deducted.");

// const now = new Date();
// const timeString = now.toLocaleTimeString();

// const recentCallHistory = document.getElementById("recent-call-history");
// const newCart = document.createElement("div");
// newCart.innerHTML = `<div class="flex justify-between items-center p-10">
//           <div class="border-2 bg-blue-500">
//             <h1>national emergency number</h1>
//             <p>999</p>
//           </div>
//           <div>
//             <p>${timeString}</p>
//           </div>
//         </div>`;

// recentCallHistory.append(newCart);

//   document.getElementById("time-string").textContent = timeString;
// });

const cardbtns = document.getElementsByClassName("card-btn");
for (let cardbtn of cardbtns) {
  cardbtn.addEventListener("click", function () {
    const topCoinElement = document.getElementById("top-coin");
    const topCoin = parseInt(topCoinElement.innerText);

    const title =
      cardbtn.parentNode.parentNode.parentNode.childNodes[3].childNodes[3]
        .innerText;
    // console.log(title);
    const number = cardbtn.parentNode.parentNode.childNodes[6].innerText;
    // console.log(number);

    // Check if there are enough coins before proceeding
    if (topCoin < card1Cost) {
      alert("Not enough coins, 20 coins needed.");
      return; // Stop the function here
    }
    // Deduct the coins
    const totalNew = topCoin - card1Cost;
    topCoinElement.innerText = totalNew;
    // Show a success message

    alert(`calling ${title} ${number} `);

    // const title =
    //   cardbtn.parentNode.parentNode.parentNode.childNodes[3].childNodes[3]
    //     .innerText;
    // // console.log(title);
    // const number = cardbtn.parentNode.parentNode.childNodes[5].innerText;
    // // console.log(number);

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

// cardbtn.addEventListener("click", function () {
//   const topLoveElement = document.getElementById("top-love");
//   const topLove = parseInt(topCoinElement.innerText);
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

    // alert(`number just copied ${number}`);
    const topCopy = document.getElementById("top-copy");
    const topCopyElement = parseInt(topCopy.innerText);

    const totalCopy = topCopyElement + 1;
    topCopy.innerText = totalCopy;
  });
}
