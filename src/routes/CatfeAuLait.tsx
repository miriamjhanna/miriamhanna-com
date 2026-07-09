import { ProjectDetailLayout } from '../components/project-detail/ProjectDetailLayout'
import { DeviceMockup } from '../components/project-detail/DeviceMockup'
import { DemoVideo } from '../components/project-detail/DemoVideo'
import { VideoWalkthrough } from '../components/project-detail/VideoWalkthrough'
import { WalkingCat } from '../components/project-detail/WalkingCat'
import { COMPUTER } from '../components/project-detail/deviceFrames'
import { projects } from '../data/projects'

const project = projects.find((p) => p.slug === 'catfe-au-lait')!

export function CatfeAuLait() {
  // background="none" — the walking cat is this page's motion, not the particle field.
  return (
    <ProjectDetailLayout project={project} background="none">
      <DeviceMockup {...COMPUTER}>{project.video && <DemoVideo src={project.video} />}</DeviceMockup>
      <VideoWalkthrough walkthrough={project.walkthrough} title={project.title} />
      <WalkingCat />
    </ProjectDetailLayout>
  )
}
