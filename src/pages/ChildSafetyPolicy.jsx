import React from 'react';

const ChildSafetyPolicy = () => {
    return (
        <div style={{ background: 'var(--background)', minHeight: '100vh', paddingTop: '80px' }}>
            <div className="container" style={{ paddingTop: '60px', paddingBottom: '80px', maxWidth: '800px' }}>
                <h1 style={{ marginBottom: '24px' }}>EventFlow Comprehensive Child Safety, CSAE Policy, and Legal Compliance Statement</h1>
                <p style={{ color: '#6B7280', marginBottom: '32px' }}>Last Updated: March 2026</p>

                <div style={{ color: '#1C1C1E', lineHeight: '1.8', fontSize: '16px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <section>
                        <p style={{ color: '#6B7280' }}>
                            EventFlow olarak çocukların güvenliği ve korunması en temel önceliğimizdir. Bu politika,
                            platformumuzda çocuklara yönelik her türlü istismar içeriğine (CSAM) ve zararlı davranışa
                            karşı sıfır tolerans politikamızı ve bu alandaki taahhütlerimizi açıklamaktadır.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>1. Executive Summary and Platform's Core Philosophy</h2>
                        <p style={{ color: '#6B7280' }}>
                            The evolution of the digital ecosystem has transformed social networks from mere online communication tools into hybrid platforms that drive interactions and organizations in the physical world. While this transformation offers unique socialization opportunities, especially for younger users, it has also diversified the abuse vectors for malicious actors. Child exploitation, cyberbullying, and online manipulation (grooming) carried out through social platforms have become the highest priority battlegrounds for technology companies, legislators, and non-governmental organizations globally.In this context, EventFlow—a Social Event Discovery and Organization Platform published under the package name "com.eventflow.app" and primarily targeting users aged 13 and above—considers child safety not merely as a legal obligation but as a fundamental ethical principle placed at the center of its architectural design. Developed with the React Native (Expo) framework and utilizing the Appwrite infrastructure for data management, EventFlow has a dynamic structure that allows users to create events based on their geographical locations, discover these events, message each other, and build social networks. The nature of the platform, which translates online interactions into physical meetups (Online-to-Offline - O2O), necessitates the construction of impenetrable security barriers to ensure the physical and psychological safety of children.This report and official statement draft have been prepared to detail EventFlow's strict compliance with the United States Children's Online Privacy Protection Act (COPPA), the Republic of Turkey's Law No. 5651, and specifically the "Child Safety Standards" and "CSAE Policy" requirements implemented by the Google Play Store for the 2024-2025 period. Throughout the document, the application's technical protection layers, algorithmic age verification systems, content moderation strategies, and reporting procedures to authorized mechanisms are analyzed in depth, presenting a transparent and auditable security architecture.Furthermore, to comply with Google Play's Photo and Video Permissions policy (READ_MEDIA_IMAGES and READ_MEDIA_VIDEO) taking effect in May 2025, EventFlow will apply data minimization principles. It will only request media access when directly related to the app's core functions, such as event creation, and will prioritize system picker  integrations.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>2. Google Play Child Safety Standards and Compliance Framework</h2>
                        <p style={{ color: '#6B7280', marginBottom: '24px' }}>
                            Google Play implements a constantly evolving set of policies to protect its platform ecosystem. Child safety standards for applications in the Social and Dating categories are mandatory, even if the application's target audience is strictly adults. Due to its functionality within these categories, EventFlow is directly subject to Google Play's child safety policies and is designed to comply with all critical deadlines set for the 2024 and 2025 period.Under Google Play's CSAE and Child Safety standards, developers are required to submit their self-certification declarations via the Play Console by January 22, 2025, and achieve full compliance by March 19, 2025. The EventFlow team has built the following five core compliance pillars in conjunction with this statement:
                        </p>

                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '8px' }}>
                                <thead>
                                    <tr style={{ textAlign: 'left', borderBottom: '1px solid #E5E7EB' }}>
                                        <th style={{ padding: '16px 16px 16px 0', color: '#1C1C1E', fontWeight: '600', width: '30%' }}>Google Play Obligation</th>
                                        <th style={{ padding: '16px 0 16px 16px', color: '#1C1C1E', fontWeight: '600' }}>EventFlow's Architectural and Operational Response</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                                        <td style={{ padding: '24px 16px 24px 0', verticalAlign: 'top', color: '#1C1C1E', fontWeight: '600' }}>
                                            Published CSAE Standards
                                        </td>
                                        <td style={{ padding: '24px 0 24px 16px', verticalAlign: 'top', color: '#6B7280' }}>
                                            The platform's Terms of Service and the entirety of this document explicitly declare to the public and users a zero-tolerance policy against Child Sexual Abuse and Exploitation (CSAE).
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                                        <td style={{ padding: '24px 16px 24px 0', verticalAlign: 'top', color: '#1C1C1E', fontWeight: '600' }}>
                                            In-App Reporting Mechanism
                                        </td>
                                        <td style={{ padding: '24px 0 24px 16px', verticalAlign: 'top', color: '#6B7280' }}>
                                            An integrated reporting mechanism has been designed, allowing users to report suspicious profiles and events directly from within the app without leaving the platform.
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                                        <td style={{ padding: '24px 16px 24px 0', verticalAlign: 'top', color: '#1C1C1E', fontWeight: '600' }}>
                                            Active Fight Against CSAM
                                        </td>
                                        <td style={{ padding: '24px 0 24px 16px', verticalAlign: 'top', color: '#6B7280' }}>
                                            Technical workflows have been established for the immediate isolation, deletion, and reporting of Child Sexual Abuse Material (CSAM) to international organizations (NCMEC) upon detection.
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                                        <td style={{ padding: '24px 16px 24px 0', verticalAlign: 'top', color: '#1C1C1E', fontWeight: '600' }}>
                                            Compliance with Local and Global Laws
                                        </td>
                                        <td style={{ padding: '24px 0 24px 16px', verticalAlign: 'top', color: '#6B7280' }}>
                                            Age verification, data minimization, and reporting obligations under US COPPA, the REPORT Act, EU regulations, and Turkey's Law No. 5651 are integrated at the code level.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '24px 16px 24px 0', verticalAlign: 'top', color: '#1C1C1E', fontWeight: '600' }}>
                                            Official Point of Contact (PoC)
                                        </td>
                                        <td style={{ padding: '24px 0 24px 16px', verticalAlign: 'top', color: '#6B7280' }}>
                                            The responsible developer and communication channels have been clearly designated to directly interact with official institutions and Google Play reviewers.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p style={{ color: '#6B7280', marginBottom: '24px' }}>
                            Furthermore, to comply with Google Play's Photo and Video Permissions policy (READ_MEDIA_IMAGES and READ_MEDIA_VIDEO) taking effect in May 2025, EventFlow will apply data minimization principles. It will only request media access when directly related to the app's core functions, such as event creation, and will prioritize system picker (Android photo picker) integrations.</p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>3. Clear Stance on CSAE (Child Sexual Abuse and Exploitation) and Zero Tolerance Policy</h2>
                        <p style={{ color: '#6B7280' }}>
                            Our zero-tolerance policy covers not only explicit abuse imagery but also all communication and behavioral patterns that pave the way for exploitation. The following actions and materials are strictly prohibited across all content areas offered by our application, including text messages, event titles, event descriptions, user biographies, and uploaded media files: The primary forms of CSAE banned within the platform ecosystem are:
                            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px', marginBottom: '8px' }}>
                                <li><strong>1. Child Sexual Abuse Material (CSAM):</strong> Any sexually explicit material depicting individuals under the age of 18 or figures appearing to be children is immediately deleted from the platform. This ban is unhesitatingly applied not only to images of real children but also to Artificial Intelligence Generated Content (AIGC), drawings, animations, and sexualized anthropomorphic depictions.</li>
                                <li><strong>2. Grooming (Online Manipulation and Trust Building):</strong> Long-term psychosocial manipulation tactics employed by malicious adults to gain the trust of targeted children, isolate them, and ultimately persuade them into sexual interaction are strictly prohibited. EventFlow considers suspicious interactions with obvious age gaps and conversational patterns demanding secrecy from children (e.g., "let's keep this between us," "don't tell anyone") as attempted exploitation.</li>
                                <li><strong>3. Sextortion (Sexual Extortion):</strong> The use of sexually explicit images obtained from underage users through manipulation or threats as an element of blackmail for financial gain or to acquire more images is considered one of the most severe violations on our platform.</li>
                                <li><strong>4. Sexualized Context and Erotic Roleplay:</strong> "Erotic roleplay" games, jokes, sexualized chat rooms, or event organizations serving this purpose that involve underage users are shut down instantly, and the associated accounts are permanently banned from the platform.</li>
                                <li><strong>5. Doxxing and Disclosure of Personal Information:</strong> The non-consensual sharing of personally identifiable information (PII) that leaves children vulnerable in the physical world and exposes them to potential abusers—such as their full names, schools, home addresses, and daily routines—is grounds for a violation.</li>
                            </ul>
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>4. Technical Safeguards and Security Layers (Security by Design)</h2>
                        <p style={{ color: '#6B7280' }}>
                            International standards dictate that child safety cannot be achieved merely through policies on paper, but must be ensured via robust technical barriers integrated into the application's core architecture. Taking into account the Open Web Application Security Project (OWASP) Mobile Application Security Verification Standard (MASVS) , the EventFlow architecture has been built to prevent threat actors from abusing the system.
                            <br /><br />
                            <strong>4.1. Age Verification, Age Gating, and COPPA Compliance</strong>
                            <br />
                            In accordance with the standards of the United States Children's Online Privacy Protection Act (COPPA) and the European Union General Data Protection Regulation (GDPR-K), digital platforms cannot collect, process, or share data from children under the age of 13 with third parties without verifiable parental consent. EventFlow is designed not to serve children under 13 and enforces this restriction with a strict age verification algorithm.
                            <br /><br />
                            During the application's startup and onboarding flow, the age information provided by the user is subjected to a mathematical and logical verification process. The security check implemented in the relevant React Native component (onboarding.tsx) is as follows:
                            <br /><br />
                            <strong>// onboarding.tsx</strong>
                            <br />
                            <pre style={{ backgroundColor: '#F3F4F6', padding: '16px', borderRadius: '8px', overflowX: 'auto', marginTop: '8px', marginBottom: '8px' }}>
                                <code>
                                    {`if (!age || isNaN(ageNum) || ageNum < 13 || ageNum > 120) {
    Alert.alert("Error", "Please enter a valid age (13-120)");
    return false;
}`}
                                </code>
                            </pre>
                            An analysis of this code snippet demonstrates that the system only accepts valid numerical values (isNaN(ageNum) check) and stops the registration process for individuals under 13 on the client side before any data is sent to the server. Furthermore, an upper limit of 120 years has been set to prevent meaningless data entries (API Abuse).
                            <br /><br />
                            However, it is a known behavioral pattern for children to fake their age (age-faking) to bypass age gates. COPPA guidelines and US State Laws (e.g., Texas, Utah, Louisiana, and California Age Verification Laws) require platforms to take measures against attempts to bypass age verification systems. In compliance with these laws, EventFlow is being designed to add a temporary restriction flag to the local storage of a device that has been rejected for entering an age under 13, preventing the user from returning and creating a new account by increasing their age (e.g., entering 18). This is a requirement of the "Neutral Age Gate" principle.
                            <br /><br />
                            <strong>Event-Based Age Design (Age Design Minimization):</strong>
                            <br />
                            In addition to the general age verification during registration, EventFlow has integrated a min_age (minimum participation age) parameter into the event creation module. This parameter allows event organizers to restrict their events to a specific age group (e.g., only 18 and over). This aligns with the "age design minimization" laws prominent in states like Utah and Louisiana , preventing adult-oriented events from appearing in the discovery feeds of younger users.
                            <br /><br />
                            <strong>4.2. Communication, Messaging Security, and Abuse Control</strong>
                            <br />
                            The initial point of contact between abusers and victims is often the direct messaging (DM) features of platforms. EventFlow's messaging architecture features authorization layers that prevent anonymous individuals from reaching young users. Against OWASP M3 (Insecure Authentication and Authorization) threats , communication can only occur between authenticated accounts; anonymous messaging is strictly unsupported.
                            <br /><br />
                            The platform offers a proactive security setting, the message_permission configuration, which grants users the authority to filter incoming messages:
                            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px', marginBottom: '8px' }}>
                                <li><strong>everyone:</strong> Allows the user to receive messages from anyone on the platform. To protect the digital well-being of young users (13-17), this setting can be kept off by default or activated only for adult accounts.</li>
                                <li><strong>followers_only:</strong> Allows the user to receive messages only from people they have authorized, follow, or mutually follow. This structured permission mechanism is the most critical barrier preventing random adults from sending direct messages to children.</li>
                            </ul>
                            Additionally, message ownership verification is implemented at the code level. Users can only delete messages they have sent, and this action is secured on the server side by comparing the senderId with the database record (Insecure Direct Object Reference - IDOR protection). Similarly, the inability of a user to send a message to themselves (senderId === receiverId check) prevents server-side manipulations, infinite loop attacks, and API abuse.
                            <br /><br />
                            <strong>4.3. Authentication, Session Management, and Backend Isolation</strong>
                            <br />
                            Appwrite, which forms the backend infrastructure of the application, handles data storage and identity management processes with industry-standard cryptographic guarantees.
                            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px', marginBottom: '8px' }}>
                                <li><strong>Mandatory Authentication:</strong> Anonymous guest accounts are not permitted. Everyone entering the system must have a verified identity based on email and password (or supported via OAuth in the future).</li>
                                <li><strong>Data Minimization and Isolation:</strong> Session tokens are stored isolated on the device in accordance with OWASP M9 (Insecure Data Storage) guidelines, thus preventing unauthorized access.</li>
                                <li><strong>Right to be Forgotten:</strong> The ability for users to permanently delete their accounts at any time triggers the irreversible scrubbing of all associated personal data and message contents from the database. This is a crucial safety feature that allows child users to permanently erase their past digital footprints.</li>
                            </ul>
                            <br />
                            <strong>4.4. O2O (Online-to-Offline) Event Content Security and Prevention of Physical Threats</strong>
                            <br />
                            EventFlow's primary function is to transition people from the online world to the physical world (O2O). This brings real-world harms beyond cyberbullying, such as child abduction, human trafficking, and physical sexual abuse.
                            <br /><br />
                            Events are created using data points like title, description, category, and minimum age fields. Server-side data validation processes (Input/Output Validation - OWASP M4) prevent the injection of malicious scripts (XSS) or illegal external links into event contents. Furthermore, the ability to categorize and filter events by specific tags sets an analytical foundation for detecting inappropriate organizations that violate community guidelines.
                            <br /><br />
                            To minimize the risks associated with physical meetups, EventFlow takes into account the guiding principles of Scouting organizations and child protection associations. According to these principles, in-app Safety Notices will be integrated advising that if meeting someone met on the app in real life (especially for young users aged 13-17), these meetings should take place in crowded environments and must be accompanied by a trusted parent or adult.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>5. Content Moderation Strategy and Architecture</h2>
                        <p style={{ color: '#6B7280' }}>
                            Child safety on social platforms requires a dynamic moderation network that detects, blocks, and reports harmful content to authorities. EventFlow adopts a strategy that blends reactive (user-reported) and proactive (automated) moderation techniques.
                            <br /><br />
                            <strong>5.1. Current Status: Reactive Moderation and Community Reports</strong>
                            <br />
                            In its current development phase, the application relies heavily on a user-driven reporting mechanism. However, technology and psychology research indicates that relying solely on children's reporting mechanisms is insufficient; children are often reluctant to use reporting buttons, fear retaliation, or are manipulated (groomed). Therefore, it is essential to support reactive systems with proactive algorithms.
                            <br /><br />
                            <strong>5.2. Planned and Committed Proactive Measures</strong>
                            <br />
                            Following the release of the application's full version on the Google Play Store, the following package of measures will go live in accordance with the planned schedule to strengthen the security ecosystem:
                        </p>

                        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '8px' }}>
                                <thead>
                                    <tr style={{ textAlign: 'left', borderBottom: '1px solid #E5E7EB' }}>
                                        <th style={{ padding: '16px 16px 16px 0', color: '#1C1C1E', fontWeight: '600', width: '25%' }}>Planned Measure / Technology</th>
                                        <th style={{ padding: '16px 16px 16px 16px', color: '#1C1C1E', fontWeight: '600', width: '55%' }}>Functional Description and Security Contribution</th>
                                        <th style={{ padding: '16px 0 16px 16px', color: '#1C1C1E', fontWeight: '600', width: '20%' }}>Implementation Priority</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                                        <td style={{ padding: '24px 16px 24px 0', verticalAlign: 'top', color: '#1C1C1E', fontWeight: '600' }}>Advanced User Blocking</td>
                                        <td style={{ padding: '24px 16px 24px 16px', verticalAlign: 'top', color: '#6B7280' }}>Infrastructure allowing any user to instantly block other users exhibiting harassing or disturbing behavior platform-wide. This is the first line of defense to cut off unwanted contact.</td>
                                        <td style={{ padding: '24px 0 24px 16px', verticalAlign: 'top', color: '#6B7280' }}>Very High</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                                        <td style={{ padding: '24px 16px 24px 0', verticalAlign: 'top', color: '#1C1C1E', fontWeight: '600' }}>Contextual In-App Reporting</td>
                                        <td style={{ padding: '24px 16px 24px 16px', verticalAlign: 'top', color: '#6B7280' }}>Integrated "Report" buttons featuring detailed sub-categories (e.g., "Nudity," "Harassment," "Dangerous Substance") will be added, easily accessible for every event page, message thread, and user profile.</td>
                                        <td style={{ padding: '24px 0 24px 16px', verticalAlign: 'top', color: '#6B7280' }}>Very High</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                                        <td style={{ padding: '24px 16px 24px 0', verticalAlign: 'top', color: '#1C1C1E', fontWeight: '600' }}>Lexical Keyword Filtering</td>
                                        <td style={{ padding: '24px 16px 24px 16px', verticalAlign: 'top', color: '#6B7280' }}>Real-time scanning and filtering of specific keyword patterns used for grooming, drug trafficking, or sextortion (e.g., "don't tell anyone," "let's meet in secret," "nude photo") via server-side algorithms.</td>
                                        <td style={{ padding: '24px 0 24px 16px', verticalAlign: 'top', color: '#6B7280' }}>High</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                                        <td style={{ padding: '24px 16px 24px 0', verticalAlign: 'top', color: '#1C1C1E', fontWeight: '600' }}>Comprehensive Moderation Panel</td>
                                        <td style={{ padding: '24px 16px 24px 16px', verticalAlign: 'top', color: '#6B7280' }}>A dedicated admin panel where reported content, message logs, and user history can be reviewed holistically, preserving the chain of custody for forensic processes.</td>
                                        <td style={{ padding: '24px 0 24px 16px', verticalAlign: 'top', color: '#6B7280' }}>High</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                                        <td style={{ padding: '24px 16px 24px 0', verticalAlign: 'top', color: '#1C1C1E', fontWeight: '600' }}>CSAM Hash Scanning <br />(PhotoDNA / NCMEC Ent.)</td>
                                        <td style={{ padding: '24px 16px 24px 16px', verticalAlign: 'top', color: '#6B7280' }}>Taking cryptographic hashes of visual content uploaded to the platform and automatically/proactively comparing them against known CSAM databases like NCMEC or PhotoDNA. Automatic isolation of content in case of a match.</td>
                                        <td style={{ padding: '24px 0 24px 16px', verticalAlign: 'top', color: '#6B7280' }}>High (Mid-term Plan)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p style={{ color: '#6B7280' }}>
                            <strong>Cross-Platform Threat Intelligence Vision:</strong><br />
                            In the future, EventFlow plans to incorporate the principles of sector-wide initiatives like "Lantern" into its vision. Abusers often find their victims on a public platform (like an event discovery app such as EventFlow) and attempt to move the communication to another end-to-end encrypted (E2EE) platform. Therefore, participating in standardized networks where signals belonging to accounts exhibiting suspicious behavior (email addresses, suspicious IPs) can be shared with other platforms and authorities is part of the long-term security strategy.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>6. CSAE Violation Reporting, Legal Reporting, and Judicial Procedures</h2>
                        <p style={{ color: '#6B7280' }}>
                            Platform providers have an obligation to immediately inform legal authorities upon the detection of child sexual abuse materials (CSAM) or organized criminal activities targeting children. EventFlow operates a three-tiered reporting architecture covering both international standards (US-based global institutions) and local law (Republic of Turkey institutions).
                            <br /><br />
                            <strong>6.1. User-to-Platform Reporting Mechanisms</strong>
                            <br />
                            EventFlow provides multiple channels for users to quickly report harmful content they encounter:
                            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px', marginBottom: '8px' }}>
                                <li><strong>In-App Reporting Interface:</strong> Forms that will be included next to every piece of content in the upcoming version, automatically attaching log records and forwarding them to the moderation team.</li>
                                <li><strong>Official Security Email:</strong> Users can report emergencies or detailed complaints directly to security experts via info@eventflowapp.net.</li>
                            </ul>
                            <br />
                            <strong>6.2. Commitment to Reporting to United States Authorities (NCMEC and REPORT Act)</strong>
                            <br />
                            Due to the transnational nature of child exploitation on the internet, international cooperation is imperative. The "REPORT Act," which came into effect in the US in May 2024 with an expanded legal scope, mandates that platforms report cases such as child sex trafficking and online enticement to the National Center for Missing & Exploited Children (NCMEC).
                            <br /><br />
                            Within the scope of relevant legislation and Google Play policies, EventFlow commits to taking the following actions for any content identified or reasonably suspected of containing CSAM:
                            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px', marginBottom: '8px' }}>
                                <li>Immediately removing it from servers and blocking external access,</li>
                                <li>Freezing the activities of the associated account,</li>
                                <li>Promptly forwarding the obtained digital evidence (image hashes, IP addresses, timestamps, account details) to the NCMEC CyberTipline system via <a href="https://www.cybertipline.org" style={{ color: '#007AFF' }}>www.cybertipline.org</a>.</li>
                            </ul>
                            NCMEC creates a global safety net by forwarding 84% of these reports received from around the world to judicial authorities outside the US, and to local law enforcement via Interpol and Europol.
                            <br /><br />
                            <strong>6.3. Commitment to Reporting to Republic of Turkey Authorities (BTK, İhbar Web, and EGM)</strong>
                            <br />
                            EventFlow fully complies with the laws of the Republic of Turkey, particularly the provisions of Law No. 5651 on the "Regulation of Publications on the Internet and Combating Crimes Committed by Means of Such Publications." Child sexual abuse (Turkish Penal Code Article 103/1) is one of the primary catalog crimes listed in Article 8 of this law that require immediate access blocking/reporting.
                            <br /><br />
                            When a CSAE violation occurring within the borders of Turkey or involving Turkish citizens is detected on the platform, the following procedures will be applied:
                            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px', marginBottom: '8px' }}>
                                <li><strong>BTK and İhbar Web Coordination:</strong> An official report will be filed under the "Child Sexual Abuse" category through the "İhbar Web" platform (www.ihbarweb.org.tr) operating under the Information and Communication Technologies Authority (BTK). Because İhbar Web is also a member of the international INHOPE network, it contributes to global CSAM databases.</li>
                                <li><strong>General Directorate of Security (EGM) Cybercrime Department:</strong> In urgent situations posing an imminent physical threat, or carrying a suspicion of real-life child abduction or physical abuse (O2O risks), the obtained log records and IP addresses will be immediately forwarded to the EGM Anti-Cyber Crime Department (Siberay) (siberay@egm.gov.tr).</li>
                                <li><strong>Social Support and ALO 183:</strong> In the event of identifying victimized children who have suffered exploitation or cyberbullying, cooperation will be established with the ALO 183 Social Support Hotline and WhatsApp reporting channels so they can receive psychosocial support in accordance with the TR Ministry of Family and Social Services' "Empowering Children in the Digital World" strategy, and official mechanisms will be mobilized to prevent further victimization.</li>
                            </ul>
                            <br />
                            <strong>6.4. Data Retention and Forensic Evidence Preservation</strong>
                            <br />
                            Records regarding reported content are deleted from the database in a way that users cannot access them, but they are not permanently destroyed. In compliance with the US REPORT Act and legal obligations in Turkey (mandatory log retention) , data of accounts involved in a violation (IP addresses, message histories, registration details) will be retained in secure, encrypted, and isolated offline archives for the duration that official authorities and courts may request them during judicial processes.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>7. Terms of Use and Strictly Prohibited Content</h2>
                        <p style={{ color: '#6B7280' }}>
                            Every individual using the EventFlow platform is deemed to have accepted the platform's Community Guidelines and Terms of Use during the registration phase. In alignment with the safety policies of major platforms like Discord and TikTok , the following content types and behavioral patterns are strictly prohibited on EventFlow:
                            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px', marginBottom: '8px' }}>
                                <li><strong>CSAM and Exploitation:</strong> Any content that contains, encourages, depicts, or facilitates the distribution of child sexual abuse or exploitation (whether real or AI-generated).</li>
                                <li><strong>Grooming and Predatory Behavior:</strong> Psychological manipulation tactics targeting children to gain their trust and prepare them for exploitation, and acts of demanding secrecy using phrases like "let's keep this a secret between us."</li>
                                <li><strong>Transmitting Adult Content to Minors:</strong> Sending explicit content, sexual propositions, or messages to individuals under the age of 18. (Even if the sender is also under 18, soliciting sexual content from minors is strictly forbidden).</li>
                                <li><strong>Disclosure of Personal Data (Doxxing):</strong> Non-consensual sharing of personally identifiable data that endangers the physical safety of children, such as real name, home address, school information, live location, or phone number.</li>
                                <li><strong>Age Faking and Catfishing:</strong> Understating or hiding one's age, or creating a fake persona (profile) to gain the trust of underage users.</li>
                            </ul>
                            Accounts of users violating these rules will be permanently banned without any warning, the devices they use will be technically blocked from accessing the platform, and the collected digital evidence will be immediately handed over to legal authorities.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>8. Data Privacy, Data Minimization, and Protection of Minors</h2>
                        <p style={{ color: '#6B7280' }}>
                            The online safety of children is directly tied to the protection of their data. EventFlow applies the strictest international data minimization principles in the collection and processing of user data.
                            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px', marginBottom: '8px' }}>
                                <li><strong>Under 13 User Isolation:</strong> The application technically blocks the registration of users under 13. If data belonging to a child under 13 is found to have been collected accidentally or intentionally, this data is immediately and irreversibly deleted from the servers per COPPA standards.</li>
                                <li><strong>Planned Protections for Teen Accounts (13-17):</strong> In parallel with the safety initiatives of Meta and Discord , there are plans to implement age-specific security architectures in the future, such as making the profiles of young users aged 13-17 more private by default and automatically blocking direct messages from strangers (unfollowed adults).</li>
                                <li><strong>Cryptographic Data Security:</strong> User data, passwords, and session information are stored encrypted on Appwrite's secure servers, both in transit (TLS/SSL) and at rest.</li>
                                <li><strong>Location and Media Privacy:</strong> Strict rules are enforced regarding location tracking, which is the biggest risk for social event platforms. Location information is not collected without permission in the background; it is processed temporarily only when the app is active and with the user's explicit, revocable consent (opt-in). This minimizes physical stalking risks.</li>
                            </ul>
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>9. Parental Guidance and Digital Supervision</h2>
                        <p style={{ color: '#6B7280' }}>
                            No matter how high the technological protection walls are, the ultimate safety of children in the digital world is subject to the conscious supervision of parents and legal guardians. EventFlow invites parents to actively guide their children's digital footprints and social interactions.
                            <br /><br />
                            In line with the guidelines of the BTK Safe Internet Center and pediatric health experts , parents are advised to implement the following fundamental safety practices:
                            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px', marginBottom: '8px' }}>
                                <li><strong>Open Communication:</strong> Establish regular, non-judgmental communication with children about the people they meet online and the events they attend.</li>
                                <li><strong>Physical Meetup Control:</strong> Ensure that any real-world meetup (O2O) with individuals met on social platforms takes place with the parents' knowledge, in public places, and accompanied by an adult.</li>
                                <li><strong>Privacy Settings:</strong> Set EventFlow's message permissions (message_permission) on children's phones to followers_only to cut off direct contact from strangers.</li>
                                <li><strong>Personal Data Awareness:</strong> Teach children the risks associated with sharing information like real names, home addresses, and schools in digital environments (Digital Footprint).</li>
                            </ul>
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>10. Contact Information, Official Statement, and Full Commitment</h2>
                        <p style={{ color: '#6B7280' }}>
                            In accordance with the principle of transparency, EventFlow agrees to maintain constant communication with official authorities, parents, and Google Play policy experts. The authorized person and communication channels designated under Google Play's "Point of Contact" requirement for Child Safety are as follows:
                        </p>
                        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '8px' }}>
                                <thead>
                                    <tr style={{ textAlign: 'left', borderBottom: '1px solid #E5E7EB' }}>
                                        <th style={{ padding: '16px 16px 16px 0', color: '#1C1C1E', fontWeight: '600', width: '30%' }}>Type of Contact Channel</th>
                                        <th style={{ padding: '16px 0 16px 16px', color: '#1C1C1E', fontWeight: '600', width: '70%' }}>Contact Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                                        <td style={{ padding: '16px 16px 16px 0', verticalAlign: 'top', color: '#1C1C1E', fontWeight: '600' }}>Responsible Developer & Legal Representative</td>
                                        <td style={{ padding: '16px 0 16px 16px', verticalAlign: 'top', color: '#6B7280' }}>Mert Kıyak</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                                        <td style={{ padding: '16px 16px 16px 0', verticalAlign: 'top', color: '#1C1C1E', fontWeight: '600' }}>General Contact and Security Reporting Email</td>
                                        <td style={{ padding: '16px 0 16px 16px', verticalAlign: 'top', color: '#6B7280' }}>info@eventflowapp.net</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                                        <td style={{ padding: '16px 16px 16px 0', verticalAlign: 'top', color: '#1C1C1E', fontWeight: '600' }}>Official Website and Policies</td>
                                        <td style={{ padding: '16px 0 16px 16px', verticalAlign: 'top', color: '#6B7280' }}><a href="https://www.eventflowapp.net" style={{ color: '#007AFF' }}>https://www.eventflowapp.net</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p style={{ color: '#6B7280' }}>
                            In emergencies, forensic cases, and child safety reports, requests from official authorities will be prioritized and responded to promptly within legal timeframes.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ChildSafetyPolicy;
