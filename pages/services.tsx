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
              We've spent the last six months testing, implementing, and surveying the full AI productivity landscape — so you don't have to. Agentic Pacific is your guide through the noise: product-agnostic, deeply informed, and laser-focused on ROI. We help you save time, cut costs, and modernize operations with tailor-fit solutions.
            </p>

            <p className="mb-12 text-lg text-gray-700">
              Whether you're just starting to explore AI or you're ready to scale automation, our team delivers expert-backed recommendations, implementation, and ongoing support. This isn't just another tech upgrade — it's a transformation. Let's make sure you're ahead of it.
            </p>

            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-semibold mb-2">AI Education & Training</h2>
                <p>
                  Give your team the confidence to use AI effectively. We provide hands-on training, curated best practices, and up-to-date guidance to help you unlock AI's potential without overwhelm.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">AI Needs Assessment</h2>
                <p>
                  We get to know your workflows, pain points, and opportunities. Then we map out the most impactful ways AI can help — clearly, strategically, and with no fluff.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">AI Vendor Assessment & Procurement</h2>
                <p>
                  We've reviewed hundreds of tools so you don't have to. As product-agnostic experts and agency partners, we match you with the best-fit AI solutions — and help you get them at the best price.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">Process Planning and Scoping</h2>
                <p>
                  With your goals and tools aligned, we create a clear, phased plan to make your AI rollout successful — whether we're implementing it or handing off to your team.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">AI Implementation Services</h2>
                <p>
                  We deliver full-service implementation of AI solutions — fast, secure, and tailored to your business. Automations that actually work, from day one.
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
          {/* Our Process Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Intro Call:</strong> Understand your goals and needs</li>
              <li><strong>Assessment:</strong> Map inefficiencies and opportunities</li>
              <li><strong>Proposal:</strong> We present a custom AI strategy</li>
              <li><strong>Implementation:</strong> We deploy tools & automations</li>
              <li><strong>Training:</strong> Your team learns how to use them</li>
              <li><strong>Ongoing Support:</strong> Stay up to date with check-ins and updates</li>
            </ul>
          </section>