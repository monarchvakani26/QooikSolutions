import type { Metadata } from "next";
import { FadeInView } from "@/components/animations/FadeInView";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Qooik Solutions — terms governing our website design and AI automation services.",
};

export default function TermsPage() {
  return (
    <main className="pt-24">
      <section className="section-padding bg-background">
        <div className="section-container max-w-3xl">
          <FadeInView>
            <h1 className="text-h1 font-heading font-bold text-ink mb-2">Terms of Service</h1>
            <p className="text-ink-muted text-sm mb-10">Last updated: July 2025</p>
          </FadeInView>

          <FadeInView delay={0.1}>
            <div className="prose prose-sm sm:prose-base max-w-none
              prose-headings:font-heading prose-headings:text-ink prose-headings:font-semibold
              prose-p:text-ink-secondary prose-p:leading-relaxed
              prose-strong:text-ink prose-a:text-accent">

              <p>
                By engaging Qooik Solutions for any service, you agree to these Terms of Service.
                Please read them carefully before commissioning any work.
              </p>

              <h2>Services</h2>
              <p>
                Qooik Solutions provides website design, development, AI automation, and related digital
                services. The specific scope of each project is defined in the project proposal or
                agreement signed at the commencement of each engagement.
              </p>

              <h2>Payment Terms</h2>
              <p>
                Standard payment terms are 50% upfront and 50% on delivery, unless otherwise agreed in
                writing. Invoices are due within 7 business days of issue. Late payments may incur a
                delay in project delivery.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                Upon receipt of full payment, all custom design and code created for your project becomes
                your property. Qooik Solutions retains the right to showcase completed work in our
                portfolio unless otherwise agreed in writing.
              </p>

              <h2>Revisions</h2>
              <p>
                Each project includes a defined number of revision rounds as specified in the project
                proposal. Additional revisions beyond the agreed scope may be invoiced separately.
              </p>

              <h2>Client Responsibilities</h2>
              <p>
                You agree to provide all required content, images, and feedback in a timely manner.
                Delays in providing necessary materials may affect project timelines.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                Qooik Solutions shall not be liable for any indirect, incidental, or consequential damages
                arising from the use of our services. Our total liability shall not exceed the amount paid
                for the specific service in question.
              </p>

              <h2>Termination</h2>
              <p>
                Either party may terminate a project with 14 days written notice. Work completed up to
                the termination date will be invoiced accordingly.
              </p>

              <h2>Governing Law</h2>
              <p>
                These terms are governed by the laws of India. Any disputes shall be subject to the
                exclusive jurisdiction of the courts of India.
              </p>

              <h2>Contact</h2>
              <p>
                For questions about these terms, contact us at{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
