import { useState } from 'react'
import Head from 'next/head'

import Modal from '../shared/Components/Modal'
import ThemeSelector from '../shared/Components/ThemeSelector/ThemeSelector'

export default function Home() {
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    return (
        <div>
            <Head>
                <title>inventory tracker</title>
                <meta name="description" content="inventory tracker" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ThemeSelector />

            <Modal isOpen={ isModalOpen }>
                <h1>modal</h1>
            </Modal>
        </div>
    )
}
