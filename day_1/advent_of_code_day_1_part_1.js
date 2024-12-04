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

  const list1Sorted = list1.sort();
  const list2Sorted = list2.sort();
  let diff = 0;

  for (var i = 0; i < list1.length; i++) {
    let a = list1Sorted[i];
    let b = list2Sorted[i];

    diff += Math.abs(a - b);
  }
  console.log(`diff = ${diff}`);
};

aoc();
