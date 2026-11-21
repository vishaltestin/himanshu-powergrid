import PageBanner from '@/components/common/page-banner';
import Footer from '@/components/footer';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { NavbarThree } from '@/components/navbar-3';

export default function PrivacyPolicy() {
    return (
        <>
            <NavbarThree />
            <PageBanner title="Privacy Policy" image='/images/privacy.jpg' />
            <MaxWidthWrapper className="pt-16 pb-24 md:pb-32">
                <div className="space-y-8">
                    <section className="space-y-4">
                        <h3 className="text-2xl font-semibold tracking-tight">1. Introduction</h3>
                        <p>
                            Welcome to our Privacy Policy page. Your privacy is critically important to us. This policy document outlines the types of personal information that is received and collected by our website and how it is used. By using our platform, you agree to the collection and use of information in accordance with this policy.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-2xl font-semibold tracking-tight">2. Information We Collect</h3>
                        <p>
                            We collect several different types of information for various purposes to provide and improve our service to you:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-foreground">Personal Data:</strong> Email address, first name, last name, phone number, and address (&quot;Personally Identifiable Information&quot;).</li>
                            <li><strong className="text-foreground">Usage Data:</strong> Information on how the service is accessed and used, including your computer&apos;s Internet Protocol address (IP address), browser type, browser version, pages visited, and time spent.</li>
                            <li><strong className="text-foreground">Cookies and Tracking Data:</strong> We use cookies and similar tracking technologies to track activity on our service and hold certain information.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-2xl font-semibold tracking-tight">3. Use of Data</h3>
                        <p>
                            We use the collected data for various purposes:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To provide and maintain our service</li>
                            <li>To notify you about changes to our service</li>
                            <li>To allow you to participate in interactive features when you choose to do so</li>
                            <li>To provide customer support and gather analysis to improve our website</li>
                            <li>To monitor the usage of our service and detect, prevent, and address technical issues</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-2xl font-semibold tracking-tight">4. Security of Data</h3>
                        <p>
                            The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-2xl font-semibold tracking-tight">5. Changes to This Privacy Policy</h3>
                        <p>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top. You are advised to review this Privacy Policy periodically for any changes.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-2xl font-semibold tracking-tight">6. Contact Us</h3>
                        <p>
                            If you have any questions about this Privacy Policy, please feel free to contact us through our website&apos;s contact page or by sending an email to <a href="mailto:rajesh.suri@cubegrid.in" className="text-primary underline underline-offset-4">rajesh.suri@cubegrid.in</a>.
                        </p>
                    </section>
                </div>
            </MaxWidthWrapper>
            <Footer />
        </>
    );
}