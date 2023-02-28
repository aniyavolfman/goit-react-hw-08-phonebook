import css from './Loader.module.css';

export function Loader() {
  return (
    <div className={css.ldsEllipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
