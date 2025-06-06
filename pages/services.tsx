import Image from 'next/image';
import servicesDiagram from '../public/illustration_services_stack.png';

import Head from 'next/head';

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services | Agentic Pacific</title>
      </Head>
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Our Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 items-start py-8 min-h-[500px]">
          <div className="space-y-10 max-w-prose pr-4">
            <p className="mb-8 text-lg text-gray-700">
              In the world of AI, the technology, tools, and trends are all moving incredibly quickly. The businesses that get ahead now will be better positioned in the long run. To help you stay ahead of the pack, work with experts who care.
            </p>

            <p className="mb-12 text-lg text-gray-700">
              Agentic Pacific provides an end-to-end solution for realizing the value of AI in your business—today. Everything that will make you successful, we make our business. Training your people, mapping out your needs to the industry, getting the right tools, and custom implementations are all part of what we can take on to help you run faster and fly higher.
            </p>

            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-semibold mb-2">AI Education & Training</h2>
                <p>
                  Help your teams realize the value of AI with best practices, tips, and tutorials for learning AI tools, techniques, and trends.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">AI Needs Assessment</h2>
                <p>
                  We'll help you uncover the best opportunities to apply AI to your unique business challenges.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">AI Vendor Assessment & Procurement</h2>
                <p>
                  At Agentic Pacific, we've spent months reading, analyzing, and testing new AI tools and features. We'll help you maximize ROI by finding the perfect tools for your needs and budget. As agency partners, we also work directly with vendors to get you the best price possible.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">Process Planning and Scoping</h2>
                <p>
                  Once your goals, budget, needs, and tools are mapped, we'll ensure you're set up for success—whether we implement the solution or empower your team to do so.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">AI Implementation Services</h2>
                <p>
                  Agentic Pacific takes pride in delivering high-quality, end-to-end AI implementation tailored to your business needs.
                </p>
              </section>
            </div>
          </div>

          <div className="w-full flex justify-center md:justify-end self-start">
            <Image
              src={servicesDiagram}
              alt="Agentic Pacific service stack illustration"
              className="w-full max-w-sm h-auto max-h-[480px] object-contain"
            />
          </div>
        </div>
      </main>
    </>
  );
}