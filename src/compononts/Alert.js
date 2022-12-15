import React from 'react'

function Alert(props) {
    const capitaliz =(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitaliz(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    )
}

export default Alert
