import React from 'react'
import StarRating from "../StarRating/StarRating.jsx"
function App() {
    return (
        <div style={{display:"flex", alignItems:"center", justifyContent:'center', height: "100vh"}}>
        <StarRating numberOfStars="5" highlightColor="gold" nonHighlighColor="silver" />
        </div>
    )
}

export default App
