export const addEachPalette = (palette) => {
  Object.values(palette).forEach(addPaletteToList);
};

export const addPaletteToList = (palette) => {
  console.log(palette);
  const li = document.createElement("li");
  const paletteList = document.querySelector("ul#created-palette");
  li.innerHTML = `
  <header><h2>${palette.title}</h2><header>
  <div id="colors">   
  <label style="background-color:${palette.colors[0]}" class="text" for="color1"><span class="text">text</span> example</label>
  <button type="button" id="color1" name="color1" class="copy"> copy <br> <span class="hexCode"> ${palette.colors[0]}</span> </button>
  <br>
  <label style="background-color:${palette.colors[1]}" class="text" for="color2"><span class="text">text</span> example</label>
  <button type="button" id="color2" name="color2" class="copy"> copy <br> <span class="hexCode">${palette.colors[1]}</span></button>
  <br>
  <label style="background-color:${palette.colors[2]}" class="text" for="color3"><span class="text">text</span> example</label>
  <button type="button" id="color3" name="color3" class="copy"> copy <br> <span class="hexCode">${palette.colors[2]} </span></button>
  </div>
  <button class="delete" type="button">Delete</button>
  <footer><h4>${palette.temperature}</h4></footer>`;
  paletteList.append(li);
  //li.textContent =
  li.dataset.uuid = palette.uuid;
};

export const temperature = () => {
  const temp = document.querySelector("ul");
  console.log(temp);
  if (temp.textContent === "neutral") {
    temp.style.backgroundColor = "gray";
  } else if (li.textContent === "warm") {
    temp.style.backgroundColor = "red";
  } else if (temp.textContent === "cool") {
    temp.style.backgroundColor = "blue";
  }
};
