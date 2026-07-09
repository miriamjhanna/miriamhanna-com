import type { Skill } from '../../data/skills'
import styles from './SkillChip.module.css'

export function SkillChip({ skill }: { skill: Skill }) {
  return (
    <div className={styles.chip}>
      <img className={styles.icon} src={skill.icon} alt="" />
      <p className={styles.label}>{skill.name}</p>
    </div>
  )
}
