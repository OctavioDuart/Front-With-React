import React from 'react';
import NewSlider from '../widgets/NewSlider/slider';
import NewsList from '../widgets/NewList/news_list';
import VideosList from '../widgets/VideosList/videos_list';

const Home = () => {
    return (
        <div>
            <NewSlider
                type="featured"
                start={0}
                end={6}
            />
            <NewsList
                type="card"
                loadmore={true}
                start={6}
                end={11}
            />
            <VideosList
                type="card"
                title={true}
                loadmore={false}
                start={0}
                end={5}
            />
        </div>
    )
}
export default Home;