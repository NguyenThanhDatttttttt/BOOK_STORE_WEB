// ------------------------------truot cmt----------------------------------
const comments = [
    { username: "Nguyễn Thảo Vy", comment: "Giao diện của website Bookhaven rất gọn gàng và hiện đại. Mình dễ dàng tìm được danh mục sách yêu thích chỉ sau vài cú click. Tốc độ tải trang cũng nhanh, không gặp vấn đề gì trong quá trình sử dụng." },
    { username: "Trần Hoàng Phúc", comment: "Quá trình thanh toán trên trang web rất nhanh chóng và dễ dàng. Có nhiều hình thức thanh toán để lựa chọn. Đặt sách xong thì mình nhận được hàng đúng hẹn, sách đóng gói cẩn thận, không bị hỏng hóc." },
    { username: "Lê Minh Khang", comment: "Mình thấy công cụ tìm kiếm trên website đôi khi không trả về kết quả chính xác, đặc biệt khi mình tìm sách theo từ khóa dài. Hy vọng Bookhaven có thể cải thiện tính năng này để việc tìm kiếm dễ dàng hơn." },
    { username: "Phạm Thanh Huyền", comment: "Mình rất thích cách Bookhaven cung cấp thông tin chi tiết cho mỗi cuốn sách. Có phần mô tả, thông tin tác giả và đánh giá từ người dùng khác. Điều này giúp mình dễ đưa ra quyết định khi chọn sách." }
   
];

let currentIndex = 0;

function displayComment() {
    const commentElement = document.getElementById("comment");

    const newComment = document.createElement('div');
    newComment.className = 'comment active';
    
    newComment.innerHTML = `
        <i class="fa-solid fa-quote-left"></i>
        ${comments[currentIndex].comment} 
        <i class="fa-solid fa-quote-right"></i>
        <i class="ti-minus color-bbb"></i>
        <span class="color-bbb">${comments[currentIndex].username}</span>
        <i class="fa-solid fa-user color-bbb"></i>`
    
    commentElement.innerHTML = '';
    commentElement.appendChild(newComment);

    setTimeout(() => {
        newComment.classList.add('active');
    }, 50); 
}
function nextComment() {
    currentIndex = (currentIndex + 1) % comments.length;
    displayComment();
}
function prevComment() {
    currentIndex = (currentIndex - 1 + comments.length) % comments.length;
    displayComment();
}
setInterval(nextComment, 5000);
document.getElementById("nextBtn").addEventListener("click", nextComment);
document.getElementById("prevBtn").addEventListener("click", prevComment);
displayComment();


// submenu
document.querySelector('.account-menu > a').addEventListener('click',function(event){
    event.preventDefault();
    document.querySelector('.submenu').classList.toggle('show');
});