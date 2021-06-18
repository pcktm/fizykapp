import { useRouter } from 'next/router'
import { InferGetStaticPropsType } from 'next'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React, { useEffect, useRef, useState } from 'react'
import MarkdownCard from '../../components/elements/MarkdownCard'
import { getAllChapters, getChapter } from '../../lib/filesystem'

export default function Chapter({chapter}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {query: {slug, q}} = useRouter();

  return (
    <>
      <h1 className="title">{chapter.name}</h1>
      <hr></hr>
      {chapter.concepts.map((part, index) => {
        return <MarkdownCard title={part.title} content={part.content} key={index} open={true} />
      })}
      
    </>
  )
}

export const getStaticPaths = async () => {
  const chapters = await getAllChapters()
  const paths = chapters.map(chapter => {
    return {
      params: {
        slug: chapter.slug
      }
    }
  })

  return {
    paths, fallback: false,
  }
}


export const getStaticProps = async (ctx) => {
  const chapter = await getChapter(ctx.params.slug);
  
  return {
    props: {
      chapter
    }
  }
}