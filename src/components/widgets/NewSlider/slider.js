import React, { Component } from 'react';
import axios from 'axios';

import SliderTemplates from  './slider_template';


class NewSlider extends Component {

    state = {
        news: []
    }

    componentWillMount() {
        axios.get(`http://localhost:8000/home/notices/${this.props.start}/${this.props.amount}`)
            .then(response => {
                this.setState({
                    news: response.data
                })
            });
    }

    render() {
        return (
            <SliderTemplates data={this.state.news} type={this.props.type}/>
        )
    }
}

export default NewSlider;