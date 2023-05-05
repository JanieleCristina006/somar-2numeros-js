function somar() {
    var num = document.getElementById('number1');  
    var num2 = document.getElementById('number2');
    var b = document.getElementsByClassName('button')[0];

    var input1 = Number(num.value);
    var input2 = Number(num2.value);

    var soma = input1 + input2;

    resultado.innerHTML = 'A soma dos números é ' + soma;
    resultado.style.backgroud= 'red'
}