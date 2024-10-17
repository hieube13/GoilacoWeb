document.querySelectorAll(".larger-checkbox").forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
        const id = this.getAttribute("data-id");

        // Thay đổi ảnh BellIcon cho phần tử có data-id tương ứng
        const bellIcon = document.querySelector(`.d-flex[data-id="${id}"] .bell-icon img`);
        bellIcon.src = "/image/Others/BellNormal.png"; // Thay đổi đường dẫn ảnh

        // Thay đổi class 'Message' thành 'SeenMessage'
        const messageDiv = document.querySelector(`.d-flex[data-id="${id}"] .Message`);
        messageDiv.classList.replace("Message", "SeenMessage");

        // Thay đổi checkbox thành hình ảnh AgreeIcon
        const checkboxWrapper = document.querySelector(`.d-flex[data-id="${id}"] .checkbox-btn`);
        checkboxWrapper.innerHTML = '<img src="/image/Others/AgreeIcon.png" style="width: 30px; height: auto;" />';

        // Hiển thị div bị ẩn (penalty-info)
        const penaltyInfo = document.querySelector(`.d-flex[data-id="${id}"] .warning-noti`);
        penaltyInfo.style.display = "flex";
    });
});