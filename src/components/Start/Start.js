import React from 'react';
import './Start.css'

export default ()=>{
    return(
        <div>
            <div className="row options-field">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="offset-md-5 offset-lg-5 offset-xl-5 col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <p>Choose a theme</p>
                    </div>
                </div>
                <br />
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="offset-md-5 offset-lg-5 offset-xl-5 col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <input type="radio" value="NARUTO" id="opt1"/>
                        <label htmlFor="opt1" className="naruto-title">Naruto</label>
                    </div>
                </div>
                <br />
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="offset-md-5 offset-lg-5 offset-xl-5 col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <input type="radio" value="SIMPSON" id="opt2"/>
                        <label htmlFor="opt2" className="naruto-title">Simpsons</label>
                    </div>
                </div>
            </div>
        </div>
    )
}