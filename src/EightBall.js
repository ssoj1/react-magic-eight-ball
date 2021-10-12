import styles from "./EightBall.css";
import React, { useState } from "react";
import { getRandom } from "./getRandom";


const defaultAnswers = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ];

/** Show a magic eight ball that when clicked displays a random msg and color
 * 
 * Props: 
 * answers
 * 
 * State: 
 * ball - starts black with "Think of a Question", changes color and msg
 */

function EightBall({ answers=defaultAnswers }) {
    const [ ball, setBall ] = useState({color: "black", 
                                       msg: "Think of a question"}); 

    function handleClick(evt) {
        setBall(answers[getRandom(answers.length)]);
    }

    return (
        <div className="ball" style={{backgroundColor: ball.color}} 
            onClick={handleClick}>
            <p>{ ball.msg }</p>
        </div>
    )
}

export default EightBall;