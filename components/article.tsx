import {Card} from '../src/app/page'
import {Dispatch, SetStateAction} from "react"
import {PageStyleType} from "../src/app/page"


export type ArticleProps = {
    id: number;
    cards: Card[];
    setPageStyle: Dispatch<SetStateAction<any>>;
}

const Article = ({id, cards, setPageStyle}: ArticleProps) => {
    function matchesId (element: { id: number; }, index: any, array: any){
        return id==element.id;
    }
    const setPageType = () => {
        setPageStyle(PageStyleType.CardType);
    }
    const currentCard=cards.filter(matchesId)[0];
    return (
        <div>
            <div className = "backButton">
                <button onClick={setPageType}>Back</button>
            </div>
        <article className="article">
                    <img src = {currentCard.imageUrl} alt=""/>
                    <div>
                        <h3>
                            <div> {currentCard.title} </div>
                        </h3>
                        <div className="category category ent">{currentCard.createDate}</div>
                        <p> {currentCard.content} </p>
                    </div>
                </article>
        </div>
    )
}

export default Article;