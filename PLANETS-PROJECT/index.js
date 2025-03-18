// // how to write the csv-parse
// const { parse } = require('csv-parse');
// // You need node's file import module
// const fs = require('fs');

// // create an empty array
// const results = [];

// // Read the file
// fs.createReadStream('kepler_data.csv')
//     .on('data',(data) => {
//         result.push(data);
//     })
//     //react to error
//     .on('error',(err) => {
//         console.log(err);
    
//     } )
//     // do a console.log to see output
//     .on('end', () => {
//         console.log(results);
//         console.log('done');
//     });
// //parse();

//  // finding Habitable planets
// const parse = require('csv-parse');
// const fs = require('fs');

// const habitablePlanets = [];

// function isHabitablePlanet(planet) {
//   return planet['koi_disposition'] === 'CONFIRMED'
//     && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
//     && planet['koi_prad'] < 1.6;
// }

// fs.createReadStream('kepler_data.csv')
//   .pipe(parse({
//     comment: '#',
//     columns: true,
//   }))
//   .on('data', (data) => {
//     if (isHabitablePlanet(data)) {
//       habitablePlanets.push(data);
//     }
//   })
//   .on('error', (err) => {
//     console.log(err);
//   })
//   .on('end', () => {
//     console.log(`${habitablePlanets.length} habitable planets found!`);
//   });


// Travelling to habital planets
const {parse} = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}

fs.createReadStream('kepler_data.csv')
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
    console.log(err);
  })
  .on('end', () => {
    console.log(habitablePlanets.map((planet) => {
      return planet['kepler_name'];
    }));
    console.log(`${habitablePlanets.length} habitable planets found!`);
  });