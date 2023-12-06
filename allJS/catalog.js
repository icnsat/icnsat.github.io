var products = [
    {
        name: "Zootopia",
        price: 150,
        year: 2016,
        boxOffice: '$1.025 миллиард',
        duration: '108 мин.'
    },
    {
        name: "WALL-E",
        price: 400,
        year: 2008,
        boxOffice: '$532.5 миллиона',
        duration: '98 мин.'
    },
    {
        name: "Ratatouille",
        price: 250,
        year: 2007,
        boxOffice: '$623.7 миллиона',
        duration: '111 мин.'
    }
];

var filteredProducts = [];

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

function updateCatalogDisplay(products) {
    var container = document.querySelector(".catalog");
    container.innerHTML = "";

    for (let product of products) {
        container.innerHTML += `    
            <div class="catalog-item" id="${products.indexOf(product)}">
                <img src="C:/Users/eliza/OneDrive/Рабочий стол/файлы универ/3 СЕМЕСТР/РКЧИР/ПР №12/${product.name}.jpg" width="150">
                <p class="name">${product.name}</p>
    
                <div class="specifications">
                  <p>Год выхода: ${product.year}</p>
                  <p>Сборы: ${product.boxOffice}</p>
                  <p>Длительность: ${product.duration}</p>
                </div>
    
                <div class="purchase">
                  <p>${formatPrice(product.price)}</p>
    
                  <button onclick="addToCart('${product.name}')">Добавить в корзину</button>
                </div>
            </div>
        `;
    }

    container.innerHTML += `
        <div class="control">
            <div class="sort">
                <button onclick="setDefault(products)">
                    <img src="C:/Users/eliza/OneDrive/Рабочий стол/файлы универ/3 СЕМЕСТР/РКЧИР/ПР №12/sort.png" width="28px" height="28px">
                </button>
        
                <button onclick="descendingSort(products)">
                    <img src="C:/Users/eliza/OneDrive/Рабочий стол/файлы универ/3 СЕМЕСТР/РКЧИР/ПР №12/descending.png" width="28px" height="28px">
                </button>
        
                <button onclick="ascendingSort(products)">
                    <img src="C:/Users/eliza/OneDrive/Рабочий стол/файлы универ/3 СЕМЕСТР/РКЧИР/ПР №12/ascending.png" width="28px" height="28px">
                </button>
            </div>
        </div>
    `;
}

updateCatalogDisplay(products);





/******************** */
function setDefault(products) {
    updateCatalogDisplay(products);
}

function descendingSort(products) {
    var descendingProducts = products.slice();
    for (let i = 0; i < descendingProducts.length - 1; i++) {
        for (let j = 0; j < descendingProducts.length - 1 - i; j++) {
            if (descendingProducts[j].price < descendingProducts[j + 1].price) {
                const temp = descendingProducts[j];
                descendingProducts[j] = descendingProducts[j + 1];
                descendingProducts[j + 1] = temp;
            }
        }
    }
    updateCatalogDisplay(descendingProducts);
}

function ascendingSort(products) {
    var ascendingProducts = products.slice();
    for (let i = 0; i < ascendingProducts.length - 1; i++) {
        for (let j = 0; j < ascendingProducts.length - 1 - i; j++) {
            if (ascendingProducts[j].price > ascendingProducts[j + 1].price) {
                const temp = ascendingProducts[j];
                ascendingProducts[j] = ascendingProducts[j + 1];
                ascendingProducts[j + 1] = temp;
            }
        }
    }
    updateCatalogDisplay(ascendingProducts);
}

/*-----------------------------------------------------------*/
