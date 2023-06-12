import React from 'react'



import '../styles/Portfolio.css'
import memorygame from "../images/memorygame.jpg"
import angularTodo from "../images/angular-todo.jpg"
import angularpokemon from "../images/pokemon.png"
import quiz from"../images/quiz.png"

const Portfolio = () => {



    const portfolios = [
        {
            id: 1,
            src: memorygame,
            title: "Ez egy egyszerű memória játék. 18 képből választ véletlenszerűen hat darabot a játékhoz.",
            link: "https://github.com/sz-adam/react-memorygame-tailwindcss",
            demo:"https://sz-adam.github.io/memory-pages/"
        },
        {
            id: 2,
            src: quiz,
            title: "Ez egy Quiz játék opentdb api használatával. A kérdések végén a helyes és helytelen válaszokat megjeleníti.",
            link:"https://github.com/sz-adam/react-quiz",
            demo:"https://sz-adam.github.io/react-quiz-pages/"
        
        },
        {
            id: 3,
            src: angularTodo,
            title: "Ez egy Angular alapú TODO-List amihez PrimeNG-t használtam.",
            link: "https://github.com/sz-adam/Todo-list-angular-PrimeNg-",
            demo:"https://sz-adam.github.io/angular-todo-pages/"
        },
       
        {
        id: 4,
            src: angularpokemon,            
            title: "Ez egy pokemon alkalmazás ,20 db pokemont listáz ki, a tipusaira külön lehet szűrni és egy felugró ablak segítségével még több adatot jelenít meg az adott pokemonról.",
            link: "https://github.com/sz-adam/angular-pokemon",
            demo:"https://sz-adam.github.io/pages-pokemon/"
    },
      
    ]

    return (
        <div id='portfolio' className='portfolio-container'>
            <div className='portfolio-header'>
                <p className='portfolio-title'>Nézd meg a munkáimat</p>
              
            </div>

            <div className='portfolio-items'>
                {portfolios.map((portfolio) => (
                    <div key={portfolio.id} className='portfolio-item'>
                        <img className='portfolio-image' src={portfolio.src} alt={portfolio.title} />
                        <div className='title'>
                            <p className='portfolio-titles'>{portfolio.title}</p>

                            <div className='portfolio-buttons'>
                                <a href={portfolio.demo}><button className='portfolio-demo-button'>Demo</button></a>
                                <a href={portfolio.link}><button className='portfolio-code-button'>Code</button></a>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio

