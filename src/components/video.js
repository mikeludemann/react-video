import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Video extends Component {
	render() {

		const title = this.props.title ? this.props.title : this.props.src;

		return (
			<div className={this.props.className}>
				<video
					controls={this.props.controls}
					poster={this.props.poster}
					loop={this.props.loop}
					muted={this.props.muted}
					autoPlay={this.props.autoPlay}
					preload={this.props.preload}
					id={this.props.id}
					title={title}
				>
					{this.props.videos.map((field) => {
						return <source src={field.videoSource} type={field.type} />
					})}
					{this.props.tracks.map((field) => {
						return <track src={field.trackSource} kind={field.kind} srclang={field.languageSource} label={field.label} />
					})}
					{this.props.notSupportedText}
				</video>
			</div>
		);
	}
}

Video.propTypes = {
	className: PropTypes.string,
	controls: PropTypes.bool,
	poster: PropTypes.string,
	muted: PropTypes.bool,
	autoplay: PropTypes.bool,
	loop: PropTypes.bool,
	preload: PropTypes.oneOf(["", "none", "metadata", "auto"]),
	id: PropTypes.string,
	title: PropTypes.string,
	videos: PropTypes.arrayOf(
		PropTypes.shape({
			videoSource: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	tracks: PropTypes.arrayOf(
		PropTypes.shape({
			trackSource: PropTypes.string.isRequired,
			kind: PropTypes.string.isRequired,
			languageSource: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	notSupportedText: PropTypes.string.isRequired
}
