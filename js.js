// Function to update the cart count display
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cartCount').innerText = cart.length;
}

// Function to add product to cart
function addToCart(event, productId) {
    event.stopPropagation(); // Prevent the click event from propagating to the product card
    event.preventDefault(); // Prevent the default action (optional)

    const productCard = document.querySelector(`.productCard[data-id='${productId}']`);
    const product = {
        id: productCard.getAttribute('data-id'),
        name: productCard.getAttribute('data-name'),
        price: productCard.getAttribute('data-price'),
        image: productCard.getAttribute('data-image')
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Add event listeners to add-to-cart buttons
document.querySelectorAll('.addToCartButton').forEach(button => {
    button.addEventListener('click', (event) => {
        const productCard = event.target.closest('.productCard');
        const product = {
            id: productCard.getAttribute('data-id'),
            name: productCard.getAttribute('data-name'),
            price: productCard.getAttribute('data-price'),
            image: productCard.getAttribute('data-image')
        };
        addToCart(event, product.id);
    });
});

// Update cart count when the page loads
document.addEventListener('DOMContentLoaded', updateCartCount);

// Function to redirect to product page with category parameter
function redirectToProductPage(productName) {
    window.location.href = `product.html?product=${productName}`;
}

// Function to filter products based on search input
function filterProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const selectedCategory = document.querySelector('.categoryButton.active')?.getAttribute('data-category');
    const productCards = document.querySelectorAll('.productCard');
    let anyVisible = false;

    productCards.forEach(card => {
        const productName = card.getAttribute('data-name').toLowerCase();
        const productTags = card.getAttribute('data-tags').split(', ');

        if ((productName.includes(searchInput) || searchInput === '') &&
            (!selectedCategory || productTags.includes(selectedCategory))) {
            card.style.display = 'block';
            anyVisible = true;
        } else {
            card.style.display = 'none';
        }
    });

    const noResultsMessage = document.getElementById('noResultsMessage');
    if (anyVisible) {
        noResultsMessage.style.display = 'none';
    } else {
        noResultsMessage.style.display = 'block';
    }
}

// Event listener for the search button
document.getElementById('searchButton').addEventListener('click', filterProducts);

// Event listener for Enter key press in the search input
document.getElementById('searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        filterProducts();
    }
});

// Function to handle category button click
function handleCategoryClick(event) {
    const selectedCategory = event.target.getAttribute('data-category');
    const isActive = event.target.classList.contains('active');
    const categoryButtons = document.querySelectorAll('.categoryButton');

    categoryButtons.forEach(button => button.classList.remove('active'));

    if (!isActive) {
        event.target.classList.add('active');
    }

    filterProducts();
}

// Add event listeners to category buttons
document.querySelectorAll('.categoryButton').forEach(button => {
    button.addEventListener('click', handleCategoryClick);
});

// Event listener for the show all button
document.getElementById('showAllButton').addEventListener('click', () => {
    const productCards = document.querySelectorAll('.productCard');
    productCards.forEach(card => {
        card.style.display = 'block';
    });
    document.getElementById('searchInput').value = '';
    document.querySelectorAll('.categoryButton').forEach(button => button.classList.remove('active'));
    document.getElementById('noResultsMessage').style.display = 'none';
});