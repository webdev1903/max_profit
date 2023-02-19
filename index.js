const theatreBuildingTime = 5;
const theatreEarning = 1500;
const pubBuildingTime = 4;
const pubEarning = 1000;
const commercialParkBuildingTime = 10;
const commercialParkEarning = 3000;

const n = 29; //change the value of input here
let res = [];
let obj = { T: 0, P: 0, C: 0 };

function maxProfit(n, sum, obj) {
  if (n < 0) {
    return;
  }
  res.push([sum, { ...obj }]);
  if (n == 0) {
    return;
  }
  maxProfit(n - theatreBuildingTime, sum, { ...obj, T: obj.T + 1 }) ||
    maxProfit(0, sum + (n - theatreBuildingTime) * theatreEarning, {
      ...obj,
      T: obj.T + 1,
    });
  maxProfit(n - pubBuildingTime, sum, {
    ...obj,
    P: obj.P + 1,
  }) ||
    maxProfit(0, sum + (n - pubBuildingTime) * pubEarning, {
      ...obj,
      P: obj.P + 1,
    });
  maxProfit(n - commercialParkBuildingTime, sum, { ...obj, C: obj.C + 1 }) ||
    maxProfit(
      0,
      sum + (n - commercialParkBuildingTime) * commercialParkEarning,
      { ...obj, C: obj.C + 1 }
    );
}

maxProfit(n, 0, obj);
let max = -Infinity;
for (let i = 0; i < res.length; i++) {
  if (res[i][0] > max) {
    max = res[i][0];
  }
}
let ans = [];
for (let i = 0; i < res.length; i++) {
  if (res[i][0] == max) {
    ans.push(res[i][1]);
  }
}
console.log("Earnings: $" + max);
console.log("Solutions");
for (let i = 0; i < ans.length; i++) {
  console.log(i + 1 + ". T:" + ans[i].T + "P:" + ans[i].P + "C:" + ans[i].C);
}
