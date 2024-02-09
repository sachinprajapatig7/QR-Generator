let qrcode = document.querySelector("img");
let text = document.querySelector("input");
let generateBtn = document.querySelector(".generate");
let downloadBtn = document.querySelector(".download");

// const scannerSection = document.getElementById("scanner");
// const scanBtn = document.querySelector(".scan");
// const closeBtn = document.getElementById("close-btn");
// const qrVideo = document.getElementById("qr-video");
// const qrCanvas = document.getElementById("qr-canvas");
// const qrCanvasContext = qrCanvas.getContext("2d");

generateBtn.addEventListener("click", () => {
  let data = text.value;
  if (data.trim() != "") {
    let baseURL = "https://api.qrserver.com/v1/create-qr-code/";
    let url = `${baseURL}?data=${encodeURI(data)}&margin=10`;
    qrcode.src = url;
  }
});

downloadBtn.addEventListener("click", () => {
  generateBtn.click();
  let data = text.value;
  if (data.trim() != "") {
    let baseURL = "https://api.qrserver.com/v1/create-qr-code/";
    let url = `${baseURL}?data=${encodeURI(data)}&margin=10`;
    fetch(url)
      .then((resp) => resp.blob())
      .then((blobobject) => {
        let anchor = document.createElement("a");
        anchor.style.display = "none";
        const blob = window.URL.createObjectURL(blobobject);
        anchor.href = blob;
        anchor.download = "qrcode.png";
        anchor.click();
      })
      .catch(() => (text.value = ""));
  }
});
