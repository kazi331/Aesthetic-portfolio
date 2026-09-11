import ContactView from '@/components/pages/ContactView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact | Kazi Shariful Islam',
    description: 'Get in touch with Kazi Shariful Islam about product engineering, frontend systems, and full-stack development.',
};

export default function ContactPage() {
    return <ContactView />;
}
