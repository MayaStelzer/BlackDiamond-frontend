import {Dispatch, SetStateAction} from "react"
import PageStyleType from "../src/app/page"

export type CardProps = {
    id: number;
    imageUrl: string;
    title: string;
    createDate: string;
    content: string;
    setPageStyle: Dispatch<SetStateAction<any>>;
}   

const Card = ({imageUrl, title, createDate, content, setPageStyle}: CardProps) => {
    const setPageType = () => {
        setPageStyle(PageStyleType.ArticleType);
    }

    return (
        <article className="card">
                    <img src = {imageUrl} alt=""/>
                    <div>
                        <h3>
                            <a onClick={setPageType}href="article.html">{title}</a>
                        </h3>
                        <div className="category category ent">{createDate}</div>
                        <p>{content.substring(0,150)}...</p>
                    </div>
                    <div className="readmore">
                        <p> <a href="article.html"> <center> Read more </center> </a> </p>
                    </div>
                </article>
    )
}

export default Card;