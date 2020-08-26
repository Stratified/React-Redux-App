import React from 'react';
import { connect } from 'react-redux';
import { newPicture } from './actions/actions';

const Fox = (props) => {
	return (
		<div>
			<img src={props.image} alt='Fox picture placeholder.'></img>
			<br />
			<button onClick={newPicture}>New picture.</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { image: state.image };
};

const mapDispatchToProps = { newPicture };

export default connect(mapStateToProps, mapDispatchToProps)(Fox);
