'use client'

import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('./Game.jsx'), {
  ssr: false
})

const PlexxPage = () => {
  return <DynamicComponentWithNoSSR />
}

export default PlexxPage
