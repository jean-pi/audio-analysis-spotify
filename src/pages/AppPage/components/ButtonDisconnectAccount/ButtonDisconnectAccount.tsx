"use client";
import React from 'react';
import styles from './ButtonDisconnectAccount.module.scss';

import { IMG_SPOTIFY, DISCONNECT_SPOTIFY_ACCOUNT_TEXT, publicRoutes } from '@/constants';
import { useNavigate } from 'react-router-dom';



const ButtonDisconnectAccount: React.FC  = () => {

	const navigate = useNavigate();

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
