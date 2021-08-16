import { useEffect, useState } from 'react'
import Head from 'next/head'

import Modal from '../shared/Components/Modal'
import ThemeSelector from '../shared/Components/ThemeSelector/ThemeSelector'
import AddButton from '../shared/Components/AddButton/AddButton';
import AddItemBlock from '../shared/Components/AddItemBlock/AddItemBlock';

import { getItemBlocks, setItemBlock } from '../shared/ItemBlocks/ItemBlocks';

export default function Home() {
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(previousIsModalOpen => !previousIsModalOpen);
    }

    let [ itemBlocks, setItemBlocks ] = useState([]);
    useEffect(() => {
        setItemBlocks(getItemBlocks())
    }, []);

    const updateAmountOfItems = ({ index, amount }) => {
        let cloneItemBlocks = JSON.parse(JSON.stringify(itemBlocks));
        if (cloneItemBlocks[index].amount === 0 && Math.sign(amount) === -1) {
            return;
        }

        cloneItemBlocks[index].amount += amount;
        setItemBlocks(cloneItemBlocks);
        setItemBlock({ index, itemBlock: cloneItemBlocks[index] });       
    }

    return (
        <div>
            <Head>
                <title>inventory tracker</title>
                <meta name="description" content="inventory tracker" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container">
                <ThemeSelector />

                <div className="flex flex-wrap justify-content-between">
                    { itemBlocks.map((itemBlock, index) => {
                        return (
                            <div
                                key={ index }
                                style={{ backgroundColor: itemBlock.color }}
                                className="card">
                                <div className="flex justify-content-between w-100">
                                    { itemBlock.name }
                                </div>

                                <div className="text-large">
                                    { itemBlock.amount }
                                </div>

                                <div className="flex justify-content-between w-100">
                                    <button
                                        className="card-button"
                                        onClick={ () => updateAmountOfItems({ index, amount: -1 }) }>
                                        -
                                    </button>

                                    <button 
                                        className="card-button"
                                        onClick={ () => updateAmountOfItems({ index, amount: 1 }) }>
                                        +
                                    </button>
                                </div>
                            </div>
                        );
                    }) }
                </div>
            </div>

            <AddButton handleClick={ toggleModal } />
            <Modal isOpen={ isModalOpen }>
                <AddItemBlock
                    toggleModal={ toggleModal }
                    setItemBlocks={ setItemBlocks } />
            </Modal>
        </div>
    )
}
