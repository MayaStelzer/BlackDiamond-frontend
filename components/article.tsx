import {useGlobalContext} from "@/app/context/store";
import Link from "next/link";


export type ArticleProps = {
    id: string;
}

const Article = ({ id }: ArticleProps) => {
    const { cards } = useGlobalContext();
    function matchesId (element: { id: number; }){
        return Number(id)==element.id;

    }
    const currentCard=cards.filter(matchesId)[0];
    return (
        <div>
            <div className = "back Button">
                <button> <Link href="/">Back</Link></button>
            </div>
        <article className="article">
                    <img src = {currentCard.imageName} alt=""/>
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