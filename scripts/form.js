const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = `${today.getFullYear()}`;
let oLastModif = new Date(document.lastModified);
lastModified.innerHTML = `Last Modification: ${oLastModif.toLocaleString()}`;
lastModified.classList.add("highlight-yellow");


const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const productSelect = document.querySelector('#product');
if (productSelect) {
  
    products.forEach(p => {
        const option = document.createElement('option');
        option.value = p.id;
        option.textContent = p.name;
        productSelect.appendChild(option);
    });
}

(function () {
    const KEY = 'reviewCount';
    if (window.location.pathname.toLowerCase().endsWith('review.html')) {
        let count = parseInt(localStorage.getItem(KEY) || '0', 10);
        count += 1;
        localStorage.setItem(KEY, String(count));
        const counterEl = document.querySelector('#counter');
        if (counterEl) counterEl.textContent = `You have ${count} reseña${count === 1 ? '' : 's'}.`;
    }
})();