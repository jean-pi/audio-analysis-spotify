"use client";
import React from 'react';
import styles from './AppPage.module.scss';
import { ButtonDisconnectAccount, SearchMainBar, UserInfo } from './components';
import { LINKS_FOOTER_APP } from '@/constants';

export type AppPageProps = {
	// types...
}

const AppPage: React.FC<AppPageProps>  = ({}) => {
	return (
		<div className={styles.appPage}>
 			
			<header className={styles.layerHeaderApp}>
				<ButtonDisconnectAccount eventClick={ () => console.log("disconnect")}/>
				<SearchMainBar/>
				<UserInfo userDisplayName='JeanPierreVeliz' userImgUrl='https://i.scdn.co/image/ab67757000003b82faa77c142b065d812528d329'/>
			</header>

			<main className={styles.layerMainApp}>
				<div className={styles.layerMainApp_usersLibraryContainer}>
					<div className={styles.layerMainApp_usersLibraryContainer_cabecera}>
						<span></span>
						<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" className="Svg-sc-ytk21e-0 bneLcE"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>
					</div>
					<div className={styles.layerMainApp_usersLibraryContainer_content}>

					</div>
				</div>
				<div className={styles.layerMainApp_songContainer}>

				</div>
				<div className={styles.layerMainApp_analysisAudioContainer}>

				</div>
			</main>

			<footer className={styles.layerFooterApp}>
				<div className={styles.layerFooterApp_linkLeft}>
					<a tabIndex={0} className={styles.layerFooterApp_linkLeft_a} href={LINKS_FOOTER_APP.mainLink.url}>{LINKS_FOOTER_APP.mainLink.text}</a>
				</div>
				<div className={styles.layerFooterApp_linkRight}>
					<a tabIndex={0} className={styles.layerFooterApp_linkRight_a} href={LINKS_FOOTER_APP.github.url} target="_blank">{LINKS_FOOTER_APP.github.text}</a>
					<a tabIndex={0} className={styles.layerFooterApp_linkRight_a} href={LINKS_FOOTER_APP.x.url} target="_blank">{LINKS_FOOTER_APP.x.text}</a>
					<a tabIndex={0} className={styles.layerFooterApp_linkRight_a} href={LINKS_FOOTER_APP.instagran.url} target="_blank">{LINKS_FOOTER_APP.instagran.text}</a>
				</div>
			</footer>

 		</div>
	);
};

export default AppPage;
