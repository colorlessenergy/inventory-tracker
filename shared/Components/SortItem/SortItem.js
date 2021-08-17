export default function FilterItem ({ text, isActive, handleClick }) {
    return (
        <button
            className="button button-white mr-1" 
            style={ isActive ? ({ backgroundColor: '#cd5d7d' }) : (null) }
            onClick={ handleClick }>
            { text }
        </button>
    );
}