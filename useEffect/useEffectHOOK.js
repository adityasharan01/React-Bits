import React ,{ useEffect,useState } from 'react'

const Useeff = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `chats (${count})`
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

export default Useeff
