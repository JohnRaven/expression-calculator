function eval() {
    // Do not use eval!!!
    return;
}

/*function expressionCalculator(expr) {
//-----ПРОВЕРКА на деление на 0    
    if (expr.includes("/0") || expr.includes("/ 0")) throw "TypeError: Division by zero.";
//-----------

    var arrExpr = expr.split(''); //разбивка строки по символам в массив

//-----ПРОВЕРКА на "парность" "скобок"
    let countX = 0, countY = 0;
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


    result = 0;
    return result;
}

module.exports = {
    expressionCalculator
}*/
    let expr = " 20 - 57 * 12 - ( 58 + 84 + ( 50 + 25 / 25 ) + 30 ) * ( 32 / 27 + 58 + 84 * 32 / 27 ) "; // '2/2'   " 20 - 57 * 12 - (  58 + 84 * 32 / 27  ) "
    console.log(expr);
    var arrExpr = [];
    // if (countX > 0 && countX == countY) {
    //     for (let i=0; i<=countX; i++){
            
    //     }
    // }
    // /\d+(?!\.)/      /{([^}]*)}/     /((.*?))/       /\(([^)]+)\)/gm
    var reX = /\((.*?)\)/; // /\((.*?)+\)/g рег. выраж. https://javascript.ru/basic/regular-expression+
//  /\((.*?)\)/g                                    https://medium.com/nuances-of-programming/%D1%88%D0%BF%D0%B0%D1%80%D0%B3%D0%B0%D0%BB%D0%BA%D0%B0-%D0%BF%D0%BE-%D1%80%D0%B5%D0%B3%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D1%8B%D0%BC-%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F%D0%BC-%D0%B2-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D0%B0%D1%85-53820a5f3435

// [^()] -кроме значений
// (?:\s)
    var m = expr.match(reX);
    // arrExpr = arrExpr + m;
    // arrExpr.push(m);
    // while ((m = expr.match(reX)) !== null) { 
    //     arrExpr.push(m[1]);
    //     expr = expr.replace(m[1], ' ');
// }
// text.replace(text.match(/\|([^|]*)\|/)[1], "");



//разбивка строки по "символам" (с разделителем "пробел") в массив 
    // if (expr.includes(" ")) {
    //     expr = expr.slice(1, -1);
    //     var arrExpr = expr.split(' ');
    // } else {
    //     var arrExpr = expr.split('');
    // }


    // for (let i = 0; i <= arrExpr.length; i++) {
    //     if (arrExpr[i] == '') {
    //         delete arrExpr[i];
    //         arrStr = arrStr.filter(element => element !== undefined);
    //     }
    // }


    console.log(expr);
    console.log(m);
