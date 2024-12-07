const btn = document.getElementById("popup_btn");

const desktop = document.querySelector(".desktop");
const desktopActive = document.querySelector(".desktop-active");
const cardProfile = document.querySelector(".card_profile");
const brightness = document.querySelector(".brightness");
const popup = document.getElementById("popup");
const body = document.querySelector("body");

new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    const width = entry.contentRect.width;

    if (width > 768) {
      desktopActive.style.opacity = 0;
      desktop.style.opacity = 1;
    } else {
      desktopActive.style.opacity = 0;
      desktop.style.opacity = 1;
    }

    cardProfile.classList.remove("bg-dinamic");
  });
}).observe(body);

btn.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    if (desktop && desktopActive) {
      const isDesktopActiveVisible = desktopActive.style.opacity == 1;

      if (!isDesktopActiveVisible) {
        cardProfile.classList.add("bg-dinamic");
        desktopActive.style.opacity = 1;
        desktop.style.opacity = 0;
        brightness.style.filter = "brightness(100)";
      } else {
        cardProfile.classList.toggle("bg-dinamic");
        desktopActive.style.opacity = 0;
        desktop.style.opacity = 1;
        brightness.style.filter = "";
      }
    }
  } else if (popup) {
    popup.style.opacity = popup.style.opacity == 1 ? 0 : 1;
  }
});
