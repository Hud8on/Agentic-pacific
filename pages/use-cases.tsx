import UseCaseCard from '../components/UseCaseCard';
import IndustryAccordion from '../components/IndustryAccordion';
import CallToActionBlock from '../components/CallToActionBlock';
import Head from 'next/head';

export default function UseCases() {
  return (
    <>
      <Head><title>AI Use Cases | Agentic Pacific</title></Head>
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">AI Use Cases</h1>
        <p className="text-gray-700 mb-8">
          We specialize in practical AI implementations for small and mid-sized service businesses. Below are some of the highest-leverage ways we help companies save time, cut costs, and respond faster.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <UseCaseCard
            title="Customer Inquiry Assistants"
            description="Handle routine emails, voicemails, or web form inquiries with 24/7 AI coverage. Common questions get instant answers — edge cases are routed to your team with context."
          />
          <UseCaseCard
            title="Scheduling Automation"
            description="AI-powered scheduling flows can coordinate appointments, manage follow-ups, and keep your calendar full — even while you sleep."
          />
          <UseCaseCard
            title="Form & Document Processing"
            description="Automatically extract data from PDFs, invoices, or intake forms — saving hours of data entry and reducing mistakes."
          />
          <UseCaseCard
            title="Reporting & Summarization"
            description="Summarize emails, meeting notes, or recurring reports. Get faster visibility into what matters — without slogging through raw documents."
          />
          <UseCaseCard
            title="Custom Automations"
            description="Have a specific workflow in mind? We stitch together AI tools, APIs, and custom logic to automate unique business processes — with or without code."
          />
        </div>
        <div>
          <div className="py-12">
            <IndustryAccordion
              industry="Property Management"
              useCases={[
                {
                  title: "Automated tenant inquiry response",
                  description:
                    "Prospective tenants receive instant answers to frequently asked questions through a trained chatbot on your website or listings. More complex inquiries are routed to your team with the necessary context, ensuring every lead is handled 24/7."
                },
                {
                  title: "Maintenance scheduling assistants",
                  description:
                    "Tenants submit requests through a form, and an AI assistant coordinates maintenance visits with your staff automatically. This reduces turnaround time and eliminates miscommunications, all integrated with your calendar."
                },
                {
                  title: "Invoice and rent reminder flows",
                  description:
                    "Tenants receive timely rent and invoice reminders via email or SMS. These automated notifications reduce late payments and integrate seamlessly with your billing system."
                }
              ]}
            />
          </div>
          <div className="py-12">
            <IndustryAccordion
              industry="Schools & Childcare"
              useCases={[
                {
                  title: "Parent inquiry automation",
                  description:
                    "Parents get quick answers to common questions like hours, enrollment, and illness policies via an FAQ-trained chatbot on your school’s website or email, reducing admin workload while keeping families informed."
                },
                {
                  title: "Enrollment & scheduling support",
                  description:
                    "AI assistants guide parents through the enrollment process and help them update their child's schedule. Integrated with your calendar and forms, it eases peak-time bottlenecks."
                },
                {
                  title: "Policy reminders and updates",
                  description:
                    "As policies change, AI tools convert staff-written updates into clear, concise messages and send them to parents via email or SMS, ensuring everyone stays informed."
                }
              ]}
            />
          </div>
          <div className="py-12">
            <IndustryAccordion
              industry="Construction & Trades"
              useCases={[
                {
                  title: "Job inquiry intake bots",
                  description:
                    "Your website or social channels offer 24/7 intake bots that collect job details like timing, location, and project scope. The data is stored in your CRM to pre-qualify leads and streamline follow-up."
                },
                {
                  title: "Inspection scheduling",
                  description:
                    "AI assistants coordinate inspection times between field staff and customers by referencing your team’s availability and the project’s progress, keeping timelines on track."
                },
                {
                  title: "Invoice summarization",
                  description:
                    "AI parses detailed invoices and highlights key information like totals, scope, and line items. This helps bookkeepers and clients save time and avoid errors."
                }
              ]}
            />
          </div>
          <div className="py-12">
            <IndustryAccordion
              industry="Retail"
              useCases={[
                {
                  title: "Customer support automation",
                  description:
                    "Shoppers receive immediate help with shipping, returns, and product questions through a chatbot trained on your catalog. This reduces support workload and improves the customer experience."
                },
                {
                  title: "Inventory and reorder alerts",
                  description:
                    "An AI tool monitors sales and inventory in real-time, sending proactive alerts to managers or suppliers when stock runs low, helping prevent stockouts."
                },
                {
                  title: "Product FAQ generation",
                  description:
                    "AI analyzes specs and reviews to create helpful FAQs that are displayed on product pages. This boosts conversion rates and reduces returns by answering shopper questions up front."
                }
              ]}
            />
          </div>
          <div className="py-12">
            <IndustryAccordion
              industry="Services"
              useCases={[
                {
                  title: "Appointment reminders",
                  description:
                    "Clients receive confirmation messages and reminders shortly after booking and the day before their appointment. This helps minimize no-shows and is fully automated via SMS or email."
                },
                {
                  title: "Billing and client follow-ups",
                  description:
                    "Invoices and gentle follow-up nudges are automatically sent at the end of a service or billing period, improving cash flow and reducing manual effort."
                },
                {
                  title: "Proposal and contract drafting",
                  description:
                    "After a lead is captured, AI generates customized proposals and contracts, saving time and ensuring consistency in client communications."
                }
              ]}
            />
          </div>
        </div>
        <div className="mt-16">
          <CallToActionBlock />
        </div>
      </main>
    </>
  );
}