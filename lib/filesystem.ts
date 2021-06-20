import path from 'path';
import { promises as fs } from 'fs'
import slug from 'limax'

const dataDir = path.join(process.cwd(), 'data');

export async function getChapter(query: string) {
  const filenames = await fs.readdir(dataDir);
  const file = filenames.find(name => slug(path.parse(name).name) === query);
  const contents = await fs.readFile(path.join(dataDir, file), 'utf8');

  const concepts = contents.split(/^# /gim).map(ch => {
    const a = ch.split('\n');
    return {
      title: a.shift().trim(),
      content: a.join('\n').trim(),
    }
  });

  concepts.shift();
  return {
    name: path.parse(file).name,
    concepts
  }
}

export async function getAllChapters() {
  const filenames = await fs.readdir(dataDir);
  const chapters = filenames.map(name => {
    return {
      slug: slug(path.parse(name).name),
      path: path.join(dataDir, name),
      name: path.parse(name).name
    }
  });

  return chapters;
}