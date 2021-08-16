import { useState } from 'react'
import Head from 'next/head'

import Modal from '../shared/Components/Modal'
import ThemeSelector from '../shared/Components/ThemeSelector/ThemeSelector'
import AddButton from '../shared/Components/AddButton/AddButton';
import AddItemBlock from '../shared/Components/AddItemBlock/AddItemBlock';

export default function Home() {
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(previousIsModalOpen => !previousIsModalOpen);
    }

    return (
        <div>
            <Head>
                <title>inventory tracker</title>
                <meta name="description" content="inventory tracker" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ThemeSelector />


            <AddButton handleClick={ toggleModal } />
            <Modal isOpen={ isModalOpen }>
                <AddItemBlock toggleModal={ toggleModal } />
            </Modal>
        </div>
    )
}
