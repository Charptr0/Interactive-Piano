import * as notes from "./piano_notes.js"
import * as octaves from "./octaves.js"
import * as piano_sounds from "./notes_dictionary.js"

let piano = document.getElementById("piano");
const DEFUALT_OCTAVE = octaves.OCTAVES["C4"];
let current_octave = DEFUALT_OCTAVE;
let current_playing_note = new Audio();

document.getElementById("octave-lv").innerHTML = "Current Octave: " + octaves.LIST_OF_ALL_OCTAVES[current_octave];

document.addEventListener("keydown", playNote);
document.addEventListener("keyup", (e) =>{
    
    if(e.code == "KeyJ" || e.code == "KeyK") return;
    
    piano.src = notes.PIANO_BLANK;
    
})

function playAudio(note)
{
    //stop the current playing note
    current_playing_note.pause();
    current_playing_note.currentTime = 0;

    switch(current_octave)
    {
        case octaves.OCTAVES.C2:
            current_playing_note = piano_sounds.C2_OCTAVES_NOTES[notes.LIST_OF_ALL_NOTES[note]]
            break;

        case octaves.OCTAVES.C3:
            current_playing_note = piano_sounds.C3_OCTAVES_NOTES[notes.LIST_OF_ALL_NOTES[note]]
            break;

        case octaves.OCTAVES.C4:
            current_playing_note = piano_sounds.C4_OCTAVES_NOTES[notes.LIST_OF_ALL_NOTES[note]]
            break;

        case octaves.OCTAVES.C5:
            current_playing_note = piano_sounds.C5_OCTAVES_NOTES[notes.LIST_OF_ALL_NOTES[note]]
            break;

        case octaves.OCTAVES.C6:
            current_playing_note = piano_sounds.C6_OCTAVES_NOTES[notes.LIST_OF_ALL_NOTES[note]]
            break;

        default:
            break;
    }
    
    current_playing_note.play();
}

function playNote(e)
{
    switch(e.code)
    {
        case "Digit1":
            piano.src = notes.PIANO_C_PRESSED;
            playAudio(notes.NOTES.C);
            break;

        case "Digit2":
            piano.src = notes.PIANO_D_PRESSED;
            playAudio(notes.NOTES.D);
            break;

        case "Digit3":
            piano.src = notes.PIANO_E_PRESSED;
            playAudio(notes.NOTES.E);
            break;

        case "Digit4":
            piano.src = notes.PIANO_F_PRESSED;
            playAudio(notes.NOTES.F);
            break;

        case "Digit5":
            piano.src = notes.PIANO_G_PRESSED;
            playAudio(notes.NOTES.G);
            break;

        case "Digit6":
            piano.src = notes.PIANO_A_PRESSED;
            playAudio(notes.NOTES.A);
            break;
        
        case "Digit7":
            piano.src = notes.PIANO_B_PRESSED;
            playAudio(notes.NOTES.B);
            break;

        case "Digit8":
            piano.src = notes.PIANO_HIGH_C_PRESSED;
            playAudio(notes.NOTES.hC);
            break;

        case "Digit9":
            piano.src = notes.PIANO_HIGH_D_PRESSED;
            playAudio(notes.NOTES.hD);
            break;

        case "Digit0":
            piano.src = notes.PIANO_HIGH_E_PRESSED;
            playAudio(notes.NOTES.hE);
            break;

        case "KeyQ":
            piano.src = notes.PIANO_CS_PRESSED;
            playAudio(notes.NOTES.CS);
            break;

        case "KeyW":
            piano.src = notes.PIANO_E_FLAT_PRESSED;
            playAudio(notes.NOTES.Eb);
            break;

        case "KeyE":
            piano.src = notes.PIANO_FS_PRESSED;
            playAudio(notes.NOTES.FS);
            break;

        case "KeyR":
            piano.src = notes.PIANO_A_FLAT_PRESSED;
            playAudio(notes.NOTES.Ab);
            break;

        case "KeyT":
            piano.src = notes.PIANO_B_FLAT_PRESSED;
            playAudio(notes.NOTES.Bb);
            break;

        case "KeyY":
            piano.src = notes.PIANO_HIGH_CS_PRESSED;
            playAudio(notes.NOTES.hCS);
            break;

        case "KeyU":
            piano.src = notes.PIANO_HIGH_E_FLAT_PRESSED;
            playAudio(notes.NOTES.hEb);
            break;

        case "KeyJ":
            changePianoOctave("up");
            break;

        case "KeyK":
            changePianoOctave("down");
            break;

        default:
            break;
    }
}

function changePianoOctave(direction)
{
    let octave_level = document.getElementById("octave-lv");

    //increase the octave, if the direction is up, and the current octave is not at the highest octave
    if(direction == "up" && octaves.LIST_OF_ALL_OCTAVES[current_octave] != octaves.HIGHEST_OCTAVE)
    {
        octave_level.innerHTML = "Current Octave: " + octaves.LIST_OF_ALL_OCTAVES[++current_octave];
    }

    //increase the octave, if the direction is down, and the current octave is not at the lowest octave
    else if(direction == "down" && octaves.LIST_OF_ALL_OCTAVES[current_octave] !=  octaves.LOWEST_OCTAVE)
    {
        octave_level.innerHTML = "Current Octave: " + octaves.LIST_OF_ALL_OCTAVES[--current_octave];
    }

    switch(current_octave)
    {
        case octaves.OCTAVES.C2:
            piano.src = octaves.PIANO_C2_OCTAVE;
            break;

        case octaves.OCTAVES.C3:
            piano.src = octaves.PIANO_C3_OCTAVE;
            break;

        case octaves.OCTAVES.C4:
            piano.src = octaves.PIANO_C4_OCTAVE;
            break;

        case octaves.OCTAVES.C5:
            piano.src = octaves.PIANO_C5_OCTAVE;
            break;

        case octaves.OCTAVES.C6:
            piano.src = octaves.PIANO_C6_OCTAVE;
            break;

        default:
            break;
    }
}