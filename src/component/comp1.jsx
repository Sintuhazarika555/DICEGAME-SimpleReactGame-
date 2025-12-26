import React from 'react'
import './comp1.css'
import { useState } from "react";

function DiceGame() {
    const [dice, setDice] = useState(1);
    const [message, setMessage] = useState("Click below to start!");


    const rollDice = () => {
        const value = Math.floor(Math.random() * 6) + 1;
        setDice(value);


        if (value === 6) {
            setMessage("🎉 You Got 6! You win 🎉");
            

        } else {
            setMessage(`You Got ${value}. Try again!`);
            
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h1>🎲Dice Game🎲</h1>
                <div className="dice">{dice}</div>
                <p>{message}</p>
                <button id='Dbut' onClick={rollDice}>Roll Dice and Win</button>
            </div>
        </div>
    )
}

export default DiceGame
// yha se hm DiceGame function ko export kr rhe hai
// jisko App.jsx me Comp1 name se import krke use krenge