import * as notes from "./piano_notes.js"
import * as sounds from "./piano_sounds.js"

let piano = document.getElementById("piano");
const DEFUALT_OCTAVE = notes.OCTAVES["C4"];
let current_octave = DEFUALT_OCTAVE;
let current_playing_note = new Audio();

document.getElementById("octave-lv").innerHTML = "Current Octave: " + notes.LIST_OF_ALL_OCTAVES[current_octave];

document.addEventListener("keydown", logKey);
document.addEventListener("keyup", () =>{
    piano.src = notes.PIANO_BLANK;

})

function playAudio(key_audio)
{
    current_playing_note.pause();
    current_playing_note.currentTime = 0;
    current_playing_note = key_audio;
    current_playing_note.play();
}

function logKey(e)
{
    switch(e.code)
    {
        case "Digit1":
            piano.src = notes.PIANO_C_PRESSED;
            playAudio(sounds.C2_AUDIO);
            break;

        case "Digit2":
            piano.src = notes.PIANO_D_PRESSED;
            playAudio(sounds.D2_AUDIO);
            break;

        case "Digit3":
            piano.src = notes.PIANO_E_PRESSED;
            playAudio(sounds.E2_AUDIO);
            break;

        case "Digit4":
            piano.src = notes.PIANO_F_PRESSED;
            playAudio(sounds.F2_AUDIO);
            break;

        case "Digit5":
            piano.src = notes.PIANO_G_PRESSED;
            playAudio(sounds.G2_AUDIO);
            break;

        case "Digit6":
            piano.src = notes.PIANO_A_PRESSED;
            playAudio(sounds.A2_AUDIO);
            break;
        
        case "Digit7":
            piano.src = notes.PIANO_B_PRESSED;
            playAudio(sounds.B2_AUDIO);
            break;

        case "Digit8":
            piano.src = notes.PIANO_HIGH_C_PRESSED;
            playAudio(sounds.C3_AUDIO);
            break;

        case "Digit9":
            piano.src = notes.PIANO_HIGH_D_PRESSED;
            playAudio(sounds.D3_AUDIO);
            break;

        case "Digit0":
            piano.src = notes.PIANO_HIGH_E_PRESSED;
            playAudio(sounds.E3_AUDIO);
            break;

        case "KeyQ":
            piano.src = notes.PIANO_CS_PRESSED;
            playAudio(sounds.CS2_AUDIO);
            break;

        case "KeyW":
            piano.src = notes.PIANO_E_FLAT_PRESSED;
            break;

        case "KeyE":
            piano.src = notes.PIANO_FS_PRESSED;
            break;

        case "KeyR":
            piano.src = notes.PIANO_A_FLAT_PRESSED;
            break;

        case "KeyT":
            piano.src = notes.PIANO_B_FLAT_PRESSED;
            break;

        case "KeyY":
            piano.src = notes.PIANO_HIGH_CS_PRESSED;
            break;

        case "KeyU":
            piano.src = notes.PIANO_HIGH_E_FLAT_PRESSED;
            break;

        case "KeyJ":
            changeOctave("up");
            break;

        case "KeyK":
            changeOctave("down");
            break;

        default:
            break;
    }
}


function changeOctave(direction)
{
    let octave_level = document.getElementById("octave-lv");

    //increase the octave, if the direction is up, and the current octave is not at the highest octave
    if(direction == "up" && notes.LIST_OF_ALL_OCTAVES[current_octave] != notes.HIGHEST_OCTAVE)
    {
        octave_level.innerHTML = "Current Octave: " + notes.LIST_OF_ALL_OCTAVES[++current_octave];
    }

    //increase the octave, if the direction is down, and the current octave is not at the lowest octave
    else if(direction == "down" && notes.LIST_OF_ALL_OCTAVES[current_octave] !=  notes.LOWEST_OCTAVE)
    {
        octave_level.innerHTML = "Current Octave: " + notes.LIST_OF_ALL_OCTAVES[--current_octave];
    }
}
