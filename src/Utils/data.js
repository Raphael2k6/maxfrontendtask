import sideMenuIcon1 from '../Utils/assets/dashboard.png' ;
import sideMenuIcon2 from '../Utils/assets/building.png';
import sideMenuIcon3 from '../Utils/assets/shopping-basket.png';
import sideMenuIcon4 from '../Utils/assets/shopping-basket.png';
import sideMenuIcon5 from '../Utils/assets/menu.png';
import dashboardIcon1 from '../Utils/assets/videocamera.png';
import dashboardIcon2 from '../Utils/assets/ufo.png';
import dashboardIcon3 from '../Utils/assets/groupofstudents.png';
import dashboardIcon4 from '../Utils/assets/taxi.png';
import dashboardIcon6 from '../Utils/assets/phylogenetics.png';

export const sidemenuData = [
    {
        id: 1, icon: sideMenuIcon1, 
        name: "films"
    },
    {
        id: 2, 
        icon: sideMenuIcon2, 
        name: "starships"
    },
    {
        id: 3, 
        icon: sideMenuIcon3, 
        name: "people"
    },
    {
        id: 4, 
        icon: sideMenuIcon4, 
        name: "vehicles"
    },
    {
        id: 5, 
        icon: sideMenuIcon5, 
        name: "species"
    },
];

export const DashboardCards = [
    {
        id: 1,
        icon: dashboardIcon1,
        name: "Film", 
        vol: 200, 
        text: "More than yesterday",
        bg: '#03D4B6'
    },
    {
        id: 2, 
        icon: dashboardIcon2, 
        name: "Startships", 
        vol: 200, 
        text: "More than yesterday",
        bg: 'blue'
    },
    {
        id: 3, 
        icon: dashboardIcon3, 
        name: "People", vol: 200, 
        text: "More than yesterday",
        bg: 'purple'
    },
    {
        id: 4, 
        icon: dashboardIcon4, 
        name: "Vehicles", 
        vol: 200, 
        text: "More than yesterday",
        bg: 'yellow'
    },
    {
        id: 5, 
        icon: dashboardIcon6, 
        name: "Species", 
        vol: 200, 
        text: "More than yesterday",
        bg: 'violet'
    }
]