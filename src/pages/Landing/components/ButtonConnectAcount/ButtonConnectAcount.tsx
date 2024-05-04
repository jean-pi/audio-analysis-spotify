// "use client";
import React from 'react';
import styles from './ButtonConnectAcount.module.scss';
import { IMG_SPOTIFY,CONNECT_SPOTIFY_ACCOUNT_TEXT } from '@/constants';
import { linkAuth } from '@/services/auth/authSpotify';

/**
*
* @return {<ButtonConnectAcount/>}
*/


const ButtonConnectAcount: React.FC  = () => {
	return (
		<button className={styles.button} onClick={linkAuth} >
			<img className={styles.button_img} src={IMG_SPOTIFY.url} alt={IMG_SPOTIFY.alt} />
			<h4 className={styles.button_h4}>{CONNECT_SPOTIFY_ACCOUNT_TEXT}</h4>
		</button>
	);
};

export default ButtonConnectAcount;
