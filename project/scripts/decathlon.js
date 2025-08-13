// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

let dayOneArray = [0,0,0,0,0]
let dayOneTotal = 0
let dayTwoArray = [0,0,0,0,0]
let dayTwoTotal = 0
let decathlonTotal = 0

// points inputs
const mark100 = document.getElementById("mark100")
const markLong = document.getElementById("markLong")
const markShot = document.getElementById("markShot")
const markHigh = document.getElementById("markHigh")
const mark400 = document.getElementById("mark400")
const mark110 = document.getElementById("mark110")
const markDiscus = document.getElementById("markDiscus")
const markPole = document.getElementById("markPole")
const markJav = document.getElementById("markJav")
const mark1500 = document.getElementById("mark1500")
// event points
const points100 = document.querySelector("#points100")
const pointsLong = document.querySelector("#pointsLong")
const pointsShot = document.querySelector("#pointsShot")
const pointsHigh = document.querySelector("#pointsHigh")
const points400 = document.querySelector("#points400")
const points110 = document.querySelector("#points110")
const pointsDiscus = document.querySelector("#pointsDiscus")
const pointsPole = document.querySelector("#pointsPole")
const pointsJav = document.querySelector("#pointsJav")
const points1500 = document.querySelector("#points1500")
// aggregate scores
const dayOnePoints = document.getElementById("dayOnePoints")
const dayTwoPoints = document.getElementById("dayTwoPoints")
const decaTotal = document.getElementById("decaTotal")

const formButton = document.querySelector("#decaButton")
formButton.addEventListener("click", () => {
    calcDecathlon()
});

function runEvent(m,e) {
    if (e == 1)  { A = 25.4347;  B = 18;    C = 1.81; }   // 100m
    if (e == 5)  { A = 1.53775;  B = 82;    C = 1.81; }   // 400m
    if (e == 6)  { A = 5.74352;  B = 28.5;  C = 1.92; }   // 110m Hurdles
    if (e == 10) { A = 0.03768;  B = 480;   C = 1.85; }   // 1500m
    P = Math.trunc(A * (B - m) ** C)
    if(e < 5){dayOneArray[e-1] = P}
    if(e > 5){dayTwoArray[e-1] = P}
    return P
}

function throwEvent(m,e) {
    if (e == 3) { A = 51.39;  B = 1.50;  C = 1.05; }   // Shot Put (m)
    if (e == 7) { A = 12.91;  B = 4;     C = 1.10; }   // Discus Throw (m)
    if (e == 9) { A = 10.14;  B = 7;     C = 1.08; }   // Javelin Throw (m)
    P = Math.trunc(A * (m - B) ** C)
    if(e < 5){dayOneArray[e-1] = P}
    if(e > 5){dayTwoArray[e-1] = P}
    return P
}

function jumpEvent(m,e) {
    if (e == 2) { A = 0.14354;  B = 220;  C = 1.40; }   // Long Jump (cm)
    if (e == 4) { A = 0.8465;   B = 75;   C = 1.42; }   // High Jump (cm)
    if (e == 8) { A = 0.2797;   B = 100;  C = 1.35; }   // Pole Vault (cm)
    P = Math.trunc(A * (m * 100 - B) ** C)
    if(e < 5){dayOneArray[e-1] = P}
    if(e > 5){dayTwoArray[e-1] = P}
    return P
}

function calcDecathlon() {
    if(mark100.value != ""){points100.innerHTML = runEvent(mark100.value,1)}
    if(markLong.value != ""){pointsLong.innerHTML = jumpEvent(markLong.value,2)}
    if(markShot.value != ""){pointsShot.innerHTML = throwEvent(markShot.value,3)}
    if(markHigh.value != ""){pointsHigh.innerHTML = jumpEvent(markHigh.value,4)}
    if(mark400.value != ""){points400.innerHTML = runEvent(mark400.value,5)}
    if(mark110.value != ""){points110.innerHTML = runEvent(mark110.value,6)}
    if(markDiscus.value != ""){pointsDiscus.innerHTML = throwEvent(markDiscus.value,7)}
    if(markPole.value != ""){pointsPole.innerHTML = jumpEvent(markPole.value,8)}
    if(markJav.value != ""){pointsJav.innerHTML = throwEvent(markJav.value,9)}
    if(mark1500.value != ""){points1500.innerHTML = runEvent(mark1500.value,10)}
    
    dayOneTotal = 0
    dayOneArray.forEach(element => {
        dayOneTotal += element
    });
    dayTwoTotal = 0
    dayTwoArray.forEach(element => {
        dayTwoTotal += element
    });
    dayOnePoints.innerHTML = dayOneTotal
    dayTwoPoints.innerHTML = dayTwoTotal
    decaTotal.innerHTML = dayOneTotal + dayTwoTotal

}

// 
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

cdate = document.querySelector("#currentyear");
nowYear = new Date().getFullYear();
cdate.innerHTML = nowYear;

lastm = document.querySelector("#lastmodified");
mod = document.lastModified
lastm.innerHTML = document.lastModified

const deca = [
    {
        a: "a"
    }
];

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
  // Add more temple objects here...
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-daylight-1416668-wallpaper.jpg"
  },
  {
    templeName: "Twin Falls Idaho",
    location: "Twin Falls, Idaho, United States",
    dedicated: "2008, August, 24",
    area: 31245,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/twin-falls-idaho/400x250/twin-falls-temple-850955-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
  },
];

const tg = document.querySelector('.temple-grid');

function buildTempleGrid(templeList) {
	html = "";
	for (i=0;i<templeList.length;i++) {
		// tg.innerHTML = temples[0].templeName;
		html += "<div class='card'>"
		html += '<h3>' + templeList[i].templeName + '</h3><br>'
    html += 'Location: ' + templeList[i].location + '<br>'
		html += 'Dedicated: ' + templeList[i].dedicated + '<br>'
		html += 'Size: ' + templeList[i].area + ' sq ft<br>'
		html += '<figure><img src=' + templeList[i].imageUrl + ' alt="' + templeList[i].templeName + '" loading="lazy"></figure>'
		html += '</div>'
		
	}
	tg.innerHTML = html;
}

