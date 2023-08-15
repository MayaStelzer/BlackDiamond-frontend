import Link from "next/link";

export type CardProps = {
    id: number;
    imageUrl: string;
    title: string;
    createDate: string;
    content: string;
}

const Card = ({id, imageUrl, title, createDate, content }: CardProps) => {

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
                        <h4> <Link  href={"/blog/" + id}> <center> Read more </center> </Link> </h4>
                    </div>
                </article>
    )
}

export default Card;