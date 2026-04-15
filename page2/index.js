const products = [
    {
        name: "Smart Speaker",
        price: 99,
        category: "speakers",
        image: "media/img.png"
    },
    {
        name: "Wireless Headphones",
        price: 149,
        category: "headphones",
        image: "media/img_1.png"
    }
];

let cart = [];

let currentList = [...products];

// DISPLAY PRODUCTS
function displayProducts(list) {
    const container = document.getElementById("product-list");
    container.innerHTML = "";

    list.forEach((p, index) => {
        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <img src="${p.image}" alt="${p.name}">
            <h4>${p.name}</h4>
            <p>$${p.price}</p>
            <button onclick="addToCart(${products.indexOf(p)})">Add to Cart</button>
        `;

        container.appendChild(div);
    });
}

// ADD TO CART
function addToCart(index) {
    cart.push(products[index]);
    document.getElementById("cart-count").innerText = cart.length;
}

// 🔍 SEARCH
function searchProducts() {
    const query = document.getElementById("search").value.toLowerCase();

    currentList = products.filter(p =>
        p.name.toLowerCase().includes(query)
    );

    displayProducts(currentList);
}

// 🎯 FILTER
function filterProducts() {
    const checkboxes = document.querySelectorAll(".filter");
    let selected = [];

    checkboxes.forEach(cb => {
        if (cb.checked) selected.push(cb.value);
    });

    if (selected.length === 0) {
        currentList = [...products];
    } else {
        currentList = products.filter(p =>
            selected.includes(p.category)
        );
    }

    displayProducts(currentList);
}

// 🔥 SORT
function sortProducts(value) {
    let sorted = [...currentList];

    if (value === "low-high") {
        sorted.sort((a, b) => a.price - b.price);
    }

    if (value === "high-low") {
        sorted.sort((a, b) => b.price - a.price);
    }

    displayProducts(sorted);
}

// INIT
window.onload = () => {
    displayProducts(products);
};