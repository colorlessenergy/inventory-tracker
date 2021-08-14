import Head from 'next/head'
import ThemeSelector from '../shared/Components/ThemeSelector/ThemeSelector'

export default function Home() {
  return (
    <div>
      <Head>
        <title>inventory tracker</title>
        <meta name="description" content="inventory tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeSelector />
    </div>
  )
}
