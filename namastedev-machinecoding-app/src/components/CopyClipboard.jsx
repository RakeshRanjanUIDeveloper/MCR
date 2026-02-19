import React from 'react'

const CopyClipboard = () => {
    const handleCopy = () =>{
        
    }
    return (
        <div className='copyToClipboard'>
            <h1>Copy to Clipboard</h1>
            <p>Click the button to copy the text</p>
            <div className="copyToClipboard-container">
                <div className='form'>
                    <label htmlFor='text'>Enter Your Text
                        <input type='text' id="text" data-testid="input-field" placeholder='Type Something' />
                    </label>
                    <button onClick={handleCopy} className='btn' data-testid="copy-button">Copy</button>
                </div>
            </div>
        </div>
    )
}

export default CopyClipboard