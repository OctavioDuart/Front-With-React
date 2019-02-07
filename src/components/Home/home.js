import React from 'react';
import NewSlider from '../widgets/NewSlider/slider';

const Home = () => {
    return (
        <div>
            <NewSlider
                type="featured"
                start={0}
                amount={3}
            />
        </div>
    )
}
export default Home;