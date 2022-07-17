import React,{useState, useRef }  from 'react'
import HOME from './Components/Home'
const App = () => {
  const listInnerRef = useRef();
const [scrollend,setScrollEnd]=useState(false)
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      console.log(scrollTop + clientHeight,scrollHeight);
      if (scrollTop + clientHeight >= 2850) {
        setScrollEnd(true)
      }else{
        setScrollEnd(false)
      }
    }
  };
  return (
    <>
    <div  onScroll={onScroll}
        ref={listInnerRef}
        style={{ height: "679px", overflowY: "auto" }}
        >
     <HOME scrollend={scrollend}/>
    </div>
    </>
  )
}

export default App
