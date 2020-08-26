import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { newPicture } from './actions/actions';

const Fox = (props) => {
	useEffect(() => {
		props.newPicture();
	}, [props.newPicture]);
	return (
		<div>
			<img src={props.image} alt='Fox picture placeholder.'></img>
			<br />
			<button onClick={props.newPicture}>New picture.</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { image: state.image };
};

const mapDispatchToProps = { newPicture };

export default connect(mapStateToProps, mapDispatchToProps)(Fox);
