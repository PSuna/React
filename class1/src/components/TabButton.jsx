function TabButton({children, isSelected, ...props}){
    return (
        <li>
            <button className={isSelected == true ? 'active' : ''} {...props}>{children}</button>
        </li>
    );
}


/* function TabButton({children, onSelect, isSelected}){
    return (
        <li>
            <button className={isSelected == true ? 'active' : ''} onClick={onSelect}>{children}</button>
        </li>
    );
} */

export default TabButton;