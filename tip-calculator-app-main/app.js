window.onload = () => {
  const tipButtons = document.querySelectorAll(".tip-value");
  const billInput = document.getElementById("bill");
  const peopleInput = document.getElementById("numer-of-people");
  const resetButton = document.querySelector(".reset");
  const customTipInput = document.querySelector(".tip-custom");
  const amountOutput = document.getElementById("amount");
  const totalOutput = document.getElementById("total");

  tipButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      tipButtons.forEach((btn) => btn.classList.remove("tip-active"));
      e.target.classList.add("tip-active");
      customTipInput.value = "";
      calculate();
    });
  });

  customTipInput.addEventListener("input", () => {
    tipButtons.forEach((btn) => btn.classList.remove("tip-active"));
    calculate();
  });

  billInput.addEventListener("input", calculate);
  peopleInput.addEventListener("input", calculate);

  resetButton.addEventListener("click", reset);

  reset();

  function reset() {
    tipButtons.forEach((btn) => btn.classList.remove("tip-active"));
    customTipInput.value = "";
    billInput.value = "";
    peopleInput.value = "";
    amountOutput.textContent = `$0`;
    totalOutput.textContent = `$0`;
    resetButton.disabled = true;
  }

  function calculate() {
    const bill = parseFloat(billInput.value) || 0;
    const people = parseInt(peopleInput.value) || 1;

    const activeTip = document.querySelector(".tip-active");
    const tip = activeTip
      ? parseFloat(activeTip.value)
      : parseFloat(customTipInput.value) || 0;

    if (people <= 0 || bill <= 0) {
      resetButton.disabled = true;
      return;
    }

    const tipAmount = (bill * (tip / 100)) / people;
    const totalPerPerson = (bill + bill * (tip / 100)) / people;
    amountOutput.textContent = `$${tipAmount.toFixed(2)}`;
    totalOutput.textContent = `$${totalPerPerson.toFixed(2)}`;
    resetButton.disabled = false;
  }
};
