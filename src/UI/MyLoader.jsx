import { useProgress } from "@react-three/drei"

const MyLoader = () => {
    let progression = useProgress()
return(
    <div style={{position:"fixed", display:"flex",justifyContent:"center",alignItems:"center", pointerEvents:"none",width:"100%" , height:"100%",backgroundColor:"#ff8c00",top:0,left:0,opacity:progression.progress===100 ? 0 : 1,transition:"opacity 3s ease-in-out"}}>
<h1>{progression.progress.toFixed()<100 ? progression.progress.toFixed() : "Save Waste"}</h1>
    </div>
)
} 
export default MyLoader