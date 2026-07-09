import { skillCategories } from '../../data/skills'
import { SkillCategory } from './SkillCategory'
import styles from './SkillsSection.module.css'

/**
 * Categorized chip layout replacing the original absolute-positioned 16-box "diamond"
 * (architecture doc §3.3/§7): 20 skills across 5 categories, each a wrapping flex row.
 * Adding a skill is a one-line change in src/data/skills.ts.
 */
export function SkillsSection() {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.underline} />
      {skillCategories.map((category) => (
        <SkillCategory key={category.category} category={category} />
      ))}
    </div>
  )
}
