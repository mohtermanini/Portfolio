export default async function sitemap() {
  const defaultPages = [
    {
      url: `https://mohtermanini.github.io/portfolio/`,
      lastModified: new Date("2024-11-23").toISOString(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  return [...defaultPages];
}
