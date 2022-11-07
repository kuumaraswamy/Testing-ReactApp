import React,{useState} from 'react'

const Greeting = () => {
    const [changedText,setChangedText] = useState(false)

    const changeTextHandler =()=>{
        setChangedText(true)
    }

  return (
    <div>
      <h2>Hello world !!</h2>
      {!changedText && <p>It's Good to see You </p>}
      {changedText && <p>Changed.....</p>}

      <button onClick={changeTextHandler}>Change Text !</button>
    </div>
  )
}

export default Greeting
