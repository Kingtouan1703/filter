const fs = require("fs");

// Read the JSON data from a file
const jsonData = fs.readFileSync("./output.json", "utf8");

// Parse the JSON data
const data = JSON.parse(jsonData);

// Iterate over the array objects and convert string values to boolean and number data types
data.forEach((obj) => {
  Object.keys(obj).forEach((key) => {
    if (key === "#") {
      delete obj[key];
    } else if (obj[key] === "True") {
      obj[key] = true;
    } else if (obj[key] === "False") {
      obj[key] = false;
    } else if (!isNaN(obj[key])) {
      obj[key] = parseFloat(obj[key]); // or parseInt(obj[key]) for integer values
    } else if (key === "Sp") {
      const sp_atk_value = parseFloat(obj[key][" Atk"]);
      const sp_def_value = parseFloat(obj[key][" Def"]);
      obj["sp_atk"] = sp_atk_value;
      obj["sp_def"] = sp_def_value;
      delete obj[key];
    }
  });
});
const convertKeysToLowerCase = (obj) => {
  const convertedObj = {};
  for (let key in obj) {
    if (
      obj.hasOwnProperty(key) &&
      key !== "Legendary" &&
      key !== "Name" &&
      key !== "Type 1" &&
      key !== "Type 2"
    ) {
      const lowerKey = key.toLowerCase();
      convertedObj[lowerKey] = obj[key];
    }
    if (key === "Legendary") convertedObj["is_legendary"] = obj[key];
    if (key === "Name") convertedObj["pokemon_name"] = obj[key];
    if (key === "Type 1") convertedObj["pokemon_type_1"] = obj[key];
    if (key === "Type 2") convertedObj["pokemon_type_2"] = obj[key];
  }
  return convertedObj;
};

const convertedData = data.map((obj) => convertKeysToLowerCase(obj));
// Create an empty Set to store unique values
const uniqueValues = new Set();

// Iterate over each object in the array
convertedData.forEach((obj) => {
  // Extract the value from the "key" property
  Object.keys(obj).forEach((key) => {
    if (key === "pokemon_type_1" || key === "pokemon_type_2") {
      const value = obj[key];
      uniqueValues.add(value);
    }
  });
});
console.log(uniqueValues);

// Convert the updated data back to a JSON string
const updatedJsonData = JSON.stringify(convertedData);

// Write the JSON string to a new file
fs.writeFile("updated_data.json", updatedJsonData, "utf8", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
    return;
  }

  console.log("File updated_data.json has been saved.");
});
