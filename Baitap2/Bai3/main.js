
function nhapMang(a) {
    let ten;
    do {
        ten = prompt("Hãy nhập vào tên mà bạn muốn. Khi muốn kết thúc nhập x");
        if (ten === "x" || ten === "X" || ten === null) {
            break;
        }
        if (!isNaN(ten)) {
            alert("Gía trị bạn nhập vào là một số không phải là một tên. Mời bạn nhập lại");
        } else if (ten.includes("!")|| ten.includes("@")||ten.includes("#")|| ten.includes("$")||ten.includes("%")|| ten.includes("^")||ten.includes("&")|| ten.includes("*")||ten.includes("(")|| ten.includes(")")||ten.includes("_")|| ten.includes("+")||ten.includes("-")|| ten.includes("=")||ten.includes("{")|| ten.includes("}")||ten.includes("[")|| ten.includes("]")||ten.includes(":")|| ten.includes(";")||ten.includes("\"")|| ten.includes("'")||ten.includes("<")|| ten.includes(">")||ten.includes("?")|| ten.includes("/")||ten.includes("\\")|| ten.includes("|")||ten.includes("~")|| ten.includes("`")) {
            alert("Trong chuỗi bạn nhập có chứa ký tự đặc biệt, không phù hợp cho tên. Mời bạn nhập lại");
        } else {
            a.push(ten);
        }
    } while (ten !== "x" || ten !== "X" || ten !== null);
}


function inMang(a) {
    let kq = `${a.join(", ")}`;
    return kq;
}

function sapXepTangDan(a) {
    let b = [...a];
    b.sort((a, b) => a.localeCompare(b, 'vi'));
    return b;
}


let a = [];
nhapMang(a);
let mang = inMang(a);
alert(`Các tên bạn đã nhập là: ${mang}.\nSau khi sắp xếp tên theo thứ tự tăng dần ta được: ${inMang(sapXepTangDan(a))}.`);