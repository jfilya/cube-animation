import style from "./index.module.scss";


function Cube() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
  // const numbers = [1, 2, 3, 4, 5, 6]
  return (

    <div className={style.cube}>
      {numbers.map((number, index) =>
        <div className={style.exampleElement + " " +style.cube__item} key={index}>
          <div className={style.face+ " " + style.front}></div>
          <div className={style.face+ " " + style.back}></div>
          <div className={style.face+ " " + style.right}></div>
          <div className={style.face+ " " + style.left}></div>
          <div className={style.face+ " " + style.top}></div>
          <div className={style.face+ " " + style.bottom}></div>
        </div>
      )
      }
    </div>


  );
}

export default Cube;