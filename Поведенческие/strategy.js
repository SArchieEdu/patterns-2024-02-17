const Bank = {
  calculatePercentsAlgorithm,

  calculatePercents() {
    this.calculatePercentsAlgorithm();
  },
};

const calculatePercentsByRegion = (a, b) => {
  return 1 + 1;
};
const calculatePercentsByAge = (a, b) => {
  return 2 + 4;
};
const calculatePercentsByMoney = (a, b) => {
  return 5 + 6;
};
const calculatePercentsByYear = (a, b) => {
  return 5 + 9;
};

Bank.calculatePercentsAlgorithm = calculatePercentsByRegion;
Bank.calculatePercentsAlgorithm = calculatePercentsByYear;
