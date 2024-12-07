const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

let json = [];
fetch("/data.json")
  .then((response) => {
    if (!response.ok) return console.log("Oops! Something went wrong.");
    return response.json();
  })
  .then((data) => {
    console.log(data);
    json = data;
    changeTimeframe("daily");
  });

const changeTimeframe = (data) => {
  json.map((x) => {
    const card = new String(x.title).replace(" ", "").toLowerCase().trim();
    const content = x.timeframes[data];

    document.querySelector(
      `div.${card}.card > div > div.header > h1`
    ).textContent = `${x.title}`;

    document.querySelector(
      `div.${card}.card > div > div.card-body > span.span-hrs`
    ).textContent = `${content.current}Hrs`;

    document.querySelector(
      `div.${card}.card > div > div.card-body > span.last`
    ).textContent = `Last ${x.title} - ${content.previous}hrs`;
  });
};
