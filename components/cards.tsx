import {Dispatch, SetStateAction} from "react"
import {PageStyleType} from "../src/app/page"

export type CardProps = {
    id: number;
    imageUrl: string;
    title: string;
    createDate: string;
    content: string;
    setPageStyle: Dispatch<SetStateAction<any>>;
    setCurrentCardId: Dispatch<SetStateAction<any>>;
}   

const Card = ({id, imageUrl, title, createDate, content, setPageStyle, setCurrentCardId}: CardProps) => {
    const setPageType = () => {
        setPageStyle(PageStyleType.ArticleType);
        setCurrentCardId(id);
    }

    return (
        <article className="card">
                    <img src = {imageUrl} alt=""/>
                    <div>
                        <h3>
                            <a>{title}</a>
                        </h3>
                        <div className="category category ent">{createDate}</div>
                        <p>{content.substring(0,200)}...</p>
                    </div>
                    <div className="readmore">
                        <h4> <a onClick={setPageType}> <center> Read more </center> </a> </h4>
                    </div>
                </article>
    )
}

export default Card;