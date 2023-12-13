import React, { useEffect, useState } from "react";
import axios from "axios";

import Article from "../components/Article";

function ArticleLanding() {
    // STATE BUAT CARD ARTICLE
    const [articles, setArticles] = useState([]);

    // AMBIL  DATA API ARTIKEL 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://6480432af061e6ec4d48ebcc.mockapi.io/article-home");
                setArticles(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <div className="container mx-auto mt-16 p-8 text-center">
                <h2 className="text-3xl font-bold mb-8">Artikel Kesehatan Terpopuler</h2>
                <p className="text-gray-700 mb-8">
                    Terdapat beberapa artikel terpopuler yang dapat kamu akses sesuai dengan kebutuhanmu nih Sobat SehatPlus!
                </p>

                <div className="flex flex-wrap -mx-4">
                    {articles.map((article) => (
                        <Article key={article.id} article={article} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ArticleLanding