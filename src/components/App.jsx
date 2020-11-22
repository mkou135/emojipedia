import React from "react";
import Entry from "./Entry.jsx";
import Emojipedia from "../emojipedia.js";

function createEntry(Emojipedia) {
  return (
    <Entry
      key={Emojipedia.id}
      emoji={Emojipedia.emoji}
      name={Emojipedia.name}
      meaning={Emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {Emojipedia.map(createEntry)}
    </div>
  );
}

export default App;
