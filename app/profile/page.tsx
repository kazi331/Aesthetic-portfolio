import ProfileView from '@/components/pages/ProfileView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Profile | Kazi Shariful Islam',
    description: 'Profile, experience, technical stack, education, and certifications for Kazi Shariful Islam.',
};

export default function ProfilePage() {
    return <ProfileView />;
}
