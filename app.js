const buyBtns = document.querySelectorAll('.choice');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.close-button');
const modalContainer = document.querySelector('.modal-content');

let isSwapped = false; // Biến để kiểm tra xem đã đổi chỗ chưa

function hideModal() {
    modal.classList.add('hidden');
}

function showModal() {
    modal.classList.remove('hidden');
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', function () {
        if (buyBtn.textContent === 'No') {
            // Thực hiện đổi chỗ khi click vào "Không"
            const textContent = buyBtns[0].textContent;
            buyBtns[0].textContent = buyBtns[1].textContent;
            buyBtns[1].textContent = textContent;
            isSwapped = !isSwapped; // Đảo giá trị của biến isSwapped
        }
        showModal();
    });
}

modalClose.addEventListener('click', hideModal);
modal.addEventListener('click', hideModal);
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
});

const closeButton = document.getElementById('closeButton');

closeButton.addEventListener('click', hideModal);

document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    
    // Thêm sự kiện click vào overlay
    overlay.addEventListener('click', function () {
        overlay.style.display = 'none'; // Ẩn overlay khi click
    });
});