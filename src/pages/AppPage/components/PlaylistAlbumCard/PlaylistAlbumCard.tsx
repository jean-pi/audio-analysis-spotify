import React, { useEffect, useState} from 'react';
import styles from './PlaylistAlbumCard.module.scss';
import { getSavedPlaylist, getSavedAlbum } from '@/services';
import { userAlbumItens, playlistUserIten} from '@/models';
import { adapterCardAlbumPlaylist } from '@/adapters';
import { AlbumPlaylistCardEntitie } from "@/models";
import { useInfiniteQueryFetch } from '../../hooks';
import { useInView } from 'react-intersection-observer';
import { zustandBookStore } from '@/store';


const PlaylistAlbumCard: React.FC  = () => {

	const {userName,setAlbumPlaylistSelected} = zustandBookStore()
	const savedSongsObj = new AlbumPlaylistCardEntitie("Saved Songs", "https://misc.scdn.co/liked-songs/liked-songs-300.png", "Playlist", 1000, userName, "0");

	useEffect(()=>{
		setAlbumPlaylistSelected({
			photoUrl: savedSongsObj.getPhotoUrl(),
			type: savedSongsObj.getType(),
			owner: userName,
			numOfSongs: savedSongsObj.getNumberOfSongs(),
			name: savedSongsObj.getName()
		})
	},[userName])

	const {ref, inView} = useInView();

	const fetchAlbumsUser = useInfiniteQueryFetch<userAlbumItens[]>(["albums"], getSavedAlbum);
	const fetchPlaylistUser = useInfiniteQueryFetch<playlistUserIten[]>(["playlist"], getSavedPlaylist)


	useEffect(()=>{
		if(inView && (fetchAlbumsUser.hasNextPage || fetchPlaylistUser.hasNextPage)){
			fetchAlbumsUser.fetchNextPage();
			fetchPlaylistUser.fetchNextPage();
		}
	},[inView, fetchAlbumsUser.hasNextPage, fetchPlaylistUser.hasNextPage])


	if(fetchAlbumsUser.isError || fetchPlaylistUser.isError){
		console.log(fetchAlbumsUser.error, fetchPlaylistUser.error);
	}
	
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    useEffect(() => {
        setIsLoadingMore(fetchAlbumsUser.isFetchingNextPage || fetchPlaylistUser.isFetchingNextPage);
    }, [fetchAlbumsUser.isFetchingNextPage, fetchPlaylistUser.isFetchingNextPage]);



	const htmlLoadingArr: JSX.Element[] = Array.from({ length: 18 }, (_, index) => (
		<div key={index}>
			<div className={styles.albumPlaylistCardLoading}>
				<div className={styles.albumPlaylistCardLoading_img}></div>
				<div className={styles.albumPlaylistCardLoading_name}>######</div>
				<div className={styles.albumPlaylistCardLoading_details}>####</div>
			</div>
		</div>
	));


    if (fetchAlbumsUser.isLoading || fetchPlaylistUser.isLoading) {
        return (
            <>
                {htmlLoadingArr.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </>
        )
    }

	if(fetchAlbumsUser.status === "success" && fetchPlaylistUser.status === "success"){
		const objUserPlaylistAlbumUser: AlbumPlaylistCardEntitie[] = adapterCardAlbumPlaylist(fetchPlaylistUser.data.pages , fetchAlbumsUser.data.pages, savedSongsObj)
		return (
			<>

				{objUserPlaylistAlbumUser && objUserPlaylistAlbumUser.map((item, index) => {
					if(objUserPlaylistAlbumUser.length - 5 === index){
						return(
							<div key={item.getId()} ref={ref} className={styles.playlistAlbumCard} onClick={()=> item.eventClick()}>
								<img className={styles.playlistAlbumCard_img} src={item.getPhotoUrl()} alt="" loading = 'lazy'/>
								<h5 className={styles.playlistAlbumCard_name}>{item.getName()}</h5>
								<p className={styles.playlistAlbumCard_details}>{item.getType()} <span className={styles.playlistAlbumCard_details_separation}>•</span> {item.getOwner()}</p>
							</div>
						) 
					}  
					return(
						<div key={item.getId()} className={styles.playlistAlbumCard} onClick={()=> item.eventClick()}>
							<img className={styles.playlistAlbumCard_img} src={item.getPhotoUrl()} alt="" loading = 'lazy'/>
							<h5 className={styles.playlistAlbumCard_name}>{item.getName()}</h5>
							<p className={styles.playlistAlbumCard_details}>{item.getType()} <span className={styles.playlistAlbumCard_details_separation}>•</span> {item.getOwner()}</p>
						</div>
					) 
				})}

				{isLoadingMore && (
                    <>
                        {htmlLoadingArr.map((item, index) => (
                            <div key={index}>{item}</div>
                        ))}
                    </>
                )}
			</>
		)
	}


};

export default PlaylistAlbumCard;
