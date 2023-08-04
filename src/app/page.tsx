'use client'
import Card, { CardProps } from '../../components/cards'
import "./styles.css"
import {useState, useEffect} from 'react';
import Article from '../../components/article'

export enum PageStyleType {
  CardType, ArticleType
}

export type Card = {
  id: number;
  imageUrl: string;
  title: string;
  createDate: string;
  content: string;
}   


export default function Home() {
    const [cards, setCards] = useState<Card[]>([]);
    const [pageStyle, setPageStyle]=useState<PageStyleType>(PageStyleType.CardType);
    const [currentCardId, setCurrentCardId] = useState<number>(0);
    useEffect(() => {
    const fetchCards = async () => {
    const response = await fetch ("http://ski-resorts-api.bipper.net/blogEntries");
    const cards = await response.json();
    setCards(cards.blogEntries);
    };
    fetchCards ();
},[]);


  return (
    <>
    <header className="hero">
            <div id="navbar" className="navbar">
               <h1 className="logo">
                   <span className="text-primary">Gnar</span>Guide
               </h1>
               <nav>
                   <ul>
                       <li>
                          <input type="text" name="" id="search"/>
                           <i className="fa-solid fa-magnifying-glass"></i>
                           <a href="#home"></a>
                       </li>
                   </ul>
               </nav>
           </div>
                {/* <div className="content">
                    <h1>Maya's Awesome Skiing Site</h1>
                    <span>Maya's Awesome Skiing Site</span>
                </div> */}
        </header>
                <div id="funfact" className="funfact">
                  <h3> <center> Fun Fact: The national ski patrol (NSP) was founded in 1938 by Charles Minot Dole in Stowe, Vermont. A big thank you to all the ski patrollers out there for your service and for keeping our ski-areas safe! </center></h3>
                </div>
        <section>

        </section>
        <section id="home-articles" className="py-2">
            <div className="container">
            {pageStyle == PageStyleType.ArticleType ? 
            <Article id ={currentCardId} cards={cards}/>
            :
            <div className="articles-container">
                {cards.map((card:Card) => (
                    <Card key={card.id} id={card.id}imageUrl={card.imageUrl} title={card.title} createDate={card.createDate} content={card.content} setPageStyle={setPageStyle} setCurrentCardId={setCurrentCardId}/>
                ))}
            </div>
            }
            </div>
        </section>  
      </>
  )
}
