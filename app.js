let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');

function generateQr() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add('error');
        qrText.style.borderColor = "var(--red)"; // Corrige o acesso à propriedade style
        setTimeout(() => {
            qrText.classList.remove('error');
            qrText.style.borderColor = "var(--blue-hg)"; // Corrige o acesso à propriedade style
        }, 1000);
    }
};
