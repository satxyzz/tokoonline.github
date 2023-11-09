const product = [
    {
        id: 0,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQezoOz-F8HSzh8DeEzTOusMMH-e-4OmNV4eg&usqp=CAU',
        title: 'celana perempuan ',
        price: 30,
    },
    {
        id: 1,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHl6fZW6QwRaAvQnrI1hnYRsW8AoriLAqgiw&usqp=CAU',
        title: 'style celana wanita',
        price: 400,
    },
    {
        id: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS_rMZw9UuI720qqORZ8iUvrFjFnFkDCRVjw&usqp=CAU',
        title: 'celana pria',
        price: 59,
    },
    {
        id: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbxMHJhxUo8Kr5ZxyeJAE1ZLhXYIUWANJjQ&usqp=CAU',
        title: 'celana dalaman',
        price: 50,
    },
    {
        id: 4,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjMo4Mv0fEuYbQ8pXTOMbiVBFln0Jqw7_jQ&usqp=CAU',
        title: 'celana panjang ',
        price: 200,
    },
    {
        id: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHRc9nN5dApwGcs8Fs5n5HndA48dRYQKxx8A&usqp=CAU',
        title: 'celana pendek pria',
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
        <a href="http://127.0.0.1:3000/c:/Users/satri/OneDrive/Documents/website portofolio/image/ecomerce/deskripsicelana.html" class="herf"><button>Beli</button></a>
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