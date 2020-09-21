import React from "react";
import newsService from "../services/newsService";
import Spinner from '../components/spiner';
import ErrorIndicator from '../components/error-indicator';

export default class ContentPage extends React.Component {
    state = {
        news: {},
        loading: true
    };

    constructor() {
        super();
        this.updateNews();
        this.interval = setInterval(this.updateNews, 2500);
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    updateNews = () => {
        console.log('update');
        const id = Math.floor(Math.random()*6) + 1;
        newsService.getNewsDataForId(id)
            .then(response => {
                console.log(response);
                this.setState({
                    news: response.data,
                    loading: false,
                    error: false
                });
            })
            .catch(this.onError);
    };

    render() {
        const { news, loading, error } = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <NewsView news={news}/> : null;

        return (
            <div className="random-news jumbotron rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const NewsView = ({ news }) => {

    const { title, article, imgUrl } = news;

    return (
        <React.Fragment>
            <img className="news-image"
                 src={imgUrl} />
            <div>
                <h4>{title}</h4>
                <span>{article}</span>
            </div>
        </React.Fragment>
    );
};