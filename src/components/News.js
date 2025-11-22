import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";

class News extends Component {
  constructor() {
    super();
    // console.log("we are in constructor of newsjs");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalArticles: 0,
    };
    this.apiKey = process.env.REACT_APP_GNEWS_KEY;
  }

  async updateNews() {
    let url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&apikey=${this.apiKey}&lang=en&country=${this.props.country}&page=${this.state.page}&max=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    console.log(parseData.totalArticles);
    this.setState({
      articles: parseData.articles,
      totalArticles: parseData.totalArticles,
      loading: false,
    });
  }

  async componentDidMount() {
    //console.log("cmd");
    this.updateNews();
  }
  handleNextClick = async () => {
    // this.setState({
    //   page: this.state.page + 1,
    // });
    // this.updateNews();
    this.setState({ page: this.state.page + 1 }, () => {
      this.updateNews(); // runs after page state updates
    });
  };

  handlePreviousClick = async () => {
    //   console.log("Previous");
    // this.setState({
    //   page: this.state.page - 1,
    // });
    // this.updateNews();
    this.setState({ page: this.state.page - 1 }, () => {
      this.updateNews(); // runs AFTER page changes
    });
  };

  render() {
    console.log("render");
    return (
      <div className="container ">
        <h1 className="text-center" style={{ margin: "35px",marginTop:"70px" }}>
          Newsly - {this.props.topLine} headlines!
        </h1>
        {this.state.loading && <Spinner />}{" "}
        {/*for loading spinner its wokr when loading is true */}
        <div className="row g-4 ">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              {
                /*here we use the same logic like spinner   */
              }
              return (
                <div
                  className="col-md-4   d-flex justify-content-center  mb-3"
                  key={element.url}
                >
                  {/* <NewsItems title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""}
                         imgUrl={element.urlToImage} newsUrl={element.url}/> */}
                  <NewsItems
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imgUrl={
                      element.image
                        ? element.image
                        : "https://www.bgr.com/img/gallery/iphone-17-sold-out-base-model-faces-longer-delays-than-the-pros/l-intro-1763130454.jpg"
                    }
                    newsUrl={element.url}
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            onClick={this.handlePreviousClick}
            className="btn btn-dark"
          >
            {" "}
            &laquo; Previous{" "}
          </button>
          <button
            disabled={this.state.page >= 5}
            type="button"
            onClick={this.handleNextClick}
            className="btn btn-dark"
          >
            {" "}
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
