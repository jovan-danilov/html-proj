// Function to get query parameter value
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Show product content based on query parameter
window.onload = function () {
    const productName = getQueryParam('product');
    if (productName === 'productA1') {
        const productContent = document.getElementById(productName);
        if (productContent) {
            productContent.style.display = 'block';
        }
    }
};

document.addEventListener("DOMContentLoaded", function() {
    var backButton = document.getElementById("backButton");
    var referrer = document.referrer;
    
    // Проверка, откуда пришел пользователь
    backButton.addEventListener("click", function() {
        if (referrer.includes("pageA.html")) {
            window.location.href = "pageA.html";
        } else if (referrer.includes("pageB.html")) {
            window.location.href = "pageB.html";
        } else {
            window.history.back();
        }
    });
});
