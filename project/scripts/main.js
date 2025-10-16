const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = `${today.getFullYear()}`;
let oLastModif = new Date(document.lastModified);
lastModified.innerHTML = `Last Modification: ${oLastModif.toLocaleString()}`;





const hamButton = document.querySelector('#menu');
const header = document.querySelector('header');
const navigation = document.querySelector('nav');

if (hamButton && header && navigation) {
  hamButton.addEventListener('click', () => {
    header.classList.toggle('open');
    hamButton.classList.toggle('open');
    navigation.classList.toggle('open');
  });
}

const allProducts = [
    {   
        id: "crumbl-cookies",
        kind: "other",
        productName: "Crumbl Cookies",
        price: 10,
        imgPath: "images/crumbl-cookies.png"
    },
    {
        id: "cheescake",
        kind: "cake",
        productName: "Cheescake",
        price: 300,
        imgPath: "images/cheescake.png"
    },
    {
        id: "four-milks",
        kind: "cake",
        productName: "4 Milks",
        price: 350,
        imgPath: "images/cuatro-leches.png"
    },
    {
        id: "flan",
        kind: "other",
        productName: "Flan",
        price: 150,
        imgPath: "images/flan.png"
    },
    {
        id: "butter-cookies",
        kind: "other",
        productName: "Butter cookies",
        price: 7,
        imgPath: "images/galleta-mantequilla.png"
    },
    {
        id: "redvelvet-cookie",
        kind: "other",
        productName: "RedVelvet cookie",
        price: 9,
        imgPath: "images/galleta-redvelvet.png"
    },
    {
        id: "cinnamon-cookie",
        kind: "other",
        productName: "Cinnamon cookie",
        price: 7,
        imgPath: "images/galletas-canela.png"
    },
    {
        id: "chocolate-cookie",
        kind: "other",
        productName: "Chocolate cookie",
        price: 8,
        imgPath: "images/galletas-chocolate.png"
    },
    {
        id: "fruits-jelly",
        kind: "other",
        productName: "Fruit's jelly",
        price: 130,
        imgPath: "images/gelatina-frutas.png"
    },
    {
        id: "injected-jelly",
        kind: "other",
        productName: "Injected jelly",
        price: 120,
        imgPath: "images/gelatina-inyectada.png"
    },
    {
        id: "jelly-wrapped-milk",
        kind: "other",
        productName: "Jelly wrapped milk",
        price: 110,
        imgPath: "images/gelatina-leche-envuelta.png"
    },
    {
        id: "mosaic-jelly",
        kind: "other",
        productName: "Mosaic jelly",
        price: 90,
        imgPath: "images/gelatina-mosaico.png"
    },
    {
        id: "chocolate-bruce-cake",
        kind: "cake",
        productName: "Chocolate Bruce cake",
        price: 280,
        imgPath: "images/pastel-chocolate.png"
    },
    {
        id: "corn-cake",
        kind: "cake",
        productName: "Corn cake",
        price: 170,
        imgPath: "images/pastel-elote.png"
    },
    {
        id: "fruits-cake",
        kind: "cake",
        productName: "Fruit's cake",
        price: 170,
        imgPath: "images/pastel-frutas.png"
    },
    {
        id: "impossible-cake",
        kind: "cake",
        productName: "Impossible cake",
        price: 220,
        imgPath: "images/pastel-imposible.png"
    },
    {
        id: "dirty-cake",
        kind: "cake",
        productName: "Dirty cake",
        price: 150,
        imgPath: "images/pastel-seco.png"
    },
    {
        id: "carrot-cake",
        kind: "cake",
        productName: "Carrot cake",
        price: 170,
        imgPath: "images/pastel-zanahoria.png"
    },
    {
        id: "chees-cake",
        kind: "cake",
        productName: "Chees cake",
        price: 120,
        imgPath: "images/pay-queso.png"
    },
    {
        id: "red-velvet",
        kind: "cake",
        productName: "Red Velvet",
        price: 280,
        imgPath: "images/redvelvet.png"
    },
    
]

const cakesAlbum = document.querySelector("#cakes-section")

function createCakeCards(filtered, place) {
    if (!place) {
        console.warn('createCakeCards: contenedor no encontrado.');
        return;
    }
    place.innerHTML = "";
    filtered.forEach(product => {
        let card = document.createElement("section"); 
        let img = document.createElement("img");
        let name = document.createElement("h3");
        let price = document.createElement("p");

        img.src = product.imgPath || '';
        img.alt = product.productName || '';
        img.width = 200;
        img.height = 100;
        img.loading = "lazy";


        name.textContent = product.productName || 'Untitled';
        price.innerHTML = `<span class="label">Price:</span> $${product.price}`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(price);

        place.appendChild(card);
    });
}

const cakesLink = document.querySelector("#cakes");
const othersLink = document.querySelector("#cookies");
const cakesSection = document.querySelector("#cakes-section");
const othersPlace = document.querySelector("#others-section");


if (cakesSection) {
    const initial = allProducts.filter(p => p.kind === "cake");
    createCakeCards(initial, cakesSection);
}

if (othersPlace) {
    const initialOthers = allProducts.filter(p => p.kind === "other");
    createCakeCards(initialOthers, othersPlace);
}

if (cakesLink) {
    cakesLink.addEventListener("click", (e) => {
        const filtered = allProducts.filter(product => product.kind === "cake");

        createCakeCards(filtered, cakesSection);

    });
}
if (othersLink) {
    othersLink.addEventListener("click", (e) => {
        const filtered = allProducts.filter(product => product.kind === "other");
        createCakeCards(filtered, othersPlace);
    });
}



const productSelect = document.querySelector('#product');
if (productSelect) {
  
    allProducts.forEach(p => {
        const option = document.createElement('option');
        option.value = p.id;
        option.textContent = p.productName;
        productSelect.appendChild(option);
    });
}

/*(function () {
    const KEY = 'reviewCount';
    if (window.location.pathname.toLowerCase().endsWith('thanks.html')) {
        let count = parseInt(localStorage.getItem(KEY) || '0', 10);
        count += 1;
        localStorage.setItem(KEY, String(count));
        const counterEl = document.querySelector('#counter');
        if (counterEl) counterEl.textContent = `You have send ${count} orders in total ${count === 1 ? '' : ''}`;
    }
})();*/

(function () {
    const contactForm = document.querySelector('form[action="thanks.html"]');
    if (contactForm) {
        contactForm.addEventListener('submit', () => {
            const productSelect = document.querySelector('#product');
            if (productSelect) {
                const selectedText = productSelect.options[productSelect.selectedIndex]?.text || productSelect.value;
                localStorage.setItem('lastOrderedProduct', selectedText);
            }
        });
    }
        if (window.location.pathname.toLowerCase().endsWith('thanks.html')) {
        const productName = localStorage.getItem('lastOrderedProduct');
        if (productName) {
            const container = document.querySelector('#submited') || document.querySelector('main') || document.body;
            if (container) {
                const info = document.createElement('p');
                info.textContent = `Your "${productName}" is being prepared, we will contact you to give you your order`;
                container.appendChild(info);
            }
            localStorage.removeItem('lastOrderedProduct');
        }
    }
})();
