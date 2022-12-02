import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import classes from "./Main.module.scss";
import Modal from './Modal/Modal';

const Main = () => {
  const [modalOpened, setModalOpened] = useState(false)
  const navigate = useNavigate()
  const modalChangeHandler = () => {
    setModalOpened(!modalOpened)
  }
  return (
    <section className={classes.main}>
      <img src="/images/background-main.jpeg" alt="Background image" />
      <div className={classes.content}>
        <h3>Я буду жить</h3>
        <p>Алла — преподаватель английского языка. Всю жизнь она посвятила близким — бывшим мужьям, детям и ученикам. Алла старается быть «удобной» и никогда не отказывать, в итоге Аллу все беззастенчиво эксплуатируют. Но напряжение от вечного обслуживания других копится внутри. Последней каплей становится новость от дочери Наташи: она беременна неизвестно от кого и рассчитывает на помощь матери.</p>
        <p>Волей случая Алла оказывается на собрании онкобольных. Там она встречает людей, которые лишь перед лицом смерти поняли, как важно жить, реализуя собственные мечты и желания, а не потакать бесконечным просьбам окружающих. Они по-настоящему свободны. План рождается сам собой — Алла сообщает близким, что больна раком. Она рассчитывает, что шокирующее известие отрезвит близких и научит их ответственности и сочувствию, но всё идет не по плану. Алла решает преподать им урок.</p>
        <div className={classes.contentButtons}>
          <button onClick={modalChangeHandler}><svg xmlns="http://www.w3.org/2000/svg" fill='white' width={16} height={16} viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>Посмотреть трейлер</button>
          <button onClick={() => navigate('/movies/m4')}>Подробнее</button>
        </div>
      </div>
      {modalOpened && <Modal hideModal={modalChangeHandler} movieUrl="https://www.youtube.com/watch?v=lsiAcuIfSVc" />}
    </section>
  );
}

export default Main;
