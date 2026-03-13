import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div style={{ background: 'var(--background)', minHeight: '100vh', paddingTop: '80px' }}>
            <div className="container" style={{ paddingTop: '60px', paddingBottom: '80px', maxWidth: '800px' }}>
                <h1 style={{ marginBottom: '24px' }}>Privacy Policy</h1>
                <p style={{ color: '#6B7280', marginBottom: '32px' }}>Last Updated: January 1, 2026</p>

                <div style={{ color: '#1C1C1E', lineHeight: '1.8', fontSize: '16px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <section>
                        <p style={{ color: '#6B7280' }}>
                            EventFlow ("we", "us", "our", or the "Application") is deeply committed to respecting the privacy and security of your personal data. This Privacy Policy and Disclosure Statement transparently explains how we collect your personal data, our processing purposes, data transfer processes, data retention policies, and your legal rights when you use the EventFlow mobile application, our website, and related services (collectively, the "Services") — in accordance with applicable data protection legislation, including the Turkish Personal Data Protection Law No. 6698 ("KVKK") and the European Union General Data Protection Regulation ("GDPR").

                            By accessing our Services, creating a user account, or downloading the application to your device, you acknowledge that you have understood the data processing activities described in this Privacy Policy.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>1. Identity of the Data Controller</h2>
                        <p style={{ color: '#6B7280' }}>
                            Under KVKK and GDPR legislation, your personal data is processed by EventFlow as the data controller.
                            Contact Address: info@eventflowapp.net
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>2. Categories of Personal Data Collected</h2>
                        <p style={{ color: '#6B7280' }}>
                            In order to provide you with a comprehensive social networking service, operate the application, and fulfill our legal obligations, we process the following categories of personal data:
                            <br /><br />
                            <strong>Identity and Account Data:</strong> Your first name, last name, email address, biography text, password (stored in encrypted form), and profile photo provided during registration. Your verified age declaration.
                            <br /><br />
                            <strong>Location and Geographic Data:</strong> EventFlow is designed to present physical events near you (within a kilometer radius you define) as a core function. To provide this service, we access your location data via your device's GPS sensors, Wi-Fi access points, and cell tower data. <em>Important Note:</em> Background location tracking is only performed if you have explicitly granted the relevant device permissions. Location data is anonymized in our systems after event matching.
                            <br /><br />
                            <strong>User-Generated Content and Interaction Data (UGC):</strong> Details of events you organize or attend within the app (title, description, date, time, venue), instant messages exchanged with other users via the in-app chat interface, photos you publish, feedback, flagging reports, and user blocking records.
                            <br /><br />
                            <strong>Device, Technical, and Usage Data:</strong> For the purpose of analyzing application performance and preventing security breaches: your device type (model/manufacturer), operating system version, IP address, MAC address, device identifiers (Device ID), application login/logout time logs, navigation behavior, and crash reports.
                            <br /><br />
                            <strong>Permission-Based Data:</strong> Camera and Gallery/Photos access permissions granted explicitly through the operating system interface to allow you to upload visuals to events or set a profile picture, and Push Notification permissions to send you real-time alerts.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>3. Purposes and Legal Bases for Processing Personal Data</h2>
                        <p style={{ color: '#6B7280' }}>
                            Your personal data is never processed without a lawful basis. Pursuant to KVKK Articles 5 and 6 and GDPR Article 6, we process your data on the following legal grounds:
                            <br /><br />
                            <strong>Performance of a Contract:</strong> Creating and managing your user account, displaying events localized on a map, operating the instant messaging infrastructure, and fulfilling your service requests.
                            <br /><br />
                            <strong>Compliance with Legal Obligations:</strong> Mandatory log-keeping obligations for the prevention of electronically committed crimes (requirements under Law No. 5651 in Turkey), responding to lawful information requests from competent judicial or administrative authorities (court orders, prosecutor subpoenas), and enforcing our strict 18+ age restriction on the platform.
                            <br /><br />
                            <strong>Legitimate Interests:</strong> Improving our services, fixing technical errors (debugging), detecting fraud or spam activities, ensuring the general security of the application, and conducting business development analytics (provided this does not harm the fundamental rights and freedoms of the data subject).
                            <br /><br />
                            <strong>Explicit Consent:</strong> Tracking your location while the app is closed (in the background), using third-party cookies for behavioral advertising, or specific profiling activities are carried out solely and exclusively based on the informed explicit consent you provide. You may withdraw this consent at any time via the application settings.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>4. Data Transfers and Sharing with Third Parties</h2>
                        <p style={{ color: '#6B7280' }}>
                            We never sell your personal data to advertising companies, data brokers, or unauthorized third parties. The transfer of your information is limited strictly to the following circumstances and governed by strict confidentiality agreements:
                            <br /><br />
                            <strong>In-Platform Visibility (Other Users):</strong> As a social network, your profile information (excluding your password and email), events you openly create, organizations you indicate attendance at, and content you post in public areas may be viewed by other users of the application.
                            <br /><br />
                            <strong>Data Processors and Infrastructure Providers (Sub-processors):</strong> We work with service providers that meet global security standards for operational needs such as database management, cloud server hosting, user authentication (IAM), and push notification delivery. Data Processing Agreements (DPAs) compliant with GDPR have been executed with all our third-party processors, including our database management system Appwrite. Your data is stored in these providers' systems using industry-standard encryption methods.
                            <br /><br />
                            <strong>Corporate Restructuring:</strong> In the event that our company enters into a merger, acquisition, asset sale, or insolvency process, your personal data may be transferred to the relevant parties, provided that privacy obligations are also transferred.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>5. Data Retention Periods (Retention Policy)</h2>
                        <p style={{ color: '#6B7280' }}>
                            Your personal data is retained for as long as required by the purpose for which it was collected, or until the end of the statutory limitation or mandatory retention periods imposed by applicable legislation:
                            <br /><br />
                            <strong>Active Membership Data:</strong> Retained while your account is active. Upon account deletion, unless there is an exceptional circumstance related to public safety or our legal rights, your data will be permanently deleted from our active live systems (excluding logs) within 30 days.
                            <br /><br />
                            <strong>Traffic and Log Records:</strong> System access logs, IP addresses, and connection records are securely retained for a minimum of 2 years in accordance with applicable electronic communications and data retention legislation, as they may serve as evidence in legal disputes.
                            <br /><br />
                            <strong>Financial and Commercial Transaction Records:</strong> Records relating to possible in-app purchases or commercial disputes may be retained for up to 10 years in accordance with the Turkish Commercial Code and Tax Procedure Law.
                            <br /><br />
                            Upon expiration of the stated retention periods, your data will be irreversibly deleted, destroyed, or anonymized in accordance with KVKK Data Disposal Policies.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>6. Data Security Measures</h2>
                        <p style={{ color: '#6B7280' }}>
                            We implement advanced administrative and technical security protocols to protect your personal data against unauthorized access, accidental loss, alteration, or disclosure. Our systems utilize Transport Layer Security (TLS/SSL) protocols, data encryption (AES standards), and regular vulnerability scanning. Your passwords are protected with one-way cryptographic hashing algorithms rather than being stored in a directly readable format. However, please note that no data transmission over the internet can be guaranteed to be 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>7. Cookies and Tracking Technologies</h2>
                        <p style={{ color: '#6B7280' }}>
                            Our application and website use cookies or mobile device identifiers to remember user preferences, manage sessions, and obtain analytics data. Strictly necessary functional cookies are required for the application to operate; however, the use of performance or targeting cookies is subject to your preferences (explicit consent) made via your device interface. You can manage the relevant cookie preferences at any time through your device's "Privacy" settings or the application's "Settings" menu.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>8. User Rights and Requests</h2>
                        <p style={{ color: '#6B7280' }}>
                            Under the provisions of KVKK Article 11 and GDPR (Articles 12–23), you have the following legal rights regarding your personal data:
                            <br /><br />
                            The right to learn whether your personal data is being processed, and if so, to request information about it (<strong>Right of Access</strong>);
                            <br /><br />
                            The right to learn the purpose of processing your personal data and whether it is being used in accordance with its purpose;
                            <br /><br />
                            The right to know the third parties to whom your personal data has been transferred, both domestically and abroad;
                            <br /><br />
                            The right to request correction of incomplete or inaccurately processed data (You can do this directly through the "Settings &gt; Edit Profile" section within the Application);
                            <br /><br />
                            The right to request deletion or destruction of your personal data within the framework of legal conditions (<strong>"Right to be Forgotten"</strong> — You can permanently delete your account and data from the system by following "Settings &gt; Account &gt; Delete Account");
                            <br /><br />
                            The right to object to a result that is produced against you through analysis of processed data exclusively by automated systems;
                            <br /><br />
                            The right to request that your personal data be provided to you in a structured, machine-readable format, or transferred to another data controller (<strong>Right to Data Portability</strong>);
                            <br /><br />
                            The right to request compensation for damages in the event that your personal data is processed unlawfully.
                            <br /><br />
                            To exercise these rights or to submit any questions regarding our data processing practices, please send your requests in writing to info@eventflowapp.net. Your requests will be evaluated and concluded free of charge within a maximum of thirty (30) days in accordance with applicable legislation (a fee determined by the Personal Data Protection Authority may be charged if the processing requires an additional cost).
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
