import React, { useEffect, useState } from "react";
import Chat from "./Chat";

// Source - https://stackoverflow.com/q/54708626
// Posted by EMILO, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-09, License - CC BY-SA 4.0

var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];

const ChatBox = () => {
  const [message, setMessage] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    const intervalID = setInterval(() => {
      setMessage((prevMessages) => {
        let messageList = [
          { name: generate(), message: "New message received!" },
          ...prevMessages,
        ];
        messageList = messageList.splice(0, 20);
        return messageList;
      });
    }, 2000);
    return () => clearInterval(intervalID);
  }, []);

  function generate() {
    var finalName = nameList[Math.floor(Math.random() * nameList.length)];
    return finalName;
  }

  const inputMessageHandler = (e) => {
    setInputMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputMessage.trim() !== "") {
      const name = generate();
      setMessage((prevMessages) => {
        let messageList = [{ name, message: inputMessage }, ...prevMessages];
        messageList = messageList.splice(0, 20);
        return messageList;
      });
      setInputMessage("");
    }
  };

  return (
    <div className="flex justify-between flex-col border border-black flex-1 p-2">
      <div className="h-94 overflow-y-auto flex flex-col-reverse">
        {message.map((msg, index) => (
          <Chat key={index} {...msg} />
        ))}
      </div>
      <form onSubmit={submitHandler} className="w-full">
        <input
          className="border border-black mt-2 w-full p-1"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={inputMessageHandler}
        />
      </form>
    </div>
  );
};

export default ChatBox;
