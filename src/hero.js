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
      });
    const createChild = ()=>{
        let title = document.querySelector("#title");
        if(title.value!==''){
            let newDiv = document.createElement("div");
            newDiv.classList.add("item");
            newDiv.innerHTML = ` <p class="p-item" id="pitem">${title.value}</p> <input name="check" id="checkbox" type="checkbox"/>`
            document.querySelector(".span").appendChild(newDiv);
            setCount(count + 1);
        }else{
            document.querySelector("#title").focus();
        }
        document.querySelector("#title").value='';
    }
    const deleteAll = ()=>{
        document.querySelector(".span").innerHTML='Start  by typing the task👆';
        document.querySelector("#title").value='';
        setCount(1);
    }
    useEffect(()=>{
        let checkboxes = document.querySelectorAll("input[type='checkbox']");
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', (e) => {
                let pElement = checkbox.parentElement.querySelector(".p-item");
                if (e.target.checked === true) {
                    pElement.style.opacity = 0.5;
                } else {
                    pElement.style.opacity = 1;
                }
            });
        });
    });
    const deleteSelected = () => {
        let checkedCheckboxes = document.querySelectorAll("input[type='checkbox']:checked");
        checkedCheckboxes.forEach((checkbox) => {
          let item = checkbox.parentElement;
          if (item) {
            item.remove();
          }
        });
      };
      
  return (
    <>
        <div className="hero">
            <div className="header">
                <h1>Todo List</h1>
            </div>
            <div className="main">
                <label htmlFor="title">Name of task : </label>
                <input type="text" id="title" placeholder="What's on your mind?" maxLength={25} />
                <span className="span">
                    <p className="p-span">Start by typing the task👆</p>
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
                    <a href="https://www.facebook.com/khanalankitt" target="_blank">Facebook&#8599;</a>&nbsp;
                    <a href="https://www.github.com/khanalankitt"   target="_blank">Github&#8599;</a>
                </footer>
            </div>
        </div>
    </>
  )
}

export default Hero;