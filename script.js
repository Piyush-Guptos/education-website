function checkAnswers() {
    const answer = document.querySelector('input[name="q1"]:checked');
    if (answer && answer.value === "Paris") {
        alert("Correct!");
    } else {
        alert("Try again.");
    }
}
