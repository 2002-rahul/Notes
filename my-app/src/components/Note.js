import React from "react";

export default function Note(props) {

    function handleClick(){
        props.onDelete(props.id)
    }

    return (
        <>
            <div className="cards">
            <div className="note">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                <button className="btn btn-del" onClick={handleClick}>Delete</button>
            </div>
            </div>
        </>
    )
}