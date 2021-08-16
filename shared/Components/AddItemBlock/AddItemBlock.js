export default function AddItemBlock () {
    return (
        <form className="flex flex-direction-column">
            <label htmlFor="name">
                name
            </label>
            <input
                type="text"
                placeholder="name"
                id="name"
                className="mb-1" />

            <label htmlFor="amount">
                amount
            </label>
            <input
                type="number"
                placeholder="amount"
                id="amount"
                className="mb-6" />

            <div className="flex justify-content-between">
                <button
                    type="button"
                    className="button button-peach">
                    cancel
                </button>
                <button className="button button-green">
                    create
                </button>
            </div>
        </form>
    );
}