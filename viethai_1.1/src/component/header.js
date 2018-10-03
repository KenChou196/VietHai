import React, { Component } from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
                    <div className='container'>
                        <div className='navbar-header'>
                            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>
                                <span className='sr-only'>Toggle navigation</span> <span className='icon-bar'></span> <span className='icon-bar'></span>
                                <span className='icon-bar'></span> </button>
                            <img id='logo' src='/img/logo.png' alt='' />
                            <a className='navbar-brand page-scroll' href='#page-top'><span>V</span>IET HAI CONTRUCTIONS</a> </div>

                        <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
                            <ul className='nav navbar-nav navbar-right'>
                                <li><a href='#about' className='page-scroll'>Giới thiệu</a></li>
                                <li><a href='#services' className='page-scroll'>Dịch Vụ</a></li>
                                <li><a href='#portfolio' className='page-scroll'>Các dự án</a></li>
                                <li><a href='#team' className='page-scroll'>Sản Phẩm<menu></menu></a></li>
                                <li><a href='#contact' className='page-scroll'>Liên Hệ</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <header id='header'>
                    <div className='Modern-Slider'>
                        <div className='item'>
                            <div className='img-fill'>
                                <img src='/img/slider5.jpeg' alt='' />
                                <div className='info'>
                                    <div>
                                        <h3>Thiết kế và thi công nội thất</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='img-fill'>
                                <img src='/img/slider4.jpg' alt='' />
                                <div className='info'>
                                    <div>
                                        <h3>Thi công Xây dựng</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='img-fill'>
                                <img src='/img/slider3.jpg' alt='' />
                                <div className='info'>
                                    <div>
                                        <h3>Tư vấn xây dựng</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='img-fill'>
                                <img src='/img/slider2.jpg' alt='' />
                                <div className='info'>
                                    <div>
                                        <h3>Nội thất hiện đại</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='img-fill'>
                                <img src='/img/slider1.jpg' alt='' />
                                <div className='info'>
                                    <div>
                                        <h3>Thi công chuyên nghiệp</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

        )
    }
}