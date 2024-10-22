import { useState } from "react";
import { useEffect } from "react";

export function CreateTodo () {

    const [title , setTitle ] = useState("");
    const [desc , setdesc ] = useState("");

    return <div>
        <input id="title" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }}/> <br />
        <input id="desc" style={{
            padding: 10,
            margin: 10
        }}type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setdesc(e.target.value);
        }}/> <br />

        <button style={{
            padding: 10,
            margin: 10
        }} onClick={() => {
            fetch("http://localhost:3000/todo" , {
                method: "POST",
                body : JSON.stringify({
                    title :title ,
                    description : desc
                }),
                headers : {
                    "content-type" : "application/json"
                }
            })
                .then(async function (res) {
                    const json = await res.json();
                    alert ("Todo Added");

                })
        }}>Add a TODO</button>
    </div>
}
