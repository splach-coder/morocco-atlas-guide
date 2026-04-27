import { LinksPageContent } from '@/components/LinksPageContent';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('LinksPage');
    return {
        title: t('meta.title'),
        description: t('meta.description'),
    };
}

export default function LinksPage() {
    return <LinksPageContent />;
}
