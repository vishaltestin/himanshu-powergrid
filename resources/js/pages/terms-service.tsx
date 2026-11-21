import PageBanner from '@/components/common/page-banner';
import Footer from '@/components/footer';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { NavbarThree } from '@/components/navbar-3';

export default function TermsService() {
    return (
        <>
            <NavbarThree />
            <PageBanner title="Terms of Service" image='/images/tc.jpg' />
            <MaxWidthWrapper className="pt-16 pb-24 md:pb-32">
                <div className="space-y-8">
                    <section className="space-y-4">
                        <h3 className="text-2xl font-semibold tracking-tight">1. Agreement to Terms</h3>
                        <p>
                            By accessing or using our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-2xl font-semibold tracking-tight">2. Intellectual Property Rights</h3>
                        <p>
                            Other than the content you own, under these Terms, we and/or our licensors own all the intellectual property rights and materials contained in this website. You are granted a limited license only for purposes of viewing the material contained on this website.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-2xl font-semibold tracking-tight">3. Restrictions</h3>
                        <p>
                            You are specifically restricted from all of the following:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Publishing any website material in any other media without prior written consent.</li>
                            <li>Selling, sublicensing, and/or otherwise commercializing any website material.</li>
                            <li>Using this website in any way that is or may be damaging to this website.</li>
                            <li>Using this website contrary to applicable laws and regulations, or in any way that may cause harm to the website, or to any person or business entity.</li>
                            <li>Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this website.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-2xl font-semibold tracking-tight">4. User Accounts</h3>
                        <p>
                            If you create an account on our platform, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account. We reserve the right to terminate accounts, remove or edit content, or cancel orders at our sole discretion.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-2xl font-semibold tracking-tight">5. Limitation of Liability</h3>
                        <p>
                            In no event shall we, nor any of our officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website, whether such liability is under contract, tort, or otherwise.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-2xl font-semibold tracking-tight">6. Changes to Terms</h3>
                        <p>
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-2xl font-semibold tracking-tight">7. Contact Us</h3>
                        <p>
                            If you have any questions about these Terms of Service, please contact us at <a href="mailto:rajesh.suri@cubegrid.in" className="text-primary underline underline-offset-4">rajesh.suri@cubegrid.in</a>.
                        </p>
                    </section>
                </div>
            </MaxWidthWrapper>
            <Footer />
        </>
    );
}