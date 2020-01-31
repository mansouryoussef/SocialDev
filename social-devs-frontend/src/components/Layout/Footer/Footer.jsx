import React from 'react';
import Styles from './Footer.module.scss';

export default function Footer() {
	return (
		<div className={Styles.footerContainer}>
			<div className={Styles.footerItem}>
				<h3>Designed and developed by: </h3>
				<p>Youssef Mansour</p>
			</div>
			<div className={Styles.footerItem}>
				<p>© 2019</p>
			</div>
		</div>
	);
}
