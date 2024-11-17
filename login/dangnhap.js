const userArray = JSON.parse(localStorage.getItem("userArray")) || [];

$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});

        // Xử lý sự kiện khi form đăng nhập được submit
        document.getElementById("form-login").addEventListener("submit", function(event) {
            event.preventDefault(); // Ngăn chặn hành vi submit mặc định của form
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            if (username === "" || password === "") {
                alert("Vui lòng nhập đầy đủ thông tin");
              }
            let login = false;
            // Lấy giá trị của username và password (bạn có thể thêm kiểm tra hợp lệ nếu cần)
            
            for (const item of userArray) {
                if(item.taikhoan == username && item.matkhau == password){
                  login = true;
                  break;
                }
              } 
            // Giả sử kiểm tra thông tin hợp lệ
            if (login) {
                alert("Đăng nhập thành công!"); 
                const exit= JSON.parse(localStorage.getItem("isLogin"));
                exit.check=1;
                localStorage.setItem("isLogin", JSON.stringify(exit));
                window.location.href = '../index.html';
            } else {
                alert("Vui lòng nhập lại thông tin!"); // Thông báo khi thiếu thông tin
            }
        });

  