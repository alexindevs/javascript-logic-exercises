const password = "AlexinWasTaken";

var input = prompt("What's the password?");

if (input === password) {
    document.write("Welcome, you have been deemed worthy!");
} else {
    document.write("What sort of Hacker are you? Get away, you imposter!");
}