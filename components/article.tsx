import {Card} from '../src/app/page'

export type ArticleProps = {
    id: number;
    cards: Card[];
}

const Article = ({id, cards}: ArticleProps) => {
    function matchesId (element: { id: number; }, index: any, array: any){
        return id==element.id;
    }
    const currentCard=cards.filter(matchesId)[0];
    return (
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
    )
}

export default Article;