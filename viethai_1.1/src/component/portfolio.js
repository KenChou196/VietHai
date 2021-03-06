import React, { Component } from 'react';


export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataImage: [
                { src: "img/product1.jpeg", alt: "Project Title", ProjectName: 'Project Name1' },
                { src: "img/product2.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product3.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product4.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product5.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product6.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product7.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product8.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product9.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product10.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product11.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product12.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product13.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product13.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product16.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product17.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product18.jpeg", alt: "Project Title", ProjectName: 'Project Name2' }
            ]
        }
    }
    portfolioItem() {
        return this.state.dataImage.map((value, index) => {
            // console.log('value is =========> ', value)
            return (
                <div className="col-sm-6 col-md-4 col-lg-4 residential" key={index}>
                    <div className="portfolio-item">
                        <div className="hover-bg"> <a href={`${value.src}`} title={value.alt} data-lightbox-gallery="gallery1">
                            <div className="hover-text">
                                <h4>{value.ProjectName}</h4>
                            </div>
                            <img src={`${value.src}`} className="img-responsive" alt={value.alt} /> </a> </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div id="portfolio">
                <div className="container">
                    <div className="section-title text-center center">
                        <h2>Các Dự Án đã thực hiện</h2>
                        <hr />
                    </div>
                    <div className="categories">
                        <ul className="cat">
                            <li>
                                <ol className="type">
                                    <li><a href="" data-filter="*" className="active">Tất cả</a></li>
                                    <li><a href="" data-filter=".residential">Nhà ở</a></li>
                                    <li><a href="" data-filter=".office">Văn Phòng</a></li>
                                    <li><a href="" data-filter=".commercial">Phụ kiện, thiết bị, nội thất</a></li>
                                </ol>
                            </li>
                        </ul>
                        <div className="clearfix"></div>
                    </div>
                    <div className="row">
                        <div className="portfolio-items">
                            {this.portfolioItem()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
