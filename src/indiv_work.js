$( document ).ready(function() {

    $('.meth-gold').click(function(){
        $('.dih-form').addClass('dih-active');
        $('.gold-form').addClass('gold-active');
    });

    $('.meth-dih').click(function(){
        $('.dih-form').removeClass('dih-active');
        $('.gold-form').removeClass('gold-active');
    });


});

function validForm1() {
    var urav, x, a, b, e, n, x1, x2, fx1, fx2, fx, xx, min, ind, ms;
    var i = 1, k = 0, l = 0;
    var arr1 = [], arr2 = [], arrms = [];
    a = eval(document.forms['form1'].aaa.value);
    b = eval(document.forms['form1'].bbb.value);
    e = eval(document.forms['form1'].eps.value);
    n = eval(document.forms['form1'].num.value);

    arrms.push("<big>" + "Метод дихотомии: " + "</big>" + "</br>");
    arrms.push("</br>" + "<b>" + "0 итерация:" + "</b>");
    arrms.push("<p>" + "a = "+ a.toFixed(5) + "</p>");
    arrms.push("<p>" + "b = "+ b.toFixed(5) + "</p>" + "</br>");

    while (i <= n/2){
        arrms.push("<b>" + i + " итерация:" + "</b>");
        x1 = (1/2)*(a+b)-(e/2);
        arrms.push("<p>" + "x1 = " + x1.toFixed(5) + "</p>");
        x2 = (1/2)*(a+b)+(e/2);
        arrms.push("<p>" + "x2 = " + x2.toFixed(5) + "</p>");
        x = x1;
        arr2.push(x);
        fx1 = eval(document.forms['form1'].urav.value);
        arr1.push(fx1);
        arrms.push("<p>" + "f(x1) = " + fx1.toFixed(5) + "</p>");
        x = x2;
        arr2.push(x);
        fx2 = eval(document.forms['form1'].urav.value);
        arr1.push(fx2);
        arrms.push("<p>" + "f(x2) = " + fx2.toFixed(5) + "</p>");
        if(fx1 <= fx2){
            b = x2;
        }
        else{
            a = x1;
        }
        arrms.push("<p>" + "a = "+ a.toFixed(5) +"</p>");
        arrms.push("<p>" + "b = "+ b.toFixed(5) +"</p>");
        arrms.push("</br>");
        i++;
    }

    min = arr1[k];
    for(k = 1; k < arr1.length; k++){
        if(arr1[k] < min){
            min = arr1[k];
            ind = k;
        }
    }

    fx = min;
    xx = arr2[ind];

    arrms.push("<b>" + "Ответ: " + "</b>" + "искомая точка минимума x*= " + xx.toFixed(5));
    arrms.push("<p>" + " находится в интервале [" + a.toFixed(5) + ", " + b.toFixed(5) + "]" + ";</p>");
    arrms.push("<p>" + "Значение функции в данной точке f*= " + fx.toFixed(5) + ";</p>");
    arrms.push("</br>");
    arrms.push("</br>");

    document.getElementById('answer-dih').innerHTML = arrms.join(' ');
}

function validForm2() {
    var urav, x, a, b, n, x1, x2, fx1, fx2, fx, xx, min, ind;
    var i = 1, k = 0, l = 0;
    var arr1 = [], arr2 = [], arrms = [];
    var fib1 = (3 - Math.sqrt(5))/2;
    var fib2 = (Math.sqrt(5) - 1)/2;
    fib1 = fib1.toFixed(5);
    fib2 = fib2.toFixed(5);

    a = eval(document.forms['form2'].aaa.value);
    b = eval(document.forms['form2'].bbb.value);
    n = eval(document.forms['form2'].num.value);

    arrms.push("<big>" + "Метод золотого сечения: " + "</big>" + "</br>");
    arrms.push("</br>" + "<b>" + "0 итерация:" + "</b>");
    arrms.push("<p>" + "a = "+ a.toFixed(5) + "</p>");
    arrms.push("<p>" + "b = "+ b.toFixed(5) + "</p>" + "</br>");

    fx1 = 1;
    fx2 = 1;

    x1 = a + fib1*(b - a);
    x2 = a + fib2*(b - a);

    while (i <= n-1){
        arrms.push("</br>" + "<b>" + i + " итерация:" + "</b>");
        if(fx1 <= fx2)
            x2 = x1;
        x1 = a + fib1*(b - a);
        if(fx1 > fx2)
            x1 = x2;
        x2 = a + fib2*(b - a);
        arrms.push("<p>" + "x1 = "+ x1.toFixed(5) + "</p>");
        arrms.push("<p>" + "x2 = "+ x2.toFixed(5) + "</p>");
        x = x1;
        arr2.push(x);
        fx1 = eval(document.forms['form2'].urav.value);
        arr1.push(fx1);
        arrms.push("<p>" + "f(x1) = "+ fx1.toFixed(5) + "</p>");
        x = x2;
        arr2.push(x);
        fx2 = eval(document.forms['form2'].urav.value);
        arr1.push(fx2);
        arrms.push("<p>" + "f(x2) = "+ fx2.toFixed(5) + "</p>");
        if(fx1 <= fx2){
            b = x2;
        }
        else{
            a = x1;
        }
        arrms.push("<p>" + "a = "+ a.toFixed(5) + "</p>");
        arrms.push("<p>" + "b = "+ b.toFixed(5) + "</p>");
        i++;
    }

    arrms.push("</br>");

    min = arr1[k];
    for(k = 1; k < arr1.length; k++){
        if(arr1[k] < min){
            min = arr1[k];
            ind = k;
        }
    }

    fx = min;
    xx = arr2[ind];

    arrms.push("<b>" + "Ответ: " + "</b>" + "искомая точка минимума x*= " + xx.toFixed(5));
    arrms.push("<p>" + " находится в интервале [" + a.toFixed(5) + ", " + b.toFixed(5) + "]" + ";</p>");
    arrms.push("<p>" + "Значение функции в данной точке f*= " + fx.toFixed(5) + ";</p>");
    arrms.push("</br>");
    arrms.push("</br>");

    document.getElementById('answer-gold').innerHTML = arrms.join(' ');
}