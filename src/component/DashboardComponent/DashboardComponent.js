import React, { useEffect, useState } from 'react';
import icon from '../../Utils/assets/shopping-basket.png'
import icon2 from '../../Utils/assets/logo2.png'
import styles from './DashboardComponent.module.css';
import { DashboardCards } from '../../Utils/data'



const cards = DashboardCards.map(card => {
  return (
    <div key={card.id} className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.header}>
          <h3>{card.name}</h3>
          <img src={card.icon} className={`${styles.icons} ${card.bg === 'green' ? styles.green : card.bg === 'blue' ? styles.blue : card.bg === 'purple' ? styles.purple : card.bg === 'yellow' ? styles.yellow : styles.violet}`} />
        </div>
        <h3 className={styles.volume}>{card.vol}</h3>
        <p className={styles.text}>{card.text}</p>
      </div>
    </div>
  )
})

const DashboardComponent = ({ data }) => {
const [tableData, setTableData] = useState(data);
  const tableInfo = tableData && tableData.map((datum) => {
    return (
      <div className={styles.table__information__option} key={datum.title}>
        <div>{datum.title} </div>
        <div>{datum.director}</div>
        <div>{datum.producer}</div>
        <div>{datum.release_date}</div>
        <div>{datum.episode_id}</div>
        <div className={datum.characters[0] && styles.characters}>{datum.characters[0]}</div>
      </div>
    )
  })

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.nav}>
          <div><p>Dashboard</p></div>
          <div className={styles.navIcons}>
            <div><img src={icon} alt='icons' /></div>
            <div><img src={icon} alt='icons' /></div>
            <div className={styles.spacing}><img src={icon2} alt='icons' /></div>
          </div>
        </div>

        <div className={styles.filter}>
          <div>
            <input type='select' placeholder='Current year' className={styles.margn} />
            <input type='select' placeholder='Current week' />
          </div>
        </div>
        <div className={styles.cardHolder}>
          {cards}
        </div>
        <div className=''>
          <div className={styles.table}>
            <h2>Films</h2>
            <div className={styles.table__header}>
              <div>
                Film Title
              </div>
              <div>
                Director
              </div>
              <div>
                Producers
              </div>
              <div>
                Release Date
              </div>
              <div>
                Episode ID
              </div>
              <div>
                characters
              </div>
            </div>
            <div className={styles.table__information}>
              {tableInfo}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;

