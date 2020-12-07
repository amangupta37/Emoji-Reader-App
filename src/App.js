import React, { useState } from "react";
import "./styles.css";

const flagdic = {
  "🎅": "Santa Claus",
  "🌟": "Glowing Star",
  "☃️": "Snowman",
  "🎄": "Christmas Tree",
  "🔥": "Fire",
  "🎁": "Wrapped Gift",
  "🔔": "Bell",
  "🧦": "Socks",
  "🎶": "Musical Notes",
  "🍄": "Mushroom",
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍉": "mellon",
  "🍊": "orange",
  "🍑": "Peach",
  "🍒": " Cherries",
  "🥥": "Coconut",
  "🧃": "Beverage Box",
  "🍫": "Chocolate Bar",
  "🥪": "Sandwich",
  "🍔": " Hamburger",
  "🍕": "Pizza",
  "🥙": "Stuffed Flatbread"
};
const emojies = "Select any below emoji";
const emojis = Object.keys(flagdic);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in flagdic) {
      setMeaning(flagdic[inputEmoji]);
    } else {
      setMeaning("Not Available!!");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(flagdic[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Emojie Reader</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"click an emoji to know the meaning"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2>
      <div className="custom">
        <h3> {meaning} </h3>
      </div>

      <p> {emojies} </p>

      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "4rem", padding: "0.2rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
