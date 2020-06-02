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
        }
        else{
            document.getElementById('label-text').classList.add('avenger-label');
            document.getElementById('label-text').classList.remove('naruto-label');
        }
    })
    // const passwordHandler = (e) =>{
    //     e.preventDefault();
    //     let pass = '';
    //     pass = pass + e.target.value;
    //     console.log(pass);

    //     if(pass.length === 10 && pass === '8185878523'){
    //         props.history.push('/final');
    //     }
    // }
    return(
        <div>
            <div className="first-half">
                <p id="label-text">Enter the password (you are familiar! if you cannot, shame on you. You use it daily)</p>
                <input type="password" value={pass} id="pass" disabled/>
            </div>
            <div className="second-half">
                <div className="row">
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <button  value="1">1</button>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <button  value="2">2</button>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <button  value="3">3</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <button  value="4">4</button>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <button  value="5">5</button>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <button  value="6">6</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <button  value="7">7</button>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <button  value="8">8</button>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <button  value="9">9</button>
                    </div>
                </div>
            </div>
        </div>
    )
}