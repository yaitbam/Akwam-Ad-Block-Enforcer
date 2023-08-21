// console.log('Content script has started.');

function removeElementsAndStyle() {
    const strongTag = document.getElementById('ofc9');
    const ignielAdBlockDiv = document.getElementById('ignielAdBlock');
    const bodyTag = document.body;

    if (strongTag) {
        // console.log('Removing...');
        strongTag.remove();
    } else {
        // console.log('Not found !');
    }

    if (ignielAdBlockDiv) {
        // console.log('Removing...');
        ignielAdBlockDiv.remove();
    } else {
        // console.log('Not found');
    }

    if (bodyTag) {
        // console.log('Updating...');
        bodyTag.style.setProperty('overflow', 'auto', 'important');
    } else {
        // console.log('Not found.');
    }
}

// Initial check
removeElementsAndStyle();

// Set up a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            removeElementsAndStyle();
        }
    }
});

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true });

// console.log('Done !!');
