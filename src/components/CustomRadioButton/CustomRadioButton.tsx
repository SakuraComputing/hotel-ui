interface IParams {
    label: string;
    selected: boolean;
    onSelect: React.MouseEventHandler<HTMLButtonElement>;
    icon: React.ReactNode;
}
  
const CustomRadioButton: React.FC<IParams> = ({ 
    label, 
    selected, 
    onSelect, 
    icon
}) => ( 
    <li> 
        <button
            className={`radiobutton ${selected && 'selected'}`} 
            onClick={onSelect} 
        > 
            {label} 
            {icon}
        </button> 
    </li> 
); 
export default CustomRadioButton;