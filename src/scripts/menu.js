class Food{
    constructor(name, id, price){
        this.name = name;
        this.id = id;
        this.price = price
    }
}

const menu = [
    new Food("Nigri Sushi", "nigri-sushi", 150),
    new Food("Chicken Curry", "chicken-curry", 175),
    new Food("Lechon Kawali", "lechon-kawali", 280),
    new Food("Nasi Lemak", "nasi-lemak", 180),
    new Food("Shoyu Ramen", "shoyu-ramen", 165),
    new Food("Beef Biryani", "beef-biryani", 200),
    new Food("Pad Thai", "pad-thai", 145),
    new Food("Shanghai Rice", "shanghai-rice", 135),
    new Food("Carne Asada", "carne-asada", 300),
    new Food("Fried Chicken", "fried-chicken", 185),
    new Food("Beef Bulgogi", "beef-bulgogi", 190),
    new Food("Nasi Goreng", "nasi-goreng", 155)
];

let foods = ""

menu.forEach((food) => {
    foods += `<div class="food">
                <figure>
                    <img src="assets/${food.id}.png" alt="${food.id.replace("-", " ")}">
                    <figcaption>${food.name}</figcaption>
                </figure>
                <p id="price">PHP ${food.price}</p>
                <button id="order">Order</button>
             </div>`
});

const menuPage = `
    <div class="menu-page">
        <h1>Our Menu</h1>
        <div class="menu-grid"></div>
    </div>
`

document.querySelector(".menu-grid").innerHTML = foods;