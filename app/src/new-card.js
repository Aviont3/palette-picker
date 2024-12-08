const createNewPalette = () => {
  document.querySelector("ul#createdPalette").innerHTML = `
  <header><h2>palette</h2><header>
        
        <label for="color1">text example</label>
        <button type="button" id="color1" name="color1"> <button/>
        <label for="color2">text example</label>
        <button type="button" id="color2" name="color2"> <button/>
        <label for="color3">text example</label>
        <button type="button" id="color3" name="color3"> <button/>
        <button class="delete" type="button">Delete</button>
        <footer><h4></h4></footer>`;
};

// `
//   <header><h2>${palette.title}</h2><header>
//     <div id="colors">
//     <label style="background-color:${palette.colors[0]}" class="text" for="color1"><span class="text">text</span> example</label>
//     <button type="button" id="color1" name="color1" class="copy"> copy <br> <span class="hexCode"> ${palette.colors[0]}</span> </button>
//     <br>
//     <label style="background-color:${palette.colors[1]}" class="text" for="color2"><span class="text">text</span> example</label>
//     <button type="button" id="color2" name="color2" class="copy"> copy <br> <span class="hexCode">${palette.colors[1]}</span></button>
//     <br>
//     <label style="background-color:${palette.colors[2]}" class="text" for="color3"><span class="text">text</span> example</label>
//     <button type="button" id="color3" name="color3" class="copy"> copy <br> <span class="hexCode">${palette.colors[2]} </span></button>
//     </div>
//     <button class="delete" type="button">Delete</button>
//     <footer><h4>${palette.temperature}</h4></footer>`
