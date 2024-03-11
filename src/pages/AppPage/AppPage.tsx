"use client";
import React from 'react';
import styles from './AppPage.module.scss';
import { ButtonDisconnectAccount, HeadSongsView, PlaylistAlbumCard, SearchMainBar, SearchYourLibrary, UserInfo } from './components';
import { ALBUM_PLAYLIST_DATA, LINKS_FOOTER_APP, YOUR_LIBRARY_HEAD, HEAD_SONG_CONTAINER } from '@/constants';
import { SearchSongBar } from './components/SearchSongBar';
import { SongIten } from './components/SongIten';

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
				<HeadSongsView
					imgUrl='https://misc.scdn.co/liked-songs/liked-songs-300.png'
					name= "Liked Songs"
					type='Playlist'
					by='JeanPierre'
					numCaciones={10123}
					duracion=" 61h 14min"
				/>
				<SearchSongBar/>
				<div className={styles.songContainer_cabezeraSongs}>
					<span className={styles.songContainer_cabezeraSongs_span}>{HEAD_SONG_CONTAINER.numSong}</span>
					<span className={styles.songContainer_cabezeraSongs_span}>{HEAD_SONG_CONTAINER.title}</span>
					<span className={styles.songContainer_cabezeraSongs_span}>{HEAD_SONG_CONTAINER.album}</span>
				</div>

				<SongIten 
					numSong="6"
					img='https://i.scdn.co/image/ab67616d00001e0250a3147b4edd7701a876c6ce'
					nameSong='Summer bummer (feat. A$AP Rocky & Playboy carti'
					artist='Lana del rey, A$AP Rocky & playboy Carti'
					album='Tango'
				/>
				<SongIten 
					numSong="7"
					img='https://i.scdn.co/image/ab67616d00001e02c5649add07ed3720be9d5526'
					nameSong='Quizas Quizas Quizas'
					artist='Lana del rey, A$AP Rocky & playboy Carti'
					album='Lust fot life'
				/>
				<SongIten 
					numSong="8"
					img='https://i.scdn.co/image/ab67616d00001e022a7db835b912dc5014bd37f4'
					nameSong='Do ya like x resonance (speed up)'
					artist='Lana del rey, A$AP Rocky & playboy Carti'
					album='Destroy myself just for you'
				/>
				<SongIten 
					numSong="9"
					img='https://i.scdn.co/image/ab67616d00001e029478c87599550dd73bfa7e02'
					nameSong='No more?'
					artist='Lana del rey, A$AP Rocky & playboy Carti'
					album='DAMN.'
				/>
				<SongIten 
					numSong="10"
					img='https://i.scdn.co/image/ab67616d00001e0249d694203245f241a1bcaa72'
					nameSong='Blue Hair'
					artist='Lana del rey, A$AP Rocky & playboy Carti'
					album='808s & Heartbreak'
				/>
				<SongIten 
					numSong="11"
					img='https://i.scdn.co/image/ab67616d00001e02f30764d5fa1e439ad6a7742f'
					nameSong='Everybody'
					artist='Lana del rey, A$AP Rocky & playboy Carti'
					album='Samba esquema novo'
				/>
				<SongIten 
					numSong="12"
					img='https://i.scdn.co/image/ab67616d00001e021dacfbc31cc873d132958af9'
					nameSong='I Love Kanye'
					artist='Lana del rey, A$AP Rocky & playboy Carti'
					album='Eazy-Duz-It'
				/>
				<SongIten 
					numSong="13"
					img='https://i.scdn.co/image/ab67616d00001e02696b4e67423edd64784bfbb4'
					nameSong='There Is a Light That Never Goes Out'
					artist='Lana del rey, A$AP Rocky & playboy Carti'
					album='Graduation'
				/>
				<SongIten 
					numSong="14"
					img='https://i.scdn.co/image/ab67616d00001e02519266cd05491a5b5bc22d1e'
					nameSong='The end (feat. BABYMETAL)'
					artist='Lana del rey, A$AP Rocky & playboy Carti'
					album='Circle'
				/>
				<SongIten 
					numSong="1"
					img='https://i.scdn.co/image/ab67616d00001e029478c87599550dd73bfa7e02'
					nameSong='Summer bummer (feat. A$AP Rocky & Playboy carti'
					artist='Lana del rey, A$AP Rocky & playboy Carti'
					album='Dark red'
				/>
				<SongIten 
					numSong="2"
					img='https://i.scdn.co/image/ab67616d00001e02de7b9af78fbdda96c5a0635b'
					nameSong='Si preguntas por mi'
					artist='Lana del rey, A$AP Rocky & playboy Carti'
					album='The life of pablo'
				/>
				<SongIten 
					numSong="3"
					img='https://i.scdn.co/image/ab67616d00001e029478c87599550dd73bfa7e02'
					nameSong='Summer bummer (feat. A$AP Rocky & Playboy carti'
					artist='Lana del rey, A$AP Rocky & playboy Carti'
					album='Lust fot life'
				/>
				<SongIten 
					numSong="4"
					img='https://i.scdn.co/image/ab67616d00001e0271b706835a873e7a3144f6fa'
					nameSong='Summer bummer (feat. A$AP Rocky & Playboy carti'
					artist='Lana del rey, A$AP Rocky & playboy Carti'
					album='Lust fot life'
				/>
				<SongIten 
					numSong="5"
					img='https://i.scdn.co/image/ab67616d00001e02c91ab2dd6fcff9b7228ff7ac'
					nameSong='Summer bummer (feat. A$AP Rocky & Playboy carti'
					artist='Lana del rey, A$AP Rocky & playboy Carti'
					album='Lust fot life'
				/>
				<SongIten 
					numSong="6"
					img='https://i.scdn.co/image/ab67616d00001e0250a3147b4edd7701a876c6ce'
					nameSong='Summer bummer (feat. A$AP Rocky & Playboy carti'
					artist='Lana del rey, A$AP Rocky & playboy Carti'
					album='Lust fot life'
				/>
				<SongIten 
					numSong="7"
					img='https://i.scdn.co/image/ab67616d00001e02c5649add07ed3720be9d5526'
					nameSong='Summer bummer (feat. A$AP Rocky & Playboy carti'
					artist='Lana del rey, A$AP Rocky & playboy Carti'
					album='Lust fot life'
				/>
				<SongIten 
					numSong="8"
					img='https://i.scdn.co/image/ab67616d00001e022a7db835b912dc5014bd37f4'
					nameSong='Summer bummer (feat. A$AP Rocky & Playboy carti'
					artist='Lana del rey, A$AP Rocky & playboy Carti'
					album='Lust fot life'
				/>
				<SongIten 
					numSong="9"
					img='https://i.scdn.co/image/ab67616d00001e029478c87599550dd73bfa7e02'
					nameSong='Summer bummer (feat. A$AP Rocky & Playboy carti'
					artist='Lana del rey, A$AP Rocky & playboy Carti'
					album='Lust fot life'
				/>
				<SongIten 
					numSong="10"
					img='https://i.scdn.co/image/ab67616d00001e0249d694203245f241a1bcaa72'
					nameSong='Summer bummer (feat. A$AP Rocky & Playboy carti'
					artist='Lana del rey, A$AP Rocky & playboy Carti'
					album='Lust fot life'
				/>
				<SongIten 
					numSong="11"
					img='https://i.scdn.co/image/ab67616d00001e02f30764d5fa1e439ad6a7742f'
					nameSong='Summer bummer (feat. A$AP Rocky & Playboy carti'
					artist='Lana del rey, A$AP Rocky & playboy Carti'
					album='Lust fot life'
				/>
				<SongIten 
					numSong="12"
					img='https://i.scdn.co/image/ab67616d00001e021dacfbc31cc873d132958af9'
					nameSong='Summer bummer (feat. A$AP Rocky & Playboy carti'
					artist='Lana del rey, A$AP Rocky & playboy Carti'
					album='Lust fot life'
				/>
				<SongIten 
					numSong="13"
					img='https://i.scdn.co/image/ab67616d00001e02696b4e67423edd64784bfbb4'
					nameSong='Summer bummer (feat. A$AP Rocky & Playboy carti'
					artist='Lana del rey, A$AP Rocky & playboy Carti'
					album='Lust fot life'
				/>
				<SongIten 
					numSong="14"
					img='https://i.scdn.co/image/ab67616d00001e02519266cd05491a5b5bc22d1e'
					nameSong='Summer bummer (feat. A$AP Rocky & Playboy carti'
					artist='Lana del rey, A$AP Rocky & playboy Carti'
					album='Lust fot life'
				/>

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
