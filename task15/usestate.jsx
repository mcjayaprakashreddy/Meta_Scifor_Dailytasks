import React, { useState } from 'react'

const usestate = () => {
    const(count,setCount)=useState(2);
  return (
    <>
    <p>{count}</p>
<button onclick={()=>setCount(count+1)}>click me</button>
</>
  )
}

export default usestate