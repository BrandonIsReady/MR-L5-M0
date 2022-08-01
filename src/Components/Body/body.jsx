import style from "./body.module.css";

export default function Body() {
  return (
    <>
      <div className={style.bodyBackground}>
        <div className={style.bodyContainer}>
          <div className={style.bodyText}>
            <b> Lorem ipsum dolor sit amet </b>
          </div>

          <div className={style.bodySearchBar}>
            <form>
              <input
                type="text"
                placeholder="Search..."
                className={style.bodySearch}
              />
              <button type="submit"> Search </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
