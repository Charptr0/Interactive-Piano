import * as keys from "./piano.js"

let piano = document.getElementById("piano");
const DEFUALT_OCTAVE = keys.OCTAVES["C4"];
let current_octave = DEFUALT_OCTAVE;

document.addEventListener("keydown", logKey);
document.addEventListener("keyup", () =>{piano.src = keys.PIANO_C2_OCTAVE;})

function logKey(e)
{
    switch(e.code)
    {
        case "Digit1":
            piano.src = keys.PIANO_C2_PRESSED;
            break;

        case "Digit2":
            piano.src = keys.PIANO_D2_PRESSED;
            break;

        default:
            console.log(e.code);
            break;
    }
}
