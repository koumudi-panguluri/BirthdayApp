import React, { useEffect, useState } from 'react';
import './Second.css'

export default (props) =>{
    const [theme, setTheme] = useState('');
    const [pass, setPass] = useState('');
     useEffect(()=>{
        console.log(props)
        setTheme(props.location.state.theme);
        console.log(theme);
        if(theme === 'Naruto'){
            document.getElementById('label-text').classList.add('naruto-label');
            document.getElementById('label-text').classList.remove('avenger-label');
            document.querySelectorAll('button').forEach(button=>{
                button.style.fontFamily = "Naruto";
            })
        }
        else{
            document.getElementById('label-text').classList.add('avenger-label');
            document.getElementById('label-text').classList.remove('naruto-label');
            document.querySelectorAll('button').forEach(button=>{
                button.style.fontFamily = "Avengers";
            })
        }
    })
    const passwordHandler = (e) =>{
        setPass(pass+e.target.value)
        if(pass.length === 9 && pass === '818587852'){
            props.history.push('/final');
        }
    }
    return(
        <div>
            <div className="first-half">
                <p id="label-text">Enter the password. You use it to unlock stuff daily. Go slow on the keypad</p>
                <input type="password" value={pass} id="pass" disabled/>
            </div>
            <br/>
            <div className="second-half">
                <div className="row">
                    <div className="col">
                        <button  value="1" onClick={passwordHandler}>1</button>
                    </div>
                    <div className="col">
                        <button  value="2" onClick={passwordHandler}>2</button>
                    </div>
                    <div className="col">
                        <button  value="3" onClick={passwordHandler}>3</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button  value="4" onClick={passwordHandler}>4</button>
                    </div>
                    <div className="col">
                        <button  value="5" onClick={passwordHandler}>5</button>
                    </div>
                    <div className="col">
                        <button  value="6" onClick={passwordHandler}>6</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button  value="7" onClick={passwordHandler}>7</button>
                    </div>
                    <div className="col">
                        <button  value="8" onClick={passwordHandler}>8</button>
                    </div>
                    <div className="col">
                        <button  value="9" onClick={passwordHandler}>9</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button disabled>
                            P
                        </button>
                    </div>
                    <div className="col">
                        <button  value="0" onClick={passwordHandler}>0</button>
                    </div>
                    <div className="col">
                        <button disabled>K</button>
                    </div>
                </div>
            </div>
        </div>
    )
}