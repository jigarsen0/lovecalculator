function calculateLove() {
    var name1 = document.getElementById("name1").value.trim().toLowerCase();
    var name2 = document.getElementById("name2").value.trim().toLowerCase();

    var loveScore = calculateLoveScore(name1, name2);
    displayResult(loveScore);
}

function calculateLoveScore(name1, name2) {
    // Check for exception names
    if (name1.toLowerCase() === "jigar" || name2.toLowerCase() === "jigar") {
        return 99;
    }

    var combinedNames = name1.toLowerCase() + name2.toLowerCase();
    var loveScore = 0;

    for (var i = 0; i < combinedNames.length; i++) {
        loveScore += combinedNames.charCodeAt(i);
    }

    loveScore %= 101; // To get a score between 0 and 100
    return loveScore;
}


function displayResult(loveScore) {
    var resultDiv = document.getElementById("result");
    resultDiv.textContent = "Love score: " + loveScore + "%";
}
