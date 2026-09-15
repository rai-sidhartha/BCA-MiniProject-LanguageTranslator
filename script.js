const translateButton = document.getElementById("translateButton");
const inputText = document.getElementById("inputText");
const translatedText = document.getElementById("translatedText");

translateButton.addEventListener("click", function () {
    const text = inputText.value.trim();

    if (text === "") {
        translatedText.textContent = "Please enter text to translate.";
        return;
    }

    translatedText.textContent =
        "Translation result for: " + text;
});
