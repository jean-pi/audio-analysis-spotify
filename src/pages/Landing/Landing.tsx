"use client";
import React from 'react';
import styles from './Landing.module.scss';

import { HydraBackground } from './components';

import { 
	MAIN_TEXT_PRESENTATION, 
	SECOND_TEXT_PRESENTATION, 
	LINK_WARNING_PRIVACY,
	TEXT_WARNING_PRIVACY } from '@/constants';
import { ButtonConnectAcount } from './components/ButtonConnectAcount';

export type LandingProps = {
	// types...
}

const Landing: React.FC<LandingProps>  = ({}) => {


	return (
		<div className={styles.landing}>
 			
			<HydraBackground/>	

			<div className={styles.layerMainText}>
				<h1 tabIndex={0} className={styles.layerMainText_h1}><span className={styles.layerMainText_h1_span}>{MAIN_TEXT_PRESENTATION.line1} {MAIN_TEXT_PRESENTATION.line2}&nbsp;{MAIN_TEXT_PRESENTATION.line3}</span><br /><span className={styles.layerMainText_h1_span}>{MAIN_TEXT_PRESENTATION.line4}</span></h1>
       			<h2 tabIndex={0} className={styles.layerMainText_h2}>{SECOND_TEXT_PRESENTATION}</h2>
			</div>

			<div className={styles.layerConnectAcount}>

				<ButtonConnectAcount eventClick={() => console.log("connect")}/>

				<p tabIndex={0} className={styles.layerConnectAcount_p}>
    				{TEXT_WARNING_PRIVACY}
        			<a className={styles.layerConnectAcount_p_a} href={LINK_WARNING_PRIVACY.url} target="_blank">{LINK_WARNING_PRIVACY.text}</a>
    			</p>
			</div>

 		</div>
	);
};

export default Landing;
