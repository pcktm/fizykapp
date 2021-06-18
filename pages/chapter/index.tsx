import { promises as fs } from 'fs'
import { InferGetStaticPropsType } from 'next'
import path from 'path'
import slug from 'limax';
import LinkCard from '../../components/elements/LinkCard';
import { getAllChapters } from '../../lib/filesystem';

export default function Chapters({chapters}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <p className="title">
        Zagadnienia
      </p>
     

      {chapters.map(chapter => {
        return (
          <LinkCard
            key={chapter.slug}
            title={chapter.name}
            subtitle={`/chapter/${chapter.slug}`}
            href={`/chapter/${chapter.slug}`}
          />
        )
      })}
    </>
  )
}

export const getStaticProps = async (ctx) => {
  const chapters = await getAllChapters();
  
  return {
    props: {
      chapters
    }
  }
}