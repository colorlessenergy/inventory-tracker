import { useState } from "react";

export default function AddItemBlock () {
    const [ itemBlock, setItemBlock ] = useState({
        name: '',
        amount: ''
    });

    const handleInputChange = (event) => {
        setItemBlock(previousItemBlock => ({ ...previousItemBlock, [ event.target.id ]: event.target.value }));
    }

    return (
        <form className="flex flex-direction-column">
            <label htmlFor="name">
                name
            </label>
            <input
                type="text"
                placeholder="name"
                id="name"
                value={ itemBlock.name }
                onChange={ handleInputChange }
                className="mb-1" />

            <label htmlFor="amount">
                amount
            </label>
            <input
                type="number"
                placeholder="amount"
                id="amount"
                value={ itemBlock.amount }
                onChange={ handleInputChange }
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