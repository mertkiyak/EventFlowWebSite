import React from 'react';

const HelpCenter = () => {
    return (
        <div style={{ background: 'var(--background)', minHeight: '100vh', paddingTop: '80px' }}>
            <div className="container" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
                <h1 style={{ marginBottom: '40px' }}>Help Center</h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ marginBottom: '12px', fontSize: '20px', color: '#1C1C1E' }}>What is EventFlow and How Do I Use It?</h3>
                        <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                            EventFlow is a social platform that lets you discover events happening around you and create your own. You can find new events through the home feed or on the map, and socialize based on your interests.
                        </p>
                    </div>

                    <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ marginBottom: '12px', fontSize: '20px', color: '#1C1C1E' }}>How Do I Create a New Event?</h3>
                        <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                            Go to Profile &gt; Settings &gt; tap the '+' (Add) icon in the bottom menu to reach the event creation page. You can set your event's name, description, date, time, location, and participant limit, then add a photo and publish it.
                        </p>
                    </div>

                    <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ marginBottom: '12px', fontSize: '20px', color: '#1C1C1E' }}>How Do I Join an Event?</h3>
                        <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                            Tap on an event that interests you from the home feed or map to open the detail page. Press the 'Join' button on the screen to complete your registration. You can find and track events you've joined using the event filters.
                        </p>
                    </div>

                    <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ marginBottom: '12px', fontSize: '20px', color: '#1C1C1E' }}>How Do I Use Event Filters?</h3>
                        <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                            You can filter events using the tabs at the top of the home page (All Events, Nearby, etc.) or by category (Entertainment, Sports, Arts, etc.). You can also go to Settings &gt; 'Nearby Distance' to adjust the search radius (in km) to narrow or expand the area.
                        </p>
                    </div>

                    <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ marginBottom: '12px', fontSize: '20px', color: '#1C1C1E' }}>How Do I Edit My Profile?</h3>
                        <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                            Go to the 'Profile' tab in the bottom menu. From there, or by tapping 'Edit Profile' in the Settings menu, you can update your name, bio, and profile photo at any time.
                        </p>
                    </div>

                    <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ marginBottom: '12px', fontSize: '20px', color: '#1C1C1E' }}>How Do I Send a Message to Someone?</h3>
                        <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                            Visit another user's profile page — either directly from their profile or through an event detail page — and tap the 'Send Message' button to start a conversation.
                        </p>
                    </div>

                    <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ marginBottom: '12px', fontSize: '20px', color: '#1C1C1E' }}>How Do I Control Who Can Message Me?</h3>
                        <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                            Go to 'Settings' &gt; 'Privacy' and toggle the 'Message Permission' option to control whether other users can send you unsolicited messages.
                        </p>
                    </div>

                    <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ marginBottom: '12px', fontSize: '20px', color: '#1C1C1E' }}>How Do I Change My Password?</h3>
                        <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                            You can securely change your account password from 'Settings' &gt; 'Security'.
                        </p>
                    </div>

                    <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ marginBottom: '12px', fontSize: '20px', color: '#1C1C1E' }}>Is Dark Mode Supported?</h3>
                        <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                            Yes! Go to 'Settings' &gt; 'Appearance' and use the Dark Mode toggle to switch your theme between light and dark.
                        </p>
                    </div>

                    <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ marginBottom: '12px', fontSize: '20px', color: '#1C1C1E' }}>Can I Turn Off Notifications?</h3>
                        <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                            Yes. Go to 'Settings' &gt; 'Notifications' to enable or disable push notifications and email notifications according to your personal preferences.
                        </p>
                    </div>

                    <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ marginBottom: '12px', fontSize: '20px', color: '#1C1C1E' }}>How Do I Submit Feedback or a Complaint?</h3>
                        <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                            You can easily send us suggestions, bug reports, or complaints about your app experience through 'Settings' &gt; 'Feedback'.
                        </p>
                    </div>

                    <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ marginBottom: '12px', fontSize: '20px', color: '#1C1C1E' }}>Can I Permanently Delete My Account?</h3>
                        <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                            Yes. Use the 'Delete Account' button at the very bottom of the 'Settings' menu to delete your account. Please note that this action is permanent and cannot be undone.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;
