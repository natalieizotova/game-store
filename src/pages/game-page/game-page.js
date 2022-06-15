import React from 'react';
import { useSelector } from 'react-redux';
import { GameCover } from '../../components/game-cover'
import { GameGenre } from '../../components/game-genre'
import { GameBuy } from '../../components/game-buy'
import './game-page.css'


export const GamePage = () => {
    const game = useSelector(state=>state.game.currentGame)
    if (!game) return null
    return (
        <div className='game-page'>
            <h1 className="game-page_title">{game.title}</h1>
            <div className="game-page_content">
                <div className="game-page_left">
                    <iframe
                    width='90%'
                    height = '400px'
                    src = {game.video}
                    title = 'Youtube Video Player'
                    frameBorder={0}>    
                    </iframe>
                </div>
                <div className="game-page_right">
                    <GameCover image = {game.image}/>
                    <p>{game.description}</p>
                    <p className="secondary-text">Popular tags for this product:</p>
                    {game.genres.map((genre)=>(
                        <GameGenre genre={genre} key={genre} />
                    ))}
                    <div className="game-page_buy-game">
                        <GameBuy game={game}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

