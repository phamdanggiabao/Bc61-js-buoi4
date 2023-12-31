//----------------một số toán tử so sánh---------------------
//so sánh bằng (==)

var chuoiA = 'Long';
var chuoiB ='long';
var soA = 34;//number
var soB = '34';//string
console.log(chuoiA == chuoiB);//false
console.log(soA == soB);//true
console.log('Tuan'== 'Son');// false

//so sánh bằng giá trị và kiểu (===)
console.log(soA === soB);//false

//so sánh khác (!=)
console.log(chuoiA != chuoiB) // true
console.log(soA != soB);//flase

//So sánh khác giá trị hoặc kiểu (!==)
console.log(soA !== soB); //true
console.log(chuoiA !== chuoiB) ;//true

console.log(12>=12);//true

//Toán tử phủ định (!)
//toán tử phủ định giúp đảo ngược các giá trị về kiểu dữ liệu boolean
console.log(!true);

//Toán tử và (&&)
var chuoiC ='Truc'
var chuoiD = 'Lam'
//khi sử dụng toán tử so sánh &&, với điều kiện đầu tIến nếu trả về false sẽ ngưng ngay viẹc kiểm tra điều kiện sau
// -------------------true----và-flase  
var ketQua = chuoiC != chuoiD && 3>4;
console.log(ketQua);


// Toan tử hoặc (||)
// toán tử hoặc với 2 điều kiện thì chỉ cần một điều kiện 
var sinhVienDuy='Duy Manh';
var sinhVienHung='Tuan Hung';
var ketQua2=sinhVienDuy !== sinhVienHung || 25<11;
console.log(ketQua2);

// ------------------Cấu trúc điều kiện---------------
var chuCongAn = 'thổi kèn';
if (chuCongAn == 'thổi kèn'){
    //nơi xử lí các hành động khi biểu thức điều kiện đúng
    console.log('Tôi sẽ dừng xe');
}

//-----------Cấu trúc điều kiện if else --------------
var denGiaoThong = 'đỏ';
if (denGiaoThong == 'xanh'){
    //khi biểu thức điều kiện đúng, sẽ đi vào đây
    console.log('Xe dc chạy');
} else{
    //khi biểu thức điều kiện sai, sẽ đi vào đây
    console.log('Xe dừng lại');
}

//Yêu cầu về bài tập tính tiền lương
//1.Thực hiện tạo 1 sự kiên onclick vào nút tính tiền để thực hiện xử lí khi người dùng đã nhập xong 
//2. Thực hiện việc lấy dữ liệu của người dùng về (lưu ý về kiểu dữ liệu lấy về)
//3 . Thực hiện tính toán kiểm tra các điều kiện và xuất kết quả
//4. Đưa kết quả lên giao diện cho người dùng
//5. Mở rộng: chuyển đổi giá trị về tiền lương hiển thị theo kiểu đơn vị tiền tệ (VND)


document.getElementById('btnKetQua1').onclick =function (){
    // console.log('tính tiền');
    var gioLam = document.getElementById('txt-soGio').value * 1;
    console.log( typeof gioLam);
//một số cách ép kiểu dữ liệu từ chuỗi số thành Number
// 1. cho chuỗi số * 1
// 2. dùng hàm Number
// 3. trước chuỗi số cho 1 + vào
// 4. dùng hàm parseInt để chuyển đổi chuỗi số thành number
    var tienLuong = document.getElementById('txt-soLuong').value * 1 ;
    console.log(tienLuong);

    // gioLam <=40 ==> gioLam * tienLuong
    // gioLam >  40 ==> 40 * tienLuong + (gioLam -40) * tienLuong *1.5
    //cấu trúc điều kiên

    var ketQua= 0;
    if (gioLam <=40){
        //người này ko hề tăng ca
        ketQua = gioLam * tienLuong;
    
    }else{
        //người này có tăng ca
        ketQua = 40 * tienLuong + (gioLam -40 )* tienLuong * 1.5;
    }
    console.log(ketQua);
    var formatLuong = ketQua.toLocaleString ({
        style: 'currency',
        currency: 'VND',
    });
    document.getElementById('ketQua1').innerHTML =`Xin chào lương của bạn tháng này ${formatLuong} VDN `
}


//Toán tử điều kiện

// var diemSo = 8;
// var xepHang = '';
// if (diemSo > 8) {
//     xepHang ='Tuan la hoc sinh gioi';
// }else {
//     xepHang = 'Tuan la hoc sinh kem';
// }

// document.getElementById('demo2').innerHTML = xepHang;

document.getElementById('demo2').innerHTML = diemSo > 8 ? "Tuan la sinh vien gioi" : "Tuan la hoc sinh kem";




//-----------Cấu trúc điều kiện else if----------
var mauDenGiaoThong = 'màu vàng';

if (mauDenGiaoThong == 'màu đỏ'){
    //nơi xử lí hành động 1 khi biến lưu trữ màu đỏ
    console.log('Xe dừng lại')
}else if (mauDenGiaoThong == 'màu xanh'){
//Nơi xử lí hành động 2 khi biến lưu trữ màu xanh
console.log('Xe chạy')
}else {
    console.log('Xe đi chậm')
}
