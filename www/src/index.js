import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
// JS
// ReactDOM.render(React.createElement('input', {
//     placeholder: 'Enter your name',
//     onMouseLeave: () => console.log('onmouseleave'),
//     onMouseEnter: () => console.log('onmouseenter')
// }), document.getElementById('root')) 

// JSX
const mouseEnter = () => console.log('onmouseenter')
const mouseLeave = () => console.log('onmouseleave')
const helpText = 'Enter your name!'

const elements = (<div>
<h1>{helpText}</h1>
<input placeholder={helpText} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} />
<p>{helpText === 'Enter your name' ? 'Yes' : 'No'}</p>
</div>)

const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(elements)
