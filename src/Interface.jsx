import { useScroll } from "@react-three/drei";
import Home from "./UI/Home";
import Description from "./UI/Description";
import Enter from "./UI/Enter";
import Visualization from "./UI/Visualization";

const Interface = (props) => {
    const scroll = useScroll();
    const handleClick = () => {
        scroll.offset = 1;
        props.openVisualization();
    }

    return (
        <div className={`wrapper`}>
            <Home></Home>
            <Description></Description>
            {props.showVisualizationMenu ?  <Visualization tonnes={props.tonnes} back={props.back} displayBags={props.displayBags} data={props.data}></Visualization> : <Enter handleClick={handleClick}></Enter> }
        </div>
    )
}
export default Interface