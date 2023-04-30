const product = [
    {
        id: 0,
        image: 'image/img1.jpg',
        title: 'Sony Wh-Ch510 Bluetooth Wireless On Ear Headphones Up-To 35Hrs Playtime Lightweight,',
        price: 600,
    },
    {
        id: 1,
        image: 'image/img2.jpg',
        title: 'Mesh Lightweight Comfort Summer Trendy Walking Outdoor Daily Use Sneakers For Men  (Black)',
        price: 800,
    },
    {
        id: 2,
        image: 'image/img3.jpg',
        title: 'FLIXWISE TWS Earbuds Full Touch Control, HD Audio 24Hrs Playtime(White, True Wireless)',
        price: 900,
    },
    {
        id: 3,
        image: 'image/img4.jpg',
        title: 'SONY Alpha ILCE-7C Full Frame Mirrorless Camera Body Featuring Eye AF and 4K movie recording  (Silver)',
        price: 1000
    }
]
console.log('hello ia m')
const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
        <div class='img-box'>
            <img class='images' src='${image}'/>
        </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00 </h2>` +
        "<button onclick='addtoCart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
        </div>`
    )
}).join('')

var cart = [];

function addtoCart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}

function delElement(a){
    console.log(a,'index----')
    cart.splice(a, 1);
    displaycart();
}



function displaycart(a) {
    let j = 0, total=0;
    document.getElementById('count').innerHTML=cart.length;
    document.getElementById('total').innerHTML= "$ "+0+".00";
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = 'Your Cart is Empty';
    }
    else {
        document.getElementById('cartItem').innerHTML = cart.map((item) => {
            var { image, title, price } = item
    document.getElementById('count').innerHTML=cart.length;
            total=total+price;
    document.getElementById('total').innerHTML= "$ "+total+".00";
            return (
                `<div class='cart-item'>
            <div class=row-img>
            <img class='rowimg' src='${image}' />
            </div>
            <p style='font-size:12px;'>${title}</p>
            <h2 style='font-size:15px;'>${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}