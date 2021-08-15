import { useState } from 'react'
import Head from 'next/head'

import Modal from '../shared/Components/Modal'
import ThemeSelector from '../shared/Components/ThemeSelector/ThemeSelector'
import AddButton from '../shared/Components/AddButton/AddButton';

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
                <form className="flex flex-direction-column">
                    <label htmlFor="name">
                        name
                    </label>
                    <input
                        type="text"
                        placeholder="name"
                        id="name"
                        className="mb-1" />

                    <label htmlFor="name">
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
            </Modal>
        </div>
    )
}
