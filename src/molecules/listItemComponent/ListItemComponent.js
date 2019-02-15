import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../atoms/avatar';
import HeaderM from '../../atoms/headerM';
import styles from './listItemComponent.module.scss';
import ThemeContext from '../../context/ThemeContext';

const ListItemComponent = ({
	items,
	onClickItem,
	size,
}) => {
	return items.length && items.map((item, index) => (
		<ThemeContext.Consumer>
        {theme => (
			<div className={styles.mainContainer} onClick={() => onClickItem(item.value)}>

				<div className={styles.leftContainer}>
						<Avatar image={require('../../assets/javascript_logo.png')} onClickImage={() => {console.log("avatar clicked")}} size={size}/>
				</div>

				<div className={styles.rightContainer}>
					<div className={styles.titleContainer}>
						<HeaderM style={{ color: theme.config.listTitle }} text={item.title} />
					</div>

					<div className={styles.dateContainer}>
						<small style={{ color: theme.config.listRest }}>{item.date}</small>
					</div>
		
					<div className={styles.bottomHalfContainer}>
						<p style={{ color: theme.config.listRest }}>{item.subTitle}</p>
					</div>
				</div>

			</div>
			)}
      </ThemeContext.Consumer>
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