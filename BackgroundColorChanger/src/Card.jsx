import './resets.css'
import './Card.css'
import { capitalised } from './utils/stringUtils';
import { defaults } from 'autoprefixer';

function Card(props) {
    const { color, theme } = props.color
    const capitalisedColor = capitalised(color)

    const cardClassNameMap = {
        "red": "card bg-red-500 border-red-900",
        "yellow": "card bg-yellow-500 border-yellow-900",
        "green": "card bg-green-500 border-green-900",
        "blue": "card bg-blue-500 border-blue-900",
        "cyan": "card bg-cyan-500 border-cyan-900",
        "orange": "card bg-orange-500 border-orange-900",
    }

    const handleClick = function () {
        const body = document.getElementsByTagName("body")[0];
        const title = document.getElementById("title");
        body.style.backgroundColor = color
        switch (theme){
            case "dark":
                title.style.color = "white"
                break;
            case "light":
                title.style.color = "black"
                break;
            default: 
            title.style.color = "black"
        }   
    }

    return (
        <>
            <button className={cardClassNameMap[color.toLowerCase()]} onClick={handleClick}>
                <p className="card-content">{capitalisedColor}</p>
            </button>
        </>
    );
}

export default Card;