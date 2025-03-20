const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse'); // import of parse


const habitablePlanets = []; // habitable planet array

function isHabitablePlanet(planet) { // function to find habitable planet
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}


function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, '..', '..', 'data', 'kepler_data.csv');
    console.log("Reading CSV from:", filePath);

    fs.createReadStream(filePath)
      .pipe(parse({
        comment: '#',
        columns: true,
      }))
      .on('data', (data) => {
        if (isHabitablePlanet(data)) {
          habitablePlanets.push(data);
        }
      })
      .on('error', (err) => {
        console.error("Error parsing CSV:", err);
        reject(err);
      })
      .on('end', () => {
        console.log(`${habitablePlanets.length} habitable planets found!`);
        resolve(habitablePlanets);  // Ensure planets data is returned
      });
  });
}

function getAllPlanets(){
  return habitablePlanets;
}
module.exports = {
  loadPlanetsData,
  getAllPlanets,
};
