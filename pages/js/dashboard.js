//----------- array to show stats data --------------------
const stats = [
  {
    title: "Overview",
    items: [
      {
        name: "AUM",
        price: "$34",
      },
      {
        name: "$ZLP Pool",
        price: "$34",
      },
      {
        name: "24h Volume",
        price: "$0",
      },
      {
        name: "Long Positions",
        price: "$0",
      },
      {
        name: "Short Positions",
        price: "$0",
      },
    ],
  },
  {
    title: "Total Stats",
    items: [
      {
        name: "Total Fees",
        price: "$0",
      },
      {
        name: "Total Volume",
        price: "$0",
      },
      {
        name: "Floor Price Fund",
        price: "$629,950",
      },
    ],
  },
];

//----------- array to show ZLP data --------------------
const zlpindex = [
  {
    title: "ETH",
    img: "https://zomi.finance/static/media/ic_eth_24.6b1d8a1d.svg",
    items: [
      {
        name: "Price",
        price: "$1,775.01",
      },
      {
        name: "Pool",
        price: "$19",
      },
      {
        name: "Weight",
        price: "50.49% / 25.00",
      },
      {
        name: "Utilization",
        price: "0.00%",
      },
    ],
  },
  {
    title: "WBTC",
    img: "https://zomi.finance/static/media/ic_eth_24.6b1d8a1d.svg",
    items: [
      {
        name: "Price",
        price: "$33,627.66",
      },
      {
        name: "Pool",
        price: "$0",
      },
      {
        name: "Weight",
        price: "0.00% / 25.00%",
      },
      {
        name: "Utilization",
        price: "0.00%",
      },
    ],
  },

  {
    title: "APE",
    img: "https://zomi.finance/static/media/ic_eth_24.6b1d8a1d.svg",
    items: [
      {
        name: "Price",
        price: "$1.27",
      },
      {
        name: "Pool",
        price: "$0",
      },
      {
        name: "Weight",
        price: "0.00% / 25.00%",
      },
      {
        name: "Utilization",
        price: "0.00%",
      },
    ],
  },

  {
    title: "USDC",
    img: "https://zomi.finance/static/media/ic_eth_24.6b1d8a1d.svg",
    items: [
      {
        name: "Price",
        price: "$1.00",
      },
      {
        name: "Pool",
        price: "$14",
      },
      {
        name: "Weight",
        price: "49.50% / 25.00%",
      },
      {
        name: "Utilization",
        price: "0.00%",
      },
    ],
  },
];

//---- common function to list items ----------------------
function sectionPrice(items) {
  let htmlContent = "";
  items.forEach((item) => {
    htmlContent += `
      <div class="default-child-cont-portion-desc-area">
      <div style="color: #a9a9b0">${item.name}</div>
      <div>${item.price}</div>
      </div>
      `;
  });
  return htmlContent;
}

// --------------- Uses to show stats data -------------------------
let htmlContent = "";
stats.forEach((section) => {
  htmlContent += `<div class="default-child-cont-portion">
  <div class="default-child-cont-portion-title">${section.title}</div>
  <div class="blank_div"></div>
  <div class="default-child-cont-portion-desc">`;

  htmlContent += sectionPrice(section.items);

  htmlContent += `</div>
<div class="blank_div btn_hr"></div>
<div style="padding: 1rem">
<button class="btn">Connect Wallet</button>
</div>

</div>`;
});

document.getElementById("stats-desc").innerHTML = htmlContent;

// --------------- Uses to ZLP stats data -------------------------
let htmlContent2 = "";
zlpindex.forEach((section) => {
  htmlContent2 += `<div class="default-child-cont-portion">
  <div class="default-child-cont-portion-title">
  <img src=${section.img}>
  ${section.title}
  
  </div>
  <div class="blank_div"></div>
  <div class="default-child-cont-portion-desc">`;

  htmlContent2 += sectionPrice(section.items);

  htmlContent2 += `</div>
</div>`;
});

document.getElementById("zlp-index").innerHTML = htmlContent2;

// ------------------ uses to charts js of token area   ------------------
const ctx = document.getElementById("myChart");
const ctx2 = document.getElementById("myChart2");

new Chart(ctx, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [94, 6],
        backgroundColor: ["rgb(5, 152, 250)", "rgb(92, 10, 245)"],
        borderWidth: 0,
        cutout: 68,
      },
    ],
  },
});

new Chart(ctx2, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [50, 50],
        backgroundColor: ["rgb(5, 152, 250)", "rgb(92, 10, 245)"],
        borderWidth: 0,
        cutout: 68,
      },
    ],
  },
});
