(function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let count = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkbox.checked = false;
            count++;
        }
    });
    alert(`${count} checkboxes have been unchecked.`);
})();
