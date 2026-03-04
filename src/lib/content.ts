import columnsData from '@/data/columns.json'
import eventsData from '@/data/events.json'
import seminarlpsData from '@/data/seminarlps.json'

export interface Article {
  slug: string
  title: string
  date: string
  category: string
  tags: string[]
  thumbnail: string
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

export function getColumns(): Article[] {
  return columnsData as Article[]
}

export function getEvents(): Article[] {
  return eventsData as Article[]
}

export function getSeminarLps(): Article[] {
  return seminarlpsData as Article[]
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
