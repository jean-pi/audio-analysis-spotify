// "use client";
// import React, { useEffect, useState } from 'react';
import styles from './UserInfo.module.scss';
import { getDataUserEndPoint } from '@/services';
import { adapterUser } from '@/adapters';
import { User, userEndpointModel } from '@/models';
import { DATA_DESCR_USER_CARD } from '@/constants';
import useAppContext from '../../hooks/useAppContext';
import { useQueryFetch } from '../../hooks';
import { useEffect } from 'react';

const UserInfo: React.FC  = () => {

	const {setInfoInContext} = useAppContext();
	const queryGetUserData = useQueryFetch<userEndpointModel>(["getDataUser"], getDataUserEndPoint)

	useEffect(()=>{
		if(!queryGetUserData.isLoading && queryGetUserData.data){
			const objUser: User = adapterUser(queryGetUserData.data)
			setInfoInContext({
				userName: objUser.getdisplayName
			})
		}
	},[queryGetUserData.isLoading,queryGetUserData.data])
	

	if(queryGetUserData.isError){
		console.log(queryGetUserData.error)
	}

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
					<img className={styles.userInfo_imgUser} src={objUser?.getPhotoUrl} />
				</a>
			)}
		</>
	);
};

export default UserInfo;
