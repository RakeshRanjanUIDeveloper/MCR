import React, { useState } from 'react'

const CopyClipboard = () => {
    const [enteredValue, setEnteredValue] = useState('');
    const [showResult, setShowResult] = useState('')
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(enteredValue);
            setShowResult("Copied Successfully ✅");
        } catch (error) {
            setShowResult("Failed to copy ❌");
        }
        setTimeout(() => {
            setShowResult("");
        }, 2000);
    }
    return (
        <div className='copyToClipboard'>
            <h1>Copy to Clipboard</h1>
            <p>Click the button to copy the text</p>
            <div className="copyToClipboard-container">
                <div className='form'>
                    <label htmlFor='text'>Enter Your Text
                        <input type='text' id="text" data-testid="input-field" placeholder='Type Something' value={enteredValue} onChange={(e) => setEnteredValue(e.target.value)} />
                    </label>
                    <button onClick={handleCopy} className='btn' data-testid="copy-button">Copy</button>
                </div>

            </div>
            <p>{showResult}</p>
        </div>
    )
}

export default CopyClipboard