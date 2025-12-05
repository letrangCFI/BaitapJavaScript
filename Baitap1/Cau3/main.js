let a, b;
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
let kq="";
let x;
if(a==0){
    if(b==0){
        kq="có vô số nghiệm";
    } else {
        kq="vô nghiệm";
    }
} else {
    x=(-b/a);
    kq=`có nghiệm là: x = ${x.toFixed(2)}`;
}
alert(`Bạn muốn tìm nghiệm của phương trình ax+b=0 với a = ${a} và b = ${b}.\nPhương trình ${a}x+(${b})=0 ${kq}`);

