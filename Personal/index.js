// index.js

// Hàm để điều khiển việc hiển thị/ẩn menu dropdown
const menuIcon = document.getElementById('icon-hamberger');
const taskbar = document.getElementById('taskbar-hidden');
menuIcon.addEventListener('click', () => {
    taskbar.classList.toggle('open'); // Hiện/ẩn thanh task bar
});
document.addEventListener('click', (event) => {
    if (!menuIcon.contains(event.target) && !taskbar.contains(event.target)) {
        taskbar.classList.remove('open');
    }
});