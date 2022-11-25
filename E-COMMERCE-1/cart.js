var cart = JSON.parse(localStorage.getItem("cart")) || [];


// function display(){
//     document.getElementById("cart-count").textContent = cart.length;

//     var item = document.createElement("div");
//     item.setAttribute("id","items");

//     for(let i=0;i<cart.length;i++){

//         var div = document.createElement("div");
//         div.setAttribute("class","card");
//         div.setAttribute("id",cart[i].id);

//         var img = document.createElement("img");
//         img.setAttribute("src",cart[i].url);

//         var namev = document.createElement("p");
//         namev.setAttribute("class","name");
//         namev.textContent = cart[i].name;

//         var price = document.createElement("p");
//         price.setAttribute("class","price");
//         price.textContent = "₹"+" "+cart[i].price;



//         var rem = document.createElement("button");
//         rem.setAttribute("class","rem");
//         rem.textContent = "Remove";
//         rem.addEventListener("click",function(){
//             var elemid = div.id;
//             document.getElementById(elemid).remove();
//         });

//         div.append(img,namev,price,rem);
//         item.append(div);
//     }
//     document.getElementById("parent").append(item);
// }


display();

function display(){
    document.getElementById("cart-count").textContent = cart.length;

    cart.map(function(elem){
        var div = document.createElement("div");
        div.setAttribute("class","card");
        div.setAttribute("id",elem.id);

        var img = document.createElement("img");
        img.setAttribute("src",elem.url);
        

        var namev = document.createElement("p");
        namev.setAttribute("class","name");
        namev.textContent = elem.name;

        var price = document.createElement("p");
        price.setAttribute("class","price");
        price.textContent = "₹"+" "+elem.price;

        var rem = document.createElement("button");
        rem.setAttribute("class","rem");
        rem.textContent = "Remove";
        rem.addEventListener("click",function(){
            removeele(elem.id);
        });

        updateprice();
        div.append(img,namev,price,rem);
        document.getElementById("items").append(div);

    })
}



function removeele(idx){
    document.getElementById(idx).remove();

    for(let i=0;i<cart.length;i++){
        if(cart[i].id===idx){
            cart.splice(i,1);
            break;
        }
    }

    updateprice();
    document.getElementById("cart-count").textContent=cart.length;
    localStorage.setItem("cart",JSON.stringify(cart));
}


function updateprice(){
    var totalprice = 0;

    cart.map(function(elem){
        totalprice+=parseInt(elem.price);
    })

    document.getElementById("price").textContent="Price: "+"₹"+totalprice;

}



