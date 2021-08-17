export default function FilterItem ({ text, handleClick }) {
    return (
        <button
            className="button button-white mr-1" 
            onClick={ handleClick }>
            { text }
        </button>
    );
}