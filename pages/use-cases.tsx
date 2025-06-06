import Head from 'next/head';

export default function UseCases() {
  return (
    <>
      <Head><title>AI Use Cases | Agentic Pacific</title></Head>
      <main className="px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">AI Use Cases</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Sales Chatbots</h2>
            <p className="text-gray-700">Instantly respond to inbound leads, qualify them, and book calls — trained on your pitch and FAQs.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Customer Service Agents</h2>
            <p className="text-gray-700">Automate 80% of incoming tickets while escalating edge cases to your team with full context.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Marketing Copywriters</h2>
            <p className="text-gray-700">Email campaigns, outbound DMs, and blog outlines — all personalized and data-driven.</p>
          </div>
        </div>
      </main>
    </>
  );
}