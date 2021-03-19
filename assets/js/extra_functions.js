var CURRENT = null;

// Function to hide all hideable element on the page
function clear() {
    var all_portions = document.getElementsByClassName('hideable');

    // all_portions.forEach((item, i) => {
    //     item.hidden = true;
    // });
    for (let i = 0; i < all_portions.length; ++i) {
        all_portions[i].hidden = true;
        // console.log(all_portions)
    }
}

// Function to show a specific hideable element on the page
// @param num
//      Num is supposed to be the id of the element
function show(class_name) {
    if (CURRENT === class_name) {
        CURRENT = null;
        return;
    }

    var elements = document.getElementsByClassName(class_name);
    for (let i = 0; i < elements.length; ++i) {
        elements[i].hidden = false;
        // console.log(class_name)
    }
    CURRENT = class_name;
}

// Adding the event listener to the buttons.
var buttons = document.getElementsByClassName('button primary fit attach');
var hidden_divs = document.getElementsByClassName('hideable');

// Debugging --> make sure that collections above are good.
// console.log(buttons)
// console.log(hidden_divs)

var all_attachments = [];

for(let i = 0; i < hidden_divs.length; ++i) {
    all_attachments.push(hidden_divs[i].getAttribute('class').split(' ')[1]);
}



for(let i = 0; i < buttons.length; ++i) {
    var attachement = buttons[i].getAttribute('class').split(' ')[4];

    for (let j = 0; j < all_attachments.length; ++j) {
        if(attachement === all_attachments[j]) {
            buttons[i].addEventListener("click", function() {
                clear();
                show('hideable ' + all_attachments[j]);
            }, false);
        }
    }

}
