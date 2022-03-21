import './App.css';
import { Form } from './composants/Form';
import { ListArticles } from './composants/ListArticles';
import {useState , useEffect} from "react"

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(reponse => reponse.json())
    .then(data => {
      const top6 = data.slice(0, 3 )
      setArticles(top6)
    })
  } , [])

  function deleteArticle(id){
    setArticles(articles.filter(article => article.id !== id))
  }
  function addArticle(form){
    const cloneArticles = [form ,...articles ]
    setArticles(cloneArticles);
  }

  return (
    <div className="App">
     <Form addArticle={addArticle} />
     <hr />
     <ListArticles articles={articles} deleteArticle={deleteArticle} />
    </div>
  );
}

export default App;