//The 90 image
var ctx90 = c90.getContext("2d");
var img = new Image(); img.onload = load90; img.src = "images/90small.png";
function load90() {c90.width = this.width>>1; c90.height = this.height>>1; render90()}
//Sliders for 90
function render90() {
  var hue = +rHue.value, sat = +rSat.value, l = +rL.value;
  
  ctx90.clearRect(0, 0, c90.width, c90.height);
  ctx90.globalCompositeOperation = "source-over";
  ctx90.drawImage(img, 0, 0, c90.width, c90.height);

   if (false) {
    // use color blending mode
    ctx90.globalCompositeOperation = "color";
    ctx90.fillStyle = "hsl(" + hue + "," + sat + "%, 50%)";
    ctx90.fillRect(0, 0, c90.width, c90.height);
  }
  else {
    // adjust "lightness"
    ctx90.globalCompositeOperation = l < 100 ? "color-burn" : "color-dodge";
    // for common slider, to produce a valid value for both directions
    l = l >= 100 ? l - 100 : 100 - (100 - l);
    ctx90.fillStyle = "hsl(0, 50%, " + l + "%)";
    ctx90.fillRect(0, 0, c90.width, c90.height);
    
    // adjust saturation
    ctx90.globalCompositeOperation = "saturation";
    ctx90.fillStyle = "hsl(0," + sat + "%, 50%)";
    ctx90.fillRect(0, 0, c90.width, c90.height);

    // adjust hue
    ctx90.globalCompositeOperation = "hue";
    ctx90.fillStyle = "hsl(" + hue + ",1%, 50%)";
    ctx90.fillRect(0, 0, c90.width, c90.height);
  }
  
  // clip
  ctx90.globalCompositeOperation = "destination-in";
  ctx90.drawImage(img, 0, 0, c90.width, c90.height);

  // reset comp. mode to default
  ctx90.globalCompositeOperation = "source-over";
}

rHue.oninput = rSat.oninput = rL.oninput = cColor.onchange = render90;