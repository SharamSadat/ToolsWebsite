import "./video.css" ;
import { useDarkMode } from "../navbar/darkMode";

function Video (props) {
    const { darkMode } = useDarkMode();

    return(
        <>
            <video 
                src={props.video} 
                className={darkMode ? "dark-mode-video responsive-video" : "responsive-video"}
                controls
            />
        </>
    )
}

export default Video ;