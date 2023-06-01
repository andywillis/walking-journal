import DetailsPanel from './DetailsPanel';
import PanelItem from './DetailsPanel/PanelItem';
import PanelPara from './DetailsPanel/PanelPara';

import { walks, currentWalk, totalDistance } from '../../signals';

import style from './style.module.css';

function handleClick(id) {
	currentWalk.value = Number(id);
}

/**
 * Details
 *
 * @return {React.ReactElement}
 */
function Details() {
	return (
		<section class={style.details}>

			<DetailsPanel title="General details">
				<PanelPara>
					{walks.value.length} routes
				</PanelPara>
				<PanelPara>
					{totalDistance.value.amount} {totalDistance.value.unit} travelled
				</PanelPara>
			</DetailsPanel>

			<DetailsPanel title="List of walks">
				{walks.value.map(walk => {

					const { id, name, distance, unit } = walk;
				
					return (
						<PanelItem
							key={id}
							id={id}
							walkId={currentWalk.value}
							handleClick={handleClick}
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
