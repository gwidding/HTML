let rate = 1339.90;
let rate2 = 1;

function exchange(){
    var contry = document.getElementById("contry");
    var currency = contry.options[contry.selectedIndex].value;
 
    if (currency == "krw") {
        rate = 1;
    }
    else if (currency == "jpy") {
        rate = 906.96;
    }
    else if (currency == "gbp") {
        rate = 1644.93;
    }
    else if (currency == "usd") {
        rate = 1339.90;
    }  
}

function exchange2(str1, str2) {
    var contry = document.getElementById("contry");
    var currency = contry.options[contry.selectedIndex].value;

    var contry2 = document.getElementById("contry2");
    var currency2 = contry2.options[contry2.selectedIndex].value;

    var money = document.getElementById(str2);
    var money2 = document.getElementById(str1);
    var num = money2.value;

    if (currency == "krw") {
        rate = 1;
    }
    else if (currency == "jpy") {
        rate = 906.96;
    }
    else if (currency == "gbp") {
        rate = 1644.93;
    }
    else if (currency == "usd") {
        rate = 1339.90;
    }  

    if (currency2 == "krw") {
        rate2 = 1;
    }
    else if (currency2 == "jpy") {
        rate2 = 906.96;f
    }
    else if (currency2 == "gbp") {
        rate2 = 1644.93;
    }
    else if (currency2 == "usd") {
        rate2 = 1339.90;
    }
    money.innerHTML = (num / rate * rate2).toFixed(2);
}


function exchangeResult(str) {
    var money = document.getElementById(str);
    var num = money.value;

    if(num === "") {
        num = '0';
    }
    num = num.replace(/[^0-9.]/g, '');

    // 소수점 2개 이상 입력 방지
    var decimalIndex = num.indexOf('.');
    if (decimalIndex !== -1) {
        var decimal1 = num.slice(0, decimalIndex+1);
        var decimal2 = num.slice(decimalIndex+1).replace(/\./g, '');
        num = decimal1 + decimal2;
    }
    if (num.startsWith('0') && num !== '0') {
        if  (!num.startsWith('0.')){
            num = num.replace(/^0+/, '');
        }
    }

    money.value = num;
    var result = (rate * num).toFixed(2);

    var resultBox = document.getElementById("money2");
    resultBox.innerHTML = "";
    resultBox.innerHTML = result; 

    money2.value = (num / rate).toFixed(2);
}


var index;
function onlyNumber(checkvalue) {
    const confirmData = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    for (index=0; index < checkvalue.length; index++ ) {
        var confirmCheck = false;
        for (var checkIndex=0; checkIndex < confirmData.length; checkIndex++) {
            if (confirmData[checkIndex] == checkvalue.charAt(index)) {
                confirmCheck = true;
            }
        }

        if (confirmCheck == false){
            break;
        }
    }

    if (index == checkvalue.length-1) {
        return true;
    }
    else {
        return false;
    }
}