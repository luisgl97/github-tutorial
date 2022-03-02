import React from 'react'
import ReactPlayer from "react-player/lazy";
import CarouselScreenshots from '../CarouselScreenshots';
import moment from "moment";
import "moment/locale/es";

export default function InfoGame(props) {

    const { game } = props;
    
    return (
        <div className="info-game">
            <ReactPlayer className="info-game__video" url={game.video} controls={true}/>
            <CarouselScreenshots tile={game.title} screenshots={game.screenshots}/>
            <div className="info-game__content">
                <div dangerouslySetInnerHTML={{__html: game.summary}}></div>
                <div className="info-game__content-date">
                    <h4>Fecha de Lanzamiento</h4>
                    <p>{moment(game.releaseDate).format("LL")}</p>
                </div>
            </div>
            
        </div>
    )
}
