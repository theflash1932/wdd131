cdate = document.querySelector("#currentyear");
nowYear = new Date().getFullYear();
cdate.innerHTML = nowYear;

lastm = document.querySelector("#lastmodified");
mod = document.lastModified
lastm.innerHTML = document.lastModified

const decathlonRecord = [
    { event:"100 Meters", mark:"10.55", points:"975" },
    { event:"Long Jump", mark:"7.80m", points:"1016" },
    { event:"Shot Put", mark:"16.00m", points:"849" },
    { event:"High Jump", mark:"2.05m", points:"850" },
    { event:"400m", mark:"48.42", points:"912" },
    { event:"110m Hurdles", mark:"13.75", points:"1014" },
    { event:"Discus Throw", mark:"50.54m", points:"905" },
    { event:"Pole Vault", mark:"5.45m", points:"1011" },
    { event:"Javelin Throw", mark:"71.90m", points:"899" },
    { event:"1500 Meters", mark:"4:36.11", points:"691" }
];

const americanRecord = [
    { event:"100 Meters", mark:"10.21", points:"1044" },
    { event:"Long Jump", mark:"8.23m", points:"1016" },
    { event:"Shot Put", mark:"14.20m", points:"741" },
    { event:"High Jump", mark:"2.05m", points:"850" },
    { event:"400m", mark:"46.70", points:"973" },
    { event:"110m Hurdles", mark:"13.70", points:"1014" },
    { event:"Discus Throw", mark:"42.81m", points:"767" },
    { event:"Pole Vault", mark:"5.30m", points:"972" },
    { event:"Javelin Throw", mark:"58.87m", points:"899" },
    { event:"1500 Meters", mark:"4:14.48", points:"691" }
];

const record = document.getElementById("record")
html = "<table>"
html += "<tr><th>Event</th><th>Mark</th><th>Points</th></tr>"

decathlonRecord.forEach(r => {
    html += `<tr><td>${r.event}</td><td>${r.mark}</td><td>${r.points}</td></tr>`
});

html += "</table>"

record.innerHTML = html

const recordUSA = document.getElementById("recordUSA")
htmlUSA = "<table>"
htmlUSA += "<tr><th>Event</th><th>Mark</th><th>Points</th></tr>"

americanRecord.forEach(r => {
    htmlUSA += `<tr><td>${r.event}</td><td>${r.mark}</td><td>${r.points}</td></tr>`
});

htmlUSA += "</table>"

recordUSA.innerHTML = htmlUSA