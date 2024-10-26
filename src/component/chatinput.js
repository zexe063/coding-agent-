
import { useState } from "react";
import { Simulate } from "react-dom/test-utils";


function  Chatinput( {promptinput}){

  const [value, setValue] = useState();


  function handleclick(){
    promptinput(value)
  document.querySelector("textarea").value = null
  }
    return(
    <div className=' w-[500px] h-[80px] fixed z-50 bg-white border-2 border-border_color rounded-md shadow-normal outline-none flex items-center justify-center bottom-5  right-[35%]  '>
        
    <textarea className='  font-DM-Sans  w-[450px]  h-[70px] resize-none  outline-none  scroll-hide  ' placeholder='Enter The Prompt' spellCheck="false" onChange={(e)=>setValue(e.target.value)}></textarea>
   <div className=' bg-arrow_balck w-[20px] h-[20px] rounded-md flex items-center justify-center' onClick={handleclick} >
     <FaArrowUp className=' text-[12px] text-white cursor-pointer   '/>
   </div>
   </div> 
    )
}

export default Chatinput;