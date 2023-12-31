// You are given a table, in which every key is a stringified number, and each corresponding value is an array of characters, e.g.

// {
//   "1": ["A", "B", "C"],
//   "2": ["A", "B", "D", "A"],
// }
// Create a function that returns a table with the same keys, but each character should appear only once among the value-arrays, e.g.

// {
//   "1": ["C"],
//   "2": ["A", "B", "D"],
// }
// Rules
// Whenever two keys share the same character, they should be compared numerically, and the larger key will keep that character. That's why in the example above the array under the key "2" contains "A" and "B", as 2 > 1.
// If duplicate characters are found in the same array, the first occurance should be kept.
// Example 1
// input = {
//   "1": ["C", "F", "G"],
//   "2": ["A", "B", "C"],
//   "3": ["A", "B", "D"],
// }

// output = {
//   "1": ["F", "G"],
//   "2": ["C"],
//   "3": ["A", "B", "D"],
// }
// Example 2
// input = {
//   "1": ["A"],
//   "2": ["A"],
//   "3": ["A"],
// }

// output = {
//   "1": [],
//   "2": [],
//   "3": ["A"],
// }
// Example 3
// input = {
//   "432": ["A", "A", "B", "D"],
//   "53": ["L", "G", "B", "C"],
//   "236": ["L", "A", "X", "G", "H", "X"],
//   "11": ["P", "R", "S", "D"],
// }

output = {
  "11": ["P", "R", "S"],
  "53": ["C"],
  "236": ["L", "X", "G", "H"],
  "432": ["A", "B", "D"],
}

const removeDuplicateIds = (obj) => {
    // const uniqueChars = {}; // Object to store unique characters for each key
  
    // // Iterate through each key-value pair
    // Object.entries(obj).forEach(([key, arr]) => {
    //   uniqueChars[key] = [...new Set(arr)]; // Use Set to store only unique characters
    // });
  
    // return uniqueChars;
    // return Object.values(obj)
    let sorted = {}
    n = Object.keys(obj).length
    keys = Object.keys(obj)
    values = Object.values(obj)
    //sorting an obj acc to the keys in ascending order
    for(let i = 0 ; i<n-1 ;i++){
      for (let j=0 ; j<n-i-1 ;j++){
        if (keys[i]>keys[j]){
          const temp = keys[j]
          keys[j] = keys[j+1]
          keys[j+1] = temp
          const tempo = values[j]
          values[j] = values[j+1]
          values[j+1] = tempo
        }
      }
    }
    for(let i = 0;i<n;i++){
      sorted[keys[i]]= values[i]
    }

    //duplicatremoving
    newKeys = Object.keys(sorted)
    newVal = Object.values(sorted)
    const visited = []
    for(let i = n-1;i>=0;i--){
      const unique = []
      for (let j=0;j<newVal[i].length;j++){
        if(!unique.includes(newVal[i][j]) && !visited.includes(newVal[i][j])){
          unique.push(newVal[i][j])
          visited.push(newVal[i][j])
        }
      }
      newVal[i]= unique
    }
    let final = {}
    for(let i=0;i<n;i++){
      final[newKeys[i]]= newVal[i]
    }
    return final

  };
  

// const testObj = {
//     '2000': 'Articel1',
//     '4000': 'Articel2',
//     '1000': 'Articel3',
//     '3000': 'Articel4',
//   };

// const testObj = {
//   "11": ["P", "R", "S"],
//   "53": ["C"],
//   "236": ["L", "X", "G", "H"],
//   "432": ["A", "B", "D"],
// }

const obj1 = {
  "4": ["C", "F", "G"],
  "2": ["A", "B", "C","D","F","D","E"],
  "3": ["A", "B", "D"],
};

  // a=removeDuplicateIds(testObj)
  a=removeDuplicateIds(obj1)
  console.log(a)