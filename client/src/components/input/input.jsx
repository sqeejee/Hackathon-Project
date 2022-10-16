import "./input.css";
import axios from "axios";
import { useContext, useRef } from "react";
import { ImageContext } from "../../App";


export default function Guess() {
  const image = useContext(ImageContext);

  const guess = useRef();
  console.log(image);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(text.value)
    const imgtxt = ImageContext;
    console.log(ImageContext)
    const newGuess = {
      guess: guess.current.value,
      imageText: imgtxt
    }
    try {
      const post = await axios.post("http://localhost:8800/api/guess", newGuess);
      const id = post.data._id;
      const final = await axios.get("http://localhost:8800/api/guess/" + id)
      var scorer = final.data.score;
      const element = document.getElementById("score");
      element.innerHTML = Math.floor(scorer * 100);
      const promptSpace = document.getElementById("prompt");
      promptSpace.innerHTML = (imgtxt);
    } catch (err) {}
  }
  return (
    <div class = "big">
       <form className="submitGuess" onSubmit={submitHandler}>
       <input class = "input" type="text" placeholder="Input guess" id="text" ref={guess}></input>
          <button className="shareButton" type="submit" onClick={submitHandler}>
        Submit Guess-
          </button>
        </form>
        <h1 class = "score">Score: <text id="score"></text> / 100</h1>
        <h2 class = "score">Actual Prompt: <text id="prompt"></text> </h2>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
  )
};