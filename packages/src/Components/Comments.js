import React from "react";
import { MdInsertComment } from "react-icons/md";


const PostComment = () => {
    return(
        <div >
        <p   style={{textAlign:'left',padding:'5% 18% 1%',fontSize:"30px",fontFamily:"Trebuchet MS",marginTop: "0%",marginBottom:"0%"}}><b>Package <span style={{color:"#0080ff"}} >Reviews !</span></b>   </p>
        <div style={{padding: "1% 25% 2%"}}>
            
        <div className="row" style={{backgroundColor:'white',fontSize:"20px",padding: "1% 2% 2%",boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 7px 25px 0 rgba(0, 0, 0, 0.068)'}}><p style={{marginLeft:'10%'}}><MdInsertComment size={30} />&nbsp; Comment and rate it</p>
        <label><textarea id="comments" name="comments" placeholder="Write your comment here..." rows="6" cols="50" className="textComment"></textarea> </label>    
        <button className="postComment" >Post</button>  
      
        
       </div>
      
       </div>
       </div>
    )
}

export default PostComment;

