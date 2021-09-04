import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Axios from "axios";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

const News = (props) => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResult] = useState(0);

  const updateNews = async () => {
    let allindiaurl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=12`;

    setLoading(true);
    props.setProgress(30);
    const response = await Axios(allindiaurl);
    props.setProgress(50);
    let { data } = response;

    props.setProgress(100);
    setArticle(data.articles);
    setLoading(false);
    setTotalResult(data.totalResults);
  };
  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);

    let allindiaurl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=12`;

    props.setProgress(30);
    const response = await Axios(allindiaurl);
    props.setProgress(50);
    let { data } = response;
    props.setProgress(100);
    setLoading(false);
    setArticle(data.articles.concat(data.articles));
    setTotalResult(data.totalResults);
  };
  const handleDate = (date) => {
    let year = date.slice(0, 4);
    let month = date.slice(5, 7);
    let day = date.slice(8, 10);
    let newdate = day + "-" + month + "-" + year;
    return newdate;
  };

  return (
    <>
      <h2
        className="text-center "
        style={{ marginTop: "90px", marginBottom: "40px" }}
      >
        D24News Top {props.category} Headlines
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        style={{
          overflow: "hidden",
          marginBottom: "40px",
        }}
        dataLength={article.length}
        next={fetchMoreData}
        hasMore={article.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {article.map((item) => {
              return (
                <div className="col-md-4" key={item.url}>
                  <NewsItem
                    title={item.title}
                    source={item.source.name}
                    desc={item.description !== null ? item.description : " "}
                    url={item.url}
                    date={handleDate(item.publishedAt)}
                    author={item.author === null ? "Unknown" : item.author}
                    imageUrl={
                      item.urlToImage !== null ? item.urlToImage : "null"
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
News.defaultProps = {
  country: "in",
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
