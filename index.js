var item = [{itemName:"bananas", itemPrice: 17 }, { itemName:"pancake batter",itemPrice: 5 }, { itemName:"eggs", itemPrice: 49 }];
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
let newObj = {itemName: item, itemPrice: Math.floor(Math.random() * 100)};
cart.push(newObj);
return `${newObj.itemName} has been added to your cart.`;
}
function viewCart() {
  // write your code here
  let itemsInCart = "In your cart, you have ";
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  }
  else (item == cart.length -1 && cart.length > 1);
  {
    itemsInCart = itemsInCart + " and " + itemsInCart + ".";
    } 
    else if (item == cart.length -1)
    {
      itemsInCart = itemsInCart + " " + itemsInCart + ".";
    } 
    else {
      itemsInCart = itemsInCart + " " + itemsInCart + ",";
    }
    return itemsInCart;
  
}
    
function total() {
  // write your code here
let totalValue = 0;
for (let item in cart) {
  totalValue = totalValue + cart[item].itemPrice;

}
  return totalValue;
}

function removeFromCart(item) {
  // write your code here
let updatedCart = [];
if ()
  
}

function placeOrder(cardNumber) {
  // write your code here

  
}
