import React,{useState} from 'react'

export  function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to Uppercase!','success');
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to Lowercase!','success');
    }

    const handleClClick = () =>{
        setText('')
    }

    const handleONChange = (event) =>{
       setText(event.target.value)
    }

    const handleCoClick =(event)=>{
        document.querySelector('textarea').select();
        document.execCommand('copy');
        props.showAlert('copy to clipbord!','success');
    }

    const [text, setText] = useState("");
    return (
        <>
        <div className='container' style={{color:props.mode==='light'?'#0b151e':'white'}}>
            <h1>Enter the text to analyzs</h1>
            <div className="mb-3">
                {/* <label for="myBox" className="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={handleONChange} style={{backgroundColor:props.mode==='light'?'white':'gray',color:props.mode==='#0b151e'?'white':'#0b151e'}} id="myBox" rows="8"></textarea> <br/>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-1' onClick={handleClClick}>Clear</button>
                <button className='btn btn-primary mx-1' onClick={handleCoClick}>Copy</button>
            </div>
        </div>
        <div className='container' style={{color:props.mode==='light'?'#0b151e':'white'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length}Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter somthing to preview it here'}</p>
        </div>
        </>
    )
}
