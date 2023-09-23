'use client';
import "./styles.css"
import {CardType} from "@/model/cardType";
import {useGlobalContext} from "@/app/context/store";
import {useEffect} from "react";
import Card from "../../components/cards";

export default function Home() {

    const { cards, setCards } = useGlobalContext();
    const configUrl = process.env.NEXT_PUBLIC_CONFIG_URL ? process.env.NEXT_PUBLIC_CONFIG_URL : "http://ski-resorts-api.bipper.net";
    useEffect(() => {
        const fetchCards = async () => {
            const url = configUrl + "/blogEntries";
            const response = await fetch (url)      ;
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
               <span className="text-primary">Slalom Column</span>
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

        <section id="home-articles" className="py-2">
            <div className="container">
            <div className="articles-container">
                {cards.map((card:CardType) => (
                    <Card key={card.id} id={card.id} imageUrl={card.imageName} title={card.title} createDate={card.createDate} content={card.content}/>
                ))}
            </div>
            </div>
        </section>
         <div id="footer" className="footer">
                  <h3> <center> We are two college students who have a passion for skiing and snowboarding. We created this website to gain valuable experience in web-page design and content creation. One of us focuses on the programming and design aspect of the site, and the other focuses on the text and visual content to create a one-stop site for all your ski trip research needs. If you have any comments or questions, please feel free to reach us at (insert project email here). Thanks for stopping by, see you on the slopes! </center></h3>
        </div>
      </>
  )
}
