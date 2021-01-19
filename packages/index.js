import React from 'react'
import { render } from "react-dom"

// import 'prismjs/plugins/unescaped-markup/prism-unescaped-markup.js'
//
// console.info("abc")
//
// const code = `var data = 1;`
// const html = Prism.highlight(code, Prism.languages.javascript, 'javascript')
//

import "prismjs/components/prism-core"
import "prismjs/components/prism-markup"
import "prismjs/plugins/unescaped-markup/prism-unescaped-markup"

Prism.highlightAll()

function MiniCss() {
  return (<div>
    <h1>Default CSS improves default HTML styling</h1>
  </div>)
}

render(<MiniCss />, document.getElementById("app-root"))
