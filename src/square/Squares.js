import { useState } from "react";
import "./Squares.css";
export default function Squares({value,onSquareClick}) {
       
    return (
        <>
            <button className="square" onClick={onSquareClick}>{value}</button>
        </>
    );
}