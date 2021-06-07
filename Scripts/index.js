import * as notes from "./piano.js"

let piano = document.getElementById("piano");
const DEFUALT_OCTAVE = notes.OCTAVES["C2"];
let current_octave = DEFUALT_OCTAVE;

document.getElementById("octave-lv").innerHTML = "Current Octave: " + notes.LIST_OF_ALL_OCTAVES[current_octave];

document.addEventListener("keydown", logKey);
document.addEventListener("keyup", () =>{piano.src = notes.PIANO_C2_OCTAVE;})

function logKey(e)
{
    switch(e.code)
    {
        case "Digit1":
            piano.src = notes.PIANO_C2_PRESSED;
            break;

        case "Digit2":
            piano.src = notes.PIANO_D2_PRESSED;
            break;

        case "Digit3":
            piano.src = notes.PIANO_E2_PRESSED;
            break;

        case "Digit4":
            piano.src = notes.PIANO_F2_PRESSED;
            break;

        case "Digit5":
            piano.src = notes.PIANO_G2_PRESSED;
            break;

        case "Digit6":
            piano.src = notes.PIANO_A2_PRESSED;
            break;
        
        case "Digit7":
            piano.src = notes.PIANO_B2_PRESSED;
            break;

        case "Digit8":
            piano.src = notes.PIANO_C3_PRESSED;
            break;

        case "Digit9":
            piano.src = notes.PIANO_D3_PRESSED;
            break;

        case "Digit0":
            piano.src = notes.PIANO_E3_PRESSED;
            break;

        case "KeyQ":
            piano.src = notes.PIANO_CS2_PRESSED;
            break;

        case "KeyW":
            piano.src = notes.PIANO_Eb2_PRESSED;
            break;

        case "KeyE":
            piano.src = notes.PIANO_FS2_PRESSED;
            break;

        case "KeyR":
            piano.src = notes.PIANO_Ab2_PRESSED;
            break;

        case "KeyT":
            piano.src = notes.PIANO_Bb2_PRESSED;
            break;

        case "KeyY":
            piano.src = notes.PIANO_CS3_PRESSED;
            break;

        case "KeyU":
            piano.src = notes.PIANO_Eb3_PRESSED;
            break;

        default:
            break;
    }
}

function octaveChanger()
{
    let octave_level = document.getElementById("octave-lv");
    octave_level.innerHTML = "Current Octave: " + notes.LIST_OF_ALL_OCTAVES[current_octave];
}
