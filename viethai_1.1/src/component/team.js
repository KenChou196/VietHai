import React, { Component } from 'react';


export default class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataImage: [
                { id: 0, src: "img/product1.jpeg", alt: "Project Title", name: 'Ngọc Quảng', position: 'Giám đốc' },
                { id: 1, src: "img/product2.jpeg", alt: "Project Title", name: 'Project Name1', position: 'Giám đốc' }
            ]
        }
    }
    showTeam() {
        return (
            this.state.dataImage.map(item => {
                return (
                    <div className="col-md-6 col-sm-12 team" key={item.id}>
                        <div className="thumbnail"> <img src={item.src} alt={item.alt} className="team-img" />
                            <div className="caption">
                                <h3>{item.name}</h3>
                                <p>{item.position}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }
    render() {
        return (
            <div id="team" className="text-center">
                <div className="overlay">
                    <div className="container">
                        <div className="col-md-8 col-md-offset-2 section-title">
                            <h2>Thành viên sáng lập</h2>
                            <hr />
                            <p>Cùng gặp mặt đội ngũ sáng lập và điều hành Việt Hải Contructions</p>
                        </div>
                        <div id="row">
                            {this.showTeam()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
