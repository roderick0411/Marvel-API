import {
  movingBandUp,
  movingBandDown,
  comicCovers,
  generateDistinctIndex,
} from "./Scripts/render-background.js";
import { searchSuggestions } from "./Scripts/fetch-functions.js";

const favorites = [];

const inputField = document.querySelector(".input-div input");
if (inputField) {
  inputField.addEventListener("keyup", (event) => {
    setTimeout(() => {
      searchSuggestions(event.target.value, favorites);
    }, 500);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  console.log(window.location);
  console.log(path);
  console.log("Page loaded");
  if (path === "/index.html") {
    const band1 = new movingBandUp(
      generateDistinctIndex(10, comicCovers.length)
    );
    const band2 = new movingBandDown(
      generateDistinctIndex(10, comicCovers.length)
    );
    const band3 = new movingBandUp(
      generateDistinctIndex(10, comicCovers.length)
    );
    const band4 = new movingBandDown(
      generateDistinctIndex(10, comicCovers.length)
    );
  }
});
