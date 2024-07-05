// Net Salary Calculator

//PAYE deductions
const payeRates = [
    { min: 0, max: 24000, deduction: 0.1 },
    { min: 24001, max: 32333, deduction: 0.25 },
    { min: 32334, max: 500000, deduction: 0.3 },
    { min: 500001, max: 800000, deduction: 0.33 },
    { min: 800001, max: Infinity, deduction: 0.35 }
];

  function calculatePaye(data) {
    for (let i = 0; i < payeRates.length; i++) {
      if (data >= payeRates[i].min && data <= payeRates[i].max) {
        return data * payeRates[i].deduction;
      }
    }
    return data;
  }


//NHIF deductions 
const nhifRates = [
    { min: 0, max: 5999, deduction: 150 },
    { min: 6000, max: 7999, deduction: 300 },
    { min: 8000, max: 11999, deduction: 400 },
    { min: 12000, max: 14999, deduction: 500 },
    { min: 15000, max: 19999, deduction: 600 },
    { min: 20000, max: 24999, deduction: 750 },
    { min: 25000, max: 29999, deduction: 850 },
    { min: 30000, max: 34999, deduction: 900 },
    { min: 35000, max: 39999, deduction: 950 },
    
  ];
  
  function calculateNhif(data) {
    for (let i = 0; i < nhifRates.length; i++) {
      if (data >= nhifRates[i].min && data <= nhifRates[i].max) {
        return data - nhifRates[i].deduction;
      }
    }
    return data;
  }

  //NSSF deductions
   function calculateNSSF(data){
    if(data >= 0 && data <= 7000){
        return(data);
   } else  (data >= 7001 && data <= 36000);{
         return data ;
         
   }
}


let PAYE = calculatePaye(10000);
let NHIF = calculateNhif(10000);
let NSSF = calculateNSSF(10000);


//Net salary
function calculateNetSalary(grossSalary) {
    return grossSalary - (PAYE + NHIF + NSSF);
}
//gross salary = basic salary + benefits
//net salary = gross salary - deductions
console.log(calculateNetSalary(50000));