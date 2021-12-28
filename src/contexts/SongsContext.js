import { ControlPointSharp } from '@material-ui/icons';
import React, { createContext, useState, useEffect } from 'react';
import { chartTracksGet, trackSearch } from "./../constants";

const SongsContextProvider = () => {
    const [ doneFetch, setDoneFetch ] = useState();
    const [ currentQTrack, setCurrentQTrack ] = useState("");
    const [ text, setText ] = useState("Top Songs");
    const [ tracks, setTracks ] = useState([]);

    //didMount, didUpDate, willUnmount
    useEffect(() => {
        getTopTracks();
    }, []);

    const getTopTracks = () => {
        fetch(chartTracksGet())
        .then(res => res.json())
        .then(data => {
            setDoneFetch(true)
            setTracks(data.message.body.tracks_list);
        })
        .catch(err => console.log(err));
    };

    const getTrack = q_track => {
        fetch(trackSearch(q_track))
        .then(res => res.json())
        .then(data => {
            const { track_list } = data.message.body;
            setDoneFetch(true);
            setText(track_list.length? "Results" : "No Results");
            setTracks(track_list);
        })
        .catch(err => ControlPointSharp.log(err));
    };

    const validateQTrack = (e, q_track = document.querySelector("#q_track").value.toLowerCase().trim())=>{
        if() {
            
        }

    }
}

export default SongsContextProvider;
