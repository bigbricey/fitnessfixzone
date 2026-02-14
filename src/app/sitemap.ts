import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.fitnessfixzone.com';

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/reviews/weight-loss-supplements`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/guides/weight-loss-mistakes`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/guides/beginners-strength-training`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/reviews/best-home-gym-under-500`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/reviews/best-pre-workout`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/reviews/creatine-monohydrate-guide`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/guides`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/reviews`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/tools`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.4,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/disclaimer`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];
}
