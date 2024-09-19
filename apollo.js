
// const menubar = document.querySelector(".menu_bar_section");
// const menulogo = document.querySelector(".menu_section");
// const cancelButton = document.querySelector(".cancel_button");

// function addSection(value){
//     menubar.style.opacity = value;
// }


// menulogo.addEventListener("click", () =>{
//     addSection("1");
// });

// cancelButton.addEventListener("click", () => {
//     addSection("0");
// })



// document.addEventListener('DOMContentLoaded', function() {
//     // Get references to the elements
//     const menuButton = document.querySelector('.menu_section');
//     const menuBar = document.querySelector('#menu_bar_section');
//     const cancelButton = document.querySelector('.cancel_button');

//     // Ensure both elements exist before adding event listeners
//     if (menuButton && menuBar && cancelButton) {
//         // Add click event listener to the menu button
//         menuButton.addEventListener('click', function() {
//             // Toggle visibility of the menu bar section
//             menuBar.classList.toggle('hidden');
//         });

//         // Add click event listener to the cancel button
//         cancelButton.addEventListener('click', function() {
//             // Hide the menu bar section
//             menuBar.classList.add('hidden');
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    // Get references to the elements
    const menuButton = document.querySelector('.menu_section');
    const menuBar = document.querySelector('#menu_bar_section');
    const cancelButton = document.querySelector('.cancel_button');

    // Ensure all elements exist before adding event listeners
    if (menuButton && menuBar && cancelButton) {
        console.log('Elements are found');

        // Add click event listener to the menu button
        menuButton.addEventListener('click', function() {
            console.log('Menu button clicked');
            // Toggle visibility of the menu bar section
            menuBar.classList.toggle('hidden');
        });

        // Add click event listener to the cancel button
        cancelButton.addEventListener('click', function() {
            console.log('Cancel button clicked');
            // Hide the menu bar section
            menuBar.classList.add('hidden');
        });
    } else {
        console.error('One or more elements are missing');
    }
});






