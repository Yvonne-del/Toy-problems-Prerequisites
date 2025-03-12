//this is a function that'll be used to calculate net salary

function netSalaryCalculation(sumOfBenefits, basicSalary){
    //create variables for values to be used in calculating net salary
    let grossSalary = sumOfBenefits + basicSalary;
    let shif = (2.75/100) * grossSalary;

    //statement to determine payee value
    let payee;
    if(grossSalary <=24000 && (grossSalary*12) <=288000){
        payee = (10/100)* grossSalary;
    }
    else if(grossSalary <=32333 && (grossSalary*12) <=388000){
        payee = (25/100) *grossSalary;
    }
    else if(grossSalary <= 500000 && (grossSalary *12) <=6000000){
        payee = (30/100)* grossSalary;
    }
    else if(grossSalary <=800000 && (grossSalary*12) <=9600000){
        payee = (32.5 /100) * grossSalary
    }
    else{
        payee = (35/100)* grossSalary;
    }

    //statement to determine nssf value
    let nssf;
    if (grossSalary <=6000){
        nssf = (6/100)* 6000;
    }
    else if(grossSalary <=18000){
        nssf = ((6/100)* 6000) + ((6/100) * (grossSalary - 6000));
    }
    else {
        nssf = 1080;
    }

    //now that we have all numbers....lets calculate net salary
    let netSalary = grossSalary - (payee + nssf + shif);
     
    return `Your net salary is Ksh ${netSalary}.`;
}
console.log(netSalaryCalculation(100000, 10000));