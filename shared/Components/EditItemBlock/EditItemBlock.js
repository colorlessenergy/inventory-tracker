import { useEffect, useState } from "react";
import { removeItemBlock, setItemBlock } from "../../ItemBlocks/ItemBlocks";

const colors = ["#ffe58f", "#eaff8f", "#b7eb8f", "#87e8de", "#ffd6e7"];

export default function EditItemBlock ({ itemBlock, toggleModal, setItemBlocks }) {
    const [ updatedItemBlock, setUpdatedItemBlock ] = useState({
        name: '',
        amount: 0,
        color: '',
        index: null
    });

    useEffect(() => {
        setUpdatedItemBlock(itemBlock);
    }, []);

    const handleInputChange = (event) => {
        setUpdatedItemBlock(previousItemBlock => ({ ...previousItemBlock, [ event.target.id ]: event.target.value }));
    }

    const setColor = (color) => {
        setUpdatedItemBlock(previousItemBlock => ({ ...previousItemBlock, color }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const itemBlockObject = {
            name: updatedItemBlock.name,
            amount: updatedItemBlock.amount,
            color: updatedItemBlock.color
        }

        setItemBlock({ itemBlock: itemBlockObject, index: itemBlock.index });
        toggleModal();
    }

    const removeItemBlockFromLocalStorage = () => {
       removeItemBlock(updatedItemBlock.index);
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
                value={ updatedItemBlock.name }
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
                value={ updatedItemBlock.amount }
                onChange={ handleInputChange }
                required
                className="mb-1" />
            
            <div className="select-circle-text">
                select a color
            </div>
            <div className="flex mb-6">
                { colors.map(color => {
                    return (
                        <div
                            key={ color }
                            onClick={ () => setColor(color) }
                            className="circle mr-1 cursor-pointer"
                            style={{ backgroundColor: color, border: color === updatedItemBlock.color ? "3px solid #000000" : null }}
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

                <button
                    type="button"
                    className="button button-red"
                    onClick={ removeItemBlockFromLocalStorage }>
                    remove
                </button>

                <button className="button button-green">
                    edit
                </button>
            </div>
        </form>
    );
}