import React from 'react';
import './videos_list.css';

import { Link } from 'react-router-dom';

const VideosListTemplate = (props) => {
    return props.data.map((item, i) => {
        return <Link to={`/videos/${item.id}`} key={i}>
            <div className="videoListItem">
                <div className="leftVideos"
                    style={{
                        background: `url(/images/videos/${item.image})`
                    }}
                >
                    <div></div>
                </div>
                <div className="rightVideos">

                    <h2>{item.title}</h2>
                </div>
            </div>
        </Link>
    })
}

export default VideosListTemplate;