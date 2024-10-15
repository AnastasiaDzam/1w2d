const filterByAge = (array) => array.age < 50;

const filterByScore = (array) => array.score > 75;

const filterByServiceRecord = (array) => array.serviceRecord > 5;

const sortByScore = (candidates) => [...candidates].sort((a, b) => b.score - a.score);

const getMeanAge = (candidates) => {
let sum = 0;
candidates.forEach(el => { sum += el.age});
return sum / candidates.length;
};

const getMeanAgeReduce = (candidates) => 
  candidates.reduce((a, b) => (a + b.age),0)/candidates.length;

const getNameOnly = (el) => {
 return el.name
};

module.exports = {
  filterByAge,
  filterByScore,
  filterByServiceRecord,
  sortByScore,
  getMeanAge,
  getMeanAgeReduce,
  getNameOnly,
};
