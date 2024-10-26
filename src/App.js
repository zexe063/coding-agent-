import logo from './logo.svg';

import Prism, { highlight } from "prismjs";
import 'prismjs/components/prism-csharp';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/themes/prism-okaidia.css';
import React, { useEffect, useRef, useState } from 'react';
import "./App.css"
import axios from 'axios';
import { FaArrowUp, FaLungs, FaRegObjectUngroup } from "react-icons/fa";
import hljs  from 'highlight.js';
import 'highlight.js/styles/night-owl.min.css';
// import 'highlight.js/styles/atom-one-dark.css';
import SkeletonLoader from './component/spinner';
// import { response } from 'express';







function App() {

  const chatref = useRef()
  const [header,setHeader] = useState("")
  let [code,setCode] = useState("")
  const [explaination,setExplaination] = useState("")
  const [filePath,setFilePath] = useState("")
  const [value,setValue] = useState("")
  const [prompt,setPrompt] = useState("");
  const [shouldFetch,setShouldFetch] = useState(false);
  const count = useRef(1);
  const coderef =  useRef();
const [loading,setLoading] = useState(false);
const [showModel, setShowModel] = useState(false);
const [chathistory,setChatHistory] = useState([])
console.log(chathistory)






const chatScrollref = useRef(null)


useEffect(() => {
  // Highlight all code blocks
     hljs.highlightAll(chatref.current)
});


const codeInterval = useRef(null);



useEffect(() => {
  if (shouldFetch) {
    setShouldFetch(false);
    async function fetch() {
      const { data } = await axios.post("https://backend-of-ai.vercel.app/chat", { prompt });

      if (data.header || data.code || data.explaination) {
        let CodeIndex = 0;
        const code = data.code.split("");

        let HeaderIndex = 0;
        const header = data.header.split("");
      console.log(header); 

      setChatHistory((prev)=>{
        return prev.map((item)=>{
          if(item.prompt == prompt){
            return {...item, response:{header:header[0]}}
          }
          return item;
        })
      })

     const HeaderInterval = setInterval(()=>{
      if(HeaderIndex < header.length - 1){
        setChatHistory((prev)=>{
          return prev.map((item)=>{
            if(item.prompt == prompt){
              return {...item, response:{header:item.response?.header + header[HeaderIndex]}}
            }
            else{
              return item;
            }
            
          })
        })
        HeaderIndex++;
      }
      else{
        clearInterval(HeaderInterval)
        setChatHistory((prev)=>{
          return prev.map((item)=>{
              if(item.prompt == prompt){
               return{...item, response:{header:data.header, code:code[0]}}
              }
              return item;
           })
       })

       const codeInterval = setInterval(() => {
         if (CodeIndex < code.length - 1) {
           setChatHistory((prev) => {
             return prev.map((item) => {
               if (item.prompt == prompt) {
                 
                 return {
                   ...item,
                   response:{
                     header:item.response?.header,
                     code:(item.response?.code || "") + code[CodeIndex]
                   }
                 }
               }
               return item;
             })
           })
           CodeIndex++;
         } else {
           clearInterval(codeInterval)
         }
       }, 10)
       // settimeoit function call

      }
      },20)

       


      }
      else{
        alert("something went wrong")
      }
    }  

  
  
    }
    // function call
    fetch()
  
}, [shouldFetch]);




    








function handleclick(){
document.querySelector("textarea").value = null
setChatHistory((prev)=>[...prev,{prompt:value}])
    setPrompt(value)
    setShouldFetch(true)
    setShowModel(true);
    setLoading(true)



  }



  return (
    <div className="min-h-screen flex flex-col">
    
    <div className='   mt-5 ml-5'>
    <div className="  pl-7 font-inter text-3xl text-transparent bg-clip-text bg-gradient-to-r from-design_color">
      Eclisipe
    </div>
    <div className='  font-normal text-[12px] text-white font-inter bg-clip-text text-transparent bg-gradient-to-r from-design_color to-forward_color '>
      A coding agent for webdev
    </div>
    </div>


      <div ref={chatScrollref}  className=" flex-grow mt-2 space-y-5 overflow-auto p-4">

 {
  chathistory.length >0 &&
  chathistory.map((item)=>{
    return(
      <div className=" flex flex-col  max-w-3xl mx-auto">
          
          {
            item.prompt && (
              <div className="mb-4 flex flex-col gap-1 ">
                <p className='bg-user_color  text-[13px] text-white  font-medium leading-normal flex justify-center items-center w-[50px] h-[25px] rounded-xl p-2 font-inter '>User</p>
                <p className="text-white  rounded-md p-2 font-inter">
                  {item.prompt}
                </p>
              </div>
            )}
  
  
              {
                
             
              
                item.response  ?   <p className='bg-ai_color  text-[15px] text-white   font-medium flex justify-center items-center w-[60px] h-[25px] rounded-2xl p-2 font-inter '> model</p> : <SkeletonLoader></SkeletonLoader>   
                }
            {item.response && (
              <div className="space-y-4 mt-3">
                


                
  
                {item.response.header && <h2 className="text-[14px] font-medium text-white font-inter">{item.response.header}</h2>}
                {item.response.code && (
                  <pre className="   bg-code_color border-[2px] border-solid  border-code_border  p-4 rounded-md overflow-auto">
                    <code className="   font-firo-code text-sm" ref={coderef}>
                      {item.response.code}
                    </code>
                  </pre>
                )}
              
              </div>
            )}
  
  
          </div>
    )
  })
 }
      
        <div>

     </div>
       
      </div>

      <div className='text-white  fixed bottom-5 left-1/2  transform -translate-x-1/2 w-full max-w-2xl p-4'> 
        <div className='flex  relative  bg-chat_color    rounded-md border-solid  border-[1px] border-border_color   '>
           <textarea className=' flex-grow  bg-transparent p-3 font-inter text-white resize-none  outline-none  scroll-hide  ' placeholder='Enter The Prompt' spellCheck="false" rows="2" onChange={(e)=>setValue(e.target.value)}></textarea>

           <div className= 'bg-arrow_balck w-[20px] h-[20px] rounded-md flex items-center justify-center  relative top-5 right-5' onClick={handleclick} >
         <FaArrowUp className=' text-[12px] text-white cursor-pointer   '/>
       </div>
        </div>
      </div>



    </div>
  );
}

export default App;
