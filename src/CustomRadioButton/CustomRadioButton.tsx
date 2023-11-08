interface IParams {
    label: string;
    selected: boolean;
    onSelect: React.MouseEventHandler<HTMLButtonElement>;
}
  
const CustomRadioButton: React.FC<IParams> = ({ 
    label, 
    selected, 
    onSelect, 
}) => ( 
    <li> 
        <button
            className={`radiobutton ${selected && 'selected'}`} 
            onClick={onSelect} 
        > 
            {label} 
        </button> 
    </li> 
); 
export default CustomRadioButton;