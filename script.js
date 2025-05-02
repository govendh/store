let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });
}

function orderNow() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  const orderDetails = cart.map(item => `${item.name}: $${item.price}`).join('\n');
  const mailtoLink = `mailto:govendhan4196@gmail.com?subject=New Order&body=Order Details:\n${orderDetails}\nTime: ${new Date().toLocaleString()}`;

  window.location.href = mailtoLink;
}
function clearCart() {
    cart = [];
    displayCart();
  }
  
