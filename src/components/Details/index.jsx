import DarkLightIcon from '../DarkLightIcon';
import DetailsPanel from './DetailsPanel';
import PanelItem from './PanelItem';
import PanelPara from './PanelPara';

import {
	walks,
	totalWalks,
	totalDistance,
	totalJourneys,
	selectedWalk
} from '../../signals';

import style from './style.module.css';

function handleWalk(id) {
	selectedWalk.value = Number(id);
}

/**
 * Details
 *
 * @return {React.ReactElement}
 */
function Details() {
	
	return (
		<section class={style.details}>
			<DetailsPanel title="Walk Journal">
				<header class={style.detailsHeader}>
					<h4>Walking Journal</h4>
					<DarkLightIcon />
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
					<span>Total distance travelled</span>
					<span>{totalDistance.value.distance} {totalDistance.value.unit}</span>
				</PanelPara>
			</DetailsPanel>

			<DetailsPanel title="List of walks">
				<header class={style.detailsHeader}>
					<h4>List of walks</h4>
				</header>
				{walks.value.map(walk => {

					const { id, name, distance, unit } = walk;
				
					return (
						<PanelItem
							key={id}
							id={id}
							walkId={selectedWalk.value}
							handleClick={handleWalk}
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
