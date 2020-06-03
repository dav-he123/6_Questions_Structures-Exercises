const metals = [
  {
    name: "1084",
    type: "Carbon Steel",
    composition: {
      iron: 98.08,
      carbon: 0.8,
      manganese: 0.6,
      phosphorus: 0.05,
      sulfur: 0.04,
    },
    forging_min_temp: 900,
    forging_max_temp: 1200,
  },
  {
    name: "1075",
    type: "Carbon Steel",
    composition: {
      iron: 98,
      carbon: 0.7,
      manganese: 0.4,
      phosphorus: 0.05,
      sulfur: 0.04,
    },
    forging_min_temp: 900,
    forging_max_temp: 1200,
  },
  {
    name: "80CrV2",
    type: "Carbon Steel",
    composition: {
      iron: 98.08,
      carbon: 0.75,
      chrome: 0.4,
      molybdenium: 0.1,
      vanadium: 0.15,
      manganese: 0.3,
      phosphorus: 0.025,
      sulfur: 0.025,
    },
    forging_min_temp: 850,
    forging_max_temp: 1100,
  },
  {
    name: "S30V",
    type: "Stainless Steel",
    composition: {
      iron: 98,
      carbon: 0.015,
      chromium: 0.14,
      molybdenium: 0.2,
      vanadium: 0.4,
    },
    forging_min_temp: 975,
    forging_max_temp: 1200,
  },
  {
    name: "420HC",
    type: "Stainless Steel",
    composition: {
      iron: 98,
      carbon: 0.004,
      nickel: 0.5,
      silicon: 0.6,
      chromium: 0.12,
      manganese: 0.01,
    },
    forging_min_temp: 1050,
    forging_max_temp: 1200,
  },
];

//==========Solving Questions Your Own Way=============//

//==========Part 1 - Solving the problems in your own way=============//
// Question 1:

const allMetals = function (metals) {
  let resultArr = [];

  metals.forEach((itemArr) => {
    resultArr.push(itemArr["name"]);
  });

  // console.log(resultArr);

  return resultArr;
};

allMetals(metals);

// ["1084", "1075", "80CrV2", "S30V", "420HC"]`

// Question 2:

const listAllMetalsTypes = function (metals) {
  let resultArr = [];

  metals.forEach((itemArr) => {
    resultArr.push(itemArr["name"] + " " + itemArr["type"]);
  });

  // console.log(resultArr);

  return resultArr;
};

listAllMetalsTypes(metals);

// [
// 	"1084 Carbon Steel",
// 	"1075 Carbon Steel",
// 	"80CrV2 Carbon Steel",
// 	"S30V Stainless Steel",
// 	"420HC Stainless Steel"
// ]

// Question 3:

const containingMetalsByType = function (metals) {
  // let resultArr = [];
  let resultType = {};

  metals.forEach((itemArr) => {
    resultType[itemArr.type] = [];
  });

  // console.log(resultType);

  for (let items of metals) {
    resultType[items.type].push(items.name);
  }

  // console.log(resultType);

  return resultType;
};

containingMetalsByType(metals);

// {
//   "Carbon Steel": ["1084","1075","80CrV2"],
//   "Stainless Steel": ["S30V", "420HC"]
// }

//Question 4:

const listofAllMetalsSorted = function (metals) {
  let resultArr = [];

  metals.sort((a, b) => (a.composition.carbon > b.composition.carbon ? -1 : 1));

  for (let item of metals) {
    resultArr.push(item.name);
  }

  // console.log(resultArr);
  return resultArr;
};

listofAllMetalsSorted(metals);

// ["1084", "80CrV2","1075", "S30V", "420HC"]

//Question 5:

const listAverageConcentration = function (metals) {
  let resultType = {};
  // let resultsArr = [];

  for (const key in metals) {
    // console.log(metals[key].composition);
    let value = metals[key].composition;
    // console.log(value);

    for (const elem in value) {
      // console.log(value[elem]);
      resultType[elem] = [];

      resultType[elem].push(value[elem]);
    }
  }

  // console.log(resultType);

  return resultType;
};

listAverageConcentration(metals);

// {
//   carbon: 0.004,
//   chrome: 0.4,
//   chromium: 0.12,
//   iron: 98,
//   manganese:0.01,
//   molybdenium: 0.2,
//   nickel:0.5,
//   phosphorus: 0.025,
//   silicon:0.6,
//   sulfur: 0.025,
//   vanadium:0.4,
// }

//==========Part 2 - Solving the questions differently using only for of loop=============//

//Question 1:

const allMetalsForOfLoop = function (metals) {
  let resultArr = [];

  for (let elem of metals) {
    resultArr.push(elem["name"]);
  }

  // metals.forEach((itemArr) => {
  //   resultArr.push(itemArr["name"]);
  // });

  // console.log(resultArr);

  return resultArr;
};

allMetalsForOfLoop(metals);

//Question 2:

const listOfAllMetalsForOfLoop = function (metals) {
  let resultArr = [];

  for (let elem of metals) {
    resultArr.push(elem["name"] + " " + elem["type"]);
  }

  // metals.forEach((itemArr) => {
  //   resultArr.push(itemArr["name"]);
  // });

  // console.log(resultArr);

  return resultArr;
};

listOfAllMetalsForOfLoop(metals);

//Question 3:

const containingMetalsByTypeForOfLoop = function (metals) {
  let resultType = {};

  // metals.forEach((itemArr) => {
  //   resultType[itemArr.type] = [];
  // });

  for (let elems of metals) {
    resultType[elems.type] = [];
  }

  // console.log(resultType);

  for (let items of metals) {
    resultType[items.type].push(items.name);
  }

  // console.log(resultType);

  return resultType;
};

containingMetalsByTypeForOfLoop(metals);

//Question 4:

const listofAllMetalsSortedForOfLoop = function (metals) {
  let resultArr = [];

  metals.sort((a, b) => (a.composition.carbon > b.composition.carbon ? -1 : 1));

  for (let item of metals) {
    resultArr.push(item.name);
  }

  // console.log(resultArr);
  return resultArr;
};

listofAllMetalsSortedForOfLoop(metals);

//Question 5:

const listAverageConcentrationForOfLoop = function (metals) {
  let resultType = {};
  // let resultsArr = [];

  for (const key in metals) {
    // console.log(metals[key].composition);
    let value = metals[key].composition;
    // console.log(value);

    for (const elem in value) {
      // console.log(value[elem]);
      resultType[elem] = [];

      resultType[elem].push(value[elem]);
    }
  }

  // console.log(resultType);

  return resultType;
};

listAverageConcentrationForOfLoop(metals);

//==========Part 3 - Solving the questions differently using only for in loop=============//

//Question 1:
const allMetalsForInLoop = function (metals) {
  let resultArr = [];

  for (let elem in metals) {
    let value = metals[elem];
    // console.log(value);

    for (let items in value) {
      // console.log(items);
      if (value.hasOwnProperty(items)) {
        // console.log(items + " => " + value[items]);
      }
    }
  }

  return resultArr;
};

allMetalsForInLoop(metals);

//Question 2:
const listOfAllMetalsForInLoop = function (metals) {
  let resultArr = [];

  for (let elem in metals) {
    resultArr.push(elem["name"] + " " + elem["type"]);
  }

  // metals.forEach((itemArr) => {
  //   resultArr.push(itemArr["name"]);
  // });

  // console.log(resultArr);

  return resultArr;
};

listOfAllMetalsForInLoop(metals);

//Question 3:

const containingMetalsByTypeForInLoop = function (metals) {
  let resultType = {};

  // metals.forEach((itemArr) => {
  //   resultType[itemArr.type] = [];
  // });

  for (let elems of metals) {
    resultType[elems.type] = [];
  }

  // console.log(resultType);

  for (let items of metals) {
    resultType[items.type].push(items.name);
  }

  // console.log(resultType);

  return resultType;
};

containingMetalsByTypeForInLoop(metals);

//Question 4:

const listofAllMetalsSortedForIfLoop = function (metals) {
  let resultArr = [];

  metals.sort((a, b) => (a.composition.carbon > b.composition.carbon ? -1 : 1));

  for (let item of metals) {
    resultArr.push(item.name);
  }

  // console.log(resultArr);
  return resultArr;
};

listofAllMetalsSortedForIfLoop(metals);

//Question 5:

const listAverageConcentrationForInLoop = function (metals) {
  //In the example displayed
  let resultType = {};
  // let resultsArr = [];

  for (const key in metals) {
    // console.log(metals[key].composition);
    let value = metals[key].composition;
    // console.log(value);

    for (const elem in value) {
      // console.log(value[elem]);
      resultType[elem] = [];

      resultType[elem].push(value[elem]);
    }
  }

  // console.log(resultType);

  return resultType;
};

listAverageConcentrationForInLoop(metals);

//==========Part 4 - Solving the questions differently using only forEach loop=============//

// Question 1:

const allMetalsForEach = function (metals) {
  let resultArr = [];

  metals.forEach((itemArr) => {
    resultArr.push(itemArr["name"]);
  });

  // console.log(resultArr);

  return resultArr;
};

allMetalsForEach(metals);

// Question 2:

const listAllMetalsTypesForEach = function (metals) {
  let resultArr = [];

  metals.forEach((itemArr) => {
    resultArr.push(itemArr["name"] + " " + itemArr["type"]);
  });

  // console.log(resultArr);

  return resultArr;
};

listAllMetalsTypesForEach(metals);

// Question 3:

const containingMetalsByTypeForEach = function (metals) {
  // let resultArr = [];
  let resultType = {};

  metals.forEach((itemArr) => {
    resultType[itemArr.type] = [];
  });

  // console.log(resultType);

  metals.forEach((items) => {
    resultType[items.type].push(items.name);
  });

  // console.log(resultType);

  return resultType;
};

containingMetalsByTypeForEach(metals);

//Question 4:

const listofAllMetalsSortedForEach = function (metals) {
  let resultArr = [];

  metals.sort((a, b) => (a.composition.carbon > b.composition.carbon ? -1 : 1));

  metals.forEach((item) => {
    resultArr.push(item.name);
  });

  // console.log(resultArr);
  return resultArr;
};

listofAllMetalsSortedForEach(metals);

//Question 4:

const listofAllMetalsSortedForEachAns = function (metals) {
  let resultArr = [];

  metals.sort((a, b) => (a.composition.carbon > b.composition.carbon ? -1 : 1));

  for (let item of metals) {
    resultArr.push(item.name);
  }

  // console.log(resultArr);
  return resultArr;
};

listofAllMetalsSortedForEachAns(metals);

//==========Part 5 - Solving the questions differently using only map, filer, reduce=============//

// Question 1:

const allMetalsMapFilterReduce = function (metals) {
  let resultArr = [];

  metals.map((itemArr) => {
    resultArr.push(itemArr["name"]);
  });

  // console.log(resultArr);

  return resultArr;
};

allMetalsMapFilterReduce(metals);

// Question 2:

const listAllMetalsTypesMapFilterReduce = function (metals) {
  let resultArr = [];

  metals.filter((itemArr) => {
    resultArr.push(itemArr["name"] + " " + itemArr["type"]);
  });

  // console.log(resultArr);

  return resultArr;
};

listAllMetalsTypesMapFilterReduce(metals);

// Question 3:

const containingMetalsByTypeMapFilterReduce = function (metals) {
  // let resultArr = [];
  let resultType = {};

  metals.map((itemArr) => {
    resultType[itemArr.type] = [];
  });

  // console.log(resultType);

  metals.map((items) => {
    resultType[items.type].push(items.name);
  });

  // console.log(resultType);

  return resultType;
};

containingMetalsByTypeMapFilterReduce(metals);

//Question 4:

const listofAllMetalsSortedMapSortFilter = function (metals) {
  let resultArr = [];

  metals.sort((a, b) => (a.composition.carbon > b.composition.carbon ? -1 : 1));

  metals.map((item) => {
    resultArr.push(item.name);
  });

  // console.log(resultArr);
  return resultArr;
};

listofAllMetalsSortedMapSortFilter(metals);

//Question 5:

const listAverageConcentrationMapSortFilter = function (metals) {
  let resultType = {};
  // let resultsArr = [];

  // metals.map((key) => {
  //   let value = metals[key].composition;

  //   value.map((elem) => {
  //     resultType[elem] = [];
  //     resultType[elem].push(value[elem]);
  //   });

  for (const key in metals) {
    // console.log(metals[key].composition);
    let value = metals[key].composition;
    // console.log(value);

    for (const elem in value) {
      // console.log(value[elem]);
      resultType[elem] = [];

      resultType[elem].push(value[elem]);
    }
  }

  // console.log(resultType);
  return resultType;
};

listAverageConcentrationMapSortFilter(metals);

// ["1084", "80CrV2","1075", "S30V", "420HC"]

//==========Part 6=============//

// Question 1: In the first question, what would be more appropriate between a for..of, a forEach and map ?

// Answer: In the first question, a for..of loop would be more appropriate because "metals" is an array of objects and to extract elements
//from the array especiallly if the elements are objects it would be best to use for..of loops as obtaining the values of the key values
//pairs is more efficient.

// Question 2: In the second question, what would be more appropriate between a for..of, a forEach and map ?
// Answer: In second question, the forEach loop would be more appropriate because a variable is declared outside of the forEach scope,
//therefore it makes more sense to use a forEach loop.

// Question 3: In the third question, what would be more appropriate between a for..of, a forEach and map ?
// Answer: In this question using a for..of loop would be best because metal is an array of objects and because values from the object
// need to be pushed into an array, it is visually clear to the developer to be clear and visually appealing to know
// what the loop is doing right away

//Question 4: In the fourth question, after sorting, what would be more appropriate between a for..of, a forEach and map ?
// After sorting a forEach loop would be most appropraite because we are using a newly sorted metals array so it
// makes sense to use a forEach loop as a array from outside of the scope of the loop is being used within it.

//Question 5: Question 5: In the fifth question, what would be more appropriate between a for..of, a forEach and map ?
// It would be more appropriate to use the for of loop because there are loops being nested inside 1 another. In this way to the developer
// or the debugger it would be clear and concise when debugging the code to identify where a bug might occur(if there was a bug).
