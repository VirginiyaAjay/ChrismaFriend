// Arrays containing names and numbers
const names = ["Sony", "Roy", "Alice", "Bob", "Charlie", "David", "Eva", "Frank"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function findFriend() {
    // Get the selected number from the user input
    const number = document.getElementById("numberInput").value;

    // Check if the number is valid and in the range
    if (number >= 1 && number <= 8) {
        // Display the corresponding name and message
        const friendName = names[number - 1];
        document.getElementById("message").innerText = `Your friend is ${friendName}`;
    } else {
        // If the number is invalid, display an error message
        document.getElementById("message").innerText = "Please enter a number between 1 and 8.";
    }
}
