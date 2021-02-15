import React ,{ useEffect,useState } from 'react'

const useeffpart2 = () => {
    const [count, setCount] = useState(0);
      // Effects must be called on the top level of the component. And condition can get added inside hooks.
    useEffect(() => {
    if(count >1){
      document.title = `chats (${count})`
    }else{
    document.title = `chats`
    })
    return (
        <div>
            <h1>{count}</h1>
            <button className="btn"
                onClick={() => setCount(count + 1)}>
                CLICK ME 😀
            </button>
            
        </div>
    )
}

export default useeffpart2
