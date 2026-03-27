import { MetadataRoute } from 'next';
import { client } from '@/sanity/client';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://55clubhouse.com';

  // Static routes
  const staticRoutes = [
    '',
    '/discover',
    '/matchmaker',
    '/login',
    '/about',
    '/concierge',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic estate routes (fetching from Sanity)
  // Note: This will work once you've added data to Sanity
  let estateRoutes: MetadataRoute.Sitemap = [];
  try {
    const slugs = await client.fetch<string[]>(`*[_type == "community"].slug.current`);
    estateRoutes = slugs.map((slug) => ({
      url: `${baseUrl}/estates/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Error fetching slugs for sitemap:', error);
  }

  return [...staticRoutes, ...estateRoutes];
}
