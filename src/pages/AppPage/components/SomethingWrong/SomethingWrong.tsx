import React from 'react';
import styles from './SomethingWrong.module.scss';
import { publicRoutes, SOMETHING_WRONG } from '@/constants';
import { useNavigate } from 'react-router-dom';


const SomethingWrong: React.FC = ({}) => {

	const navigate = useNavigate();

	const logOut = () =>{
		window.localStorage.clear();
		navigate(publicRoutes.LANDING);
	}
	return (
		<div className={styles.somethingwrong}>
			<img src={SOMETHING_WRONG.img} alt="connect error" />
			<h3 className={styles.somethingwrong_h3}>{SOMETHING_WRONG.text}</h3>
			<h4 className={styles.somethingwrong_h4}>{SOMETHING_WRONG.action1} <span className={styles.somethingwrong_h4_span} onClick={logOut}>{SOMETHING_WRONG.action2}</span> </h4>
 		</div>
	);
};

export default SomethingWrong;
