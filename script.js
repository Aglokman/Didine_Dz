const form = document.getElementById('order-form');
const ordersList = document.getElementById('orders-list');
const addServiceBtn = document.getElementById('add-service');
const newServiceInput = document.getElementById('new-service');
const servicesList = document.getElementById('services-list');
const serviceSelect = document.getElementById('service');

// تسجيل الطلبات
form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;
    const service = document.getElementById('service').value;

    if(name && phone && city){
        const li = document.createElement('li');
        li.textContent = `${name} - ${service} - ${phone} - ${city}`;
        ordersList.appendChild(li);
        form.reset();
        alert('تم تسجيل الطلب!');
    } else {
        alert('رجاءً املأ جميع الحقول');
    }
});

// إضافة خدمة جديدة
addServiceBtn.addEventListener('click', function(){
    const newService = newServiceInput.value.trim();
    if(newService){
        // إضافة للخدمات المعروضة
        const li = document.createElement('li');
        li.textContent = newService;
        servicesList.appendChild(li);

        // إضافة للخيار في القائمة
        const option = document.createElement('option');
        option.textContent = newService;
        serviceSelect.appendChild(option);

        newServiceInput.value = '';
        alert('تمت إضافة الخدمة!');
    } else {
        alert('رجاءً اكتب اسم الخدمة الجديدة');
    }
});
