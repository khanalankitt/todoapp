import React from 'react';
import { useEffect,useState } from 'react';
function Hero() {
    const [count,setCount] = useState(1);
    useEffect(() => {
        let inputBox = document.querySelector("#title");
        const enterPressed = (e) => {
          if(e.key === 'Enter'){
            if( inputBox.value !==''){
                createChild();
                inputBox.value = '';
            }
          }
        };
        inputBox.addEventListener('keypress', enterPressed);
        return () => {
          inputBox.removeEventListener('keypress', enterPressed);
        };
      }, [count])
    const createChild = ()=>{
        let title = document.querySelector("#title");
        if(title.value!==''){
            let newDiv = document.createElement("div");
            newDiv.classList.add("item");
            newDiv.innerHTML = ` <p id="p-item">${title.value}</p> <input name="check" id="checkbox" type="checkbox"/>`
            document.querySelector(".span").appendChild(newDiv);
            setCount(count + 1);
        }else{
            document.querySelector("#title").focus();
        }
        document.querySelector("#title").value='';
    }
    const deleteAll = ()=>{
        document.querySelector(".span").innerHTML='';
        document.querySelector("#title").value='';
        setCount(1);
    }
    const deleteSelected = ()=>{
        let checkbox = document.querySelectorAll("input[type='checkbox']");
        for(let individual of checkbox){
            individual.addEventListener('change',(e)=>{
                if(e.target.checked === true) {
                    document.querySelector("#p-item").style.opacity = 0.5;
                  }else{
                    document.querySelector("#p-item").style.opacity = 1;
                  }
            });
        }
    }
  return (
    <>
        <div className="hero">
            <div className="header">
                <h1>Todo List</h1>
            </div>
            <div className="main">
                <label htmlFor="title">Name of task : </label>
                <input type="text" id="title" placeholder="What's on your mind?" maxLength={20} />
                <span className="span">

                </span>
            </div>
            <div className="add">
                <button className="button" onClick={createChild}>Add Item +</button>
            </div>
            <div className="action">
                <button onClick={deleteAll}>
                    Delete All
                </button>
                <button onClick={deleteSelected}>
                    Delete Selected
                </button>
            </div>
            <div className="footer">
                <footer>
                    <p>Connect :</p>
                    <a href="www.facebook.com">Facebook</a>&nbsp;
                    <a href="www.github.com">Github</a>
                </footer>
            </div>
        </div>
    </>
  )
}

export default Hero;