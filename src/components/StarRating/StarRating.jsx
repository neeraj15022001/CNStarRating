import React, {useState} from 'react'
import {AiFillStar, AiOutlineStar} from "react-icons/ai"

function StarRating({numberOfStars, highlightColor, nonHighlighColor}) {
    const [starsToggled, setToggled] = useState({toggled: 0, nonToggled: parseInt(numberOfStars)})
    const handleClick = (e) => {
        e.stopPropagation()
        let indexClicked  = 0
        if(e.target.tagName === "path") {
            indexClicked = parseInt(e.target.parentElement.dataset.index)
        } else {
        indexClicked = parseInt(e.target.dataset.index)
        }
        setToggled({toggled: (indexClicked), nonToggled: parseInt(numberOfStars - parseInt(indexClicked))})
    }
    const handleStarredClicked = (e) => {
        e.stopPropagation()
        let indexClicked  = 0
        if(e.target.tagName === "path") {
            indexClicked = parseInt(e.target.parentElement.dataset.index)
        } else {
        indexClicked = parseInt(e.target.dataset.index)
        }
        setToggled({toggled: (indexClicked + 1), nonToggled: parseInt(numberOfStars - parseInt(indexClicked + 1))})
    }
    let stars = []
    for(let i = 0; i < starsToggled.toggled; i++) {
        stars.push(<AiFillStar size="64" color={highlightColor} style={{cursor:"pointer"}} onClick={handleStarredClicked} key={i} data-index={i} />)
    } 
    for(let i = 1; i <= starsToggled.nonToggled; i++) {
        stars.push(<AiOutlineStar size="64" color={nonHighlighColor} style={{cursor:"pointer"}} onClick={handleClick} key={starsToggled.toggled+i} data-index={starsToggled.toggled + i} />)
    } 
    
    return (
        <div>
            {stars.map(star => star)}
        </div>
    )
}

export default StarRating
