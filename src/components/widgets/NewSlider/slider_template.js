import React from 'react';
import Slick from 'react-slick';
import { Link } from 'react-router-dom';
import './slider.css'



const SliderTemplate = (props) => {
    let template = null;
    const slick_settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    switch (props.type) {
        case ('featured'):
            template = props.data.map((item, i) => {
                return (
                    <div key={i}>
                        <div className="featured_item">
                            <div className="featured_img"
                                style={{
                                    background: `url(../images/members/${item.image})` //O caminho esta assim por conta de uma configuração do webpack
                                }}>
                            </div>
                            <Link to={`/articles/${item.id + 1}`}>
                                <div className="featured_title">
                                    {item.title}
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            });

            break;
        default:
            template = null;
    }

    return (
        <div>
            <Slick {...slick_settings}>
                {template}
            </Slick>
        </div>
    )
}


export default SliderTemplate;