// "use client";
// import React, { useEffect, useState } from 'react';
import styles from './UserInfo.module.scss';
import { getDataUserEndPoint } from '@/services';
import { adapterUser } from '@/adapters';
import { User, userEndpointModel } from '@/models';
import { DATA_DESCR_USER_CARD } from '@/constants';
import { useQueryFetch } from '../../hooks';
import { useEffect } from 'react';
import { zustandBookStore } from '@/store';

const UserInfo: React.FC  = () => {

	const {setUserName} = zustandBookStore();
	const queryGetUserData = useQueryFetch<userEndpointModel>(["getDataUser"], getDataUserEndPoint)

	useEffect(()=>{
		if(!queryGetUserData.isLoading && queryGetUserData.data){
			const objUser: User = adapterUser(queryGetUserData.data)
			setUserName(objUser.getdisplayName)
		}
	},[queryGetUserData.isLoading,queryGetUserData.data])
	

	if(queryGetUserData.isLoading){
		return (
			<div className={styles.loadingContainer}>
				<div className={styles.loadingContainer_text}>#########</div>
				<div className={styles.loadingContainer_img}></div>
			</div>
		)
	}

	const objUser: User | null = !queryGetUserData.isLoading && queryGetUserData.data ? adapterUser(queryGetUserData.data) : null;


	return (
		<>
			{objUser && (
				<a tabIndex={0} data-descr={DATA_DESCR_USER_CARD} className={styles.userInfo} href={objUser?.getUrlToPerfil} target='_blank'>
					<span className={styles.userInfo_nameUser}>{objUser?.getdisplayName}</span>
					<div className={styles.userInfo_imgContainer}>
						<img className={styles.userInfo_imgContainer_imgUser} src={objUser?.getPhotoUrl} />
					</div>
				</a>
			)}
		</>
	);
};

export default UserInfo;
