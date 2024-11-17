//Kiểm tra sản phẩm có trong giỏ hàng hay chưa
function isExistedInCart(item, arrCart) {
  let myIndex = -1;
  arrCart.forEach((itemCard, index) => {
    if (item.id === itemCard.id) myIndex = index;
  });
  return myIndex;
}

let updatedCart = [];

//Thêm sản phẩm vào localStorage
const selectedItem = (evt) => { 
  const linkClicked = evt.target;
  alert('Sản phẩm đã được thêm vào giỏ hàng!');

  if (typeof Storage !== "undefined") {
    let newItem;
    // if (window.location.pathname === '/BOOKSTORE_PROJECT_SpPage/index.html') {
    //   newItem = getProductInfoForPage1(linkClicked);
    //   if (newItem===NULL) alert('Loi');
    // } else if (window.location.pathname === '/BOOKSTORE_PROJECT_SpPage/sp.html') {
    //   newItem = getProductInfoForPage2(linkClicked);
    // } else {
    //   console.error('Unknown page');
    // }
    const currentPage = document.body.getAttribute('data-page');

    if (currentPage === 'index') {
    // Code thực hiện khi đang ở trang index
        newItem = getProductInfoForPage1(linkClicked);
    } else if (currentPage === 'sp') {
    // Code thực hiện khi đang ở trang product
        newItem = getProductInfoForPage2(linkClicked);
    } else {
    // Code thực hiện khi không phải trang nào trong hai trang trên
        console.log('Trang không hợp lệ');
    }
    if (JSON.parse(localStorage.getItem('cartItems')) === null) {
      updatedCart.push(newItem);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      window.location.reload();
    } else { 
      const updatedCart = JSON.parse(localStorage.getItem('cartItems'));
      if ((index = isExistedInCart(newItem, updatedCart)) >= 0) {
      updatedCart[index].quantity++;
      } else {
      updatedCart.push(newItem);
      }

      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      location.reload();
      }
  } else {
      alert('Local storage is not working on your browser.');
  }
}

//Thêm sự kiện cho các nút đặt hàng
function addEventToAllCartButtons() {
    const add2CartLinks = document.querySelectorAll('.book-btn');
    const arrCartLinks = Array.from(add2CartLinks);
  
    const registerEventListener = (element) => element.addEventListener('click', selectedItem, false);
  
    arrCartLinks.forEach(registerEventListener);
  
    if (localStorage.cartItems !== undefined) {
      const numberOfOrderedItems = document.querySelector('.no-ordered-items');
      const numberOfOrderedItems2 = document.querySelector('.no-ordered-items2');
      let numberOfItems = 0;
      let numberOfItems2 = 0;
      let customerCart = JSON.parse(localStorage.getItem('cartItems'));
      customerCart.forEach(item => {
        numberOfItems += 1;
        numberOfItems2 +=1;
      });
      numberOfOrderedItems.innerHTML = numberOfItems;
      numberOfOrderedItems2.innerHTML = numberOfItems2;
    }
}

//Hiển thị giỏ hàng
function showCart() {
  if (localStorage.cartItems === undefined) {
    let emptycart ='<div class="empty-cart"><p>Chưa có sản phẩm nào trong giỏ hàng của bạn.</p>' +
    '<a href="../BOOKSTORE_PROJECT_SpPage/index.html"><button class="back-to-cart">Mua hàng ngay</button></a></div>';
    const container = document.querySelector('.container');
    container.innerHTML = emptycart;
  } else {
    const customerCart = JSON.parse(localStorage.getItem('cartItems'));
    const productlist = document.querySelector('.product-list');
    const totalbox = document.querySelector('.total');
    let producttext = totaltext = '';

    let total = 0;
    let amountPaid = 0;
        customerCart.forEach(item => {
            total += Number(item.quantity) * Number(item.price.replace(/[^0-9]/g, ""));
            console.log(total);
            producttext += '<div class="product-item"><img src=" '+ item.img + '" alt="" class="img-item">' +
                    '<div class="product-info">' +
                        '<div class="product-desc">' +
                            '<p class="product-id" hidden>' + item.id + '</p>' +
                            '<h4 class="product-name">'+ item.name +'</h4>' +
                            '<p class="product-author">'+ item.author + '</p>' +
                            '<p class="product-price">'+ formatCurrency(Number(item.price.replace(/[^0-9]/g, ""))) + '<span class="product-oldprice"> '+ formatCurrency(Number(item.old_price.replace(/[^0-9]/g, ""))) +'</span>' +'</p>' +
                        '</div>' +
                        '<div class="text-right">' +
                            '<p class="quantity">Số lượng: '+ item.quantity +
                            '<span class="delete-item" onclick="deleteCart(this)"><i class="ti-trash"></i></span>'+ '</p>' +
                            '<p style="font-weight: bold">Thành tiền: '+ '<span style="color: #C92129">' + formatCurrency(Number(item.quantity) * Number(item.price.replace(/[^0-9]/g, "")))+'</span>' +'</p>' +
                        '</div></div></div>';
        });
    // }
    productlist.innerHTML = producttext;

    var number = 0;
    customerCart.forEach(item => {
      number += item.quantity;
    });
    totaltext += '<div class="total-box">' +
                    '<p class="total-quatity">Số lượng sản phẩm: ' + number +'</p>' +
                    '<p class="total-order">Tổng giá: '+ formatCurrency(total) +' </p>' +
                '</div>' +
                '<button type="submit" class="order">Đặt hàng</button>';
    totalbox.innerHTML = totaltext;
    function checkOrder(elmt) {
      const isLogin=JSON.parse(localStorage.getItem("isLogin"));
      if(localStorage.getItem("isLogin")===null||isLogin.check===0){
        alert('Vui lòng đăng nhập để đặt hàng');
      }
      else {
        localStorage.removeItem('cartItems');
        alert('Đặt hàng thành công!');
        window.location.href = '../BOOKSTORE_PROJECT_SpPage/index.html';
      }}
    const order=document.querySelector('.order');
    order.addEventListener('click',checkOrder);
  }
}

//Xóa sản phẩm 
function deleteCart(elmt) {
  let updatedDeleteCart = [];
  let customerCart = JSON.parse(localStorage.getItem('cartItems'));
  customerCart.forEach(item => {
      if (item.id != elmt.parentElement.parentElement.parentElement.querySelector('.product-id').textContent) {
          updatedDeleteCart.push(item);
      }
  });
  localStorage.setItem('cartItems', JSON.stringify(updatedDeleteCart));
  if(updatedDeleteCart.length===0) localStorage.removeItem('cartItems');
  location.reload();
}

const formatCurrency = (amount, locale = 'vi-VN') => {
  return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
  }).format(amount);
}