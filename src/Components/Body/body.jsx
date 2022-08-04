import style from "./body.module.css";

export default function Body() {
  return (
    <>
      <div className={style.bodyBackground}>
        <div className={style.bodyContainer}>
          <div className={style.bodyText}>
            <b>
              Brandon Stirling <br />
              Full Stack Dev
            </b>
          </div>

          <div className={style.bodySearchBar}>
            <form>
              <input type="text" className={style.bodySearch} />
              <button type="submit"> Search </button>
            </form>
          </div>
        </div>
      </div>

      <div className={style.popupContainer}>
        <div className={style.popupOneContainer}>
          <div className={style.popupOne}></div>
          <div className={style.popupOneText}>
            Exploring abandoned meatworks factory.
            <div className={style.popupHiddenText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
              modi suscipit reiciendis amet maiores, deserunt obcaecati aliquid?
              Ratione pariatur unde debitis dolorem, magnam qui temporibus
              reprehenderit harum quibusdam sed accusantium.
            </div>
          </div>
        </div>
        <div className={style.popupOneContainer}>
          <div className={style.popupTwo}></div>
          <div className={style.popupOneText}>
            Deep in the bush somewhere in rural Gisborne.
            <br />
            <div className={style.popupHiddenText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
              modi suscipit reiciendis amet maiores, deserunt obcaecati aliquid?
              Ratione pariatur unde debitis dolorem, magnam qui temporibus
              reprehenderit harum quibusdam sed accusantium.
            </div>
          </div>
        </div>
        <div className={style.popupOneContainer}>
          <div className={style.popupThree}></div>
          <div className={style.popupOneText}>
            Another from abandoned meatworks factory.
            <div className={style.popupHiddenText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
              modi suscipit reiciendis amet maiores, deserunt obcaecati aliquid?
              Ratione pariatur unde debitis dolorem, magnam qui temporibus
              reprehenderit harum quibusdam sed accusantium.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
