import { useEffect, useState } from 'react'
import Head from 'next/head'

import Modal from '../shared/Components/Modal'
import ThemeSelector from '../shared/Components/ThemeSelector/ThemeSelector'
import FilterItem from '../shared/Components/FilterItem/FilterItem';
import AddButton from '../shared/Components/AddButton/AddButton';
import AddItemBlock from '../shared/Components/AddItemBlock/AddItemBlock';
import EditItemBlock from '../shared/Components/EditItemBlock/EditItemBlock';

import { getItemBlocks, setItemBlock } from '../shared/ItemBlocks/ItemBlocks';

const sortSettings = [
    'greatest',
    'least'
];

export default function Home() {
    useEffect(() => {
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.workbox !== undefined) {
            const wb = window.workbox;
            const installNewVersion = () => {
                wb.addEventListener('controlling', () => {
                    window.location.reload();
                });
                
                wb.messageSkipWaiting();
            }

            wb.addEventListener('waiting', installNewVersion);
            wb.register();
        }
    }, []);

    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(previousIsModalOpen => !previousIsModalOpen);
    }

    let [ itemBlocks, setItemBlocks ] = useState([]);
    useEffect(() => {
        setItemBlocks(getItemBlocks());
    }, typeof localStorage !== 'undefined' ? [localStorage.getItem('itemBlocks')] : []);

    const updateAmountOfItems = ({ updatedItemBlock, amount }) => {
        let cloneItemBlocks = JSON.parse(JSON.stringify(itemBlocks));
        const index = cloneItemBlocks.findIndex(itemBlock => itemBlock.ID === updatedItemBlock.ID);
        if (cloneItemBlocks[index].amount === 0 && Math.sign(amount) === -1) {
            return;
        }

        cloneItemBlocks[index].amount += amount;
        setItemBlocks(cloneItemBlocks);
        setItemBlock(cloneItemBlocks[index]);       
    }

    const [ isEditItemBlockModalOpen, setIsEditItemBlockModalOpen ] = useState(false);
    const toggleEditItemBlockModal = () => {
        setIsEditItemBlockModalOpen(previousIsEditItemBlockModalOpen=> !previousIsEditItemBlockModalOpen);
        setEditingItemBlock({
            ID: null,
            name: '',
            amount: 0,
            color: ''
        });
    }

    const [ editingItemBlock, setEditingItemBlock ] = useState({
        ID: null,
        name: '',
        amount: 0,
        color: ''
    });

    const openEditItemBlockModal = (itemBlock) => {
        toggleEditItemBlockModal();
        setEditingItemBlock(itemBlock);
    }

    const [ sortSetting, setSortSetting ] = useState('');
    const handleSortClick = (setting) => {
        if (setting === sortSetting) {
            return setSortSetting('');
        }

        return setSortSetting(setting);
    }

    const sortItems = (item1, item2) => {
        if (sortSetting === 'least') {
            return item1.amount - item2.amount;
        } else if (sortSetting === 'greatest') {
            return item2.amount - item1.amount;
        }
    }

    const conditionallySortItems = () => {
        if (sortSetting === '') {
            return itemBlocks;
        }

        return JSON.parse(JSON.stringify(itemBlocks)).sort(sortItems);
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

                { sortSettings.map(fixedSortSetting => {
                    return (
                        <FilterItem
                            text={ fixedSortSetting } 
                            isActive={ fixedSortSetting === sortSetting }
                            handleClick={ () => handleSortClick(fixedSortSetting) } />
                    );
                }) }

                <div className="flex flex-wrap justify-content-between">
                    { conditionallySortItems().map((itemBlock, index) => {
                        return (
                            <div
                                key={ index }
                                style={{ backgroundColor: itemBlock.color }}
                                className="card">
                                <div className="flex justify-content-between w-100">
                                    { itemBlock.name }
                                </div>

                                <div
                                    className="text-large cursor-pointer"
                                    onClick={ () => openEditItemBlockModal(itemBlock)  }>
                                    { itemBlock.amount }
                                </div>

                                <div className="flex justify-content-between w-100">
                                    <button
                                        className="card-button"
                                        onClick={ () => updateAmountOfItems({ updatedItemBlock: itemBlock, amount: -1 }) }>
                                        -
                                    </button>

                                    <button 
                                        className="card-button"
                                        onClick={ () => updateAmountOfItems({ updatedItemBlock: itemBlock, amount: 1 }) }>
                                        +
                                    </button>
                                </div>
                            </div>
                        );
                    }) }
                </div>
            </div>

            <AddButton handleClick={ toggleModal } />
            { isModalOpen ? (
                <Modal isOpen={ isModalOpen }>
                    <AddItemBlock
                        toggleModal={ toggleModal }
                        setItemBlocks={ setItemBlocks } />
                </Modal>
            ) : (null) }

            { isEditItemBlockModalOpen ? (
                <Modal isOpen={ isEditItemBlockModalOpen }>
                    <EditItemBlock 
                        itemBlock={ editingItemBlock }
                        toggleModal={ toggleEditItemBlockModal }
                        setItemBlocks={ setItemBlocks } />
                </Modal>
            ) : (null) }
        </div>
    )
}
