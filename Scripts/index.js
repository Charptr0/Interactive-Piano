import * as notes from "./piano_notes.js"
import * as sounds from "./piano_sounds.js"

let piano = document.getElementById("piano");
const DEFUALT_OCTAVE = notes.OCTAVES["C4"];
let current_octave = DEFUALT_OCTAVE;
let current_playing_note = new Audio();

document.getElementById("octave-lv").innerHTML = "Current Octave: " + notes.LIST_OF_ALL_OCTAVES[current_octave];

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

    switch(note)
    {
        case notes.NOTES.C:
            if(current_octave == notes.OCTAVES.C2) current_playing_note = sounds.C2_AUDIO;
            else if(current_octave == notes.OCTAVES.C3) current_playing_note = sounds.C3_AUDIO;
            else if(current_octave == notes.OCTAVES.C4) current_playing_note = sounds.C4_AUDIO;
            else if(current_octave == notes.OCTAVES.C5) current_playing_note = sounds.C5_AUDIO;
            else current_playing_note = sounds.C6_AUDIO;
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
            playAudio(notes.NOTES.C);
            break;

        case "Digit9":
            piano.src = notes.PIANO_HIGH_D_PRESSED;
            playAudio(notes.NOTES.D);
            break;

        case "Digit0":
            piano.src = notes.PIANO_HIGH_E_PRESSED;
            playAudio(notes.NOTES.E);
            break;

        case "KeyQ":
            piano.src = notes.PIANO_CS_PRESSED;
            playAudio(notes.NOTES.CS);
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
    if(direction == "up" && notes.LIST_OF_ALL_OCTAVES[current_octave] != notes.HIGHEST_OCTAVE)
    {
        octave_level.innerHTML = "Current Octave: " + notes.LIST_OF_ALL_OCTAVES[++current_octave];
    }

    //increase the octave, if the direction is down, and the current octave is not at the lowest octave
    else if(direction == "down" && notes.LIST_OF_ALL_OCTAVES[current_octave] !=  notes.LOWEST_OCTAVE)
    {
        octave_level.innerHTML = "Current Octave: " + notes.LIST_OF_ALL_OCTAVES[--current_octave];
    }

    switch(current_octave)
    {
        case notes.OCTAVES.C2:
            piano.src = notes.PIANO_C2_OCTAVE;
            break;

        case notes.OCTAVES.C3:
            piano.src = notes.PIANO_C3_OCTAVE;
            break;

        case notes.OCTAVES.C4:
            piano.src = notes.PIANO_C4_OCTAVE;
            break;

        case notes.OCTAVES.C5:
            piano.src = notes.PIANO_C5_OCTAVE;
            break;

        case notes.OCTAVES.C6:
            piano.src = notes.PIANO_C6_OCTAVE;
            break;

        default:
            break;
    }
}