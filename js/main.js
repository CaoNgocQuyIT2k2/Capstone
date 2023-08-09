//đoạn mã sử dụng để giữ thanh navbar và chỉ cần tải lại phần nội dung không cần phải tải lại cả trang
document.addEventListener("DOMContentLoaded", function() {
    // Tải thanh navbar
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            var navbarDiv = document.getElementById("navbar");
            navbarDiv.innerHTML = data;
        })
        .catch(error => console.error("Error loading navbar:", error));

    var links = document.querySelectorAll("#navbar a");
    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var targetPage = this.getAttribute("href");
            loadPage(targetPage);
        });
    });

    function loadPage(page) {
        var contentDiv = document.getElementById("content");
        
        // Tải nội dung trang
        fetch(page)
            .then(response => response.text())
            .then(data => contentDiv.innerHTML = data)
            .catch(error => console.error("Error loading page:", error));
    }
});


//đoạn mã sử dụng để giữ phần footer và chỉ cần tải lại phần nội dung không cần phải tải lại cả trang
document.addEventListener("DOMContentLoaded", function() {
    // Tải phần footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            var footerDiv = document.getElementById("footer");
            footerDiv.innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));

    // Các mã xử lý khác ở đây
});
