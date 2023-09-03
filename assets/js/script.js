const bar = document.getElementById("mobile");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add("active")
    })
}

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove("active")
    })
}


  
  
// code lets you choose productImage
let mainImage = document.getElementById("mainIamge");
    console.log(mainImage);
let images = document.querySelectorAll(".small-image");     
    console.log(images);
images.forEach(function(image){
    image.addEventListener("click", function(){
        mainImage.setAttribute("src", image.src)
    })
})
  



// Function to calculate and update the total price
function updateTotalPrice() {
    let numberinput = document.getElementById("inputNumber");
    let inputValue = numberinput.value;
    let inputValueNumber = parseInt(inputValue);
    let defaultPrice = document.getElementById("defaultItemPrice").textContent;
    const defaultItemPrice = parseInt(defaultPrice); // Default item price from the markup
  
    // Ensure the input value is not below zero
    if (inputValueNumber < 0) {
      inputValueNumber = 0;
      numberinput.value = inputValueNumber; // Update the input value to zero
    }
  
    // Check if the input value is null or empty, and use the default price
    if (isNaN(inputValueNumber) || inputValueNumber === 0) {
      inputValueNumber = defaultItemPrice;
      numberinput.value = inputValueNumber; // Update the input value to the default price
    }
  
    // Calculate the total price based on the input value and the default item price
    let totalPrice = inputValueNumber * defaultItemPrice;
  
    // Update the "itemPrice" div with the calculated total price
    let itemPriceElement = document.getElementById("itemPrice");
    if (itemPriceElement) {
      itemPriceElement.textContent = totalPrice;
    }
  }
  
  // Add an event listener to the input field to update the total price on input
  let numberinput = document.getElementById("inputNumber");
  numberinput.addEventListener("input", updateTotalPrice);
  
  // Initial calculation of total price
  updateTotalPrice();
    
