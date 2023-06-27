let carSilent = prompt("Is the car silent when you turn the key? Answer Yes or No only."); 

let msg;

if (carSilent == "Yes") {
    let termnCorroded = prompt("Are the battery terminals corroded?");
    if (termnCorroded == "Yes") {
    msg = "Clean terminals and try again."
    } else {
    msg = "Replace cables and try again.";
    }
} else {
    let click = prompt("Does it make a clicking noise?");
    if (click == "Yes") {
        msg = "Replace your battery.";
    } else {
        let crankUp = prompt("Does the car crank up but fail to start?");
        if (crankUp == "Yes") {
            msg = "Check spark plug connections";
        } else {  
            let engineMort = prompt("Does the engine start and then die?");
            if (engineMort == "Yes") {
                let fuel = prompt("Does your engine have fuel injection?");
                if (fuel == "Yes") {
                    msg = "Get it in for service.";
                } else {
                    msg = "Check to ensure the choke is opening and then closed.";
                }
            }
        }
    }
}

document.write(msg);
