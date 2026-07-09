import type { SkillCategoryData } from '../../data/skills'
import { SkillChip } from './SkillChip'
import styles from './SkillCategory.module.css'

export function SkillCategory({ category }: { category: SkillCategoryData }) {
  return (
    <div className={styles.category}>
      <h3 className={styles.heading}>{category.category}</h3>
      <div className={styles.chips}>
        {category.items.map((skill) => (
          <SkillChip key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  )
}
