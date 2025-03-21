let products = {
    data : [{
        productName :"Regular white T-shirt",
        category :"Topwear",
        price : "30",
        image:"white-skirt.jpg"
    },
    {
        productName :"Beige Short Skirt",
        category :"Bottomwear",
        price : "49",
        image:"short-skirt.jpg"
    },
    {
        productName :"Sporty SmartWatch",
        category :"Watch",
        price : "99",
        image:"sporty-smartwatch.jpg"
    },
    {
        productName :"Basic Knitted Top",
        category :"Topwear",
        price : "29",
        image:"knitted-top.jpg"
    },
    {
        productName :"Black Leather Jacket",
        category :"Jacket",
        price : "129",
        image:"black-leather-jacket.jpg"
    },
    {
        productName :"Stylish Pink Trousers",
        category :"Bottomwear",
        price : "89",
        image:"pink-trousers.jpg"
    },
    {
        productName :"Brown Men's Jacket",
        category :"Jacket",
        price : "189",
        image:"brown-jacket.jpg"
    },
    {
        productName :"Comfy Gray Pants",
        category :"Bottomwear",
        price : "49",
        image:"comfy-gray-pants.jpg"
    },

]
};

for(let i of products.data){
    //Create a card
    let card = document.createElement("div");
    //card should have category and should stay hidden initialy
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price= document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
     
   card.appendChild(container);
    document.getElementById("products").appendChild(card);
}
// parameter passed from buttom (parameter same as category)

function filterProduct(value){
    //Button class
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
        
    });

    //select cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) =>{
        //display all cards on 'all' button click
        if(value == "all"){
            element.classList.remove("hide");
        }
        else{
            //check if element contains category class
            if(element.classList.contains(value)){
                //display element based on category
                element.classList.remove("hide");
            }
            else{
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}
//initially display all products 
window.onload = () => {
     filterProduct("all");
}