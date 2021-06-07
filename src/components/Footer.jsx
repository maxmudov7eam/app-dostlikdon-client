import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <ul>
                            <li class="navbar-brand"><h5>Assosiy</h5></li>
                            <li><a href="#">Loyiha haqida</a></li>
                            <li><a href="#">Bizning kurslar</a></li>
                            <li><a href="#">Mentorlar</a></li>
                            <li><a href="#">Ommaviy tarif</a></li>
                            <li><a href="#">Mahfiylik sharti</a></li>
                        </ul>
                    </div>
                    <div class="col-2">
                        <ul>
                            <li class="navbar-brand"><h5>Qo'shimcha</h5></li>
                            <li><a href="#">Loyiha haqida</a></li>
                            <li><a href="#">Bizning kurslar</a></li>
                            <li><a href="#">Mahfiylik sharti</a></li>
                        </ul>
                    </div>
                    <div class="col-2">
                        <ul>
                            <li class="navbar-brand"><h5>Qo'llab quvatlash</h5></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Kontaktlar</a></li>
                        </ul>
                    </div>
                    <div class="offset-1 col-3 justify-content-end d-flex">
                        <ul>
                            <li class="navbar-brand"><h5>Biz bilan aloqa</h5></li>
                            <li><a href="tel: +9989835241582"><h4 class="font-weight-normal mb-3">(+99890) 707-78-87</h4></a></li>
                            <li><a href="#">101010 Toshkent shahar Shayhotohir tumani, Nimadir kochasi 22 uy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
