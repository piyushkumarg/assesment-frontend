
// ------------ array to show vest section-----------------------
const vest = [
  {
    title: "$ZOMI Vault",
    items: [
      {
        name: "Staked Tokens",
        price: "...",
      },
      {
        name: "Reserved for Vesting",
        price: "0.00 / ...",
      },
      {
        name: "Vesting Status",
        price: "0.0000 / 0.0000",
      },
      {
        name: "Claimable",
        price: "0.0000 $ZOMI",
      },
    ],
    buttons: [
      {
        name: "Connect Wallet",
      },
    ],
  },
  {
    title: "$ZLP Vault",
    items: [
      {
        name: "Staked Tokens",
        price: "... $ZLP",
      },
      {
        name: "Reserved for Vesting",
        price: "0.00 / ...",
      },
      {
        name: "Vesting Status",
        price: "0.0000 / 0.0000",
      },
      {
        name: "Claimable",
        price: "0.0000 $ZOMI",
      },
    ],
    buttons: [
      {
        name: "Connect Wallet",
      },
    ],
  },
];

// ------------ array to show earn section-----------------------
const earn = [
  {
    title: "$ZOMI",
    items: [
      {
        name: "Price",
        price: "$0.00",
      },
      {
        name: "Wallet",
        price: "... $ZOMI ($...)",
      },
      {
        name: "Staked",
        price: "... $ZOMI ($...)",
      },
    ],
    items2: [
      {
        name: "APR",
        price: "...%",
      },
      {
        name: "Rewards",
        price: "$...",
      },
      {
        name: "Multiplier Points APR",
        price: "100.00%",
      },
      {
        name: "Boost Percentage",
        price: "...%",
      },
    ],
    items3: [
      {
        name: "Total Staked",
        price: "0 $ZOMI ($...)",
      },
      {
        name: "Total Supply",
        price: "10,000 $ZOMI ($10)",
      },
    ],
    buttons: [
      {
        name: "Buy $ZOMI",
      },
    ],
  },
  {
    title: "Total Rewards",
    items: [
      {
        name: "ETH (WETH)",
        price: "...($...)",
      },
      {
        name: "$ZOMI",
        price: "...($...)",
      },
      {
        name: "Escrowed $ZOMI",
        price: "...($...)",
      },
      {
        name: "Multiplier Points",
        price: "...",
      },
      {
        name: "Multiplier Points",
        price: "...",
      },
      {
        name: "Total",
        price: "$...",
      },
    ],
    items2: [],
    items3: [],
    buttons: [
      {
        name: "Connect Wallet",
      },
    ],
  },
  {
    title: "$ZLP (Ethereum)",
    items: [
      {
        name: "Price",
        price: "$...",
      },
      {
        name: "Wallet",
        price: "... $ZLP ($...)",
      },
      {
        name: "Staked",
        price: "... $ZLP ($...)",
      },
    ],
    items2: [
      {
        name: "APR",
        price: "...%",
      },
      {
        name: "Rewards",
        price: "$...",
      },
    ],
    items3: [
      {
        name: "Total Staked",
        price: "... $ZLP ($...)",
      },
      {
        name: "Total Supply",
        price: "... $ZLP ($...)",
      },
    ],
    buttons: [
      {
        name: "Buy $ZLP",
      },
      {
        name: "Sell $ZLP",
      },
    ],
  },
  {
    title: "Escrowed $ZOMI",
    items: [
      {
        name: "Price",
        price: "$0.00",
      },
      {
        name: "Wallet",
        price: "Escrowed $ZOMI",
      },
      {
        name: "Staked",
        price: "... esZOMI ($...)",
      },
    ],
    items2: [
      {
        name: "APR",
        price: "...%",
      },
      {
        name: "Rewards",
        price: "100%",
      },
    ],
    items3: [
      {
        name: "Total Staked",
        price: "... esZOMI ($...)",
      },
      {
        name: "Total Supply",
        price: "1,023,379 esZOMI ($1,040)",
      },
    ],
    buttons: [
      {
        name: "Connect Wallet",
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

//---- common function to show buttons ----------------------
function sectionButton(items) {
  let htmlContent = "";
  items.forEach((item) => {
    htmlContent += `
  
  <button class="btn">${item.name}</button>
 
  `;
  });
  return htmlContent;
}


// --------------- Uses to show vest data -------------------------
let htmlContent = "";
vest.forEach((section) => {
  htmlContent += `<div class="default-child-cont-portion">
    <div class="default-child-cont-portion-title">${section.title}</div>
    <div class="blank_div"></div>
    <div class="overview_bottom">`;

  htmlContent += sectionPrice(section.items);

  htmlContent += `</div>
  <div class="blank_div btn_hr"></div>
  <div style="padding: 1rem">
  ${sectionButton(section.buttons)}
  </div>

  </div>`;
});

document.getElementById("vest").innerHTML = htmlContent;


// --------------- Uses to show earn data -------------------------
let htmlContent2 = "";
console.log(earn);
earn.forEach((section) => {
  htmlContent2 += `<div class="default-child-cont-portion">
    <div class="default-child-cont-portion-title">${section.title}</div>
    <div class="blank_div"></div>
    <div class="overview_bottom">`;

  htmlContent2 += sectionPrice(section.items);
  section.items2.length !== 0
    ? (htmlContent2 += `<div class="blank_div" ></div>`)
    : null;
  htmlContent2 += sectionPrice(section.items2);
  section.items2.length !== 0
    ? (htmlContent2 += `<div class="blank_div" ></div>`)
    : null;
  htmlContent2 += sectionPrice(section.items3);

  htmlContent2 += `</div>
  <div class="blank_div btn_hr"></div>
  <div style="padding: 1rem">
  ${sectionButton(section.buttons)}
  </div>

  </div>`;
});

document.getElementById("earn").innerHTML = htmlContent2;
