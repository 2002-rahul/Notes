import React, { useState } from "react";

export default function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const { name, value } = event.target

        setNote(prevnote => {
            return {
                ...prevnote,
                [name]: value
            }
        })
    }

    function submitNote(event) {
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault()

    }

    return (
        <>
            <div className="box">
                <form>
                    <input className="title" name="title" onChange={handleChange} value={note.title} placeholder="Title" />
                    <textarea className="text" name="content" onChange={handleChange} value={note.content} placeholder="Take a note...." rows="3" />

                    <button className="btn btn-add" onClick={submitNote}>Add</button>
                </form>
            </div>
        </>
    )
}