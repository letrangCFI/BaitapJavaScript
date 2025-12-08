const a = [];
for (let i = 0; i < 10; i++) {
    let x;
    do {
        x = prompt(`Nhập vào phần tử thứ ${i}:`);
        if (isNaN(x)) {
            alert("Gía trị bạn nhập vào không phải là một số. Mời bạn nhập lại.");
        } else {
            x = Number(x);
            if (!Number.isInteger(x)) {
                alert("Gía trị bạn nhập vào không phải là một số nguyên. Mời bạn nhập lại một số nguyên.");
            }
        }
    } while (isNaN(x)||(!Number.isInteger(x)));
    a[i]=x;
}

function inMang(a) {
    let kq = `${a.join(", ")}`;
    return kq;
}

function timPT(a) {   
    let x;
    do {
        x = prompt(`Nhập vào giá trị muốn tìm trong mảng`);
        if (isNaN(x)) {
            alert("Gía trị bạn nhập vào không phải là một số. Mời bạn nhập lại.");
        } else {
            x = Number(x);
            if (!Number.isInteger(x)) {
                alert("Gía trị bạn nhập vào không phải là một số nguyên. Mời bạn nhập lại một số nguyên.");
            }
        }
    } while (isNaN(x)||(!Number.isInteger(x)));
    let mang = inMang(a);
    if (a.includes(x)) {
        alert(`Các phần tử của mảng là: ${mang}.\nPhần tử ${x} có trong mảng.`);
    }
    else {
        alert(`Các phần tử của mảng là: ${mang}.\nPhần tử ${x} không có trong mảng.`);
    }
}

function timPTmax(a) {
    let max = Math.max(...a);
    return max;
}

function tongMang(a) {
    let tong = 0;
    for (let x of a) {
        tong += x;
    }
    return tong;
}


function sapXep(a) {
    let b = [...a];
    b.sort((a, b) => b - a);
    return b;
}

let chon;
do {
    do {
        chon = prompt("Hãy chọn yêu cầu ở bên dưới (bằng cách nhập số tương ứng nhé!)\n1. Bạn muốn tính in ra các phần tử của mảng.\n2. Bạn muốn nhập vào một số và tìm xem số đó có trong mảng hay không.\n3. Bạn muốn tìm giá trị lớn nhất trong mảng\n4. Bạn muốn tính tổng các phần tử trong mảng.\n5. Bạn muốn sắp xếp các phần tử trong mảng theo thứ tự giảm dần\n6. Thoát ");
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
        }
    } while (isNaN(chon) || (chon < 1 || chon > 6));
    let mang = inMang(a);
    switch (chon) {
        case 1: alert(`Các phần tử của mảng là: ${mang}`); break;
        case 2: timPT(a); break;
        case 3:
            alert(`Các phần tử của mảng là: ${mang}.\nPhần tử lớn nhất trong mảng là ${timPTmax(a)}.`);
            break;
        case 4:
            alert(`Các phần tử của mảng là: ${mang}.\nTổng các phần tử trong mảng là ${tongMang(a)}`);
            break;
        case 5:
            let sXep = inMang(sapXep(a));
            alert(`Các phần tử của mảng là: ${mang}.\nSau khi sắp xếp các phần tử trong mảng theo thứ tự giảm dần ta được mảng: ${sXep}`)
            break;
    }
} while ((chon !== 6) && (chon !== null));


