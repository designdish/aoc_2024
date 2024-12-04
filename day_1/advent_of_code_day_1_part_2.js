const fs = require('fs');
const aoc = () => {
  const list1 = [];
  const list2 = [];

  fs.readFileSync('./input.txt')
    .toString()
    .split('\n')
    .forEach((s) => {
      const [v1, v2] = s.split(/\s+/)
        .map((s) => parseInt(s));

      list1.push(v1);
      list2.push(v2);
    });

  const countMatches = ((array, val) => {
    return array.filter((v) => (v === val)).length;
  });
  const loopArrays = ((arr1, arr2) => {
    let similarityScore = 0;

    for (var i = 0; i < arr1.length; i++) {
      similarityScore += (arr1[i] * countMatches(arr2, arr1[i]));
    }

    return similarityScore;
  });
  let simScore = loopArrays(list1, list2);

  console.log(`Sim Score = ${simScore}`);
};

aoc();
