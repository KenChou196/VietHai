import React, { Component } from 'react';
export default class About extends React.Component {
    render() {
        return (
            <div id="about">
                <div className="container">
                    <div className="section-title text-center center">
                        <h2>Our Story</h2>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-12 text-center"> <img src={require("../img/about.jpg")} className="img-responsive" alt="" /> </div>
                        <div className="col-xs-12 col-md-12">
                            <div className="about-text">
                                <h3>Về Chúng Tôi</h3>
                                <p>Việt Hải Contructions có hơn mười năm kinh nghiệm trong lĩnh vực xây dựng,với kinh nghiệm và kĩ năng của mình
                                        chúng tôi tự tin sẽ đáp ứng được nhu cầu của bạn</p>
                                <h3>Vì sao chọn chúng tôi</h3>
                                <p>Đội ngũ kiến trúc sư và nhân viên nhiệt huyết và lành nghề, được đào tạo bài bản và có kinh nghiệm thực tiễn,
                                        chúng tôi có thể đáp ứng mọi nhu cầu của quý khách</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
