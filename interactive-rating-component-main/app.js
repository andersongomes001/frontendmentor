window.onload = () => {
  const thankYou = document.querySelector(".thank-you-state-start");
  const ratingStateStart = document.querySelector(".rating-state-start");
  const ratingValue = document.querySelectorAll(".rating-value");
  const btnSubmit = document.querySelector(".btn-submit");
  const selectedRating = document.querySelector(".selected-rating");

  thankYou.classList.add("disable");

  ratingValue.forEach((item) => {
    item.addEventListener("click", () => {
      setRating(item.innerHTML);
      clearRatingSelected();
      item.classList.add("active");
    });
  });

  btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    clearStateDisabled();
    thankYou.classList.remove("disable");
    ratingStateStart.classList.add("disable");
  });

  function clearStateDisabled() {
    const disabledDivs = document.querySelectorAll(".disable");
    disabledDivs.forEach((item) => {
      item.classList.remove("disabled");
    });
  }

  function clearRatingSelected() {
    const activeRating = document.querySelectorAll(".active");
    activeRating.forEach((item) => {
      item.classList.remove("active");
    });
  }

  function setRating(rating) {
    selectedRating.innerHTML = rating;
  }
};
