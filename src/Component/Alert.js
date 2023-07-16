import React from "react";

export default function Alert(props){
    const capatilize = (word)=>{
        const lower = word.toLowerCase()
        console.log(lower)
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return(
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible show`} role="alert">
        <strong>{capatilize(props.alert.type)}</strong> : {props.alert.message}
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
}