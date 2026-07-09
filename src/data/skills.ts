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

export interface Skill {
  name: string
  /**
   * Icon asset import, when one exists. Node.js, AWS, GCP, React, and n8n don't have an
   * icon asset yet — architecture doc §5 calls for sourcing simple-icons brand marks cropped
   * to match the existing 15 badges' style, which hasn't been done. SkillChip renders a
   * text-only chip when this is undefined rather than a broken image.
   */
  icon?: string
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
      { name: 'React' },
    ],
  },
  {
    category: 'Backend & Cloud',
    items: [
      { name: 'Node.js' },
      { name: 'AWS' },
      { name: 'GCP' },
      { name: 'Firebase', icon: firebase },
      { name: 'n8n' },
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
