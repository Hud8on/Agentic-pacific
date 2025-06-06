import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head><title>About Us | Agentic Pacific</title></Head>
      <main className="px-6 py-12 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About Agentic Pacific</h1>
        <p className="text-gray-700 mb-4">
          We founded Agentic Pacific to make cutting-edge AI accessible to small and medium businesses — not just tech giants.
        </p>
        <p className="text-gray-700">
          Rooted in California’s spirit of experimentation and independence, we believe AI should be a tool that works for you — not the other way around.
        </p>
      </main>
    </>
  );
}