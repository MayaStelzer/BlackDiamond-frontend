export type CardProps = {
    imageUrl: string;
    title: string;
    createDate: string;
    content: string;
}   

const Card = ({imageUrl, title, createDate, content}: CardProps) => {
    return (
        <article className="card">
                    <img src = {imageUrl} alt=""/>
                    <div>
                        <h3>
                            <a href="article.html">{title}</a>
                        </h3>
                        <div className="category category ent">{createDate}</div>
                        <p>{content.substring(0,150)}...</p>
                    </div>
                    <div className="readmore">
                        <p> <center> Read more </center></p>
                        <a href="#home"></a>
                    </div>
                </article>
    )
}

export default Card;