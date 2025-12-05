let tong1=0;
let kq1="";
for(let i=0;i<50;i++){
    tong1+=i;
    kq1=`Tổng S=0+1+2+3+...+49=${tong1}`
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
}



