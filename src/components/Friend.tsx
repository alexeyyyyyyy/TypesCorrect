
import {characters} from "../utils/characters.ts";
import {useNavigate} from "react-router-dom";
import {navItems} from "../utils/constants.ts";
//rsc
//@ts-ignore
const Friend = ({friend,pos}) => { //friendPhoto and pos
    const navigate = useNavigate();
    let styles = 'col-4 p-1';
    if(pos === 7) {
        styles+=" bottom-left"
    }
    if(pos === 9) {
        styles += " bottom-right"
    }
    return (
        <img className={styles} src={characters[friend].img}
             onClick={()=> {
                 navigate(`/${navItems[0].route}/${friend}`)
             }} alt='friend'/>
    );
};

export default Friend;