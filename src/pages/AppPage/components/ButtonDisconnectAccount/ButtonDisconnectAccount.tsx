// "use client";
import React, { useEffect } from 'react';
import styles from './ButtonDisconnectAccount.module.scss';

import { IMG_SPOTIFY, DISCONNECT_SPOTIFY_ACCOUNT_TEXT, publicRoutes } from '@/constants';
import { useNavigate } from 'react-router-dom';
import useAppContext from '../../hooks/useAppContext';



const ButtonDisconnectAccount: React.FC  = () => {

	const navigate = useNavigate();

    const {infoInContext, setInfoInContext} = useAppContext();
	
	useEffect(()=>{

		console.log(infoInContext)

	},[infoInContext])
	

	useEffect(()=>{
		setInfoInContext({
			...infoInContext,
            albumPlaylistSelected: {
                photoUrl: "aa",
                type: "aaaaa",
                numOfSongs: 100,
                duration: "10h10m",
                name: "anana",
            }
        })
		console.log(infoInContext)
	},[])
	

	const logOut = () =>{
		window.localStorage.clear();
		navigate(publicRoutes.LANDING);
	}
	
	return (
		<button className={styles.button} onClick={logOut} >
			<img className={styles.button_img} src={IMG_SPOTIFY.url} alt={IMG_SPOTIFY.alt} />
			<h4 className={styles.button_h4}>{DISCONNECT_SPOTIFY_ACCOUNT_TEXT}</h4>
		</button>
	);
};

export default ButtonDisconnectAccount;
