import React from 'react';
import Naruto from '../../assets/images/naruto.jpg';
import Avenger from '../../assets/images/avanger.jpg';
import './Start.css'

export default (props)=>{

    return(
        <div className="ultimate-div">
        <div id="main-div">
            <div className="row options-field">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="offset-md-5 offset-lg-5 offset-xl-5 col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <p>Choose a theme</p>
                    </div>
                </div>
                <br />
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="offset-md-5 offset-lg-5 offset-xl-5 col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <input type="radio" value="NARUTO" id="opt1" onChange={e=>{
                            document.getElementById('main-div').classList.add('naruto-back');
                            document.getElementById('main-div').classList.remove('avengers-back');
                            document.getElementById('opt2').style.display = "none";
                            setTimeout(()=>{
                                props.history.push({
                                    pathname: '/second',
                                    state: {
                                        theme: 'Naruto'
                                    }
                                })
                            }, 2000)
                        }}/>
                        <label htmlFor="opt1" className="naruto-title">Naruto</label>
                    </div>
                </div>
                <br />
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="offset-md-5 offset-lg-5 offset-xl-5 col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <input type="radio" value="AVENGER" id="opt2" onChange={e=>{
                            document.getElementById('main-div').classList.remove('naruto-back');
                            document.getElementById('main-div').classList.add('avengers-back');
                            document.getElementById('opt1').style.display = "none";
                            setTimeout(()=>{
                                props.history.push({
                                    pathname: '/second',
                                    state: {
                                        theme: 'Avengers'
                                    }
                                })
                            }, 2000)
                        }}/>
                        <label htmlFor="opt2" className="avengers-title">Avengers</label>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}