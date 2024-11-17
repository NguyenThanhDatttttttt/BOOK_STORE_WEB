const userArray = JSON.parse(localStorage.getItem("userArray")) || [];

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn form gửi đi

    // Kiểm tra email
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(userArray.some(item => item.taikhoan === emailInput.value)) {
        emailError.textContent = 'Email đã tồn tại. Vui lòng nhập lại.';
        return;
    }
    else if (!emailInput.value.match(emailPattern)) {
        emailError.textContent = 'Email không hợp lệ. Vui lòng nhập lại.';
        return;
    } else {
        emailError.textContent = '';
    }

    // Kiểm tra mật khẩu
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordError = document.getElementById('passwordError');
    if(passwordInput.value.length < 8) {
        passwordError.textContent = 'Mật khẩu ít nhất 8 kí tự. Vui lòng nhập lại.';
        return
    }
    else if (passwordInput.value !== confirmPasswordInput.value) {
        passwordError.textContent = 'Mật khẩu không khớp. Vui lòng nhập lại.';
        return
    }  else {
        passwordError.textContent = '';
    }

    // Form hợp lệ, thực hiện đăng ký
    alert('Đăng ký thành công!');
    const newUser = {
        taikhoan: emailInput.value,
        matkhau: passwordInput.value,
    }
    userArray.push(newUser);
    localStorage.setItem('userArray', JSON.stringify(userArray));
    window.location.href = "dangnhap.html"
});

document.getElementById('eye1').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eye1').querySelector('i');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('far', 'fa-eye');
        eyeIcon.classList.add('fas', 'fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fas', 'fa-eye-slash');
        eyeIcon.classList.add('far', 'fa-eye');
    }
});

document.getElementById('eye2').addEventListener('click', function() {
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const eyeIcon = document.getElementById('eye2').querySelector('i');
    if (confirmPasswordInput.type === 'password') {
        confirmPasswordInput.type = 'text';
        eyeIcon.classList.remove('far', 'fa-eye');
        eyeIcon.classList.add('fas', 'fa-eye-slash');
    } else {
        confirmPasswordInput.type = 'password';
        eyeIcon.classList.remove('fas', 'fa-eye-slash');
        eyeIcon.classList.add('far', 'fa-eye');
    }
});
