import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { InferGetStaticPropsType } from 'next'
import Fuse from 'fuse.js'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import { getAllChapters, getChapter } from '../lib/filesystem'
import MarkdownCard from '../components/elements/MarkdownCard'

const fuseOptions = {
  includeScore: true,
  minMatchCharLength: 2,
  keys: ['title', 'chapter']
}


export default function Search({concepts}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [query, setQuery] = useState('')
  const fuse = useMemo(() => new Fuse(concepts, fuseOptions), [concepts])
  const [result, setResult] = useState(null)  

  useEffect(() => {
    const res = fuse.search(query);
    setResult(res);
  }, [query])

  return (
    <div>

      {/* <h1 className="title">Szukaj</h1> */}
      
      <div className="field" css={css`margin-bottom: 20px`}>
        <div className="control">
            <p className="control is-expanded has-icons-right">
              <input className="input is-rounded" autoFocus value={query} onChange={(ev) => setQuery(ev.target.value)} type="search" placeholder="Szukaj..."/>
              <span className="icon is-small is-right"><i className="ri-search-line"></i></span>
            </p>
        </div>
      </div>

      <div>
      {result && result.map((res, index) => {
        return <MarkdownCard title={res.item.title} content={res.item.content} key={index} open={index < 2} />
      })}
      </div>
      
    </div>
  )
}

export const getStaticProps = async (ctx) => {
  const chapters = await getAllChapters();
  let concepts: {
    title: string;
    content: string;
    chapter: string;
  }[] = [];
  for (let chapter of chapters) {
    const fc = await getChapter(chapter.slug);
    concepts = concepts.concat(fc.concepts.map(concept => {
      return {
        ...concept, chapter: chapter.name
      }
    }));  
  }

  return {
    props: {
      concepts
    }
  }
}
