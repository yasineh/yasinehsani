// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Swift',
    competency: 4,
    category: ['Mobile App Development', 'Languages', 'IOS'],
  },
  {
    title: 'Objective-C',
    competency: 3,
    category: ['Mobile App Development','IOS', 'Languages'],
  },
  {
    title: 'SwfitUI',
    competency: 3,
    category: ['Mobile App Development','IOS'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Web Development', 'Java', 'Languages'],
  },
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Web Development', 'Javascript', 'Languages'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'C#',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Android',
    competency: 3,
    category: ['Mobile App Development', 'Languages'],
  },
  {
    title: 'HTML/CSS',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'X-Code',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#cc7b94',
  '#515dd4',
  '#40494e',
  '#3896e2',
  '#d75858',
  '#64cb7b',
  '#e47272',
  '#37b1f5',
  '#c3423f',
  '#747fff',
  '#6968b3',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
