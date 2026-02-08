'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Eye, Shield, Database, UserCheck, Bell, Globe, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
    const sections = [
        {
            icon: Database,
            title: "1. Information We Collect",
            content: "We collect information that you provide directly to us, including: Personal identification information (name, email address, phone number, date of birth, passport details), Payment information (credit card details, billing address), Travel preferences and requirements (dietary restrictions, accessibility needs, special requests), Communication records (emails, chat messages, booking inquiries), Technical data (IP address, browser type, device information, cookies), and Location data when you use our services or website."
        },
        {
            icon: Eye,
            title: "2. How We Use Your Information",
            content: "We use your personal information to: Process and manage your bookings and reservations, Communicate with you about your trips and services, Send booking confirmations and travel documentation, Provide customer support and respond to inquiries, Process payments and prevent fraud, Personalize your experience and recommend relevant services, Send promotional materials and updates (with your consent), Comply with legal obligations and industry standards, Improve our website functionality and user experience, Analyze trends and conduct market research."
        },
        {
            icon: UserCheck,
            title: "3. Information Sharing and Disclosure",
            content: "We may share your information with: Service providers (hotels, transport operators, tour guides, activity providers) necessary to fulfill your bookings, Payment processors to handle transactions securely, Marketing partners (only with your explicit consent), Legal authorities when required by law or to protect our rights, Business partners for joint offerings or promotions, Analytics providers to improve our services. We never sell your personal data to third parties for their marketing purposes."
        },
        {
            icon: Lock,
            title: "4. Data Security",
            content: "We implement industry-standard security measures to protect your personal information, including: SSL encryption for data transmission, Secure servers with firewall protection, Restricted access to personal data on a need-to-know basis, Regular security audits and vulnerability assessments, PCI DSS compliance for payment processing, Staff training on data protection practices. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security."
        },
        {
            icon: Globe,
            title: "5. International Data Transfers",
            content: "Yoo Marrakech is based in Morocco. Your information may be transferred to and processed in Morocco or other countries where our service providers operate. By using our services, you consent to the transfer of your information to countries outside your country of residence, which may have different data protection laws. We ensure appropriate safeguards are in place for such transfers."
        },
        {
            icon: Shield,
            title: "6. Your Rights and Choices",
            content: "You have the right to: Access your personal data we hold about you, Request correction of inaccurate or incomplete information, Request deletion of your data (subject to legal obligations), Object to processing of your personal data, Withdraw consent for marketing communications at any time, Request data portability in a structured format, Lodge a complaint with relevant data protection authorities. To exercise these rights, please contact us using the information provided at the end of this policy."
        },
        {
            icon: Bell,
            title: "7. Cookies and Tracking Technologies",
            content: "We use cookies and similar technologies to: Remember your preferences and settings, Understand how you use our website, Provide personalized content and advertisements, Analyze website traffic and performance, Enable social media features. You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website. We use both session cookies (deleted when you close your browser) and persistent cookies (remain on your device until expiration or deletion)."
        },
        {
            icon: Mail,
            title: "8. Marketing Communications",
            content: "With your consent, we may send you promotional emails about our services, special offers, and travel tips. You can opt out of marketing communications at any time by: Clicking the 'unsubscribe' link in our emails, Updating your preferences in your account settings, Contacting us directly via email or phone. Please note that even if you opt out of marketing emails, we will still send you transactional messages related to your bookings and services."
        },
        {
            icon: UserCheck,
            title: "9. Children's Privacy",
            content: "Our services are not directed to children under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately, and we will take steps to delete such information from our systems."
        },
        {
            icon: Database,
            title: "10. Data Retention",
            content: "We retain your personal information for as long as necessary to: Fulfill the purposes outlined in this Privacy Policy, Comply with legal, tax, and accounting obligations, Resolve disputes and enforce our agreements, Provide you with services and customer support. After this period, we will securely delete or anonymize your information. Specific retention periods vary depending on the type of data and legal requirements."
        },
        {
            icon: Globe,
            title: "11. Third-Party Links",
            content: "Our website may contain links to third-party websites, including social media platforms, partner sites, and service providers. We are not responsible for the privacy practices or content of these external sites. We encourage you to read the privacy policies of any third-party sites you visit. Your interactions with these sites are governed by their respective privacy policies."
        },
        {
            icon: Shield,
            title: "12. Business Transfers",
            content: "In the event of a merger, acquisition, reorganization, or sale of assets, your personal information may be transferred to the acquiring entity. We will notify you via email and/or prominent notice on our website of any change in ownership or use of your personal information, as well as any choices you may have regarding your information."
        },
        {
            icon: Lock,
            title: "13. Legal Basis for Processing (GDPR)",
            content: "For users in the European Economic Area, we process your personal data based on: Contract performance (to provide travel services you've booked), Legitimate interests (to improve our services and prevent fraud), Legal obligations (to comply with tax and legal requirements), Your consent (for marketing communications and optional data processing). You have the right to withdraw consent at any time without affecting the lawfulness of processing based on consent before its withdrawal."
        },
        {
            icon: Bell,
            title: "14. Changes to This Privacy Policy",
            content: "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by: Posting the updated policy on our website with a new 'Last Updated' date, Sending an email notification to registered users (for significant changes), Requesting your consent where required by law. We encourage you to review this policy periodically to stay informed about how we protect your information."
        },
        {
            icon: Mail,
            title: "15. Contact Us",
            content: "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at: Email: privacy@yoomarrakech.com or through our contact form on the website. We aim to respond to all privacy-related inquiries within 48 hours during business days. For urgent matters regarding your personal data, please indicate this in your subject line."
        }
    ];

    return (
        <div className="min-h-screen bg-[#FDFBF7]">
            {/* Hero Section */}
            <section className="relative h-[45vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070)' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 via-neutral-900/50 to-neutral-900/70"></div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                                <Lock className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-light font-poppins text-white mb-6 tracking-tight">
                            Privacy <span className="font-bold">Policy</span>
                        </h1>
                        <p className="text-lg text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                            Your privacy is important to us. Learn how we collect, use, and protect your data.
                        </p>
                        <p className="text-sm text-white/70 mt-4">
                            Last Updated: January 2026
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Introduction */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-8 border border-neutral-100"
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <Shield className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold font-poppins text-neutral-dark mb-4">
                                    Our Commitment to Your Privacy
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    At Yoo Marrakech, we are committed to protecting your privacy and ensuring the security
                                    of your personal information. This Privacy Policy explains how we collect, use, disclose,
                                    and safeguard your data when you visit our website or use our travel services.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    We comply with applicable data protection laws, including the Moroccan Data Protection Law
                                    and, where applicable, the European Union's General Data Protection Regulation (GDPR).
                                    By using our services, you consent to the practices described in this policy.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Privacy Sections */}
                    <div className="space-y-6">
                        {sections.map((section, index) => {
                            const IconComponent = section.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.03 }}
                                    className="bg-white rounded-2xl shadow-sm p-8 border border-neutral-100 hover:shadow-md transition-shadow"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <IconComponent className="w-5 h-5 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold font-poppins text-neutral-dark">
                                            {section.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed pl-14">
                                        {section.content}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Data Protection Summary Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20"
                    >
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-full bg-white mx-auto mb-3 flex items-center justify-center shadow-sm">
                                    <Lock className="w-6 h-6 text-primary" />
                                </div>
                                <h4 className="font-bold text-neutral-dark mb-1 text-sm">Secure</h4>
                                <p className="text-xs text-gray-600">SSL encryption & secure servers</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-full bg-white mx-auto mb-3 flex items-center justify-center shadow-sm">
                                    <Shield className="w-6 h-6 text-primary" />
                                </div>
                                <h4 className="font-bold text-neutral-dark mb-1 text-sm">Protected</h4>
                                <p className="text-xs text-gray-600">Compliance with data laws</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-full bg-white mx-auto mb-3 flex items-center justify-center shadow-sm">
                                    <UserCheck className="w-6 h-6 text-primary" />
                                </div>
                                <h4 className="font-bold text-neutral-dark mb-1 text-sm">Your Control</h4>
                                <p className="text-xs text-gray-600">Access, modify, or delete data</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Footer Notice */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-8 bg-white rounded-2xl p-8 border border-neutral-100"
                    >
                        <div className="flex items-start gap-4">
                            <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-neutral-dark mb-2">Questions About Your Privacy?</h4>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    We're here to address any concerns you may have about how your personal information
                                    is handled. Your trust is important to us, and we're committed to transparency in
                                    all our data practices.
                                </p>
                                <a
                                    href="/en/contact"
                                    className="inline-block text-primary font-semibold hover:underline text-sm"
                                >
                                    Contact Our Privacy Team →
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
