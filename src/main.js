import './styles/index.scss'
import { Header } from './components/Header/header';
import Home from './components/Home/Home';
import printImages from './components/utils/printImages';

const app = document.querySelector('#app')

Header();
const home = Home();
app.append(home);

document.addEventListener('DOMContentLoaded', () => {
    printImages();
})



