import React from 'react'
import { render } from "react-dom"

import 'prismjs'
import 'prismjs/themes/prism.css'

import "./dist/styles/web.css"

const code = `<ul>
    <li>1st paragraph</li>
    <li>2nd paragraph</li>
    <li>3rd paragraph</li>
</ul>`

const input = `<div class="hello-world">
    <input type="text" />
</div>`


function Layout() {
  return (<div>
    <h1>Default CSS improves default HTML styling</h1>
    <pre className="language-markup"><code>{code}</code></pre>
    <pre className="language-markup"><code>{input}</code></pre>
  </div>)
}

render(<Layout />, document.getElementById("app-root"))
