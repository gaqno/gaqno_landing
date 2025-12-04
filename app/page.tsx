import { Suspense } from 'react'
import { Metadata } from 'next'
import Landing from './components/Landing'

export const metadata: Metadata = {
  title: 'Início',
  description:
    'Portfólio de gaqno - Desenvolvedor Fullstack especializado em React, Next.js, Vue.js, Node.js e NestJS. Conheça meus projetos e experiência.',
}

export default function Home() {
  return (
    <Suspense fallback={<p>Carregando Repos</p>}>
      <Landing />
    </Suspense>
  )
}
