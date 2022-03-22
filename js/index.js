document.querySelector('#signup-form .actions ul li:last-child a').onclick = function() {


    // Input: Lay thong tin nguoi dung nhap vao tu giao dien
    var ten = document.querySelector('#ten').value;
    var ho = document.querySelector('#ho').value;
    var email = document.querySelector('#email').value;
    var sdt = document.querySelector('#soDienThoai').value;
    var ngay = document.querySelector('#ngay').value;
    var thang = document.querySelector('#thang').value;
    var nam = document.querySelector('#nam').value;
    var diaChi = document.querySelector('#diaChi').value;
    var thongTinDiChuyen = document.querySelector('#thongTinDiChuyen').value;
    var loaiNhiem = document.querySelector('#loaiNhiem').value;


    // Tao chuoi HTML de gan thong tin nguoi dung nhap vao  
    var stringHTML = ` 
        Họ tên: ${ho} ${ten} </br>
        Email: ${email} </br>
        SDT: ${sdt} </br>
        Ngày sinh: ${ngay}/${thang}/${nam} </br>
        Địa chỉ: ${diaChi} </br>
        Thông tin di chuyển: ${thongTinDiChuyen} </br>
        Loại nhiễm: ${loaiNhiem}
    `

    // In thong tin nguoi dung nhap vao ra giao dien
    document.querySelector('#steps-uid-0-p-2 .fieldset-content .donate-us').innerHTML = stringHTML;
}