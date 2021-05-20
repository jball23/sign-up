import Head from 'next/head'
import Newsletter from '../components/Newsletter'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Newsletter Sign Up</title>
        <meta name="description" content="Newsletter Sign Up" />
        <link href="/css/index.css" rel="stylesheet"/>
      </Head>

      <main className="bg-blue h-screen p-9">
        <Newsletter />
      </main>
    </div>
  )
}
