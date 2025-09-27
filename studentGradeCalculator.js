const prompt = require("prompt-sync")();

try {
    // Ask user how many scores
    let n = parseInt(prompt("Enter number of scores: "));
    if (isNaN(n) || n <= 0) {
        throw new Error("Number of scores must be a positive integer.");
    }

    let scores = [];

    // Collect scores
    for (let i = 0; i < n; i++) {
        let input = prompt(`Enter score ${i + 1}: `);
        let score = parseFloat(input);

        if (isNaN(score) || score < 0 || score > 100) {
            throw new Error(`Invalid score entered at index ${i}: ${input}`);
        }

        scores.push(score);
    }

    // Compute total
    let total = scores.reduce((sum, s) => sum + s, 0);

    // Compute average
    let average = total / scores.length;

    // Determine grade
    let grade = "";
    if (average >= 80) {
        grade = "A";
    } else if (average >= 75) {
        grade = "B+";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 65) {
        grade = "C+";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 55) {
        grade = "D+";
    } else if (average >= 50) {
        grade = "D";
    } else if (average >= 45) {
        grade = "E";
    } else {
        grade = "F";
    }

    // Output results
    console.log("\nScores: " + scores);
    console.log("Total: " + total);
    console.log("Average: " + average.toFixed(2));
    console.log("Grade: " + grade);

} catch (error) {
    console.error("\nError:", error.message);
}
