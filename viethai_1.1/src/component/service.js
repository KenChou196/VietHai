import React, { Component } from 'react';

export default class Service extends React.Component {
    render() {
        return (
            <div id="services">
                <div className="container">
                    <div className="col-md-10 col-md-offset-1 section-title text-center">
                        <h2>Các Dịch Vụ</h2>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 service"> <img src={require("../img/design4.jpg")} className="img-responsive" alt="Project Title" />
                            <h3>Thiết kế nội thất</h3>
                            <p>Tư vấn thiết kế nội thất chuyên nghiệp, cung cấp các giải pháp về kiến trúc và không gian</p>
                        </div>
                        <div className="col-xs-12 col-sm-4 service"> <img src={require("../img/design1.jpg")} className="img-responsive" alt="Project Title" />
                            <h3>Thi công xây dựng</h3>
                            <p>Thi công xây dựng công trình trọn gói, ngoài ra các công trình đều được bảo hành và bảo dưỡng thường xuyên khi
                            quý khách có yêu cầu</p>
                        </div>
                        <div className="col-xs-12 col-sm-4 service"> <img src={require("../img/design3.jpg")} className="img-responsive" alt="Project Title" />
                            <h3>Tư vấn miễn phí</h3>
                            <p>Nếu còn băn khoăn hãy nhấc điện thoại lên gọi ngay cho chúng tôi để được tư vấn hoàn toàn miễn phí
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
