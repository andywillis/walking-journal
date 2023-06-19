// import Icon from '../Icon';
// import IconGroup from '../IconGroup';
import DetailsPanel from './DetailsPanel';
import PanelItem from './PanelItem';
import PanelPara from './PanelPara';

import {
	walks,
	totalWalks,
	totalDistance,
	totalJourneys
} from '../../signals';

import style from './style.module.css';

// function handleDetails() {
// 	console.log('Handle details');
// }

/**
 * Details
 *
 * @return {React.ReactElement}
 */
function Details() {
	
	return (
		<section class={style.details}>
			
			<DetailsPanel>
				<header class={style.detailsHeader}>
					<h2>Details</h2>
				</header>
				<PanelPara>
					<span>Total walks</span>
					<span>{totalWalks.value}</span>
				</PanelPara>
				<PanelPara>
					<span>Total journeys</span>
					<span>{totalJourneys.value}</span>
				</PanelPara>
				<PanelPara>
					<span>Total distance ({totalDistance.value.unit})</span>
					<span>{totalDistance.value.distance}</span>
				</PanelPara>
			</DetailsPanel>

			<DetailsPanel>
				<header class={style.detailsHeader}>
					<h2>List of walks</h2>
					{/* <IconGroup>
						<Icon
							title="View walk details"
							type="details"
							handleClick={handleDetails}
						/>
					</IconGroup> */}
				</header>
				{walks.value.map(walk => {

					const { id, shortname, name, distance, unit } = walk;
				
					return (
						<PanelItem
							key={id}
							id={id}
							shortname={shortname}
						>
							<span>{name}</span>
							<span>{distance}{unit}</span>
						</PanelItem>
					);

				})}
			</DetailsPanel>

		</section>
	);
}

export default Details;
