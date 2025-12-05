/*BÀI 1
let a=15;
let b=36;
alert(`Hai số nguyên bạn đã cho là a=${a} và b=${b}`);
let c=b;
b=a; a=c;
alert(`Sau khi hoán đổi hai số ta có a=${a} và b=${b}`);*/

/*BÀI 2
let toan, ly, hoa;
do{
    toan=prompt("Nhập vào điểm Toán");
    if(isNaN(toan)){
        alert("Gía trị bạn nhập vào không phải là một số. Mời bạn nhập điểm.")
    }
    else{
        toan=parseFloat(toan);
        if(toan<0 || toan>10){
            alert(`Bạn nhập vào số ${toan}. Đây không phải là giá trị phù hợp cho điểm. Điểm phải là một giá trị lớn hơn 0 và nhỏ hơn 10. Mời bạn nhập lại.`)
        }
    }
}while (isNaN(toan)||(toan<0 || toan>10));

do{
    ly=prompt("Nhập vào điểm Lý");
    if(isNaN(ly)){
        alert("Gía trị bạn nhập vào không phải là một số. Mời bạn nhập điểm.")
    }
    else{
        ly=parseFloat(ly);
        if(ly<0 || ly>10){
            alert(`Bạn nhập vào số ${ly}. Đây không phải là giá trị phù hợp cho điểm. Điểm phải là một giá trị lớn hơn 0 và nhỏ hơn 10. Mời bạn nhập lại.`)
        }
    }
}while (isNaN(ly)||(ly<0 || ly>10));

do{
    hoa=prompt("Nhập vào điểm Hóa");
    if(isNaN(hoa)){
        alert("Gía trị bạn nhập vào không phải là một số. Mời bạn nhập điểm.")
    }
    else{
        hoa=parseFloat(hoa);
        if(hoa<0 || hoa>10){
            alert(`Bạn nhập vào số ${hoa}. Đây không phải là giá trị phù hợp cho điểm. Điểm phải là một giá trị lớn hơn 0 và nhỏ hơn 10. Mời bạn nhập lại.`)
        }
    }
}while (isNaN(hoa)||(hoa<0 || hoa>10));

let tbc=(toan+ly+hoa)/3;
let xeploai=""
if(tbc>=8){
    xeploai="A"
} else if (tbc>=6.5){
    xeploai="B"
} else if(tbc>=5){
    xeploai="C"
} else {
    xeploai="D"
}
alert(`Điểm toán, lý, hóa của bạn lần lượt là ${toan}, ${ly}, ${hoa}.\nĐiểm trung bình cộng của bạn là ${tbc.toFixed(2)}.\nXếp loại ${xeploai}`);
*/
/*BÀI 3
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
        kq="Phương trình có vô số nghiệm";
    } else {
        kq="Phương trình vô nghiệm";
    }
} else {
    x=(-b/a);
    kq=`x = ${x.toFixed(2)}`;
}
alert(`Bạn muốn tìm nghiệm của phương trình ax+b=0 với a = ${a} và b = ${b}.\nNghiệm của phương trình ${a}x+(${b})=0 là:\n ${kq}`);*/
/*BÀI 4
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
alert(`Bạn muốn tìm nghiệm của phương trình:\nax^2 + bx + c = 0 với a = ${a}, b = ${b}  và c = ${c}.\nPhương trình ${a}x^2 +(${b})x + (${c})=0 ${kq}`);*/

/*BÀI 5
let tong1=0;
let kq1="";
for(let i=0;i<50;i++){
    tong1+=i;
    kq1=`Tổng S=0+2+3+...+49=${tong1}`
}
let tong2=0;
let kq2="";
for(let i=1;i<=50;i++){
    tong2+=i;
    kq2=`Tổng S=1+2+3+...+50=${tong2}`
}
let chon;
do{
    chon=prompt("Hãy chọn yêu cầu 1 hoặc 2 ở bên dưới (bằng cách nhập số tương ứng nhé!)\n1. Bạn muốn tính tổng của 50 số nguyên KHÔNG ÂM đầu tiên.\n2. Bạn muốn tính tổng của 50 số nguyên DƯƠNG đầu tiên");
    if(isNaN(chon)){
        alert("Gía trị bạn nhập vào không phải là một số. Mời bạn nhập lại.")
    }
    else{
        chon=parseInt(chon);
        if(!(chon==1 || chon==2)){
            alert(`Bạn nhập vào số ${chon}. Đây không phải là lựa chọn phù hợp. Bạn phải nhập số 1 hoặc số 2 tương ứng với lựa chọn của bạn. Mời bạn nhập lại.`)
        }        
    }
}while (isNaN(chon)||(!(chon==1 || chon==2)));
switch (chon)
{
    case 1: alert(`Bạn đã chọn 1. Tính tổng của 50 số nguyên KHÔNG ÂM đầu tiên.\n${kq1}`);break;
    case 2: alert(`Bạn đã chọn 2. Tính tổng của 50 số nguyên DƯƠNG đầu tiên.\n${kq2}`);;break;
}*/

let f1=0;
let f2=1;
let f;
let kq=`${f1}, ${f2}`
for(i=0;i<18;i++){
    f=f1+f2;
    kq+=`, ${f}`
    f1=f2;
    f2=f;
}
alert(`20 số Fibonacci đầu tiên là:\n ${kq}`);



