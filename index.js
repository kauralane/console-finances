var finances = [
  ['Jan-2010', 867884], 
  ['Feb-2010', 984655], //+116774
  ['Mar-2010', 322013], //-662642
  ['Apr-2010', -69417], //-391430
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

// This is a nested array. Each string has a nested index item of 0, and each number has a nested index item of 1.
// So to access only the number in item 5 of the array, we would use: console.log(finances[5][1])

//! Create a new GitHub repo called Console - Finances. Then, clone it to your computer.
//! Copy the starter files in your local git repository.
// You have been given a dataset composed of arrays with two fields, Date and Profit / Losses.
// Your task is to write JavaScript code that analyzes the records to calculate each of the following:

// !The total number of months included in the dataset.
// !The net total amount of Profit / Losses over the entire period.

// The average of the changes in Profit / Losses over the entire period.
    // !You will need to track what the total change in Profit / Losses are from month to month and then find the average. 
    // (Total / (Number of months - 1))

// The greatest increase in Profit / Losses(date and amount) over the entire period.
// The greatest decrease in Profit / Losses(date and amount) over the entire period.


// FUNCTIONING CODE
console.log('Financial Analysis')
// calculates total number of months in the dataset
console.log(`Total months: ${finances.length}`)

// calculates the net total amount of profit/losses over the entire period
// sum starts at 0 but with each loop, sum has a number from the array added to it, and when the loop runs again, sum is a higher number
let sum = 0; 
for (let i = 0; i < finances.length; i++) {
  sum += finances[i][1];
}

console.log(`Total: £${sum}`)


// TRIAL CODE
// calculates the change in profits month on month - individual

// if (finances[j][1] > finances[j++][1]) {
//     console.log(finances[j][1] - finances[j++][1])
// }
// else if (finances [j][1] < finances[j++][1]) {
// console.log(finances[j++][1] - finances [j][1])
// }

// to turn the above into a loop...

for (let j = 0; j < finances.length; j++) {
  if (finances[j][1] > finances[j+1][1]) {
    console.log(`- ${finances[j][1] - finances[j+1][1]}`);
  }
    else {
    console.log(finances[j+1][1] - finances[j][1]);
  }
}
// do I need to turn '-' to denote decrease in income into a number?

// HOW DO I SUM EACH ITERATION OF A FOR LOOP?


// diffTotal / finances.length -1 