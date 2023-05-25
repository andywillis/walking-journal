import classNames from 'classnames';

import style from './index.module.css';

function Icon({ type, label, handleClick, disabled }) {

  const cn = classNames([
    style.icon,
    style[type]
  ]);

  return (
    <button
      type="button"
      aria-label={label}
      class={cn}
      data-type={type}
      onClick={handleClick}
      disabled={disabled}
    />
  );

}

export default Icon;
