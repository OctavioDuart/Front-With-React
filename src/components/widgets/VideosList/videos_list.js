import React, { Component } from 'react';
import './videos_list.css';
import axios from 'axios';
import { URL } from '../../../hoc/config';
import Button from '../Buttons/buttons';
import VideosTemplate from './videos_template';

class VideosList extends Component {

    state = {
        members: [],
        videos: [],
        start: this.props.start,
        end: this.props.end
    }

    componentWillMount = () => {
        this.request(this.state.start, this.state.end);
    }


    renderTitle = () => {
        return this.props.title ?
            <h3 style={{ textAlign: 'center' }}><strong className="titleVideos">27Club Vídeos</strong></h3>
            : null;
    }

    request = (start, end) => {
        if (this.state.members.length < 1) {
            axios.get(`${URL}members`)
                .then(response => {
                    this.setState({
                        members: response.data
                    });
                });
        }


        axios.get(`${URL}videos/${start}/${end}`)
            .then(response => {
                this.setState({
                    videos: response.data
                });
            });
    }

    renderVideos = () => {
        let template = null;

        switch (this.props.type) {
            case ('card'):
                template = <VideosTemplate data={this.state.videos} members={this.state.members} />
                break;
            default:
                template = null;
        }

        return template;
    }

    loadmore = () => {

    };

    renderButton = () => {
        return this.props.loadmore ?
            <Button
                type="loadmore"
                loadmore={() => this.loadmore()}
                txt="Mais Vídeos"

            />
            :
            <Button
                type="linkTo"
                txt="Mais Vídeos"
                linkTo="/videos"
            />

    }

    render() {
        return (
            <div>
                {this.renderTitle()}
                {this.renderVideos()}
                {this.renderButton()}
            </div>
        )
    }
}

export default VideosList;