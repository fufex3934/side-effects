import { useState } from "react";

export default function Home() {
  const [meme, setMeme] = useState({
    bottomText: "Bottom Text",
    topText: "Top Text",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  const handleChange = (e) => {
    const { value, name } = e.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
      // bottomText:value,
    }));
  };
  return (
    <main>
      <div className="form">
        <label>
          {meme.topText}
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
        </label>

        <label>
          {meme.bottomText}
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </label>
        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
