// Pop-up'ı göstermek için fonksiyon oluşturun
function showPopup() {
    document.getElementById("popup").style.display = "block";
}

// Pop-up'ı kapatmak için fonksiyon oluşturun
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Pop-up'ı sayfa yüklendiğinde göstermek için aşağıdaki kodu ekleyin
window.onload = function() {
    showPopup();
};