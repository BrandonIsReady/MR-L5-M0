import style from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div className={style.headContainer}>
        <div className={style.leftHeadContainer}>
          <div className={style.leftPhoto}></div>
          <div className={style.leftText}> My Company </div>
        </div>
        <div className={style.rightHeadContainer}>
          {/* hidden navbar for differnet screen values  */}
          <div className={style.resizeableNav}>
            <select>
              <option value={""} selected="selected"></option>
              <option value={"/Menu1"}>Menu 1</option>
              <option value={"/Menu2"}>Menu 2</option>
              <option value={"/Menu3"}>Menu 3</option>
              <option value={"/Login"}>Login</option>
            </select>
          </div>
          {/* main navBar  */}
          <div className={style.mainNav}>
            <div className={style.rightMenu}> Menu 1 </div>
            <div className={style.rightMenu}> Menu 2 </div>
            <div className={style.rightMenu}> Menu 3 </div>
            <div className={style.rightLogin}> Login </div>
          </div>
        </div>
      </div>
    </>
  );
}
