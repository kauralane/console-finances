var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417], 
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099], 
];

// Number of months 
  // Uses .length to give the array length
console.log('Financial Analysis')
console.log(`Total months: ${finances.length}`)


// Total amount of profits/losses over the period. 
  // Uses a for loop to iterate over the numbers in the array and add the previous number to the total each time it iterates
let totalProfits = 0
for (let i = 0; i < finances.length; i++) {
  totalProfits += finances[i][1]
}

console.log(`Total: £${totalProfits}`)

// Average in changes over the entire period
  // Creates a new array called profitsLosses, and pushes the change in profits/losses and corresponding month into this array. Has to declare separate variables for month and number, using their index numbers (month = 0, number = 1), to keep track of the month and number in the same array.
let profitsLosses = [];
for (let j = 0; j < finances.length - 1; j++) {
  let change = (finances[j + 1][1] - finances[j][1])
  let months = (finances[j + 1][0])
  profitsLosses.push([months, change]);
}

  // Added the month on month changes together, using the same for loop as above. 
let sum = 0;
for (let j = 0; j < profitsLosses.length; j++) {
  sum += profitsLosses[j][1]
}

  // Divided the total by the number of months (which can be accessed using .length). 
  // Rounded the number to the nearest one hundredth using the .round function. Then had to divide this by 100 to get it to two decimal places. 
let totalChanges = (sum / (finances.length - 1))
let rounded = Math.round(totalChanges * 100) / 100;
console.log(`Average change: £${rounded}`);


// Finding the greatest increase in profits. 
  // Start by declaring maxProfit and month as empty and 0 so there is a starting point. 
  // Use for loop to iterate over the sub-arrays in the profitsLosses array. Use separate variables for month and profit to keep track of the current month as well as the current highest profit.
let maxProfit = 0
let maxMonth = '';

for (let k = 0; k < profitsLosses.length; k++) {
  let monthAndProfit = profitsLosses[k]; 
    let currentProfit = monthAndProfit[1];
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
      maxMonth = monthAndProfit[0];
  }
}

console.log(`Greatest increase in profits: ${maxMonth} (£${maxProfit})`);


// As above, but finding the greatest decrease in profits. 
let minProfit = 0;
let minMonth = '';

for (let l = 0; l < profitsLosses.length; l++) {
  let monthAndProfit = profitsLosses[l];
  let currentProfit = monthAndProfit[1];
  if (currentProfit < minProfit) {
    minProfit = currentProfit;
    minMonth = monthAndProfit[0];
  }
}

console.log(`Greatest decrease in profits: ${minMonth} (£${minProfit})`);
 

