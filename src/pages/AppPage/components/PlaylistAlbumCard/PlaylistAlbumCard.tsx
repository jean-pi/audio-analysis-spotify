// "use client";
import { useState } from 'react';
import React from 'react';
import styles from './PlaylistAlbumCard.module.scss';
import { getSavedPlaylist } from '@/services';
import { playlistUserEndpointModel, AlbumsUserEndpointModel} from '@/models';
import { adapterCardAlbumPlaylist } from '@/adapters';
import { AlbumPlaylistCardEntitie } from "@/models";
import { getSavedAlbum } from '@/services/getDataEndpoint/getSavedAlbum';
import { useQuery } from '@tanstack/react-query';




const PlaylistAlbumCard: React.FC  = () => {

	const [arrPlaylistAlbumByUser, setArrPlylistAlbumByUser] = useState<AlbumPlaylistCardEntitie[]>([])


	const queryGetSavedAlbum = useQuery({
		queryKey: ['cacheSavedAlbums'], // manejo de cache
		queryFn: getSavedAlbum,  // este servicion deve devolver la data o error, 
		//saber cuando esta cargando, cuando da un error, cuando devuelve la data
	})

	const queryGetSavedPlaylist = useQuery({
		queryKey: ['cacheSavedPlaylist'],
		queryFn: getSavedPlaylist,
	})

	if(queryGetSavedAlbum.isError || queryGetSavedPlaylist.isError){
		console.log(queryGetSavedAlbum.error, queryGetSavedPlaylist.error);
	}

	if(queryGetSavedAlbum.isLoading || queryGetSavedPlaylist.isLoading){
		console.log("...")
	}

	if(queryGetSavedAlbum.data && queryGetSavedPlaylist.data){
		(async() => {
			const jsonSavedPlaylist:playlistUserEndpointModel = await queryGetSavedPlaylist.data.json();
			// const jsonSavedAlbums:AlbumsUserEndpointModel = await queryGetSavedAlbum.data.json();
			// const playlistList: AlbumPlaylistCardEntitie[] = adapterCardAlbumPlaylist(jsonSavedPlaylist,jsonSavedAlbums);
			// console.log(playlistList)
			// setArrPlylistAlbumByUser(playlistList);	
		}) ();
	}

	// const getAndAdapterPlaylistAlbumUser = async() =>{
	// 	const resServiceGetSavedAlbum = await getSavedAlbum();
	// 	const resServiceGetSavedPlaylist = await getSavedPlaylist();
	// 	if(!resServiceGetSavedAlbum.ok) throw new Error("not ok: error al obtener los albums del usuario, getSavedAlbum.ts" + resServiceGetSavedAlbum.status);
	// 	if(!resServiceGetSavedPlaylist.ok) throw new Error("not ok: error al obtener las playlist del usuario, getSavedAlbum.ts" + resServiceGetSavedAlbum.status)
	// 	const jsonSavedAlbumsByUser: userAlbumEndpointModel = await resServiceGetSavedAlbum.json();
	// 	const jsonSavedPlaylistByUser: playlistUserEndpointModel = await resServiceGetSavedPlaylist.json();
	// 	const playlistList: AlbumPlaylistCardEntitie[] = adapterCardAlbumPlaylist(jsonSavedPlaylistByUser,jsonSavedAlbumsByUser);
	// 	setArrPlylistAlbumByUser(playlistList);	
	// }


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





};

export default PlaylistAlbumCard;
