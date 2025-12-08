
function nhapMang(a, n, m) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let x;
            do {
                x = prompt(`Nhập vào phần tử a[${i}][${j}]=`);
                if (isNaN(x)) {
                    alert("Gía trị bạn nhập vào không phải là một số. Mời bạn nhập lại.");
                } else {
                    x = Number(x);
                }
            } while (isNaN(x));
            a[i][j] = x;
        }
    }
}
function inMang(a, n, m) {
    let kq = "";
    for (let i = 0; i < n; i++) {
        kq += `${a[i].join("   ")}\n`;
    }
    return kq;
}
function tongMang(a, n, m) {
    let tong = 0;
    for (let i = 0; i < n; i++) {
        for (let x of a[i]) {
            tong += x;
        }
    }
    return tong;
}

function timPT(a, n, m) {
    let x;
    do {
        x = prompt(`Nhập vào giá trị muốn tìm trong mảng`);
        if (isNaN(x)) {
            alert("Gía trị bạn nhập vào không phải là một số. Mời bạn nhập lại.");
        } else {
            x = Number(x);            
        }
    } while (isNaN(x));
    let mang = inMang(a, n, m);
    let tim = 0;
    for (let i = 0; i < n; i++) {
        if (a[i].includes(x)) {
            alert(`Các phần tử của mảng là:\n${mang}\nPhần tử ${x} có trong mảng.`);
            tim = 1;
            break;
        }
    }
    if (tim === 0) {
        alert(`Các phần tử của mảng là:\n${mang}\nPhần tử ${x} không có trong mảng.`);
    }
}

function sapXepTangDan(a, n, m) {
    let b = [].concat(...a);
    b.sort((a, b) => a - b);
    let kq = [];
    let chiso = 0;
    for (let i = 0; i < n; i++) {
        kq[i] = [];
        for (let j = 0; j < m; j++) {
            kq[i][j] = b[chiso++];
        }
    }
    return kq;
}

let n;
do {
    n = prompt("Nhập vào số hàng (n)");
    if (isNaN(n)) {
        alert("Gía trị bạn nhập vào không phải là một số. Mời bạn nhập lại.");
    } else {
        n = Number(n);
        if (!Number.isInteger(n)) {
            alert("Gía trị bạn nhập vào không phải là một số nguyên. Mời bạn nhập lại một số nguyên.");
        }
    }
} while (isNaN(n) || (!Number.isInteger(n)));
let m;
do {
    m = prompt("Nhập vào số cột (m)");
    if (isNaN(m)) {
        alert("Gía trị bạn nhập vào không phải là một số. Mời bạn nhập lại.");
    } else {
        m = Number(m);
        if (!Number.isInteger(m)) {
            alert("Gía trị bạn nhập vào không phải là một số nguyên. Mời bạn nhập lại một số nguyên.");
        }
    }
} while (isNaN(m) || (!Number.isInteger(m)));

let a = new Array(n);
for (let i = 0; i < n; i++) {
    a[i] = new Array(m);
}
let chon;
let dem=0;
do {
    do {
        chon = prompt("--------MENU---------\n1. Bạn muốn nhập vào các phần tử của mảng.\n2. Bạn muốn in ra các phần tử của mảng\n3. Bạn muốn tính tổng các phần tử trong mảng.\n4. Bạn muốn nhập vào một số và tìm xem số đó có trong mảng hay không.\n5. Bạn muốn sắp xếp các phần tử trong mảng theo thứ tự tăng dần.\n6. Thoát\n----------------------\nỞ lựa chọn lần đầu tiên, bạn phải thực hiện chọn 1 trước khi chọn tiếp các lựa chọn khác.\nNhập vào số tương ứng với lựa chọn của bạn");
        if (chon === null) {
            break;
        }
        if (isNaN(chon)) {
            alert("Gía trị bạn nhập vào không phải là một số. Mời bạn nhập lại.")
        }
        else {
            chon = parseInt(chon);           
            if (chon < 1 || chon > 6) {
                alert(`Bạn nhập vào số ${chon}. Đây không phải là lựa chọn phù hợp. Bạn phải nhập số tương ứng với lựa chọn của bạn. Mời bạn nhập lại.`)
            }
             if(dem===0 && chon!==1){
                alert("Ở lựa chọn lần đầu tiên,bạn phải thực hiện chọn 1 trước khi chọn tiếp các lựa chọn khác. Mời bạn nhập lại.")
            }
        }
    } while (isNaN(chon) || (chon < 1 || chon > 6)||(dem===0 && chon!==1));
    const mang = inMang(a, n, m);
    switch (chon) {
        case 1: nhapMang(a, n, m); dem++;break;
        case 2: alert(`Các phần tử của mảng là:\n${mang}`); break;
        case 3: alert(`Các phần tử của mảng là:\n${mang}\nTổng các phần tử của mảng là: ${tongMang(a, n, m)}`); break;
        case 4: timPT(a, n, m); break;
        case 5: alert(`Các phần tử của mảng là:\n${mang}\nCác phần tử của mảng sau sắp xếp là:\n${inMang(sapXepTangDan(a, n, m), n, m)}`); break;
    }
} while ((chon !== 6) && (chon !== null));

