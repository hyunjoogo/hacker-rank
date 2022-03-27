const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];

function breakingRecords(scores) {
  let arr = [0, 0];
  let maximum = scores[0];
  let minimum = scores[0];

  scores.map((value) => {
    if (maximum < value) {
      maximum = value;
      arr[0]++;
    }
    if (minimum > value) {
      minimum = value;
      arr[1]++;
    }
  });
  return arr;
}

breakingRecords(scores);
