import React from "react"
import ReactDOM from "react-dom"

import "./index.css"
import {Counter} from "./Counter"

const App = () => (
    <div className="container">
        <div style={{color: "purple"}}>Name: remote</div>
        <Counter />
    </div>
)
ReactDOM.render(<App />, document.getElementById("app"))
