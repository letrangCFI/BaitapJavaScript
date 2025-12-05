let a, b, c;
do{
    a=prompt("Nhập vào hệ số a:");
    if(isNaN(a)){
        alert("Gía trị bạn nhập vào không phải là một số. Mời bạn nhập lại.")
    }
    else{
        a=parseFloat(a);        
    }
}while (isNaN(a));

do{
    b=prompt("Nhập vào hệ số b:");
    if(isNaN(b)){
        alert("Gía trị bạn nhập vào không phải là một số. Mời bạn nhập lại.")
    }
    else{
        b=parseFloat(b);        
    }
}while (isNaN(b));

do{
    c=prompt("Nhập vào hệ số c:");
    if(isNaN(c)){
        alert("Gía trị bạn nhập vào không phải là một số. Mời bạn nhập lại.")
    }
    else{
        c=parseFloat(c);        
    }
}while (isNaN(c));
let delta=b**2-4*a*c;
let kq="";
let x1,x2;
if(delta<0){
    kq="vô nghiệm";
}else if(delta==0){
    x1=(-b/(2*a));
    kq=`có nghiệm kép x = ${x1.toFixed(2)}`;
} else {
    x1=(-b - Math.sqrt(delta))/(2*a);
    x2=(-b + Math.sqrt(delta))/(2*a);
    kq=`có 2 nghiệm phân biệt x1 = ${x1.toFixed(2)} và x2 = ${x2.toFixed(2)}`;
}
alert(`Bạn muốn tìm nghiệm của phương trình:\nax² + bx + c = 0 với a = ${a}, b = ${b}  và c = ${c}.\nPhương trình ${a}x² +(${b})x + (${c})=0 ${kq}`);
