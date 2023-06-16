import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  state = {
    articles: [],
    currentPage: 1,
    loading: false,
  };

  
async componentDidMount() {
  const { category } = this.props; // Get the category from props
  await this.fetchNews(category);
}

fetchNews = async (category) => {
  const { currentPage } = this.state;
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=2f68d00769b54a2a91830d7cf77f62e1&page=${currentPage}`;
    this.setState({ loading: true });

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.articles && data.articles.length > 0) {
        this.setState({
          articles: data.articles,
          loading: false,
        });
      } else {
        this.setState({
          articles: [],
          loading: false,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  };

  handleNext = async () => {
    const { currentPage } = this.state;
    const nextPage = currentPage + 1;
    this.setState({ currentPage: nextPage }, () => {
      this.fetchNews();
    });
  };

  handlePrevious = async () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      const previousPage = currentPage - 1;
      this.setState({ currentPage: previousPage }, () => {
        this.fetchNews();
      });
    }
  };

  render() {
    const { articles, currentPage, loading } = this.state;
    const cardsPerPage = 8;
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentArticles = articles.slice(startIndex, endIndex);

    return (
      <>
        <div className="container mt-4">
          <h1>NewsMonkey - Top Headlines</h1>
          {loading ? (
            <div className="d-flex justify-content-center align-items-center vh-100">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              <div className="row">
                {currentArticles.map((element) => (
                  <div className="col mb-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ''}
                      description={element.description ? element.description : ''}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                ))}
              </div>
              <div className="container d-flex justify-content-between mb-5">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={this.handlePrevious}
                  disabled={currentPage === 1 || loading}
                >
                  &larr; Previous
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.handleNext}
                  disabled={currentArticles.length < cardsPerPage || loading}
                >
                  Next &rarr;
                </button>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

export default News;
