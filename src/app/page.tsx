'use client'
import Card, { CardProps } from '../../components/cards'
import "./styles.css"
import {useState, useEffect} from 'react';



/*
const cardArray = [
    {
      imageUrl: "/quenten-janssen-W_z4awYQgO4-unsplash.jpg",
      title: "Palisades Tahoe Review",
      createDate: "May 26, 2023",
      content: "Last weekend (5/20/23-5/21/23), I went on a family ski trip to Palisades, Tahoe. Our group was composed of two skiers and one snowboarder. The quality of the snow was typical for spring, heavy and slushy due to the elevated temperatures (in the mid 70s and sunny). Because of the...",
    },
    {
      imageUrl: "/quenten-janssen-W_z4awYQgO4-unsplash.jpg",
      title: "Types of Skis",
      createDate: "June 12, 2023",
      content: "There are many ways to achieve the sensation of sliding down a snowy mountain. Have you tried one (or more) of these?    1. Powder skis: Pow days are the element for these powder hounds. Their wide waist width (107 mm on average) allows the skier to more flotation on the loose snow. Some wider..",
    },
    {
      imageUrl: "/quenten-janssen-W_z4awYQgO4-unsplash.jpg",
      title: "Types of Snowboards",
      createDate: "June 19, 2023      ",
      content: "Like skiing, there are many different types of snowboards for every shredding style. Here are a few: All-Mountain: Like their skiing counterpart, All-mountain snowboards have a neutral shape, width and medium stiffness. This is the perfect snowboard for your average snowboarder who enjoys doing it all from groomers to bumps. Freestyle: This snowboard is the favorite of terrain park junkies. Freestyle boards are shorter and lighter which improves the ease of performing aerial tricks with tons of style. Plus, Freestyle boards boast full twin tips for easier switch riding. Beginner: Beginner boards are softer and generally more forgiving, which allows new snowboarders to learn the ropes with ease. Powder: Powder boards are wide to allow you to float and often feature a pointed tip for cutting through the deep snow. Powder snowboards have the most distinctive and asymmetrical tip and tail shape. Backcountry/Splitboard: Split boards can break  into skis for uphill travel and reconnect as a snowboard for going downhill. Splitboards are the best choice for backcountry snowboarders and allow you to both snowboard and ski on one piece of equipment. As you can tell, there are many similarities between the types of snowboards and skis. In general, longer boards are more stable at high speeds, and shorter boards being more maneuverable by featuring a shorter turn radius. Softer flex boards are easier to use and are more forgiving with mistakes or sloppy technique than a stiffer, more unforgiving board will. Beginners should choose a soft or medium stiff board, with harder boards being the best choice for an upper-intermediate or advanced snowboarder. Now that you know the different types of snowboards, now you can choose a board that best suits your riding style.",
    },
    {
      imageUrl: "/quenten-janssen-W_z4awYQgO4-unsplash.jpg",
      title: "Lorem ipsum dolor sit amet.",
      createDate: "June 12, 2023",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, totam eum magni dolores sint recusandae excepturi eaque non ut obcaecati.",
    },
  ];
*/

export default function Home() {
    const [cards, setCards] = useState([]);
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
                           <i className="fa-solid fa-magnifying-glass"></i>
                           <a href="#home"></a>
                           <input type="text" name="" id="search"/>
                       </li>
                   </ul>
               </nav>
           </div>
    
                <div className="content">
                    <h1>Maya's Awesome Skiing Site</h1>
                    <span>Maya's Awesome Skiing Site</span>
                </div>
        </header>
        <section id="home-articles" className="py-2">
            <div className="container">
            <div className="articles-container">
                {cards.map((card:CardProps) => (
                    <Card key={card.title} imageUrl={card.imageUrl} title={card.title} createDate={card.createDate} content={card.content}/>
                ))}
            </div>
            </div>
        </section>  
      </>
  )
}
