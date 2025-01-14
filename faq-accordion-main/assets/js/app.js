window.onload = () => {
  document.querySelectorAll(".dropdown-icon").forEach((item, index) => {
    item.addEventListener("click", () => {
      console.log(document.querySelectorAll(".response")[index]);
      if (new String(item.src).indexOf("minus") == -1) {
        item.src = "assets/images/icon-minus.svg";
        document.querySelectorAll(".response")[index].style.display = "inline";
      } else {
        item.src = "assets/images/icon-plus.svg";
        document.querySelectorAll(".response")[index].style.display = "none";
      }
    });
  });
};
