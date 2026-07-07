import React from 'react';
import ArticleDetailsClient from './ArticleDetailsClient';

export default async function ArticleDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return <ArticleDetailsClient slug={resolvedParams.slug} />;
}
