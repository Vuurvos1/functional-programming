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
 * @param {array} dataset - Array containing dataset
 * @param {array} columns - Array containing the names of the columns you want
 * @return {array} array containing values from the selected column
 */
const getColumns = (dataset, columns) => {
  return dataset.map((value) => {
    const data = {};

    for (let i =0; i < columns.length; i++) {
      data[columns[i]] = value[columns[i]];
    }

    return data;
  });
};

/**
 * Normalize numbers inside an array
 * @param {array} dataset - Array containing dataset columns
 * @param {string} column - The name of the column you want from the dataset
 * @return {array} array containing normalized numbers
 */
const convertToNumbers = (dataset, column)=> {
  return dataset.map((value) => Number(value[column]));
};


module.exports = {
  getColumn,
  getColumns,
  convertToNumbers,
};
