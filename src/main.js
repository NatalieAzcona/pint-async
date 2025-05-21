import './styles/main.scss'
import { Header } from './components/Header/header';
import Home from './components/Home/Home';
import printImages from './components/utils/printImages';

const app = document.querySelector('#app')

Header();
const home = Home();
app.append(Home());

document.addEventListener('DOMContentLoaded', () => {
    printImages();
})


//Button
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';


