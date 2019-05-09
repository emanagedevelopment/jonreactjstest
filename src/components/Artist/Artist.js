import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Artist = (props) => {
    let artist = props.artistResult[0];
    return(
        <div className="ModalBG">
            <div className="Artist">
                <div onClick={props.closeHandler} className="closeButton"></div>
                <h1>{artist.strArtist}</h1>
                <div className="social">
                    <a target="_blank" rel="noopener noreferrer" href={'https://' + artist.strWebsite} className="website">

                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={'https://' + artist.strTwitter} className="twitter">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={'https://' + artist.strFacebook} className="facebook">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </div>
                <img className="banner" src={artist.strArtistBanner} alt=""/>
                <div className="details">
                    <p><strong>Genre: </strong>{artist.strStyle}</p>
                    <p><strong>From: </strong>{artist.strCountry}</p>
                    <h3>Bio:</h3>
                    <p>{artist.strBiographyEN}</p>
                </div>
            </div>
        </div>
    )
}

export default Artist;