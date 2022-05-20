const mainBody = document.querySelector("#main");
const url = "http://localhost:3000/";

// let dataTest = [
//   ["./Evelynn.webp", "Evelynn"],
//   ["./Vel'Coco.webp", "Vel'Coco"],
//   ["./Evelynn.webp", "Evelynn"],
//   ["./Vel'Coco.webp", "Vel'Coco"],
//   ["./Evelynn.webp", "Evelynn"],
//   ["./Vel'Coco.webp", "Vel'Coco"],
//   ["./Evelynn.webp", "Evelynn"],
//   ["./Vel'Coco.webp", "Vel'Coco"],
//   ["./Evelynn.webp", "Evelynn"],
//   ["./Vel'Coco.webp", "Vel'Coco"],
//   ["./Evelynn.webp", "Evelynn"],
//   ["./Vel'Coco.webp", "Vel'Coco"],
//   ["./Evelynn.webp", "Evelynn"],
//   ["./Vel'Coco.webp", "Vel'Coco"],
// ];

function getData() {
  return axios
    .get(url)
    .then(function (donnees) {
      //   console.log(donnees);
      return donnees.data;
    })
    .catch(function (erreur) {
      console.log(erreur);
    });
}

// function getDatasTest() {
//   return dataTest;
// }

// La fonction return une liste contenant jour mois et année actuelle

function getDateToday() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (day < 10) {
    day = "0" + month.toString();
  }
  if (month < 10) {
    month = "0" + month.toString();
  }
  dateOfTheDay = [day, month, year];
  return dateOfTheDay;
}

// Attribut à l'élément HTML #date l'input

function displayDate(today) {
  let HTMLDate = document.querySelector("#date");
  HTMLDate.textContent = `${today[0]}/${today[1]}/${today[2]}`;
}

// Genère un élement HTML champ bloc, lui attribut des données attribuées en input et les affiche dans mainBody

function displayChamp(data, i) {
  let champBloc = `<div class="bloc-champ">
<img src="${data[i].splashArtUrl}" alt="" class="champ-img">
<div class="under-bloc"></div>
<p class="champ-name">${data[i].name}</p>`;

  mainBody.innerHTML += champBloc;
}

// get les données, pour chaque éléments appelle displayChamp(données), get et display la date
async function main() {
  data = await getData();
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    displayChamp(data, i);
  }

  today = getDateToday();

  displayDate(today);
}
main();
