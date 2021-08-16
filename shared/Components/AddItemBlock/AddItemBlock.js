import { useState } from "react";

import { addItemBlock } from "../../ItemBlocks/ItemBlocks";

export default function AddItemBlock ({ toggleModal }) {
    const [ itemBlock, setItemBlock ] = useState({
        name: '',
        amount: ''
    });

    const handleInputChange = (event) => {
        setItemBlock(previousItemBlock => ({ ...previousItemBlock, [ event.target.id ]: event.target.value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        addItemBlock(itemBlock);
        toggleModal();
    }

    return (
        <form
            onSubmit={ handleSubmit }
            className="flex flex-direction-column">
            <label htmlFor="name">
                name
            </label>
            <input
                type="text"
                placeholder="name"
                id="name"
                value={ itemBlock.name }
                onChange={ handleInputChange }
                autoComplete="off"
                required
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
                autoComplete="off"
                required
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