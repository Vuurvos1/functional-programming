/**
 * Normalize numbers inside an array
 * @param {array} dataset - Array containing dataset columns
 * @param {string} value - The name of the value you want from the dataset
 * @return {array} array containing normalized numbers
 */
module.exports = function convertToNumbers(dataset, value) {
  return dataset.map((numb) => parseFloat(numb[value]));
};
