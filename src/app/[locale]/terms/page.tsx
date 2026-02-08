'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Shield } from 'lucide-react';

export default function TermsOfServicePage() {
    const sections = [
        {
            title: "1. Acceptance of Terms",
            content: "By accessing and using the Yoo Marrakech website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, and others who access or use our travel services."
        },
        {
            title: "2. Services Description",
            content: "Yoo Marrakech provides curated travel experiences in Morocco, including but not limited to guided tours, desert activities, transportation services, accommodation arrangements, and customized travel packages. All services are subject to availability and may be modified or discontinued at any time without prior notice."
        },
        {
            title: "3. Booking and Reservations",
            content: "All bookings are subject to availability and confirmation. We reserve the right to accept or decline any booking at our discretion. Prices are quoted in EUR and are subject to change without notice until booking is confirmed. A deposit or full payment may be required to secure your reservation. Payment terms will be communicated at the time of booking."
        },
        {
            title: "4. Cancellation and Refund Policy",
            content: "Cancellations must be made in writing via email. Cancellation fees apply as follows: 30+ days before departure - 25% fee; 15-29 days - 50% fee; 7-14 days - 75% fee; Less than 7 days or no-show - 100% fee (no refund). Refunds will be processed within 14 business days to the original payment method. Force majeure events may affect this policy."
        },
        {
            title: "5. Changes to Itinerary",
            content: "We reserve the right to modify itineraries due to weather conditions, safety concerns, local events, or unforeseen circumstances. In such cases, we will provide suitable alternatives of equal or greater value. No refunds will be provided for modifications made due to circumstances beyond our control."
        },
        {
            title: "6. Travel Documents and Requirements",
            content: "It is your responsibility to ensure you have valid travel documents, including passport, visa, travel insurance, and health requirements. Yoo Marrakech is not responsible for any issues arising from invalid or incomplete documentation. We recommend purchasing comprehensive travel insurance."
        },
        {
            title: "7. Health and Safety",
            content: "Participation in activities is at your own risk. You must disclose any medical conditions, disabilities, or dietary requirements at the time of booking. We reserve the right to refuse participation if we believe it poses a risk to you or others. Travel insurance with medical coverage is strongly recommended."
        },
        {
            title: "8. Liability and Indemnification",
            content: "Yoo Marrakech acts as an intermediary between clients and service providers (hotels, transport operators, guides). While we carefully select our partners, we are not liable for their actions or omissions. Our liability is limited to the amount paid for services. You agree to indemnify us against claims arising from your breach of these terms or misconduct during travel."
        },
        {
            title: "9. Intellectual Property",
            content: "All content on this website, including text, graphics, logos, images, and software, is the property of Yoo Marrakech and protected by Moroccan and international copyright laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission."
        },
        {
            title: "10. User Conduct",
            content: "You agree to use our services lawfully and respectfully. Prohibited conduct includes: providing false information, engaging in fraudulent activities, harassing staff or other travelers, damaging property, violating local laws, or disrupting services. We reserve the right to terminate services immediately for misconduct without refund."
        },
        {
            title: "11. Privacy and Data Protection",
            content: "Your personal information is collected and processed in accordance with our Privacy Policy. By using our services, you consent to the collection and use of your information as described. We implement reasonable security measures to protect your data but cannot guarantee absolute security."
        },
        {
            title: "12. Third-Party Services",
            content: "Our website may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of these third parties. Your interactions with third parties are solely between you and them."
        },
        {
            title: "13. Force Majeure",
            content: "Yoo Marrakech is not liable for failure to perform obligations due to circumstances beyond our reasonable control, including natural disasters, war, terrorism, civil unrest, government actions, pandemics, or other force majeure events. In such cases, we will make reasonable efforts to provide alternatives or refunds where possible."
        },
        {
            title: "14. Dispute Resolution",
            content: "Any disputes arising from these terms or our services shall be governed by Moroccan law. We encourage resolving disputes amicably through direct communication. If resolution cannot be reached, disputes shall be subject to the exclusive jurisdiction of the courts of Marrakech, Morocco."
        },
        {
            title: "15. Modifications to Terms",
            content: "We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes constitutes acceptance of the modified terms. We encourage you to review these terms periodically."
        },
        {
            title: "16. Contact Information",
            content: "For questions regarding these Terms of Service, please contact us via the contact information provided on our website. We aim to respond to all inquiries within 48 hours during business days."
        }
    ];

    return (
        <div className="min-h-screen bg-[#FDFBF7]">
            {/* Hero Section */}
            <section className="relative h-[45vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070)' }}
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
                                <Scale className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-light font-poppins text-white mb-6 tracking-tight">
                            Terms of <span className="font-bold">Service</span>
                        </h1>
                        <p className="text-lg text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                            Please read these terms carefully before using our services
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
                                <FileText className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold font-poppins text-neutral-dark mb-4">
                                    Welcome to Yoo Marrakech
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    These Terms of Service govern your use of Yoo Marrakech's website and travel services.
                                    By booking any of our tours, activities, or services, you enter into a legally binding
                                    agreement with us. We are committed to providing exceptional travel experiences while
                                    ensuring clarity and transparency in our business relationship with you.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Terms Sections */}
                    <div className="space-y-6">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="bg-white rounded-2xl shadow-sm p-8 border border-neutral-100 hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-xl font-bold font-poppins text-neutral-dark mb-4">
                                    {section.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {section.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer Notice */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 bg-primary/5 rounded-2xl p-8 border border-primary/10"
                    >
                        <div className="flex items-start gap-4">
                            <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-neutral-dark mb-2">Questions or Concerns?</h4>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    If you have any questions about these Terms of Service or need clarification on any
                                    point, please don't hesitate to contact us. We're here to ensure you have a clear
                                    understanding of our policies and a wonderful experience with Yoo Marrakech.
                                </p>
                                <a
                                    href="/en/contact"
                                    className="inline-block text-primary font-semibold hover:underline text-sm"
                                >
                                    Contact Us →
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
