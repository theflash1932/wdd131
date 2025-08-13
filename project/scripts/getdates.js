cdate = document.querySelector("#currentyear");
nowYear = new Date().getFullYear();
cdate.innerHTML = nowYear;

lastm = document.querySelector("#lastmodified");
mod = document.lastModified
lastm.innerHTML = document.lastModified


// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
const mainnav = document.querySelector(".navigation")
const hambutton = document.querySelector("#menu");

// 
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});
