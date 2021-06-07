import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const TabContent2 = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
      <div className="myTab">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <h2>Media</h2>
                  </div>
              </div>
              <div className="row">
                  <div className="col-12">
                    <div>
                        <div className="row">
                            <div className="col-6">
                                <Nav tabs className='justify-content-end  nav-pills nav-justified'>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '1' })}
                                            onClick={() => { toggle('1'); }}
                                        >
                                            Barchasi
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '2' })}
                                            onClick={() => { toggle('2'); }}
                                        >
                                            Photo galereya
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '3' })}
                                            onClick={() => { toggle('3'); }}
                                        >
                                            Video galereya
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </div>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1" className=''>
                            <Row>
                                <div class="col-4">
                                    <div class="card">
                                        <div class="card-header p-0 bg-white border-0">
                                            <img src="assets/image/boshqaruv-rais.png" className='w-100' alt="" />
                                        </div>
                                        <div class="card-body">
                                            <div class="d-flex align-items-center justify-content-between ">
                                                <div class="d-flex align-items-center">
                                                    <img src="assets/icon/bag.svg" alt="" /> <span className='ml-1'>16:48 / 12.11.20</span>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <img src="assets/icon/eye.svg" alt="" /> <span className='ml-1'>321</span>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <img src="assets/icon/dialog.svg" alt="" /> <span className='ml-1'>100</span>
                                                </div>
                                            </div>
                                            <h2>
                                                Export qiluvci tadbirkorlik subyektlariga...
                                            </h2>
                                            <p>
                                                “O‘zdonmaxsulot” aksiyadorlik kompaniya tizim korxonalari tomonidan istisno tarikasida maxalliy... 
                                            </p>
                                            <button class="btn">
                                                Batafsil
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="card">
                                        <div class="card-header p-0 bg-white border-0 position-relative">
                                        <div class="icon position-absolute">
                                            <img src="/assets/icon/photo.svg" alt="" />
                                        </div>
                                            <img src="assets/image/boshqaruv-rais.png" className='w-100' alt="" />
                                        </div>
                                        <div class="card-body">
                                            <div class="d-flex align-items-center justify-content-between ">
                                                <div class="d-flex align-items-center">
                                                    <img src="assets/icon/bag.svg" alt="" /> <span className='ml-1'>16:48 / 12.11.20</span>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <img src="assets/icon/eye.svg" alt="" /> <span className='ml-1'>321</span>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <img src="assets/icon/dialog.svg" alt="" /> <span className='ml-1'>100</span>
                                                </div>
                                            </div>
                                            <h2>
                                                Export qiluvci tadbirkorlik subyektlariga...
                                            </h2>
                                            <p>
                                                “O‘zdonmaxsulot” aksiyadorlik kompaniya tizim korxonalari tomonidan istisno tarikasida maxalliy... 
                                            </p>
                                            <button class="btn">
                                                Batafsil
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="card">
                                        <div class="card-header p-0 bg-white border-0 position-relative">
                                        <div class="icon position-absolute">
                                            <img src="/assets/icon/video.svg" alt="" />
                                        </div>
                                            <img src="assets/image/boshqaruv-rais.png" className='w-100' alt="" />
                                        </div>
                                        <div class="card-body">
                                            <div class="d-flex align-items-center justify-content-between ">
                                                <div class="d-flex align-items-center">
                                                    <img src="assets/icon/bag.svg" alt="" /> <span className='ml-1'>16:48 / 12.11.20</span>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <img src="assets/icon/eye.svg" alt="" /> <span className='ml-1'>321</span>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <img src="assets/icon/dialog.svg" alt="" /> <span className='ml-1'>100</span>
                                                </div>
                                            </div>
                                            <h2>
                                                Export qiluvci tadbirkorlik subyektlariga...
                                            </h2>
                                            <p>
                                                “O‘zdonmaxsulot” aksiyadorlik kompaniya tizim korxonalari tomonidan istisno tarikasida maxalliy... 
                                            </p>
                                            <button class="btn">
                                                Batafsil
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                            </TabPane>
                            <TabPane tabId="2" className='   '>
                            <Row>
                                <div class="col-4">
                                    <div class="card">
                                        <div class="card-header p-0 bg-white border-0 position-relative">
                                        <div class="icon position-absolute">
                                            <img src="/assets/icon/photo.svg" alt="" />
                                        </div>
                                            <img src="assets/image/boshqaruv-rais.png" className='w-100' alt="" />
                                        </div>
                                        <div class="card-body">
                                            <div class="d-flex align-items-center justify-content-between ">
                                                <div class="d-flex align-items-center">
                                                    <img src="assets/icon/bag.svg" alt="" /> <span className='ml-1'>16:48 / 12.11.20</span>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <img src="assets/icon/eye.svg" alt="" /> <span className='ml-1'>321</span>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <img src="assets/icon/dialog.svg" alt="" /> <span className='ml-1'>100</span>
                                                </div>
                                            </div>
                                            <h2>
                                                Export qiluvci tadbirkorlik subyektlariga...
                                            </h2>
                                            <p>
                                                “O‘zdonmaxsulot” aksiyadorlik kompaniya tizim korxonalari tomonidan istisno tarikasida maxalliy... 
                                            </p>
                                            <button class="btn">
                                                Batafsil
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                            </TabPane>
                            <TabPane tabId="3" className='   '>
                            <Row>
                                <div class="col-4">
                                    <div class="card">
                                        <div class="card-header p-0 bg-white border-0 position-relative">
                                        <div class="icon position-absolute">
                                            <img src="/assets/icon/video.svg" alt="" />
                                        </div>
                                            <img src="assets/image/boshqaruv-rais.png" className='w-100' alt="" />
                                        </div>
                                        <div class="card-body">
                                            <div class="d-flex align-items-center justify-content-between ">
                                                <div class="d-flex align-items-center">
                                                    <img src="assets/icon/bag.svg" alt="" /> <span className='ml-1'>16:48 / 12.11.20</span>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <img src="assets/icon/eye.svg" alt="" /> <span className='ml-1'>321</span>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <img src="assets/icon/dialog.svg" alt="" /> <span className='ml-1'>100</span>
                                                </div>
                                            </div>
                                            <h2>
                                                Export qiluvci tadbirkorlik subyektlariga...
                                            </h2>
                                            <p>
                                                “O‘zdonmaxsulot” aksiyadorlik kompaniya tizim korxonalari tomonidan istisno tarikasida maxalliy... 
                                            </p>
                                            <button class="btn">
                                                Batafsil
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                            </TabPane>
                        
                        </TabContent>
                    </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default TabContent2;

