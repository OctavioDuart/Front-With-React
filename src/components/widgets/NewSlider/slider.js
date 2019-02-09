import React, { Component } from 'react';
import axios from 'axios';

import SliderTemplates from  './slider_template';
import {URL} from '../../../hoc/config';


class NewSlider extends Component {

    state = {
        news: []
    }

    componentWillMount() {
        axios.get(`${URL}home/texts/${this.props.start}/${this.props.end}`)
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