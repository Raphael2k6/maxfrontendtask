import React, { useEffect } from 'react';
import styles from './Dashboard.module.css'
import DashboardComponent from '../../component/DashboardComponent/DashboardComponent';
import { sidemenuData } from '../../Utils/data';
import logo from '../../Utils/assets/Starwarslogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { getFilms } from '../../reduxstore/starWarsReducer/actions';

const Dashboard = () => {
    const dispatch = useDispatch();
    const films = useSelector(state => state.starwars.films)

    useEffect(() => {
        dispatch(getFilms("films"))
        //eslint-disable-next-line
    }, []);

    //TODO FETCH DATA DYNAMICALLY ONCLICK OF EACH SIDEMENU ITEM

    const sideMenuItems = sidemenuData.map((item) => {
        return (
            <div className={styles.items} key={item.id}>
                <img src={item.icon} alt="icon" /> <p>{item.name}</p>
            </div>
        )
    })

    return (
        <div className={styles.container}>
            <div className={styles.sidemenuHolder}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <img src={logo} name="logo" />
                    </div>
                    <div className={styles.listContainer}>
                        {sideMenuItems}
                    </div>
                </div>
            </div>
            <div className={styles.dashboardHolder}>
                <DashboardComponent data={films && films.results} />
            </div>
        </div>
    );
};

export default Dashboard;
