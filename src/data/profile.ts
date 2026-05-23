import type { Profile } from '../types/portfolio';

export const profile: Profile = {
  name: 'YOUR NAME',
  title: 'Creative Director',
  subtitle: '& Visual Artist',
  bio: [
    '专注于品牌视觉与动态影像创作，拥有多年设计行业经验。',
    '擅长将品牌故事转化为视觉语言，在光影与构图之间寻找独特的表达方式。',
    '合作客户涵盖时尚、科技、文化等领域，作品曾获得多个国际设计奖项。',
  ],
  email: 'hello@example.com',
  social: [
    { label: 'Instagram', url: 'https://instagram.com' },
    { label: 'Vimeo', url: 'https://vimeo.com' },
    { label: 'Behance', url: 'https://behance.net' },
    { label: 'Email', url: 'mailto:hello@example.com' },
  ],
};
