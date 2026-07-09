import { ProjectDetailLayout } from '../components/project-detail/ProjectDetailLayout'
import { DeviceMockup } from '../components/project-detail/DeviceMockup'
import { DemoVideo } from '../components/project-detail/DemoVideo'
import { PHONE } from '../components/project-detail/deviceFrames'
import { projects } from '../data/projects'

const project = projects.find((p) => p.slug === 'memory')!

export function Memory() {
  return (
    <ProjectDetailLayout project={project}>
      <DeviceMockup {...PHONE}>{project.video && <DemoVideo src={project.video} />}</DeviceMockup>
    </ProjectDetailLayout>
  )
}
