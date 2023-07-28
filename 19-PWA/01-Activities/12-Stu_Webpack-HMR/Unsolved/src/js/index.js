import { boxClick } from './box';
import { headerClick } from './header';
import '../css/style.css';
import Yellow from '../images/yellow-robot.png';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);

document.getElementById('box').src = Yellow;

//TODO: Add logic for Hot Module Reloading
if (module.hot){
    module.hot.accept(err)=>(
        if (err){
            console.log('cannot apply HMR update')
        }
        }
}
