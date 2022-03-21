export function ListArticles ({articles, deleteArticle}){

    return <section>
        {articles.map((article, index)=> {
            return <article className="col-sm-8" key={index}>
                    <h4>{article.title}</h4>
                    <p>{article.body}</p>
                    <button className="btn btn-dark" onClick={() => deleteArticle(article.id)}>Supprimer</button>
                    <br></br><br></br>
                </article>
        })}
    </section>
}