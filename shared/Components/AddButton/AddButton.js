import classes from './AddButton.module.scss';

export default function AddButton ({ handleClick }) {
    return (
        <div
            onClick={ handleClick }
            className={ classes["add-button"] }>
            +
        </div>
    );
}