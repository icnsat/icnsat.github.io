/*-----------------------------------------------------------*/

var products = [
    {
        name: "Zootopia",
        price: 150
    },

    {
        name: "WALL-E",
        price: 400
    },

    {
        name: "Ratatouille",
        price: 250
    }
];

cart = {
    selectedProducts: [],
    totalAmount: 0,
    totalQuantity: 0,
}

function updateCartDisplay() {
    var container = document.querySelector(".cart-items-container");
    container.innerHTML = "";
    for (let product of cart.selectedProducts) {
        container.innerHTML += `    
        <div class="cart-item" id="${cart.selectedProducts.indexOf(product)}">
            <img src="C:/Users/eliza/OneDrive/Рабочий стол/файлы универ/3 СЕМЕСТР/РКЧИР/ПР №12/${product.name}.jpg" width="150">
            <p class="name">${product.name}</p>

            <div class="quantity-container">
              <button class="minus" onclick="decreaseQuantity('${product.name}')">
                <img src="C:/Users/eliza/OneDrive/Рабочий стол/файлы универ/3 СЕМЕСТР/РКЧИР/ПР №12/minus.png" width="28px" height="28px">
              </button>

              <p class="quantity">${product.quantity}</p>

              <button class="plus" onclick="increaseQuantity('${product.name}')">
                <img src="C:/Users/eliza/OneDrive/Рабочий стол/файлы универ/3 СЕМЕСТР/РКЧИР/ПР №12/plus.png" width="28px" height="28px">
              </button>
            </div>

            <div class="delete">
              <button onclick="deleteInCart('${product.name}')">
                <img src="C:/Users/eliza/OneDrive/Рабочий стол/файлы универ/3 СЕМЕСТР/РКЧИР/ПР №12/bin.png" width="30px" height="30px">
              </button>
            </div>

            <div class="price">
              <p>${formatPrice(product.price * product.quantity)}</p>
            </div>

          </div>
        `;
    }
    if (cart.selectedProducts.length == 0){
        document.getElementById("order").style.display = "none";
        document.getElementById("clear-button").style.display = "none";
        document.getElementById("total").style.justifyContent = "center";
    } else {
        document.getElementById("order").style.display = "block";
        document.getElementById("clear-button").style.display = "block";
        document.getElementById("total").style.justifyContent = "space-between";
    }

    container = document.querySelector(".total-amount");
    container.innerHTML = `Всего: ${formatPrice(cart.totalAmount)}`;

    container = document.querySelector(".total-quantity");
    container.innerHTML = `Товаров: ${cart.totalQuantity}`;
}

function addToCart(name) {
    var index = findIndexInCart(name);

    if (index == -1) {
        index = findIndexInCatalog(name);
        cart.selectedProducts.unshift(products[index]);
        cart.selectedProducts[0].quantity = 1;

        cart.totalAmount += cart.selectedProducts[0].price;
        cart.totalQuantity ++;
    }
    else {
        increaseQuantity(name);
    }
    updateCartDisplay();
}

function increaseQuantity(name) {
    var index = findIndexInCart(name);

    cart.selectedProducts[index].quantity += 1;
    cart.totalAmount += cart.selectedProducts[index].price;
    cart.totalQuantity++;

    updateCartDisplay();
}

function decreaseQuantity(name) {
    var index = findIndexInCart(name);

    if (cart.selectedProducts[index].quantity > 1) {
        cart.selectedProducts[index].quantity -= 1;

        cart.totalAmount -= cart.selectedProducts[index].price;
        cart.totalQuantity--;
    }

    else {
        deleteInCart(name);
    }

    updateCartDisplay();
}

function deleteInCart(name) {
    id = findIndexInCart(name);

    cart.totalAmount -= cart.selectedProducts[id].price * cart.selectedProducts[id].quantity;
    cart.totalQuantity -= cart.selectedProducts[id].quantity;
    cart.selectedProducts.splice(id, 1);

    updateCartDisplay();
}

function clearCart() {
    cart = {
        selectedProducts: [],
        totalAmount: 0,
        totalQuantity: 0
    }

    updateCartDisplay();
}

/*-----------------------------------------------------------*/

function findIndexInCatalog(name) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].name == name) {
            return i;
        }
    }

    return -1;
}

function findIndexInCart(name) {
    for (let i = 0; i < cart.selectedProducts.length; i++) {
        if (cart.selectedProducts[i].name == name) {
            return i;
        }
    }

    return -1;
}

function formatPrice(price) {
    if (price == 0) {
        return "0 ₽"
    }

    else {
        let pass = 0;
        let result = "";

        while (price > 0) {
            if (pass == 3) {
                result += " ";
                pass = 0;
            }

            result += price % 10;
            price = Math.floor(price / 10);

            pass++;
        }

        result = result.split('').reverse().join('');

        result += " ₽";

        return result;
    }
}


/*-----------------------------------------------------------*/



function order(){
    let sum = formatPrice(cart.totalAmount);
    localStorage.setItem('sum', sum)

    window.location.href = 'order.html';
}