// ArticleContent.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import IsiArticle from "../components/IsiArticle";

const ArticleContent = () => {
  const { id } = useParams();
  const [articleData, setArticleData] = useState({});

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        const response = await axios.get(
          `https://6480432af061e6ec4d48ebcc.mockapi.io/article-home/${id}`
        );
        console.log(response.data); // Tampilkan respons API di konsol
        setArticleData(response.data);
      } catch (error) {
        console.error("Error fetching article data:", error);
      }
    };

    fetchArticleData();
  }, [id]);

  return (
    <div className="App my-[40px] md:my-[100px] lg:my-[80px] xl:my-[100px]">
      <header className="App-header">
        {articleData && <IsiArticle article={articleData} />}
      </header>
    </div>
  );
};

export default ArticleContent;
