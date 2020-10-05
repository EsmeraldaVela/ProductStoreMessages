var wrapper= document.body;
var products = [
  {
    id:0,
    name:"Apples",
    price:"2.99",
    image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color:"red"
  },
  {
    id:1,
    name:"Bananas",
    price:"2.50",
    image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color:"gold"
  },
  {
    id:2,
    name:"oranges",
    price:"3.50",
    image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color:"orange"
  }
];

var elements= [];

function Product(image, name, color, price){
  var that= this;
  this.name= name;
  this.color= color;
  this.price= price;
  this.ele=document.createElement("div");
  this.ele.className= "product";
  this.imgEle=document.createElement("img");
  
  this.nameEle= document.createElement("h1");
  this.priceEle= document.createElement("h2");
  
  this.nameEle.innerHTML= "Name: " + this.name;
  this.priceEle.innerHTML= "Price:$ " + this.price;  

  this.ele.appendChild(this.imgEle);
  this.ele.appendChild(this.nameEle);
  this.ele.appendChild(this.priceEle);
  
  this.ele.addEventListener("mouseover", function(){
    that.Color();
  })
  this.ele.addEventListener("mouseout", function(){
    that.Back();
  })
   this.ele.addEventListener("click", function(){
    that.Show();
  })
  
  wrapper.appendChild(this.ele);
}

Product.prototype.Color= function(){
  this.ele.style.borderColor= this.color;
  
}

Product.prototype.Back= function(){
  this.ele.style.borderColor= "";
}

Product.prototype.Show= function(name,price){
  var that=this;
  this.popUpEle=document.createElement("div");
  this.popUpEle.className="popUp";
  this.name= name;
  this.price= price;
  this.nameEle= document.createElement("h1");
  this.priceEle= document.createElement("h2");
  
  
  this.nameEle.innerHTML= "Name: " + this.name;
  this.priceEle.innerHTML= "Price:$ " + this.price;  
  
  
  this.popUpEle.appendChild(this.nameEle);
  this.popUpEle.appendChild(this.priceEle);
  
 
  wrapper.appendChild(this.popUpEle);
  
}
for(var i=0; i<products.length; i++){
  elements.push(new Product(products[i].image, products[i].name, products[i].color, products[i].price))
}







// inside of each div, the product's image should be on top of the text

// When Clicking on a product, it should display the popUp Menu over all the content

// When clicking on the paticular product, that products image, name, and price should be displayed inside the popUp div just like it does in its own product div. No other products information shold be shown.