import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../../../hoc/config';
import Button from '../Buttons/buttons';
import CardInfo from '../CardInfo/card_info';
import './news_list.css'

class NewsList extends Component {

    state = {
        members: [],
        items: [],
        start: this.props.start,
        end: this.props.end
    }

    componentWillMount() {
        // Jogamos a função para fora para que ela possa 
        // ser utilizada externamente por todo o componente
        this.request(this.state.start, this.state.end);
    }


    request = (start, end) => {
        if (this.state.items.length < 1) {
            axios.get(`${URL}members`)
                .then(response => {
                    this.setState({
                        members: response.data
                    });
                });
        }

        axios.get(`${URL}home/texts/${start}/${end}`)
            .then(response => {
                this.setState({
                    items: [...this.state.items, ...response.data]
                    // Ao aterar o estado da forma que estamos fazendo acima 
                    // Estamos mantendo os valores que ja estão em items e 
                    // atribuindo novos valores (que são a resposta da API)
                });
            });
    }

    loadMore = () => {
        let end = this.state.end + 5;
        this.request(this.state.end, end);
    }

    renderNewsList = (type) => {
        let template = null;

        switch (type) {
            case ('card'):
                template = this.state.items.map((item, i) => (
                    <CSSTransition
                        classNames={{
                            enter: 'newsListWrapper',
                            enterActive: 'newsListWrapperEnter'
                        }}
                        timeout={500}
                        key={i}
                    >
                        <div key={i}>
                            <div className="newslist_item">
                                <Link to={`/articles/${item.id}`}>
                                    <CardInfo
                                        members={this.state.members}
                                        member={item.member}
                                        date={item.date}
                                    />
                                    <h2>{item.title}</h2>
                                </Link>
                            </div>
                        </div>
                    </CSSTransition>
                ));
                break;
            default:
                template = null;
        }

        return template;
    }

    render() {
        return (
            <div>
                <TransitionGroup
                    component='div'
                    className="list"
                >
                    {this.renderNewsList(this.props.type)}
                </TransitionGroup>
                <Button
                    type="loadmore"
                    action={() => this.loadMore()}
                    txt="Veja Mais"
                />
            </div>
        )
    }
}

export default NewsList;