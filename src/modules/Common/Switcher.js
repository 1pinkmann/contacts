import {useContext} from 'react';
import {themeContext} from "../../contexts/themeContext";

export default function Switcher() {
    let {handleSwitch, switchedValue} = useContext(themeContext);

    return(
        <select className='theme-switch' onChange={handleSwitch} value={switchedValue}>
            <option value="default">Default</option>
            <option value="black">Black</option>
            <option value="coloured">Coloured</option>
        </select>
    );
}