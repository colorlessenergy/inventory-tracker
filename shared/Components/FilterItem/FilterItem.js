export default function FilterItem ({ text, handleClick }) {
    return (
        <button
            className="button button-white" 
            onClick={ handleClick }>
            { text }
        </button>
    );
}