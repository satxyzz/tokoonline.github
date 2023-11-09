const product = [
    {
        id: 0,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvwZsWCTHlcSpj2TsEywpwl2SYZFsVQaIX5w&usqp=CAU',
        title: 'kerudung hitam',
        price: 28,
    },
    {
        id: 1,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbX2loavg4mtqcdaCj42aBUpYnC9vgBjaaVw&usqp=CAU',
        title: 'kerudung abu abu',
        price: 42,
    },
    {
        id: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV9PLU99cYD0J-RTeO9p8hLPww_KApyApbQg&usqp=CAU',
        title: 'kerudung coklat',
        price: 59,
    },
    {
        id: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiEqlRuCnr18Dc_km7KtmpQksswZubReKpNA&usqp=CAU',
        title: 'hijab voal',
        price: 10,
    },
    {
        id: 4,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAxvie4KkK0hg9SHq9VWkhK7p4NonbJPpBfw&usqp=CAU',
        title: 'hijab bella square',
        price: 30,
    },
    {
        id: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuWOA7aHQHKm_Y20CoIpi1ZD_Sq2csfpbFDg&usqp=CAU',
        title: 'style kerudung',
        price: 70,
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
        <a href="http://127.0.0.1:3000/c:/Users/satri/OneDrive/Documents/website portofolio/image/ecomerce/deskripsikerudung.html" class="herf"><button>Beli</button></a>
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