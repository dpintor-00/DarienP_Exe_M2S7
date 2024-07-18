var num1, num2;

num1 = prompt("Ingrese un número")
num2 = prompt("Ingrese otro número")

num1 = parseInt(num1);
num2 = parseInt(num2);

if (num1 > num2){
    alert(num1 + " es mayor que " + num2);
}else{
    if(num2 > num1){
        alert(num2 + " es mayor que " + num1);
    }else{
        if(num1 == num2){
            alert(num1 + " es igual que " + num2);
        }
    }
}