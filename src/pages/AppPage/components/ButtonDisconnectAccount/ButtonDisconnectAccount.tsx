"use client";
import React from 'react';
import styles from './ButtonDisconnectAccount.module.scss';

import { IMG_SPOTIFY, DISCONNECT_SPOTIFY_ACCOUNT_TEXT } from '@/constants';

export type ButtonDisconnectAccountProps = {
	eventClick : () => void
}

const ButtonDisconnectAccount: React.FC<ButtonDisconnectAccountProps>  = ({eventClick}) => {
	return (
		<button className={styles.button} onClick={eventClick} >
			<img className={styles.button_img} src={IMG_SPOTIFY.url} alt={IMG_SPOTIFY.alt} />
			<h4 className={styles.button_h4}>{DISCONNECT_SPOTIFY_ACCOUNT_TEXT}</h4>
		</button>
	);
};

export default ButtonDisconnectAccount;
