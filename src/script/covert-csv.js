const csvFilePath = './pokemon.csv'; // Replace with the path to your CSV file
const csv = require('csvtojson');
const fs = require('fs');

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    const jsonContent = JSON.stringify(jsonObj, null, 2);
    fs.writeFile('output.json', jsonContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing JSON file:', err);
      } else {
        console.log('JSON file has been created successfully!');
      }
    });
  })
  .catch((err) => {
    console.error('Error converting CSV to JSON:', err);
  });
