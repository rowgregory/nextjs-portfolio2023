'use client'

import TopCorner from './components/svg/TopCorner.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import BottomCorner from './components/svg/BottomCorner.jsx'
import ParticleBackground from './components/ParticleBackground.jsx'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import { usePathname } from 'next/navigation'

const outerContainer =
  'max-w-screen h-screen max-h-screen items-start x9:items-center justify-center flex overflow-y-scroll'
const innerContainer =
  'x9:max-h-[791px] x9:h-screen flex relative w-screen max-w-[1280px] p-5'

const PageWrapper = ({ children }) => {
  const pathname = usePathname()
  if (pathname === '/plexx') {
    return children
  }
  if (pathname === '/plexx2') {
    return (
      <div className="h-screen flex justify-center items-center">
        {children}
      </div>
    )
  }

  return (
    <>
      <StyleSheetManager
        shouldForwardProp={isPropValid}
        disableVendorPrefixes={false}
      >
        <div className={outerContainer}>
          <div className={innerContainer}>
            <TopCorner />
            <div className="p-7 z-10 w-full">
              <Header />
              {children}
              <Footer />
            </div>
            <BottomCorner />
          </div>
        </div>
      </StyleSheetManager>
      <ParticleBackground />
    </>
  )
}

export default PageWrapper
