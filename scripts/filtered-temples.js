const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const header = document.querySelector('header');
let oLastModif = new Date(document.lastModified);

currentyear.innerHTML = `${today.getFullYear()}`;

lastModified.innerHTML = `Last Modification: ${oLastModif.toLocaleString()}`;
hamButton.addEventListener('click', () => {
	 if (header) header.classList.toggle('open');
    hamButton.classList.toggle('open');
    navigation.classList.toggle('open');
});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Puebla México",
        location: "Puebla, Puebla, México",
        dedicated: "2024, May 19",
        area: 35865,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/puebla-mexico-temple/puebla-mexico-temple-46339.jpg"
    },
    {
        templeName: "Monterrey México",
        location: "Monterrey, Nuevo Leon, México",
        dedicated: "2002, April 28",
        area: 16498,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/monterrey-mexico-temple/monterrey-mexico-temple-46835.jpg"
    },
    {
        templeName: "Tijuana México",
        location: "Tijuana, Baja California, México",
        dedicated: "2015, December 13",
        area: 33367,
        imageUrl:
        "http://churchofjesuschristtemples.org/assets/img/temples/tijuana-mexico-temple/tijuana-mexico-temple-3660.jpg"
    }
];

const homeTemples = document.querySelector("#Home");
const oldTemples = document.querySelector("#Old");
const newTemples = document.querySelector("#New");
const largeTemples = document.querySelector("#Large");
const smallTemples = document.querySelector("#Small");



homeTemples.addEventListener("click", () => {
  createTempleCard(temples);
});


oldTemples.addEventListener("click", () => {
    let filteredTemples = temples.filter(temple => {
      let yearExtracted = temple.dedicated.split(",")[0].trim();
      let year = parseInt(yearExtracted, 10);
      return year < 1900;
    });
    createTempleCard(filteredTemples);
  });


newTemples.addEventListener("click", () => {
  let filteredTemples = temples.filter(temple => {
    let yearExtracted = temple.dedicated.split(",")[0].trim();
    let year = parseInt(yearExtracted, 10);
    return year > 2000;
  });
  createTempleCard(filteredTemples);
});

largeTemples.addEventListener("click", () => {
  let filteredTemples = temples.filter(temple => {
    return temple.area > 90000
  });
  createTempleCard(filteredTemples);
});

smallTemples.addEventListener("click", () => {
  let filteredTemples = temples.filter(temple => {
    return temple.area < 10000
  });
  createTempleCard(filteredTemples);
});


createTempleCard();



function createTempleCard(filteredTemples = temples) {
  const album = document.querySelector(".album");

  album.innerHTML = "";
  filteredTemples.forEach(temple => {

    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("width", "200");
    img.setAttribute("height", "140");
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    album.appendChild(card);
  });
}