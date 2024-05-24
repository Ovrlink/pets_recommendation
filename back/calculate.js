async function scoringPoints(userData, petsArr) {
  const { age, people, housingType, temperament, timeAtHome, trips, kids } =
    await userData;
  if (age <= 15) {
    petsArr[0].points += 3;
    petsArr[1].points += 3;
    petsArr[2].points += 2;
    petsArr[3].points += 2;
    petsArr[4].points += 2;
    petsArr[5].points += 1;
    petsArr[6].points += 1;
    petsArr[7].points += 1;
    petsArr[8].points += 1;
    petsArr[9].points += 1;
  } else if (15 < age && age < 45) {
    petsArr[0].points += 2;
    petsArr[1].points += 3;
    petsArr[2].points += 3;
    petsArr[3].points += 3;
    petsArr[4].points += 3;
    petsArr[5].points += 2;
    petsArr[6].points += 2;
    petsArr[7].points += 2;
    petsArr[8].points += 2;
    petsArr[9].points += 2;
  } else if (45 <= age && age <= 90) {
    petsArr[0].points += 1;
    petsArr[1].points += 1;
    petsArr[2].points += 2;
    petsArr[3].points += 2;
    petsArr[4].points += 3;
    petsArr[5].points += 3;
    petsArr[6].points += 3;
    petsArr[7].points += 2;
    petsArr[8].points += 2;
    petsArr[9].points += 2;
  }

  if (people == 0) {
    petsArr[0].points += 1;
    petsArr[1].points += 2;
    petsArr[2].points += 2;
    petsArr[3].points += 2;
    petsArr[4].points += 3;
    petsArr[5].points += 1;
    petsArr[6].points += 3;
    petsArr[7].points += 3;
    petsArr[8].points += 2;
    petsArr[9].points += 2;
  } else if (1 <= people && people <= 6) {
    petsArr[0].points += 3;
    petsArr[1].points += 3;
    petsArr[2].points += 2;
    petsArr[3].points += 2;
    petsArr[4].points += 3;
    petsArr[5].points += 3;
    petsArr[6].points += 3;
    petsArr[7].points += 1;
    petsArr[8].points += 1;
    petsArr[9].points += 3;
  } else if (6 < people && people <= 12) {
    petsArr[0].points += 2;
    petsArr[1].points += 2;
    petsArr[2].points += 3;
    petsArr[3].points += 2;
    petsArr[4].points += 1;
    petsArr[5].points += 3;
    petsArr[6].points += 3;
    petsArr[7].points += 1;
    petsArr[8].points += 1;
    petsArr[9].points += 1;
  }

  if (housingType == "0") {
    petsArr[0].points += 1;
    petsArr[1].points += 2;
    petsArr[2].points += 2;
    petsArr[3].points += 3;
    petsArr[4].points += 3;
    petsArr[5].points += 3;
    petsArr[6].points += 3;
    petsArr[7].points += 3;
    petsArr[8].points += 3;
    petsArr[9].points += 3;
  } else if (housingType == "1") {
    petsArr[0].points += 3;
    petsArr[1].points += 2;
    petsArr[2].points += 2;
    petsArr[3].points += 1;
    petsArr[4].points += 1;
    petsArr[5].points += 2;
    petsArr[6].points += 2;
    petsArr[7].points += 2;
    petsArr[8].points += 2;
    petsArr[9].points += 2;
  }

  if (temperament == "0") {
    petsArr[0].points += 1;
    petsArr[1].points += 1;
    petsArr[2].points += 2;
    petsArr[3].points += 2;
    petsArr[4].points += 1;
    petsArr[5].points += 4;
    petsArr[6].points += 4;
    petsArr[7].points += 3;
    petsArr[8].points += 3;
    petsArr[9].points += 3;
  } else if (temperament == "1") {
    petsArr[0].points += 2;
    petsArr[1].points += 4;
    petsArr[2].points += 3;
    petsArr[3].points += 3;
    petsArr[4].points += 2;
    petsArr[5].points += 1;
    petsArr[6].points += 2;
    petsArr[7].points += 2;
    petsArr[8].points += 2;
    petsArr[9].points += 2;
  } else if (temperament == "2") {
    petsArr[0].points += 2;
    petsArr[1].points += 2;
    petsArr[2].points += 3;
    petsArr[3].points += 2;
    petsArr[4].points += 2;
    petsArr[5].points += 2;
    petsArr[6].points += 4;
    petsArr[7].points += 2;
    petsArr[8].points += 2;
    petsArr[9].points += 2;
  } else if (temperament == "3") {
    petsArr[0].points += 4;
    petsArr[1].points += 4;
    petsArr[2].points += 2;
    petsArr[3].points += 2;
    petsArr[4].points += 2;
    petsArr[5].points += 1;
    petsArr[6].points += 2;
    petsArr[7].points += 1;
    petsArr[8].points += 1;
    petsArr[9].points += 1;
  }

  if (timeAtHome == "0") {
    petsArr[0].points += 1;
    petsArr[1].points += 2;
    petsArr[2].points += 2;
    petsArr[3].points += 2;
    petsArr[4].points += 3;
    petsArr[5].points += 3;
    petsArr[6].points += 3;
    petsArr[7].points += 3;
    petsArr[8].points += 3;
    petsArr[9].points += 3;
  } else if (timeAtHome == "1") {
    petsArr[0].points += 2;
    petsArr[1].points += 2;
    petsArr[2].points += 3;
    petsArr[3].points += 3;
    petsArr[4].points += 3;
    petsArr[5].points += 3;
    petsArr[6].points += 2;
    petsArr[7].points += 2;
    petsArr[8].points += 2;
    petsArr[9].points += 2;
  } else if (timeAtHome == "2") {
    petsArr[0].points += 3;
    petsArr[1].points += 3;
    petsArr[2].points += 3;
    petsArr[3].points += 2;
    petsArr[4].points += 2;
    petsArr[5].points += 1;
    petsArr[6].points += 1;
    petsArr[7].points += 1;
    petsArr[8].points += 1;
    petsArr[9].points += 1;
  }

  if (trips == "0") {
    petsArr[0].points += 1;
    petsArr[1].points += 1;
    petsArr[2].points += 1;
    petsArr[3].points += 1;
    petsArr[4].points += 1;
    petsArr[5].points += 3;
    petsArr[6].points += 2;
    petsArr[7].points += 2;
    petsArr[8].points += 2;
    petsArr[9].points += 3;
  } else if (trips == "1") {
    petsArr[0].points += 2;
    petsArr[1].points += 2;
    petsArr[2].points += 2;
    petsArr[3].points += 3;
    petsArr[4].points += 3;
    petsArr[5].points += 2;
    petsArr[6].points += 2;
    petsArr[7].points += 3;
    petsArr[8].points += 3;
    petsArr[9].points += 3;
  } else if (trips == "2") {
    petsArr[0].points += 3;
    petsArr[1].points += 3;
    petsArr[2].points += 2;
    petsArr[3].points += 2;
    petsArr[4].points += 2;
    petsArr[5].points += 1;
    petsArr[6].points += 1;
    petsArr[7].points += 1;
    petsArr[8].points += 1;
    petsArr[9].points += 1;
  }

  if (kids == "0") {
    petsArr[0].points += 3;
    petsArr[1].points += 3;
    petsArr[2].points += 3;
    petsArr[3].points += 3;
    petsArr[4].points += 2;
    petsArr[5].points += 2;
    petsArr[6].points += 2;
    petsArr[7].points += 1;
    petsArr[8].points += 1;
    petsArr[9].points += 1;
  } else if (kids == "1") {
    petsArr[0].points += 1;
    petsArr[1].points += 2;
    petsArr[2].points += 2;
    petsArr[3].points += 1;
    petsArr[4].points += 2;
    petsArr[5].points += 2;
    petsArr[6].points += 2;
    petsArr[7].points += 3;
    petsArr[8].points += 3;
    petsArr[9].points += 2;
  }
  const petsArrSorted = petsArr.sort((a, b) => b.points - a.points);
  return petsArrSorted;
}

module.exports = {
  scoringPoints,
};
