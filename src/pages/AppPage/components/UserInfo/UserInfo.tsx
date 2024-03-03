"use client";
import React from 'react';
import styles from './UserInfo.module.scss';

export type UserInfoProps = {
	userDisplayName: string,
	userImgUrl: string
}

const UserInfo: React.FC<UserInfoProps>  = ({userDisplayName, userImgUrl}) => {
	return (
		<div className={styles.userInfo}>
 			<span tabIndex={0} className={styles.userInfo_nameUser}>{userDisplayName}</span>
			<img className={styles.userInfo_imgUser} src={userImgUrl} />
 		</div>
	);
};

export default UserInfo;
