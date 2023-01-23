window.addEventListener("DOMContentLoaded", function(e) {
    const orderButtons = document.querySelectorAll("button[data-order]");
    
    orderButtons.forEach(function(button) {
        button.addEventListener("click", function(e) {
            const button = e.currentTarget;
            const container = button.parentNode;
            
            const order = {
                id: button.getAttribute("data-order"),
                size: button.innerText,
                title: container.querySelector(".title").innerText
            };

            localStorage.setItem("order", JSON.stringify(order));
        });
    });
});