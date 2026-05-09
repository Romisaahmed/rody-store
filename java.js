// script.js

let cartCount = 0;

function addToCart(productName){

    cartCount++;

    document.getElementById("cart-count").textContent = cartCount;

    showToast(productName + " Added To Cart");
}

function showToast(message){

    const toast = document.getElementById("toast");

    document.getElementById("toast-msg").textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    },2500);
}

function submitForm(e){

    e.preventDefault();

    showToast("Message Sent Successfully");

    e.target.reset();
}