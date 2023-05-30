import classNames from 'classnames';
import style from './style.module.css';

import { walks, currentWalk } from '../../signals';

function handleClick(id) {
	currentWalk.value = Number(id);
}

/**
 * List
 *
 * @return {React.ReactElement}
 */
function List() {
	return (
		<section class={style.listContainer}>
			<header>
				<h4>List of walks</h4>
			</header>
			<section class={style.list}>
				{walks.value.map(walk => {

					const { id, name, distance, unit } = walk;

					const walkCn = classNames({
						[style.item]: true,
						[style.highlighted]: id === currentWalk.value
					});

					return (
						<button
							key={id}
							type="button"
							class={walkCn}
							onClick={() => handleClick(id)}
						>{id}: {name} ({distance}{unit})
						</button>
					);
				})}
			</section>
		</section>
	);
}

export default List;
