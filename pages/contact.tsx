import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head><title>Contact | Agentic Pacific</title></Head>
      <main className="px-6 py-12 max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-4">Let’s Talk</h1>
        <p className="text-gray-700 mb-4">Email us at <a href="mailto:hello@agenticpacific.com" className="text-blue-600 underline">hello@agenticpacific.com</a></p>
      </main>
    </>
  );
}