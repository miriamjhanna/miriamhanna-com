import java from '../assets/images/skills/java.png'
import python from '../assets/images/skills/python.png'
import c from '../assets/images/skills/c.png'
import csharp from '../assets/images/skills/csharp.png'
import sql from '../assets/images/skills/sql.png'
import html from '../assets/images/skills/html.png'
import css from '../assets/images/skills/css.png'
import xml from '../assets/images/skills/xml.png'
import git from '../assets/images/skills/git.png'
import androidStudio from '../assets/images/skills/androidstudio.png'
import firebase from '../assets/images/skills/firebase.png'
import photoshop from '../assets/images/skills/photoshop.png'
import illustrator from '../assets/images/skills/illustrator.png'
import afterEffects from '../assets/images/skills/aftereffects.png'
import unity from '../assets/images/skills/unity.png'
// Generated brand marks (simple-icons glyphs + Devicon AWS wordmark, both MIT-licensed),
// rendered to transparent PNGs in each brand's official color to match the existing badges
// (architecture doc §5). AWS's dark wordmark is recolored white for the dark theme.
import react from '../assets/images/skills/react.png'
import nodejs from '../assets/images/skills/nodejs.png'
import aws from '../assets/images/skills/aws.png'
import gcp from '../assets/images/skills/gcp.png'
import n8n from '../assets/images/skills/n8n.png'

export interface Skill {
  name: string
  icon: string
}

export interface SkillCategoryData {
  category: string
  items: Skill[]
}

export const skillCategories: SkillCategoryData[] = [
  {
    category: 'Languages',
    items: [
      { name: 'Java', icon: java },
      { name: 'Python', icon: python },
      { name: 'C', icon: c },
      { name: 'C#', icon: csharp },
      { name: 'SQL', icon: sql },
    ],
  },
  {
    category: 'Web & Frontend',
    items: [
      { name: 'HTML', icon: html },
      { name: 'CSS', icon: css },
      { name: 'React', icon: react },
    ],
  },
  {
    category: 'Backend & Cloud',
    items: [
      { name: 'Node.js', icon: nodejs },
      { name: 'AWS', icon: aws },
      { name: 'GCP', icon: gcp },
      { name: 'Firebase', icon: firebase },
      { name: 'n8n', icon: n8n },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Git', icon: git },
      { name: 'XML', icon: xml },
      { name: 'Android Studio', icon: androidStudio },
      { name: 'Unity', icon: unity },
    ],
  },
  {
    category: 'Design',
    items: [
      { name: 'Photoshop', icon: photoshop },
      { name: 'Illustrator', icon: illustrator },
      { name: 'After Effects', icon: afterEffects },
    ],
  },
]
