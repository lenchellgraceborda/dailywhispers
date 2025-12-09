document.addEventListener("DOMContentLoaded", function () {
    const saveBtn = document.getElementById("saveEntry");
    const dateInput = document.getElementById("entry-date");
    const textInput = document.getElementById("entry-text");

    if (!saveBtn) return;

    saveBtn.addEventListener("click", function () {
        const date = dateInput.value;
        const text = textInput.value.trim();

        if (!text) {
            alert("Please write something before saving.");
            return;
        }

        const entry = {
            date: date || "No date",
            text: text,
            savedAt: new Date().toLocaleString()
        };

        let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
        entries.push(entry);

        localStorage.setItem("diaryEntries", JSON.stringify(entries));

        alert("Your entry was saved! 🩷");

        textInput.value = "";
        dateInput.value = "";
    });
});