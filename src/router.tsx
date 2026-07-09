import { Routes, Route } from 'react-router-dom'
import { Home } from './routes/Home'
import { ProjectsMenu } from './routes/ProjectsMenu'
import { Memory } from './routes/Memory'
import { WorkIt } from './routes/WorkIt'
import { CatfeAuLait } from './routes/CatfeAuLait'
import { Resume } from './routes/Resume'
import { Contact } from './routes/Contact'
import { NotFound } from './routes/NotFound'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsMenu />} />
      <Route path="/projects/memory" element={<Memory />} />
      <Route path="/projects/work-it" element={<WorkIt />} />
      <Route path="/projects/catfe-au-lait" element={<CatfeAuLait />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
