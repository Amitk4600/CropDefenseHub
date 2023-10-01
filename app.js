/* search  */

// Add to cart 
function addToCart(productName, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProduct = cart.find(item => item.productName === productName);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            productName: productName,
            price: price,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
}


// BUy NOw 

function handleBuyNowClick(productName, price) {
    // You can customize this function to perform actions like redirecting to a checkout page, displaying a confirmation, etc.
    alert(`You have purchased ${productName} for ₹${price}`);
}

// Attach event listeners to each "Buy Now" button
const buyNowButtons = document.querySelectorAll('.btn-secondary');
buyNowButtons.forEach(button => {
    button.addEventListener('click', function() {
        const card = button.closest('.card');
        const productName = card.querySelector('.card-title').textContent;
        const price = card.querySelector('.price span').textContent;
        handleBuyNowClick(productName, price);
    });
});