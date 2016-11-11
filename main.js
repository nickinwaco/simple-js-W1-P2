// JavaScript Document



// Use JS to add header text into 'main-header' without button click.
document.getElementById("main-header").innerHTML = "<h1>JS Practice</h1>";



// Use JS to add paragraph text into 'action1-message' with button click from 'action1-btn'. -->
document.getElementById("action1-btn").addEventListener("click", function(){
    document.getElementById("action1-message").innerHTML = "Action #1 Button was Clicked!";
});



// Use JS to add an h2 into 'heading2' with button click.
// The HTML has been created, this is your chance to add JS.
document.getElementById("header2-btn").addEventListener("click", function(){
    document.getElementById("header2-message").innerHTML = "<h2> Button Click</h2>";
});



// Create 3 examples of JS being added to the HTML page immediately.
// You'll need to create both the HTML and JS for this.

    document.getElementById("example1").innerHTML = "<h2> example #1 </h2>";







// Create 3 examples of JS being added to the HTML page based on button clicks.
// You'll need to create both the HTML and JS for this.
document.getElementById("btn3").addEventListener("click", function(){
    document.getElementById("btn3-message").innerHTML = "<h2> Button Click</h2>";
    document.getElementById("btn3").innerHTML = "<h2> Button Click</h2>";
});
