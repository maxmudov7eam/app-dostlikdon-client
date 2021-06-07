import React from 'react'

const SendOnline = () => {
    return (
        <div>
            <div className="sendOnline  ">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <span><img src="/assets/image/left-man.png" alt="" className=""/></span>
                        </div>
                        <div className="col-4 offset-1">
                            <h2>Shikoyatlar mavjudmi?
                                onlayn tarzda yuboring      
                            </h2>
                        </div>
                        <div className="col-2">
                            <button className="btn">Murojaat yuborish</button>
                        </div>
                        <div className="col-3 d-flex justify-content-end myImg pr-0">
                            <span><img src="/assets/image/right-planshet.png" alt="" className=""/></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SendOnline
