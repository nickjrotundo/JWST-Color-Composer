
//The 90 image
var ctx90 = c90.getContext("2d");
var img1 = new Image(); img1.onload = load90; img1.src = "images/jptr212.png";
function load90() { c90.width = 512; c90.height = 512; render90() }

function render90() {
  var hue = +rHue90.value, sat = +rSat90.value, l = +rL90.value;

  ctx90.clearRect(0, 0, c90.width, c90.height);
  ctx90.globalCompositeOperation = "source-over";
  ctx90.drawImage(img1, 0, 0, c90.width, c90.height);

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
  //}

  // clip
  ctx90.globalCompositeOperation = "destination-in";
  ctx90.drawImage(img1, 0, 0, c90.width, c90.height);

  // reset comp. mode to default
  ctx90.globalCompositeOperation = "source-over";
  console.log("90HSL");
  drawFinal();
}

rHue90.oninput = rSat90.oninput = rL90.oninput = render90;

//The 187 image
var ctx187 = c187.getContext("2d");
var img2 = new Image(); img2.onload = load187; img2.src = "images/jptr335.png";
function load187() { c187.width = 512; c187.height = 512; render187() }

function render187() {
  var hue = +rHue187.value, sat = +rSat187.value, l = +rL187.value;

  ctx187.clearRect(0, 0, c187.width, c187.height);
  ctx187.globalCompositeOperation = "source-over";
  ctx187.drawImage(img2, 0, 0, c187.width, c187.height);

  // adjust "lightness"
  ctx187.globalCompositeOperation = l < 100 ? "color-burn" : "color-dodge";
  // for common slider, to produce a valid value for both directions
  l = l >= 100 ? l - 100 : 100 - (100 - l);
  ctx187.fillStyle = "hsl(0, 50%, " + l + "%)";
  ctx187.fillRect(0, 0, c187.width, c187.height);

  // adjust saturation
  ctx187.globalCompositeOperation = "saturation";
  ctx187.fillStyle = "hsl(0," + sat + "%, 50%)";
  ctx187.fillRect(0, 0, c187.width, c187.height);

  // adjust hue
  ctx187.globalCompositeOperation = "hue";
  ctx187.fillStyle = "hsl(" + hue + ",1%, 50%)";
  ctx187.fillRect(0, 0, c187.width, c187.height);
  //}

  // clip
  ctx187.globalCompositeOperation = "destination-in";
  ctx187.drawImage(img2, 0, 0, c187.width, c187.height);

  // reset comp. mode to default
  ctx187.globalCompositeOperation = "source-over";
  console.log("187HSL");
  drawFinal();
}

rHue187.oninput = rSat187.oninput = rL187.oninput = render187;

// //The 212 image
// var ctx212 = c212.getContext("2d");
// var img3 = new Image(); img3.onload = load212; img3.src = "images/212small.png";
// function load212() { c212.width = 978; c212.height = 978; render212() }

// function render212() {
//   var hue = +rHue212.value, sat = +rSat212.value, l = +rL212.value;

//   ctx212.clearRect(0, 0, c212.width, c212.height);
//   ctx212.globalCompositeOperation = "source-over";
//   ctx212.drawImage(img3, 0, 0, c212.width, c212.height);

//   // adjust "lightness"
//   ctx212.globalCompositeOperation = l < 100 ? "color-burn" : "color-dodge";
//   // for common slider, to produce a valid value for both directions
//   l = l >= 100 ? l - 100 : 100 - (100 - l);
//   ctx212.fillStyle = "hsl(0, 50%, " + l + "%)";
//   ctx212.fillRect(0, 0, c212.width, c212.height);

//   // adjust saturation
//   ctx212.globalCompositeOperation = "saturation";
//   ctx212.fillStyle = "hsl(0," + sat + "%, 50%)";
//   ctx212.fillRect(0, 0, c212.width, c212.height);

//   // adjust hue
//   ctx212.globalCompositeOperation = "hue";
//   ctx212.fillStyle = "hsl(" + hue + ",1%, 50%)";
//   ctx212.fillRect(0, 0, c212.width, c212.height);
//   //}

//   // clip
//   ctx212.globalCompositeOperation = "destination-in";
//   ctx212.drawImage(img2, 0, 0, c212.width, c212.height);

//   // reset comp. mode to default
//   ctx212.globalCompositeOperation = "source-over";
//   console.log("212HSL");
//   drawFinal();
// }

// rHue212.oninput = rSat212.oninput = rL212.oninput = render212;

function drawFinal(){

var ctx = c.getContext('2d');
ctx.clearRect(0, 0, c.width, c.height);
//ctx.globalAlpha = 0.5;
ctx.globalCompositeOperation = "screen";

// var c90Data = ctx90.getImageData(0,0,978,978);
// var c187Data = ctx187.getImageData(0,0,978,978);
// var c212Data = ctx212.getImageData(0,0,978,978);


ctx.drawImage(c90, 0, 0);
ctx.drawImage(c187, 0, 0);
//ctx.drawImage(c212, 0, 0);

}

// THIS FUNCTION IS BROKEN AND THE MATH IS TOO HARD OR TOO CUMBERSOME FOR THREE IMAGES
// function composeLayers() {
//   if (ctx90) {
//     var c90Data = ctx90.getImageData(0, 0, 978, 978);
//     console.log(ctx90);
//   }
//   if (ctx187) {
//     var c187Data = ctx187.getImageData(0, 0, 978, 978);
//     console.log(ctx187);

//     //var c212Data = ctx212.getImageData(0,0,978,978); //add layer 3 later



//     var ctx = c.getContext('2d');
//     var cData = ctx.createImageData(c90Data);
//     // get the pixel data as array
//     var l90Data = c90Data.data;
//     var l187Data = c187Data.data;
//     //var l212Data - c212Data.data;

//     // loop each pixel data, calculate the new pixel value and assign it directly to cData


//     for (var i = 0; i < c187Data.length; i += 4) {
//       cData[i] = (1 - ((1 - c187Data[i]) * (1 - c90Data[i]))) / 255;
//       cData[i + 1] = (1 - ((1 - c187Data[i + 1]) * (1 - c90Data[i + 1]))) / 255;
//       cData[i + 2] = (1 - ((1 - c187Data[i + 2]) * (1 - c90Data[i + 2]))) / 255;
//       cData[i + 3] = (1 - ((1 - c187Data[i + 3]) * (1 - c90Data[i + 3]))) / 255;
//     }
//     // draw it on the canvas 
//     ctx.putImageData(cData, 978, 978);
//   }
//   // export image, discussed in the next part
//   //exportImage(c);
// }

// function exportImage(canvas) {
//   // append it to the document's body to see
//   // document.body.appendChild(canvas);

//   // or export the base64 data url string
//   var dataUrl = canvas.toDataURL();
//   // on modern browser, you can just print the data url, open the console and
//   // click on it, the browser will generate the image for you
//   console.log(dataUrl);

//   // or create a new image element from the data url
//   // var img = document.createElement('img');
//   // img.setAttribute('src', dataUrl);
//   // img.onload = function(){
//   //   document.body.appendChild(img);
//   // };

//   // // if you don't want to submit the base64 string and convert it back
//   // // to image on the server, you can convert the data url to a file and then
//   // // submit to server (if your browser supports File API)
//   // var binary = atob(dataUrl.split(',')[1]);
//   // var array = [];
//   // for(var i = 0; i < binary.length; i++) {
//   //   array.push(binary.charCodeAt(i));
//   // }
//   // var file = new Blob([new Uint8Array(array)], {type: 'image/png'});
//   // // use the FormData to submit it (with jquery or XMLHttpRequest)
// }