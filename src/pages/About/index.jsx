/* eslint-disable max-len */
import style from './style.module.css';

/**
 * About
 *
 * @return {React.ReactElement}
 */
function About() {
	return (
		<main class={style.about}>
			<p>With this small site I wanted to be able to view - both in written detail, and on a map - the journeys I have taken on various walks around Kent.</p>
			<p>The journeys are captured as GeoJson data with an Android application called <a class="anchor" href="https://github.com/mendhak/gpslogger">GPS Logger</a> which I can then process into a format designed for the site.</p>
			<p>The processed data is imported and stored/extracted into a variety of <a class="anchor" href="https://preactjs.com/blog/introducing-signals/">signals</a> for use within a <a class="anchor" href="https://preactjs.com/">Preact</a> app.</p>
			<p>The map is generated using <a class="anchor" href="https://leafletjs.com">Leaflet</a>.</p>
			<p>Github: <a class="anchor" href="https://github.com/andywillis/walking-journal">https://github.com/andywillis/walking-journal</a>.</p>
		</main>
	);
}

export default About;
