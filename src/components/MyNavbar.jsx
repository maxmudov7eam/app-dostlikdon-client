import React from 'react'

const MyNavbar = () => {
    return (
        <div className="mynavbar">

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-2">
                        <h3>Dustlikdon.uz</h3>
                    </div>
                    <div class="col-4">
                        <div class="input-group">
                            <div class="input-group-prepand">
                                <button type="button" class="btn bg-white shadow-none">
                                    <span><img src="/assets/icon/search.svg" className='w-100' alt="" /></span>
                                </button>
                            </div>
                            <input type="text" class="form-control border-0 shadow-none" placeholder="Saytdan izlash" />
                        </div>
                    </div>
                    <div className="col-2 offset-1">
                        <h4>На русском</h4>
                    </div>
                    <div className="col-3">
                        <a href="tel:+998723354116" className='d-flex align-items-center'> <span className='mr-2'><img src="/assets/icon/phone.svg" alt=""/></span> 99872 335-41-16</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MyNavbar
