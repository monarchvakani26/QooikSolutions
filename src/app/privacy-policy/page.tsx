import type { Metadata } from "next";
import { FadeInView } from "@/components/animations/FadeInView";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Qooik Solutions — how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-24">
      <section className="section-padding bg-background">
        <div className="section-container max-w-3xl">
          <FadeInView>
            <h1 className="text-h1 font-heading font-bold text-ink mb-2">Privacy Policy</h1>
            <p className="text-ink-muted text-sm mb-10">Last updated: July 2025</p>
          </FadeInView>

          <FadeInView delay={0.1}>
            <div className="prose prose-sm sm:prose-base max-w-none
              prose-headings:font-heading prose-headings:text-ink prose-headings:font-semibold
              prose-p:text-ink-secondary prose-p:leading-relaxed
              prose-strong:text-ink prose-a:text-accent">

              <p>
                Qooik Solutions ("we", "us", or "our") operates the website at{" "}
                <a href={siteConfig.url}>{siteConfig.url}</a>. This page informs you of our policies
                regarding the collection, use, and disclosure of personal data when you use our service.
              </p>

              <h2>Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you fill out our contact
                form, book a consultation, or communicate with us via email or WhatsApp. This may include:
              </p>
              <ul>
                <li>Name and business name</li>
                <li>Email address and phone number</li>
                <li>Project details and business information</li>
                <li>Any other information you voluntarily provide</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and provide our services</li>
                <li>Send project updates and communications</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>Data Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to outside parties
                without your consent, except to trusted third-party service providers who assist us in
                operating our website and conducting our business (such as email and form services), subject
                to confidentiality agreements.
              </p>

              <h2>Cookies</h2>
              <p>
                Our website may use cookies to enhance your experience. You can choose to disable cookies
                through your browser settings. Note that some features of the website may not function
                properly without cookies.
              </p>

              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your personal
                information against unauthorised access, alteration, disclosure, or destruction.
              </p>

              <h2>Your Rights</h2>
              <p>
                You have the right to access, correct, or delete the personal data we hold about you. To
                exercise these rights, please contact us at{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by
                posting the new policy on this page with an updated date.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about this privacy policy, please contact us at{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or call{" "}
                <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
