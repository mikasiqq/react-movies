import React from 'react';
import classes from "./Main.module.scss";

const Main = () => {
  return (
    <section className={classes.main}>
      <img src="/images/background-main.jpeg" alt="Background image" />
      <div className={classes.content}>
        <h3>Я буду жить</h3>
        <p>Алла — преподаватель английского языка. Всю жизнь она посвятила близким — бывшим мужьям, детям и ученикам. Алла старается быть «удобной» и никогда не отказывать, в итоге Аллу все беззастенчиво эксплуатируют. Но напряжение от вечного обслуживания других копится внутри. Последней каплей становится новость от дочери Наташи: она беременна неизвестно от кого и рассчитывает на помощь матери.</p>
        <p>Волей случая Алла оказывается на собрании онкобольных. Там она встречает людей, которые лишь перед лицом смерти поняли, как важно жить, реализуя собственные мечты и желания, а не потакать бесконечным просьбам окружающих. Они по-настоящему свободны. План рождается сам собой — Алла сообщает близким, что больна раком. Она рассчитывает, что шокирующее известие отрезвит близких и научит их ответственности и сочувствию, но всё идет не по плану. Алла решает преподать им урок.</p>
      </div>
    </section>
  );
}

export default Main;
