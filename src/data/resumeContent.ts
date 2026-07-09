/**
 * Ported verbatim from the original resume.html — per architecture doc §10, this content is
 * known to be outdated and will be replaced with updated wording later. No repoUrl field is
 * required on experience entries, so employer/work projects can be added narratively without
 * a schema change (architecture doc §4).
 */

export interface ResumeSection {
  id: string
  title: string
  entries: ResumeEntry[]
}

export interface ResumeEntry {
  subtitle?: string
  date?: string
  paragraphs?: string[]
  bullets?: string[]
}

export const resumeSections: ResumeSection[] = [
  {
    id: 'education',
    title: 'Education',
    entries: [
      {
        subtitle: 'Bachelor of Science in Computer Science',
        paragraphs: ['George Mason University — Graduated 2025'],
        bullets: [
          'Cumulative GPA: 3.36 | CS GPA: 3.40',
          'Honors College Student',
          "Dean's List: Spring 2020, Summer 2020, Fall 2020, Summer 2022, Fall 2022, Summer 2023, Fall 2024",
        ],
      },
    ],
  },
  {
    id: 'skills-coursework',
    title: 'Skills & Relevant Coursework',
    entries: [
      {
        subtitle: 'Technical Skills',
        paragraphs: [
          'Java · Python · C · C# · SQL · JavaScript · HTML/CSS · Git · Unity · XML · Firebase · Android Studio · Photoshop · Illustrator · After Effects — plus strong cross-functional collaboration, leadership, communication, prioritization, and deadline-driven execution.',
        ],
      },
      {
        subtitle: 'Computer Science Coursework',
        paragraphs: [
          'Analysis of Algorithms · Data Structures · Software Engineering · Object-Oriented Programming · Computer Systems & Programming · Operating Systems · Intro to Game Design · Database Concepts · Intro to AI · Data Mining · Mobile App Development · Secure Programming & Systems',
        ],
      },
    ],
  },
  {
    id: 'projects',
    title: 'Project Work',
    entries: [
      {
        subtitle: 'Memory — Android card-matching game',
        bullets: [
          'Led end-to-end development (Java + XML) of dynamic 4×3 & 5×4 boards with on-the-fly theme swapping (cartoon icons, live emojis, 52-card deck) via reusable Card/Deck engines and real-time bitmap generation.',
          'Elevated UI/UX: custom Material components, adaptive image scaling, branded dialogs, and crash-free theme tinting for a polished multi-density experience.',
        ],
      },
      {
        subtitle: 'Work It! — Android workout tracker',
        bullets: [
          'Designed & built a full-featured tracker where users create exercises, log sessions with live counters, and edit profiles in both portrait & landscape layouts.',
          'Integrated Firebase Auth & Firestore: secure email/password flow, per-user exercise collections (auto-seeded defaults), real-time duplicate-name guards, and session-only deletions.',
        ],
      },
      {
        subtitle: 'Catfe Au Lait — 2D Unity café game',
        bullets: [
          "Produced 70+ hand-crafted sprites, UI elements, and backgrounds in Photoshop & Illustrator, defining the game's art direction.",
          'Collaborated with a three-member dev team to integrate optimized assets, ensuring seamless path-finding, inventory, and scoring for the alpha release.',
        ],
      },
    ],
  },
  {
    id: 'experience',
    title: 'Experience',
    entries: [
      {
        subtitle: 'Lab Technician — George Mason University',
        date: 'Aug 2022 – Dec 2022',
        bullets: [
          'Logged / tracked student inquiries in Salesforce, leveraging advanced querying to expedite case resolution.',
          'Maintained & repaired digital-media classrooms, labs, and studios to guarantee seamless user experience.',
          'Diagnosed and restored fixed & portable A/V equipment, minimizing downtime for faculty and students.',
          'Partnered with cross-functional departments to streamline technology workflows and support requests.',
        ],
      },
    ],
  },
  {
    id: 'leadership',
    title: 'Leadership & Volunteer Experience',
    entries: [
      {
        subtitle: 'Vice President of Membership Experience — Alpha Omicron Pi',
        date: 'Dec 2022 – Nov 2023',
        bullets: [
          'Planned and executed chapter programs, enrichment events, and budgets, boosting member satisfaction through continuous feedback loops and process improvements.',
        ],
      },
      {
        subtitle: 'International Community Service',
        bullets: [
          "Nairobi, Kenya — July 2023: Led children's events and initiatives across needy communities.",
          'Girgia, Egypt — June 2019: Taught English in multiple orphanages and community centers.',
        ],
      },
    ],
  },
]
