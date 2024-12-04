const fs = require('fs');
const aoc = () => {
  let safeReports = 0;
  const exampleData = 
    `7 6 4 2 1 
    1 2 7 8 9
    9 7 6 2 1
    1 3 2 4 5
    8 6 4 4 1
    1 3 6 7 9`;
  const exReports = exampleData
    .trim()
    .split('\n')
    .map((line) => line.trim()
      .split(/\s+/)
      .map(Number));

  console.log(exReports);
  const reports = fs.readFileSync('./input.txt')
    .toString()
    .trim()
    .split('\n')
    .map((line) => line.trim()
      .split(/\s+/)
      .map(Number));
  const safetyCheck = ((report) => {
    const direction = Math.sign(report[1] - report[0]);

    for (let i = 1; i < report.length; i++) {
      const delta = report[i] - report[i - 1];

      if (Math.abs(delta) < 1 || Math.abs(delta) > 3) {
        return false;
      }

      if (direction * delta <= 0) {
        return false;
      }
    }

    return true;
  });

  for (const report of reports) {
    safeReports += safetyCheck(report);
  }
  console.log(`safe reports: ${safeReports}`);
};

aoc();
