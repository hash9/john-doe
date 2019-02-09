import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../atoms/avatar';
import styles from './listItemComponent.module.scss';

const ListItemComponent = ({
	items,
	onClickItem,
	size,
}) => {
	return items.length && items.map((item, index) => (
			<div className={styles.mainContainer} onClick={() => onClickItem(item.value)}>

				<div className={styles.leftContainer}>
						<Avatar image={require('../../assets/javascript_logo.png')} onClickImage={() => {console.log("avatar clicked")}} size={size}/>
				</div>

				<div className={styles.rightContainer}>
					<div className={styles.titleContainer}>
						<h2>{item.title}</h2>
					</div>

					<div className={styles.dateContainer}>
						<small>{item.date}</small>
					</div>
		
					<div className={styles.bottomHalfContainer}>
						<p>{item.subTitle}</p>
					</div>
				</div>

			</div>
		)
	)
}

ListItemComponent.propTypes = {
	items: PropTypes.arrayOf([{
		title: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		subTitle: PropTypes.string.isRequired,
	}]),
};

ListItemComponent.defaultProps = {
	items: [],
	title: '',
	date: '',
	subTitle: '',
	size: () => {},
};



export default ListItemComponent;