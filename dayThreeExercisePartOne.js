// 1. Tonnage Validation 

let procurementTonnage = 1200; 
let meetsRequirment = procurementTonnage >= 1000;
console.log(meetsRequirment)  //output: true

if(procurementTonnage >= 1000){
    console.log("Tonnage requirment met!")
}else {
    console.log("Tonnage requirment don't met!")
}

// 2. Strictness Check 
let costStr = '5000';
let costNum = 5000;
console.log(costStr == costNum);//true
console.log(costStr === costNum);//false
