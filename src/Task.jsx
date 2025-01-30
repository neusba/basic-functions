/* Component based in a simple task, contains a title and a description and a date */
import { useState } from "react";
import './Task.css'

export function Task({task}) {
    const imgChecked = '../public/checked.png';
    const imgUnChecked = '../public/unchecked.png';
    
    const [isChecked, setIsChecked] = useState(imgUnChecked);
    let cardClassName = isChecked===imgUnChecked?'task-card-unchecked':'task-card-checked';

    const checkOnClick = () => {
        setIsChecked(isChecked===imgUnChecked?imgChecked:imgUnChecked)
    }

    return (
        <article className={cardClassName}>
            <span>{ task }</span>
            <button className="task-button" onClick={checkOnClick}>
                <img src={isChecked} alt="check" />
            </button>
        </article>
    )
}