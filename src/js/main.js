/// CSS
import "../assets/css/reset.css";
import "../assets/css/bootstrap.css";
import "../assets/css/animate.css";
import "../assets/css/main.css";

// JS
import modals from "./modules/modals";
import sliders from "./modules/sliders";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  modals();
  sliders(
    ".feedback-slider-item",
    "horizontal",
    ".main-prev-btn",
    ".main-next-btn",
  );
  sliders(".main-slider-item", "vertical");
});
