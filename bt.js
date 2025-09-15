// BT1: Tính điện tích và chu vi hình chữ nhật:
let chieudai = 12;
let chieurong = 8;
console.log("chiều dài hình chữ nhật là:", chieudai);
console.log("chiều rộng hình chữ nhật là:", chieurong);
let dientich = chieudai * chieurong;
console.log(" diện tích hình chữ nhật là:", dientich);
let chuvi = (chieudai + chieurong) *2;
console.log("chu vi hình chữ nhật là:", chuvi);


// BT2: Xếp loại học sinh:
let toan = 10;
let ly = 8;
let hoa = 7;
let dtb = (toan + ly + hoa) / 3;
console.log("điểm trung bình là:", dtb);
if (dtb >= 8) {
    console.log("học sinh giỏi");
} else if (dtb >= 6.5) {
    console.log("học sinh khá");
} else if (dtb >= 5) {
    console.log("học sinh trung bình");
} else { if (dtb < 5)   
    console.log("học sinh yếu");
}   
console.log("Điểm Toán:", toan);
console.log("Điểm Lý:", ly);
console.log("Điểm Hóa:", hoa);
console.log("Xếp loại học sinh:", dtb >= 8 ? "Giỏi" : dtb >= 6.5 ? "Khá" : dtb >= 5 ? "Trung bình" : "Yếu");

// BT3: Xử lý họ tên:
let hoten = "   nguyen van an ";
console.log("Họ tên ban đầu:", hoten);

let hotenxoakhoangtrangdaucuoi = hoten.trim();
console.log("Họ tên sau khi xóa khoảng trắng:", hotenxoakhoangtrangdaucuoi);

let viethoachucaidau = hoten.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")
console.log("Họ tên sau khi viết hoa chữ cái đầu:", viethoachucaidau);

let inrasoluongtu = hoten.length;
console.log("Số lượng từ trong họ tên:", inrasoluongtu);

