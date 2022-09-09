import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import RSS from 'rss';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generate() {
  const feed = new RSS({
    title: 'MUEDSA BLOG',
    site_url: 'https://www.muedsa.com',
    feed_url: 'https://www.muedsa.com/feed.xml'
  });

  const posts = await fs.readdir(path.join(__dirname, '..', 'pages', 'posts'));

  await Promise.all(
    posts.map(async (name) => {
      if (name.startsWith('index.')) return;

      const content = await fs.readFile(
        path.join(__dirname, '..', 'pages', 'posts', name)
      );
      const frontMatter = matter(content);
      feed.item({
        title: frontMatter.data.title,
        url: '/posts/' + name.replace(/\.mdx?/, ''),
        date: frontMatter.data.date,
        description: frontMatter.data.description,
        categories: frontMatter.data.tag.split(', '),
        author: frontMatter.data.author
      });
    })
  );

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
