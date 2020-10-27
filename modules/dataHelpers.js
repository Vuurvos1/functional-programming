/**
 * Normalize numbers inside an array
 * @param {array} dataset - Array containing dataset
 * @param {string} column - The name of the column you want from the dataset
 * @return {array} array containing values from the selected column
 */
const getColumn = (dataset, column) => {
  return dataset.map((value) => value[column]);
};

/**
 * Normalize numbers inside an array
 * @param {array} dataset - Array containing dataset columns
 * @param {string} column - The name of the column you want from the dataset
 * @return {array} array containing normalized numbers
 */
const convertToNumbers = (dataset, column)=> {
  return dataset.map((numb) => parseFloat(numb[column]));
};


module.exports = {
  getColumn,
  convertToNumbers,
};
