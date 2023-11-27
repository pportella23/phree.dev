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
    favicon: `${site_url}/nodes.png`,
    feedLinks: { atom: `${site_url}atom.xml`, rss: `${site_url}rss.xml` },
    generator: "Feed for Node.js",
    id: site_url,
    image:
      "https://avatars.githubusercontent.com/u/49278720?s=400&u=dd4261b7cdcfbe37297142088931e222b6b38b70&v=4",
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
