import React, { useState } from "react";

export default function InputForm (props) {
    const [text, setText] = useState("Enter text");

    const UpperCaseConverter  = () => {
       setText(text.toUpperCase())
       props.showAlert("Uppercase converted", "success")
    }
    const LowerCaseConverter  = () => {
        setText(text.toLowerCase())
        props.showAlert("Lowercase converted", "success")
     }
    const updatetext = (event)=>{
        setText(event.target.value)
    }
    return (
        <div className='container'>
            <div className="form-group">
                <label>{props.Text}</label>
                <textarea type="text" className="form-control" value = {text} onChange={updatetext} rows = "15" id="text"></textarea>
            </div>
            <button className="btn btn-primary mx-2 p-t-20" onClick={UpperCaseConverter}>Convert to UpperCase</button>  
            &nbsp;<button className="btn btn-primary mx-2" onClick={LowerCaseConverter}>Convert to LowerCase</button>  
        <div className="my-6">
            <h3>Text Summary</h3>
            <p>
                {text.split(" ").length -1} word and {text.length} character
            </p>
            <h5>{0.008 * (text.split(" ").length -1)} minutes read</h5>
            
        </div>


        </div>
    )
}