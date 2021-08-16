import { useState } from "react";

import { addItemBlock } from "../../ItemBlocks/ItemBlocks";

const colors = ["#ffe58f", "#eaff8f", "#b7eb8f", "#87e8de", "#ffd6e7"];

export default function AddItemBlock ({ toggleModal, setItemBlocks }) {
    const [ itemBlock, setItemBlock ] = useState({
        name: '',
        amount: 0,
        color: ''
    });

    const handleInputChange = (event) => {
        setItemBlock(previousItemBlock => ({ ...previousItemBlock, [ event.target.id ]: event.target.value }));
    }

    const setColor = (color) => {
        setItemBlock(previousItemBlock => ({ ...previousItemBlock, color }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        addItemBlock({ itemBlock, setItemBlocks });
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
                className="mb-1" />
            
            <div>
                select a color
            </div>
            <div className="flex mb-6">
                { colors.map(color => {
                    return (
                        <div
                            key={ color }
                            onClick={ () => setColor(color) }
                            className="circle mr-1 cursor-pointer"
                            style={{ backgroundColor: color, border: color === itemBlock.color ? "3px solid #000000" : null }}
                            title={`${ color }`}>
                        </div>
                    );
                }) }
            </div>

            <div className="flex justify-content-between">
                <button
                    type="button"
                    onClick={ toggleModal }
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