// "use client";
import { useEffect, useState } from 'react';
import React from 'react';
import styles from './PlaylistAlbumCard.module.scss';
import { getSavedPlaylist } from '@/services';
import { playlistUserEndpointModel, AlbumsUserEndpointModel} from '@/models';
import { adapterCardAlbumPlaylist } from '@/adapters';
import { AlbumPlaylistCardEntitie } from "@/models";
import { getSavedAlbum } from '@/services/getDataEndpoint/getSavedAlbum';
import { useQueryFetch } from '../../hooks';
import useAppContext from '../../hooks/useAppContext';
import { SAVED_SONGS_CARD_CONSTANTS } from '@/constants';




const PlaylistAlbumCard: React.FC  = () => {

	const [arrPlaylistAlbumByUser, setArrPlylistAlbumByUser] = useState<AlbumPlaylistCardEntitie[]>([])
	const queryGetSavedAlbum = useQueryFetch<AlbumsUserEndpointModel>(["getSavedAlbum"], getSavedAlbum);
	const queryGetSavedPlaylist = useQueryFetch<playlistUserEndpointModel>(["getSavedPlaylist"],getSavedPlaylist)
    const {infoInContext} = useAppContext();

	
	if(queryGetSavedAlbum.isError || queryGetSavedPlaylist.isError){
		console.log(queryGetSavedAlbum.error, queryGetSavedPlaylist.error);
	}

	// podria usar directamente la info cuando llegue del useQueryFetch() pero necesito pasarla primero por mi adapter
	useEffect(() => {
        if (queryGetSavedAlbum.data && queryGetSavedPlaylist.data) {
            const jsonSavedPlaylist: playlistUserEndpointModel = queryGetSavedPlaylist.data;
            const jsonSavedAlbums: AlbumsUserEndpointModel = queryGetSavedAlbum.data;
			const savedSongs = new AlbumPlaylistCardEntitie(
				SAVED_SONGS_CARD_CONSTANTS.name,
				SAVED_SONGS_CARD_CONSTANTS.img,
				SAVED_SONGS_CARD_CONSTANTS.type,
				100,
				infoInContext?.userName,
				SAVED_SONGS_CARD_CONSTANTS.id,
			);
		
            const objsPlaylistAlbum: AlbumPlaylistCardEntitie[] = adapterCardAlbumPlaylist(jsonSavedPlaylist, jsonSavedAlbums, savedSongs);
            setArrPlylistAlbumByUser(objsPlaylistAlbum);
        }
    }, [queryGetSavedAlbum.data, queryGetSavedPlaylist.data]);




	if(queryGetSavedAlbum.isLoading || queryGetSavedPlaylist.isLoading){
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



	if(queryGetSavedAlbum.data && queryGetSavedPlaylist.data){
		return (
			<>
				{arrPlaylistAlbumByUser.map(iten => (
					<div key={iten.getId()} className={styles.playlistAlbumCard}>
						<img className={styles.playlistAlbumCard_img} src={iten.getPhotoUrl()} alt="" />
						<h5 className={styles.playlistAlbumCard_name}>{iten.getName()}</h5>
						<p className={styles.playlistAlbumCard_details}>{iten.getType()} <span className={styles.playlistAlbumCard_details_separation}>•</span> {iten.getOwner()}</p>
					</div>
				))}

			</>
		)
	}






};

export default PlaylistAlbumCard;
