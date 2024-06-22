// Function to update the cart count display
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cartCount').innerText = cart.length;
}

// Function to display the cart items
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalContainer = document.getElementById('cartTotal');

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('cart-item');
        productElement.innerHTML = `
            <span>${product.name}</span>
            <span>${product.price} руб.</span>
        `;
        cartItemsContainer.appendChild(productElement);
        total += parseFloat(product.price);
    });

    cartTotalContainer.innerHTML = `Общая стоимость: ${total} руб.`;
}

// Function to clear the cart
function clearCart() {
    localStorage.removeItem('cart');
    updateCartCount();
    displayCart();
}

// Add event listener to the clear cart button
document.getElementById('clearCartButton').addEventListener('click', clearCart);

// Update cart display when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    displayCart();
});

// Function to update the cart count display
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cartCount').innerText = cart.length;
}

// Function to display the cart items
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalContainer = document.getElementById('cartTotal');

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('cart-item');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="cart-item-image">
            <span>${product.name}</span>
            <span>${product.price} $.</span>
        `;
        cartItemsContainer.appendChild(productElement);
        total += parseFloat(product.price);
    });

    cartTotalContainer.innerHTML = `Общая стоимость: ${total} $.`;
}

// Function to clear the cart
function clearCart() {
    localStorage.removeItem('cart');
    updateCartCount();
    displayCart();
}

// Add event listener to the clear cart button
document.getElementById('clearCartButton').addEventListener('click', clearCart);

// Update cart display when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    displayCart();
});