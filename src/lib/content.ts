import columnsData from '@/data/columns.json'
import eventsData from '@/data/events.json'
import seminarlpsData from '@/data/seminarlps.json'

export interface Article {
  slug: string
  title: string
  date: string
  category: string
  tags: string[]
  thumbnail: string | null
  person: string
  personMessage: string
  content: string
  // イベント固有
  eventDate?: string
  eventTime?: string
  eventTimeDetail?: string
  // コラム固有
  checks?: string[]
}

interface RawArticle {
  slug: string
  title: string
  date: string
  tags: string[]
  thumbnail: string | null
  person: string
  personMessage: string
  content: string
  eventDate?: string
  eventTime?: string
  eventTimeDetail?: string
  checks?: string[]
}

function withCategory(data: RawArticle[], category: string): Article[] {
  return data.map((item) => ({ ...item, category }))
}

export function getColumns(): Article[] {
  return withCategory(columnsData as RawArticle[], 'column')
}

export function getEvents(): Article[] {
  return withCategory(eventsData as RawArticle[], 'event')
}

export function getSeminarLps(): Article[] {
  return withCategory(seminarlpsData as RawArticle[], 'seminarlp')
}

export function getColumnBySlug(slug: string): Article | undefined {
  return getColumns().find((a) => a.slug === slug)
}

export function getEventBySlug(slug: string): Article | undefined {
  return getEvents().find((a) => a.slug === slug)
}

export function getSeminarLpBySlug(slug: string): Article | undefined {
  return getSeminarLps().find((a) => a.slug === slug)
}

export function getLatestArticles(articles: Article[], count: number): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count)
}

export function getAllArticles(): Article[] {
  return [...getColumns(), ...getEvents()]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
