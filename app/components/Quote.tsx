"use client";

import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Quote = () => {
    useEffect(() => {
        const quotes = [
            {
                quote: "And one day I know you'll understand that your happiness depends on you. Even after all the fights you've lost, you still stand here believing. Doesn't matter if they know your name, when in darkness, you will make it through. To be broken doesn't mean to fall.",
                artist: "Soen - Fortune",
                youtubeURL: "https://www.youtube.com/watch?v=glTl0Ph4Z3k",
                spotifyURL: "https://open.spotify.com/track/0FDwFGQkumN7GzNbV4OOSa?si=f0bdeb1ed53b4ef3"
            },
            {
                quote: "Sometimes in your darkest dreams, you will feel the haunting pain. Silent tears of your hidden fears come to haunt you once again. Fight on for the memories of the everlasting dream. Their pain in the silent lands, on wings of glory free.",
                artist: "DragonForce - Dawn Over a New World",
                youtubeURL: "https://www.youtube.com/watch?v=udbkyiFoiEw",
                spotifyURL: "https://open.spotify.com/track/2gTQAPsKscewjKZq6jnEPB?si=6c64aeb58e2a4cd9/"
            },
            {
                quote: "When you've suffered enough, and your spirit is breaking. You're growing desperate from the fight. Remember you're loved, and you always will be. This melody will bring you right back home.",
                artist: "Linkin Park - The Messenger",
                youtubeURL: "https://www.youtube.com/watch?v=i6j4K2g6m6A",
                spotifyURL: "https://open.spotify.com/track/0pQZMrYNcfwZbt2Zt0pjaA?si=987b171be4104613"
            },
            {
                quote: "I believe that you fell so you would land next to me. Cause I have been where you were before, and I have felt the pain of losing who you are. And I have died so many times, but I am still alive.",
                artist: "Christina Perri - I Believe",
                youtubeURL: "https://www.youtube.com/watch?v=hg6qpP1L-fg",
                spotifyURL: "https://open.spotify.com/track/0ybqIdmbhgdtzC4dRQN9Bp?si=c43826ec5726467c"
            },
            {
                quote: "Don't be afraid of what your mind conceives. You should make a stand, stand up for what you believe. And tonight, we can truly say: together we're invincible.",
                artist: "Muse - Invincible",
                youtubeURL: "https://www.youtube.com/watch?v=PxXtQmy0RZY",
                spotifyURL: "https://open.spotify.com/track/2zmR3FG7iOGDAdwrVPzdg9?si=7d1f70351de14536"
            }
        ]

        const randomIndex = Math.floor(Math.random() * quotes.length);
        setItem(quotes[randomIndex])
    }, [])

    const [item, setItem] = useState<{quote: string, artist: string, youtubeURL: string, spotifyURL: string} | null>(null)

    if (!item) return <div></div>

    return (
        <div>
            <p className="text-sm italic">{item?.quote}</p>
            <p className="italic">{item?.artist}</p>
            <p>
                <a href={item?.spotifyURL} target="_blank"><FontAwesomeIcon icon={faSpotify} color="foreground" width={20}/></a>
                <a href={item?.youtubeURL} target="_blank"><FontAwesomeIcon icon={faYoutube} color="foreground" width={20}/></a>
            </p>
        </div>
    )
}

export default Quote
