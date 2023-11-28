import { Feed } from "feed";

export function generateFeed(posts, metadata) {
  const site_url = "https://phree.dev";

  const feedOptions = {
    author: {
      name: "Pedro Portella",
      email: "pportella23@gmail.com",
      link: site_url,
    },
    description: metadata.description,
    favicon: `${site_url}/favicon.ico`,
    feedLinks: { atom: `${site_url}atom.xml`, rss: `${site_url}rss.xml` },
    generator: "Feed for Node.js",
    id: site_url,
    image: "https://github.com/pportella23.png",
    link: site_url,
    title: metadata.title,
  };

  const feed = new Feed(feedOptions);

  for (const post of posts) {
    feed.addItem({
      date: new Date(post.date),
      description: post.spoiler,
      id: `${site_url}${post.slug}/`,
      link: `${site_url}${post.slug}/`,
      title: post.title,
    });
  }

  return feed;
}
