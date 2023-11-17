import ProjectDescription from './components/ProjectDescription'
import ProjectList from './components/ProjectList'

const HomePage = () => {
  return (
    <main
      id="main"
      className="pt-8 flex flex-col h-[calc(100%-102px)] min-h-[calc(100%-102px)] x9:pt-0 x9:pl-[50px] x9:flex-row x9:items-center justify-between relative"
    >
      <ProjectDescription />
      <div className="min-w-[90px] max-w-[130px]"></div>
      <ProjectList />
    </main>
  )
}

export default HomePage
