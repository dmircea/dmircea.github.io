//  The below was borrowed and adapted from:
//  https://stackoverflow.com/questions/47428504/javascript-count-number-of-visitor-for-website
//  Thank you for you insights!

var n = localStorage.getItem('on_load_counter');

if (n === null) {
    n = 0;
}

n++;

console.log(n);

localStorage.setItem("on_load_counter", n);

document.getElementById('visits').innerHTML = "Number of visits: " + n;
