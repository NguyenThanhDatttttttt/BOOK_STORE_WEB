const login = document.querySelector('.login');
const login2 = document.querySelector('.login2');
const register = document.querySelector('.register');
const register2 = document.querySelector('.register2');
const logout = document.querySelector('.logout');
const logout2 = document.querySelector('.logout2');
const submenu = document.querySelector('.submenu');

//Check login
const isLogin=JSON.parse(localStorage.getItem("isLogin"));
if(localStorage.getItem("isLogin")===null){
    const exit= {check:0};
    logout.classList.add('hidden');
    logout2.classList.add('hidden');
    localStorage.setItem("isLogin", JSON.stringify(exit));
}
else if(isLogin.check===1){
    login.classList.add('hidden');
    login2.classList.add('hidden');
    register.classList.add('hidden');
    register2.classList.add('hidden');
    logout.classList.remove('hidden');
    logout2.classList.remove('hidden');
}
else {
    logout.classList.add('hidden');
    logout2.classList.add('hidden');
}

// Logout
logout.addEventListener('click', function(){
    alert('Bạn đã đăng xuất!');
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    isLogin.check=0;
    localStorage.setItem("isLogin", JSON.stringify(isLogin));
    login.classList.remove('hidden');
    login2.classList.remove('hidden');
    register.classList.remove('hidden');
    register2.classList.remove('hidden');
    logout.classList.add('hidden');
    logout2.classList.add('hidden');
})

logout2.addEventListener('click', function(){
    alert('Bạn đã đăng xuất!');
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    isLogin.check=0;
    localStorage.setItem("isLogin", JSON.stringify(isLogin));
    login.classList.remove('hidden');
    login2.classList.remove('hidden');
    register.classList.remove('hidden');
    register2.classList.remove('hidden');
    logout.classList.add('hidden');
    logout2.classList.add('hidden');
})
