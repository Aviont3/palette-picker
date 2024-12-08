import { addPaletteToList, addEachPalette, temperature } from "./dom-helpers";
import "./style.css";
import {
  getPalettes,
  initializePalettesIfEmpty,
  addPalette,
  deletePalette,
} from "./local-storage.js";

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const newPalette = {
    title: form.paletteName.value,
    colors: [form.color1.value, form.color2.value, form.color3.value],
    uuid: crypto.randomUUID(),
    temperature: form.temperature.value,
  };

  /*
  const formData = new FormData(form)
  const formObject = Object.formEntries(formData)
  const { title, color1, ..... } = formObject
  */
  //local
  addPalette(newPalette);
  //dom
  addPaletteToList(newPalette);
  form.reset();
};
const handleDelete = (e) => {
  if (!e.target.matches("button.delete")) return;

  //find the li that this button is in
  const li = e.target.closest("li");
  const uuid = li.dataset.uuid;
  li.remove();
  deletePalette(uuid);
  console.log(e.target);
};
export const setupCopyButtons = () => {
  const copyButtons = document.querySelectorAll("button.copy");

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const hexCodeSpan = button.querySelector(".hexCode");

      if (hexCodeSpan) {
        const textToCopy = hexCodeSpan.textContent;
        navigator.clipboard
          .writeText(textToCopy)
          .then(() => {
            console.log("Copied to clipboard:", textToCopy);

            button.textContent = "Copied!";
            setTimeout(() => {
              button.innerHTML = `Copy <br> <span class="hexCode">${textToCopy}</span>`;
            }, 1000);
          })
          .catch((err) => {
            console.error("Failed", err);
          });
      } else {
        console.error("No span with the class 'hexCode' found.");
      }
    });
  });
};

const main = () => {
  initializePalettesIfEmpty();
  addEachPalette(getPalettes());
  setupCopyButtons();
  document
    .querySelector("form#create-palette")
    .addEventListener("submit", handleSubmit);
  document.querySelector("ul").addEventListener("click", handleDelete);
};
main();
