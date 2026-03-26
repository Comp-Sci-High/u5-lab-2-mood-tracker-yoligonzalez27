import "./App.css";

// 3. import useState from react
import {useState} from "react";


function App() {
  // 4. Create useState variables for mood called mood and setMood, make the default "Tired"
const [mood, setMood] = useState("Tired");


  // 5. Create useState variables for energy called energy and setEnergy, make the default 3
const [energy, setEnergy] = useState(3);


  // 6. Create useState variables for school mode called schoolMode and setSchoolMode, make the default true
const [schoolMode, setSchoolMode] = useState(true);


  // 7. Create a function called handleHappy
  // When the function runs:
  // - change mood to "Happy"
  // - show an alert about your mood improving
function handleHappy() {
  setMood("Happy");
  alert("Your mood has improved to happy");
}


  // 8. Create a function called handleEnergyUp
  // When the function runs:
  // - increase energy by 1
  // - show an alert about your energy rising
function handleEnergyUp() {
  setEnergy(energy + 1);
  alert("your energy has risen by 1");
}


  // 9. Create a function called handleReset
  // When the function runs:
  // - reset mood back to "Tired"
  // - reset energy back to 3
  // - reset schoolMode back to true
  // - show an alert that everything has been reset
function handleReset() {
  setMood("Tired");
  setEnergy(3);
  setSchoolMode(true);
  alert("Everything has been reset"); 
}


  // 10. Create a function called handleSchoolMode
  // When the function runs:
  // - switch schoolMode between true and false
function handleSchoolMode() {
setSchoolMode(!schoolMode);
}


  return (
    <div className="page">
      <section className="card">
        <h1>Mood Tracker</h1>
        <p className="subtitle">
          Practice using useState with mood, energy, and school mode.
        </p>

        <div className="tracker-grid">
          <div className="tracker-box">
            <h2>Current Mood</h2>
            <p>Track how your day is going.</p>

            <button
              className="btn"
              // 11. Connect this button to handleHappy using onClick
              onClick = {handleHappy}
            >
              Change Mood to Happy 🙂
            </button>

            {/* 12. Display mood here using curly brackets */}
            <p className="output">Mood: {mood}</p>
          </div>

          <div className="tracker-box">
            <h2>Energy Level</h2>
            <p>Track how much energy you have.</p>

            <button
              className="btn"
              // 13. Connect this button to handleEnergyUp using onClick
              onClick = {handleEnergyUp}
            >
              Increase Energy ⚡
            </button>

            {/* 14. Display energy here using curly brackets */}
            <p className="output">Energy: {energy}</p>
          </div>
        </div>

        <button
          className="btn secondary"
          // 15. Connect this button to handleReset using onClick
          onClick = {handleReset}
        >
          Reset Tracker
        </button>

        <button
          className="btn secondary"
          // 16. Connect this button to handleSchoolMode using onClick
          onClick = {handleSchoolMode}
        >
          Toggle School Mode
        </button>

        {/* 17. Add this after the colon: schoolMode ? "School Mode: ON" : "School Mode: OFF" */}
        <p className="mode">Current Mode: {schoolMode ? "School Mode: ON" : "School Mode: OFF"}</p>

        {/* 18. Submit! (git add . git commit -m 'done' git push) */}
      </section>
    </div>
  );
}

export default App;