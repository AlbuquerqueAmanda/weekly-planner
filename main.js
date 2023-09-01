// Verifying the status of checkboxes on the localStorage
function updateCheckbox(id) {
    const savedDays = JSON.parse(localStorage.getItem('checkboxes')) || {};
    if (savedDays[id]) {
        delete savedDays[id];
    } else {
        savedDays[id] = true;
}
localStorage.setItem('checkboxes', JSON.stringify(savedDays));
};

// To load the checkbox status
function loadCheckboxStatus() {
    const savedDays = JSON.parse(localStorage.getItem('checkboxes')) || {};
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        const id = checkbox.id;
        if (savedDays[id]) {
            checkbox.checked = true;
        }
        checkbox.addEventListener('click', () => {
            updateCheckbox(id);
        });
    });
}

loadCheckboxStatus();

// Save text to localStorage when typing
function saveToLocalStorage(event) {
    const textarea = event.target;
    const uniqueId = textarea.id;
    localStorage.setItem(uniqueId, textarea.value);
}

// Open the saved text on localStorage
function loadFromLocalStorage() {
    for (let i = 0; i <= 7; i++) {
        const uniqueId = `text-${i}`;
        const textarea = document.getElementById(uniqueId);
        const savedContent = localStorage.getItem(uniqueId);
        if (savedContent) {
            textarea.value = savedContent;
        }
    }
}

// Input to every textarea
for (let i = 0; i <= 7; i++) {
    const uniqueId = `text-${i}`;
    const textarea = document.getElementById(uniqueId);
    textarea.addEventListener('input', saveToLocalStorage);
}

// Show saved content when the page is loaded
window.addEventListener('load', loadFromLocalStorage);
