/index.html          - الصفحة الرئيسية مع الأقسام
/login.html          - صفحة تسجيل الدخول
/register.html       - صفحة تسجيل المتجر
/payment.html        - صفحة خيارات الدفع
/style.css           - تنسيق CSS للصفحات
/app.js              - ملف جافا سكربت للتفاعل
/logo.png            - صورة اللوغو (يمكنك إضافة لوجو خاص بك هنا)
// مثال لتخزين سلة المشتريات في الجافا سكربت
let cart = [];

function addToCart(product) {
    cart.push(product);
    displayCart();
}

function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // مسح السلة السابقة
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <p>اسم المنتج: ${item.name}</p>
            <p>السعر: ${item.price} ل.س</p>
            <p>الكمية: ${item.quantity}</p>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
}

// إضافة منتج افتراضي للسلة
addToCart({ name: 'منتج 1', price: 1000, quantity: 1 });
// إضافة منتج إلى قائمة الإعجاب
let wishlist = [];

function addToWishlist(product) {
    wishlist.push(product);
    displayWishlist();
}

function displayWishlist() {
    const wishlistItemsContainer = document.getElementById('wishlist-items');
    wishlistItemsContainer.innerHTML = ''; // مسح قائمة الإعجاب السابقة
    wishlist.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'wishlist-item';
        itemElement.innerHTML = `
            <p>اسم المنتج: ${item.name}</p>
            <p>السعر: ${item.price} ل.س</p>
        `;
        wishlistItemsContainer.appendChild(itemElement);
    });
}

// إضافة منتج افتراضي إلى قائمة الإعجاب
addToWishlist({ name: 'منتج مفضل 1', price: 500 });
/index.html          - الصفحة الرئيسية مع الأقسام
/login.html          - صفحة تسجيل الدخول
/register.html       - صفحة تسجيل المتجر
/cart.html           - صفحة سلة المشتريات
/wishlist.html       - صفحة المنتجات المفضلة
/payment.html        - صفحة خيارات الدفع
/store-dashboard.html - صفحة لوحة تحكم المتجر
/terms.html          - صفحة الشروط والأحكام
/privacy.html        - صفحة سياسة الخصوصية
/style.css           - تنسيق CSS للصفحات
/app.js              - ملف جافا سكربت للتفاعل مع البيانات
/logo.png            - صورة اللوغو
