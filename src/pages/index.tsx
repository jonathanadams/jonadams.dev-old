import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>JonAdams.dev</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col h-screen">
        <main className="flex-grow">
          <article className="flex flex-col items-center justify-center h-full mt-10 text-center">
            <header className="flex flex-col items-center mb-3">
              <Image className="mb-2 rounded-full h-36 w-36" width="144" height="144" alt="Profile Picture" src="/me.jpg" />
              <h1 className="text-4xl font-extrabold text-slate-800">JonAdams.dev</h1>
              <h2 className="text-xl text-slate-500">My personal landing page built with Next.js</h2>
            </header>
          </article>

        </main>

        <footer className="py-10">
          <div className="text-center">
            <p className="text-sm text-slate-400">© 2023 Jonathan Adams</p>
          </div>
        </footer>
      </div>
    </>
  )
}
