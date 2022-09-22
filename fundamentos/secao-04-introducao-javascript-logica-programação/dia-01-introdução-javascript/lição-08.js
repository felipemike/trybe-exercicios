let inss;
let ir;
let salario = 2000.00

if (salario <= 1556.94){
    inss = salario * 0.08;
} else if (salario <= 2594.92){
    inss = salario * 0.09;
} else if (salario <= 5189.82){
    inss = salario * 0.11;
} else if (salario > 5189.82){
    inss = 570.88;
}
const salarioBase = salario - inss

if(salarioBase <= 1903.98){
    ir = 0
} else if(salarioBase <= 2826.65){
    ir = (salarioBase * 0.07) - 142.80;
} else if(salarioBase <= 3751.05){
    ir = (salarioBase * 0.15) - 354.80;
} else if(salarioBase <= 4664.68){
    ir = (salarioBase * 0.225) - 636.13;
} else {
    ir = (salarioBase * 0.275) - 869.36;
}

console.log(salarioBase - ir)