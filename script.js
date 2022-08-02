const wrapper = document.querySelector(".wrapper"),
qrInput = document.querySelector(".form input"),
generateBtn = document.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Generating QR Code....";

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    // console.log(qrValue);
    // console.log("working");
    qrImg.addEventListener("load", () =>{
        // after required qr code is loaded
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () =>{
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
});


