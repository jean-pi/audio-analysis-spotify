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




const PlaylistAlbumCard: React.FC  = () => {

	const [arrPlaylistAlbumByUser, setArrPlylistAlbumByUser] = useState<AlbumPlaylistCardEntitie[]>([])
	const queryGetSavedAlbum = useQueryFetch<AlbumsUserEndpointModel>(["getSavedAlbum"], getSavedAlbum);
	const queryGetSavedPlaylist = useQueryFetch<playlistUserEndpointModel>(["getSavedPlaylist"],getSavedPlaylist)

	if(queryGetSavedAlbum.isError || queryGetSavedPlaylist.isError){
		console.log(queryGetSavedAlbum.error, queryGetSavedPlaylist.error);
	}

	if(queryGetSavedAlbum.isLoading || queryGetSavedPlaylist.isLoading){
		console.log("...")
	}

	// podria usar directamente la info cuando llegue del useQueryFetch() pero necesito pasarla primero por mi adapter
	useEffect(() => {
        if (queryGetSavedAlbum.data && queryGetSavedPlaylist.data) {
            const jsonSavedPlaylist: playlistUserEndpointModel = queryGetSavedPlaylist.data;
            const jsonSavedAlbums: AlbumsUserEndpointModel = queryGetSavedAlbum.data;
            const objsPlaylistAlbum: AlbumPlaylistCardEntitie[] = adapterCardAlbumPlaylist(jsonSavedPlaylist, jsonSavedAlbums);
            setArrPlylistAlbumByUser(objsPlaylistAlbum);
        }
    }, [queryGetSavedAlbum.data, queryGetSavedPlaylist.data]);

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
