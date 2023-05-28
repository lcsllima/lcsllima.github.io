const tabs = document.querySelector('.tabs').children;
const display = document.querySelector('.display');
const displayChildren = display.children;
let currentIndex = 0;

function changeTab(index) {
    // Remove the "current-tab" class from all tab elements
    Array.from(tabs).forEach(function(t) {
        t.classList.remove('current-tab');
    });

    // Add the "current-tab" class to the tab at the specified index
    tabs[index].classList.add('current-tab');

    // Show the corresponding child element in the display
    Array.from(displayChildren).forEach(function(childEl, childIndex) {
        childEl.hidden = childIndex !== index;
    });
}

function autoChangeTab() {
    currentIndex = (currentIndex + 1) % tabs.length; // Increment the current index
    changeTab(currentIndex); // Change the active tab
}

window.addEventListener("load", function(event) {
    // Start auto-changing the tabs every 3 seconds
    const autoChangeInterval = setInterval(autoChangeTab, 3000);

    // Add click event listeners to stop the auto-changing when a tab is clicked
    Array.from(tabs).forEach(function(tab, index) {
        tab.addEventListener('click', function() {
            clearInterval(autoChangeInterval); // Stop the auto-changing
            changeTab(index); // Change to the clicked tab immediately
        });
    });
});
