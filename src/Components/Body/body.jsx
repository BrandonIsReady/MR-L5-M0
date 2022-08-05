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
              This photo is from an abandoned Freezing works factory off in
              rural Gisborne, in a small coastal town called Tokomaru Bay. The
              factory was built in 1911 and saw a downturn in business in 1950,
              where it eventually closed in 1952.
            </div>
          </div>
        </div>
        <div className={style.popupOneContainer}>
          <div className={style.popupTwo}></div>
          <div className={style.popupOneText}>
            Deep in the bush somewhere in rural Gisborne.
            <br />
            <div className={style.popupHiddenText}>
              My friends and I hiked over an hour upstream from our camping site
              to find a place to have a picnic. There photo shown here, was
              after we had been in the field for a few hours, and i was deep
              into battling hayfever. It took myself nearly 2 hours to safely
              walk back downstream and back to the campsite.
            </div>
          </div>
        </div>
        <div className={style.popupOneContainer}>
          <div className={style.popupThree}></div>
          <div className={style.popupOneText}>
            Another from abandoned meatworks factory.
            <div className={style.popupHiddenText}>
              This one was froma more roadside spot of the freezing works
              factory that had been abandoned, what can't be seen in the photo,
              is the huge piles of glass from people cracking bottles, or
              smashing out windows.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
