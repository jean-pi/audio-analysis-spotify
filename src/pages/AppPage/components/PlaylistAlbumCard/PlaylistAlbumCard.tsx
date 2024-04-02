import React from 'react';
import styles from './PlaylistAlbumCard.module.scss';
import { getSavedPlaylist, getSavedAlbum } from '@/services';
import { playlistUserEndpointModel, AlbumsUserEndpointModel} from '@/models';
import { adapterCardAlbumPlaylist } from '@/adapters';
import { AlbumPlaylistCardEntitie } from "@/models";
import { useInfiniteQueryFetch } from '../../hooks';
import useAppContext from '../../hooks/useAppContext';

const PlaylistAlbumCard: React.FC  = () => {

	// const queryGetSavedAlbum = useQueryFetch<AlbumsUserEndpointModel>(["getSavedAlbum"], getSavedAlbum);
	// const queryGetSavedPlaylist = useQueryFetch<playlistUserEndpointModel>(["getSavedPlaylist"],getSavedPlaylist)
    // const {infoInContext} = useAppContext();
	// const savedSongsObj = new AlbumPlaylistCardEntitie("Saved Songs", "https://misc.scdn.co/liked-songs/liked-songs-300.png", "Playlist", 1000, infoInContext?.userName, "0") 
	
	// const objUser: AlbumPlaylistCardEntitie[] | null = 
	// !queryGetSavedPlaylist.isLoading && queryGetSavedPlaylist.data && !queryGetSavedAlbum.isLoading && queryGetSavedAlbum.data
	// ? adapterCardAlbumPlaylist(queryGetSavedPlaylist.data, queryGetSavedAlbum.data, savedSongsObj) 
	// : null;




	// if(queryGetSavedAlbum.isError || queryGetSavedPlaylist.isError){
	// 	console.log(queryGetSavedAlbum.error, queryGetSavedPlaylist.error);
	// }


	// if(queryGetSavedAlbum.isLoading || queryGetSavedPlaylist.isLoading){
	// 	const htmlLoading = (
	// 		<div className={styles.albumPlaylistCardLoading}>
	// 			<div className={styles.albumPlaylistCardLoading_img}></div>
	// 			<div className={styles.albumPlaylistCardLoading_name}>######</div>
	// 			<div className={styles.albumPlaylistCardLoading_details}>####</div>
	// 		</div>
	// 	)
	// 	const htmlLoadingArr: JSX.Element[] = [];
	// 	for (let i = 0; i < 30; i++) {
	// 		htmlLoadingArr.push(htmlLoading);
	// 	}
	// 	return (
	// 		<>
	// 			{htmlLoadingArr.map((item, index) =>(
	// 				<div key={index}>{item}</div>
	// 			))}
	// 		</>
	// 	)
	// }



	// if(queryGetSavedAlbum.data && queryGetSavedPlaylist.data){
	// 	console.log(queryGetSavedAlbum.data)
	// 	return (
	// 		<>
	// 			{objUser && objUser.map(iten => (
	// 				<div key={iten.getId()} className={styles.playlistAlbumCard}>
	// 					<img className={styles.playlistAlbumCard_img} src={iten.getPhotoUrl()} alt="" />
	// 					<h5 className={styles.playlistAlbumCard_name}>{iten.getName()}</h5>
	// 					<p className={styles.playlistAlbumCard_details}>{iten.getType()} <span className={styles.playlistAlbumCard_details_separation}>•</span> {iten.getOwner()}</p>
	// 				</div>
	// 			))}
	// 		</>
	// 	)
	// }


	
    const {infoInContext} = useAppContext();
	const savedSongsObj = new AlbumPlaylistCardEntitie("Saved Songs", "https://misc.scdn.co/liked-songs/liked-songs-300.png", "Playlist", 1000, infoInContext?.userName, "0") 



	const fetchAlbumsUser = useInfiniteQueryFetch<AlbumsUserEndpointModel>(["albums"], getSavedAlbum);
	const fetchPlaylistUser = useInfiniteQueryFetch<playlistUserEndpointModel>(["playlist"], getSavedPlaylist)


	const objUser: AlbumPlaylistCardEntitie[] | null = 
	fetchAlbumsUser.status === "success" && fetchPlaylistUser.status === "success"
		? adapterCardAlbumPlaylist(fetchPlaylistUser.data.pages[0] , fetchAlbumsUser.data.pages[0], savedSongsObj) 
		: null;


	const a = () =>{
		const b = fetchAlbumsUser.fetchNextPage();
		const c = fetchPlaylistUser.fetchNextPage();
		console.log(b)
		console.log(c)
	}


	if(fetchAlbumsUser.isError || fetchPlaylistUser.isError){
		console.log(fetchAlbumsUser.error, fetchPlaylistUser.error);
	}

	if(fetchAlbumsUser.isLoading || fetchPlaylistUser.isLoading){
		const htmlLoading = (
			<div className={styles.albumPlaylistCardLoading}>
				<div className={styles.albumPlaylistCardLoading_img}></div>
				<div className={styles.albumPlaylistCardLoading_name}>######</div>
				<div className={styles.albumPlaylistCardLoading_details}>####</div>
			</div>
		)
		const htmlLoadingArr: JSX.Element[] = [];
		for (let i = 0; i < 30; i++) {
			htmlLoadingArr.push(htmlLoading);
		}
		return (
			<>
				{htmlLoadingArr.map((item, index) =>(
					<div key={index}>{item}</div>
				))}
			</>
		)
	}

	if(fetchAlbumsUser.status === "success" && fetchPlaylistUser.status === "success"){
		return (
			<>
				{objUser && objUser.map(iten => (
					<div key={iten.getId()} className={styles.playlistAlbumCard}>
						<img className={styles.playlistAlbumCard_img} src={iten.getPhotoUrl()} alt="" />
						<h5 className={styles.playlistAlbumCard_name}>{iten.getName()}</h5>
						<p className={styles.playlistAlbumCard_details}>{iten.getType()} <span className={styles.playlistAlbumCard_details_separation}>•</span> {iten.getOwner()}</p>
					</div>
				))}

				<button className={styles.a} onClick={a}>fetch</button>
			</>
		)
	}





};

export default PlaylistAlbumCard;
