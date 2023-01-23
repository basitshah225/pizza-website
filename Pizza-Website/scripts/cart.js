var order = this.localStorage.getItem("order");
if (order) {
    var pizzaOrder = JSON.parse(order);
    
    var para = document.createElement("p");
    var node = document.createTextNode(pizzaOrder.size);
    para.appendChild(node);

    var element = document.getElementById("orders");
    element.appendChild(para);
}
