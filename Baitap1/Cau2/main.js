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
