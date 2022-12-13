import { useSelector } from "react-redux";
import React, { useState } from "react";
import { PlayCircleOutlined,PauseCircleOutlined,StepForwardOutlined,StepBackwardOutlined  } from "@ant-design/icons";


export default function PlayList(){
    const SelectPlayList = useSelector(state=>state.List.value)

  const [selectedSong,setSelectedSong] = useState("")

 const click = (e) => {
    setSelectedSong(e)
 }

return(
   <>
   {SelectPlayList&&SelectPlayList.data&&SelectPlayList.data.results && SelectPlayList.data.results.map(e=>{
    console.log(e)
       return(
        <>
           <div  onClick={() => click(e.downloadUrl[3].link) }>
            <div><img style={{height:"220px",width:"200px",borderRadius:"10px"}} src={e.image[2].link} />
        
          {/* <p>  <PlayCircleOutlined /></p>
          <p><PauseCircleOutlined /></p>
          <p><StepForwardOutlined /></p> */}
            </div>
           <p style={{color:"white",textAlign:"center"}}>{e.name}</p>
         
          
             </div>
   </>
   )
   })}
   
<div>
 <audio src={selectedSong} autoPlay controls />
 <p style={{display:"flex",justifyContent:"spaceBetween",fontSize:"25px",marginLeft:"3rem"}}><StepBackwardOutlined /><PlayCircleOutlined src={selectedSong} autoPlay controls/><PauseCircleOutlined /><StepForwardOutlined /></p>
</div>

   </> 
    
)
}