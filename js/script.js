// Обьявление переменных

var btn_1 = document.querySelector('.btn_1');
var span_1 = document.querySelector('.mySpan_1');
var btn_2 = document.querySelector('.btn_2');
var span_2 = document.querySelector('.mySpan_2');
var btn_3 = document.querySelector('.btn_3');
var allParag = document.getElementsByTagName('P');

// Задание №1

btn_1.onclick = function(){
    span_1.innerHTML = '!!!';
}

// Задание №2

btn_2.onclick = function(){
    var tegB = document.createElement('b');
    tegB.innerHTML = span_2.innerHTML;
    span_2.parentNode.replaceChild(tegB, span_2);
}

// Задание №3

btn_3.onclick = function(){
    for(var i = 0; i < allParag.length; i++){
        allParag[i].innerHTML = i + 1 ;
    }
}
