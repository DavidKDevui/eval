import {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

export function Form ({addArticle}){
    const [show, setShow]= useState(false)
    const [form, setForm] = useState({title : "", body : ""})
    function handleSubmit(e){
        e.preventDefault();
        if(form.title.length > 0 && form.body.length > 0){
            addArticle({...form , id : Date.now()})
            setForm({title : "", body : ""})
        }else {
            alert("veuillez compléter les deux champs du formulaire")
        }
    }

    function handleChange(e){
        const {name, value} = e.target
        setForm({...form , [name]:value})
    }
    return<>
       
       <form className="col-sm-8" onSubmit={handleSubmit}>
            <div>
                <h2 > Ajout d'articles</h2>
                <input type="text" class="form-control" placeholder="Title" value={form.title} onChange={handleChange} name="title"/>
                <textarea name="body" class="form-control" placeholder="Content" rows="5" value={form.body} onChange={handleChange} ></textarea>
            </div>
            <div><input type="submit" className="btn btn-primary" value="Publier l'article"/></div>
        </form>
    </>
}