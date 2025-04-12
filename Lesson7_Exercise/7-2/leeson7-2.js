let cartQuantity = 0;
function updateQuantity(x){
  if (cartQuantity+x <=10 && cartQuantity+x >0){
    cartQuantity += x;
    console.log(`cart quantity : ${cartQuantity}`)
    return;
  }else if(cartQuantity+x <0){
    alert('Not enough items in the cart');
    return;
  }else{
    alert('The cart is full');
    return;
  }

}