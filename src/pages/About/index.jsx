/* eslint-disable max-len */
import useSelectedUrl from '../../hooks/useSelectedUrl';
import style from './style.module.css';

/**
 * About
 *
 * @return {React.ReactElement}
 */
function About({ url }) {
	
	useSelectedUrl(url);
	
	return (
		<main class={style.about}>
			<p>With this small site I wanted to be able to view - both in written detail, and on a map - the journeys I have taken on various walks around Kent.</p>
			<p>The journeys are captured as GeoJson data with an Android application called <a href="https://github.com/mendhak/gpslogger">GPS Logger</a> which I can then process into a format designed for the site.</p>
			<p>The processed data is imported and stored/extracted into a variety of <a href="https://preactjs.com/blog/introducing-signals/">signals</a> for use within a <a href="https://preactjs.com/">Preact</a> app.</p>
			<p>The map is generated using <a href="https://leafletjs.com">Leaflet</a>.</p>
			<p>Github: <a href="https://github.com/andywillis/walking-journal">https://github.com/andywillis/walking-journal</a>.</p>
		</main>
	);
}

export default About;
