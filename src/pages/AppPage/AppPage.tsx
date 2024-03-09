"use client";
import React from 'react';
import styles from './AppPage.module.scss';
import { ButtonDisconnectAccount, HeadAlbumPlaylist, PlaylistAlbumCard, SearchMainBar, SearchYourLibrary, UserInfo } from './components';
import { ALBUM_PLAYLIST_DATA, LINKS_FOOTER_APP, YOUR_LIBRARY_HEAD } from '@/constants';
import { SearchSongBar } from './components/SearchSongBar';

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

			<div className={styles.usersLibraryContainer}>
				<div className={styles.usersLibraryContainer_cabecera}>
					<div className={styles.usersLibraryContainer_cabecera_yourLibrary}>
						<img  className={styles.usersLibraryContainer_cabecera_yourLibrary_img} src={YOUR_LIBRARY_HEAD.img} alt={YOUR_LIBRARY_HEAD.altImg} />
						<span tabIndex={0} className={styles.usersLibraryContainer_cabecera_yourLibrary_span}>{YOUR_LIBRARY_HEAD.text}</span>
					</div>
					<SearchYourLibrary/>
				</div>
				<div className={styles.usersLibraryContainer_content}>
					<PlaylistAlbumCard objCard={ALBUM_PLAYLIST_DATA[0]}/>
					<PlaylistAlbumCard objCard={ALBUM_PLAYLIST_DATA[1]}/>
					<PlaylistAlbumCard objCard={ALBUM_PLAYLIST_DATA[2]}/>
					<PlaylistAlbumCard objCard={ALBUM_PLAYLIST_DATA[3]}/>
					<PlaylistAlbumCard objCard={ALBUM_PLAYLIST_DATA[4]}/>
					<PlaylistAlbumCard objCard={ALBUM_PLAYLIST_DATA[5]}/>
					<PlaylistAlbumCard objCard={ALBUM_PLAYLIST_DATA[6]}/>
					<PlaylistAlbumCard objCard={ALBUM_PLAYLIST_DATA[7]}/>
					<PlaylistAlbumCard objCard={ALBUM_PLAYLIST_DATA[8]}/>
					<PlaylistAlbumCard objCard={ALBUM_PLAYLIST_DATA[9]}/>
					<PlaylistAlbumCard objCard={ALBUM_PLAYLIST_DATA[10]}/>
					<PlaylistAlbumCard objCard={ALBUM_PLAYLIST_DATA[11]}/>
					<PlaylistAlbumCard objCard={ALBUM_PLAYLIST_DATA[12]}/>
					<PlaylistAlbumCard objCard={ALBUM_PLAYLIST_DATA[13]}/>
					<PlaylistAlbumCard objCard={ALBUM_PLAYLIST_DATA[4]}/>
					<PlaylistAlbumCard objCard={ALBUM_PLAYLIST_DATA[5]}/>
					<PlaylistAlbumCard objCard={ALBUM_PLAYLIST_DATA[6]}/>
					<PlaylistAlbumCard objCard={ALBUM_PLAYLIST_DATA[7]}/>
					<PlaylistAlbumCard objCard={ALBUM_PLAYLIST_DATA[8]}/>
					<PlaylistAlbumCard objCard={ALBUM_PLAYLIST_DATA[9]}/>
				</div>
			</div>

			<div className={styles.songContainer}>
				<HeadAlbumPlaylist 
					imgUrl='https://misc.scdn.co/liked-songs/liked-songs-300.png'
					name= "did you know there's a tunnel under ocean blvd"
					type='Playlist'
					by='JeanPierre'
					numCaciones={10123}
					duracion=" 61h 14min"
				/>
				<SearchSongBar/>
				


			</div>



			<div className={styles.analysisAudioContainer}>
			</div>

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
