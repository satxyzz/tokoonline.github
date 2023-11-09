const product = [
    {
        id: 0,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPYKa3RwpijaGYGq4ziDm59ib-UO4suNc2Jg&usqp=CAU',
        title: 'Baju atasan wanita ',
        price: 120,
    },
    {
        id: 1,
        image: 'https://tse3.mm.bing.net/th?id=OIP.rfS_lNq6_4z3ugtkUATyswHaF6&pid=Api&P=0&h=180',
        title: 'Baju hitam pria dewasa',
        price: 60,
    },
    {
        id: 2,
        image: 'https://tse3.mm.bing.net/th?id=OIP.vjU-vFh2JZkJWvHZpwoTqAHaHa&pid=Api&P=0&h=180',
        title: 'Baju polos hitam laki laki',
        price: 230,
    },
    {
        id: 3,
        image: 'https://tse2.mm.bing.net/th?id=OIP.zC9DXn9I7brXDPpF0xTj3wHaHa&pid=Api&P=0&h=180',
        title: 'T-shirt black laki laki ',
        price: 100,
    },
    {
        id: 4,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT9gmThzJTCQBdBhHHz806kaa_B6Z8E5ip3g&usqp=CAU',
        title: 'T-shirt perempuan ',
        price: 100,
    },
    {
        id: 5,
        image: 'https://tse2.mm.bing.net/th?id=OIP.zC9DXn9I7brXDPpF0xTj3wHaHa&pid=Api&P=0&h=180',
        title: 'T-shirt black laki laki ',
        price: 100,
    }
    
    
    
 ];
 const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
 document.getElementById('root').innerHTML = categories.map((item)=>
 {
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>Rp.${price}.000</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div><br>
        <a href="http://127.0.0.1:3000/c:/Users/satri/OneDrive/Documents/website portofolio/image/ecomerce/deskripsiproduk.html" class="herf"><button>Beli</button></a>
        </div>`
    )
 }).join('')
 
 var cart =[];
 
 function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
 }
 function delElement(a){
    cart.splice(a, 1);
    displaycart();
 }
 
 function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "tidak ada barang di keranjang";
        document.getElementById("total").innerHTML = "Rp. "+0+".000";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Rp."+total+".000";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>Rp ${price}.000</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
 
    
 }