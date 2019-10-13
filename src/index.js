function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
//-----ПРОВЕРКА деление на 0    
    if (expr.includes("/0") || expr.includes("/ 0")) throw "TypeError: Division by zero.";

    var arrExpr = expr.split(''); //разбивка строки по символам в массив

    let countX = 0, countY = 0;     //-----ПРОВЕРКА на "парность" "скобок"
    for (let x = 0; x <= arrExpr.length; x++) {
        if (arrExpr[x] == '(') {
            countX++;
        }
    }
    for (let y = 0; y <= arrExpr.length; y++) {
        if (arrExpr[y] == ')') {
            countY++;
        }
    }
    if (countX != countY) throw "ExpressionError: Brackets must be paired";
//-----------

    var reX = /\(([0-9 \s \/ \* \+ \- \.]*?)\)/g;      // рег. выраж. https://javascript.ru/basic/regular-expression+
// выражение обозначает:     
    var arrExpr = [];                               // https://medium.com/nuances-of-programming/%D1%88%D0%BF%D0%B0%D1%80%D0%B3%D0%B0%D0%BB%D0%BA%D0%B0-%D0%BF%D0%BE-%D1%80%D0%B5%D0%B3%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D1%8B%D0%BC-%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F%D0%BC-%D0%B2-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D0%B0%D1%85-53820a5f3435

function divMultiply() {
    while (arrExpr.includes('/') || arrExpr.includes('*')) {
        for (let a=0; a<=arrExpr.length; a++) {
            if (arrExpr[a] == '/') {
                arrExpr[a] = parseFloat((arrExpr[a-1]/arrExpr[a+1]).toFixed(14));
                delete arrExpr[a-1]; 
                delete arrExpr[a+1];
                a = a - 1;
            } else if (arrExpr[a] == '*') {
                arrExpr[a] = parseFloat((arrExpr[a-1]*arrExpr[a+1]).toFixed(11));
                delete arrExpr[a-1]; 
                delete arrExpr[a+1];
                a = a - 1;
            }
            arrExpr = arrExpr.filter(element => element !== undefined);
        }
    }
}
function plusMinus() {
    while (arrExpr.includes('+') || arrExpr.includes('-')) {
        if (arrExpr[1] == '+') {
            arrExpr[1] = parseFloat(arrExpr[0]) + parseFloat(arrExpr[2]);
            delete arrExpr[0]; 
            delete arrExpr[2];
        } else if (arrExpr[1] == '-') {
            arrExpr[1] = parseFloat(arrExpr[0]) - parseFloat(arrExpr[2]);
            delete arrExpr[0]; 
            delete arrExpr[2];
        }
        arrExpr = arrExpr.filter(element => element !== undefined);
    }
}

    if (expr.includes("(")) {
        for (let k=0; expr.includes('('); k++){
            while ((n = reX.exec(expr)) !== null) { 
                arrExpr = n[1].split(' ');                  // запись в массив строки с раздилителем " "
                arrExpr = arrExpr.filter(element => element !== '');
                divMultiply();
                plusMinus();
                expr = expr.replace(n[0], arrExpr[0]);
            }
        }
        arrExpr = expr.split(' ');                  
        arrExpr = arrExpr.filter(element => element !== '');
        divMultiply();
        plusMinus();
        arrExpr = Number((arrExpr[0]).toFixed(8));
    } else if (expr.includes(' ')) {
        arrExpr = expr.split(' ');                  // запись в массив строки с раздилителем " "
        arrExpr = arrExpr.filter(element => element !== '');
        divMultiply();
        plusMinus();
        arrExpr = Number((arrExpr[0]).toFixed(8));
    } else {
        arrExpr = expr.split('');
        divMultiply();
        plusMinus();
        if (arrExpr < 1) {arrExpr = Number((arrExpr[0]).toFixed(1));}
        else {arrExpr = Number((arrExpr[0]).toFixed(0));}
    }  
    return arrExpr;
}
module.exports = {
    expressionCalculator
} 
