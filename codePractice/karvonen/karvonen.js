let age = prompt("What's your age?");
let RestingHr = prompt("What's your resting heart rate?");

document.write("<table>");
document.write("<tr><th>Intensity</th><th>Rate</th></tr>");

for (intensity = 55; intensity <= 95; intensity += 5) {
    targetHr = Math.floor((((220 - age) - RestingHr) * intensity / 100) + RestingHr);
    document.write("<tr><td>" + intensity + "%</td><td>" + targetHr + " bpm</td></tr>");
}

document.write("</table>");
