

function visas() {
    var visaC = document.getElementById("visa");
var typing = parseInt(document.getElementById("ccnum").value);


if (typing == 4) {
        document.getElementById("amex").style.opacity = "0.5";
        document.getElementById("mastercard").style.opacity = "0.5";
        document.getElementById("discover").style.opacity = "0.5";
        visas();
 
}
else if (typing == 5) {
        document.getElementById("amex").style.opacity = "0.5";
        document.getElementById("visa").style.opacity = "0.5";
        document.getElementById("discover").style.opacity = "0.5";
        visas();

    }
else if (typing == 6) {
        document.getElementById("amex").style.opacity = "0.5";
        document.getElementById("visa").style.opacity = "0.5";
        document.getElementById("mastercard").style.opacity = "0.5";
        visas();

}  
else if (typing == 3) {
        document.getElementById("mastercard").style.opacity = "0.5";
        document.getElementById("visa").style.opacity = "0.5";
        document.getElementById("discover").style.opacity = "0.5";
        visas();

 } 
}

function Submission(evt) {
    var submitted = document.getElementById("confirmbutton");
    var span = document.getElementById("close2");
    var popup = document.getElementById("myModal2");
var resetcart = document.getElementsByClassName("show-cart");


     popup.style.display = "block";
    
      
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        popup.style.display = "none";
        //Change once Index html is uploaded
        window.location.href = "index.html";

        shoppingCart.clearCart();
       
        
      }
      
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == popup) {
          popup.style.display = "none";
          window.location.href = "index.html";
          shoppingCart.clearCart();

        }
        
        var interval = setInterval(changepage, 3000)
        
       
 
    }
    evt.preventDefault();

}

function changepage() {
  shoppingCart.clearCart();
  document.location.href = 'index.html';
  clearInterval(interval);
  

  
  
}