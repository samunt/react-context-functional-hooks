import {useState} from 'react';
function useToggle(initialVal = false) {
    // call usestate
    const [state, changeState] = useState(initialVal);
    const toggle = () => {
        changeState(!state)
    };
    // return a piece of state AND a function to toggle it
    return [state, toggle]
}
export default useToggle
