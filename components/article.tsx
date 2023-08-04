import {CardProps} from "./cards";

const Article = ({imageUrl, title, createDate, content}: CardProps) => {
    return (
        <article className="article">
                    <img src = {imageUrl} alt=""/>
                    <div>
                        <h3>
                            <div> {title} </div>
                        </h3>
                        <div className="category category ent">{createDate}</div>
                        <p> {content} </p>
                    </div>
                </article>
    )
}

export default Article;