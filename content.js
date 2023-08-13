console.log('Content script has started.');

function removeStrongTag() {
    const strongTag = document.getElementById('ofc9');

    if (strongTag) {
        console.log('Removing...');
        // console.log('Found <strong> tag with id "ofc9". Removing...');
        strongTag.remove();
    } else {
        console.log('');
        // console.log('No <strong> tag found with id "ofc9".');
    }
}

// Initial check
removeStrongTag();

// Set up a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            removeStrongTag();
        }
    }
});

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true });

// console.log('Content script has set up the MutationObserver.');
console.log('Done !!');
