import type { Video } from '../types/portfolio';

/*
 * 视频托管在腾讯云点播 VOD (SubAppId: 1329244566)
 *   FileId: 5145403727830784409
 *   URL: https://1329244566.vod-qcloud.com/.../XvbTaVUZusAA.mp4
 *
 * 更新步骤（上传新视频）：
 *   1. 运行 node upload-vod.cjs 传入视频文件
 *   2. 将返回的 URL 粘贴到下方 videoUrl 字段
 */

const VOD_URL = 'https://1329244566.vod-qcloud.com/15e3562cvodcq1329244566/63b889295145403728024464988/9329nPasHLIA.mp4';

export const videos: Video[] = [
  {
    id: 'brand-film',
    title: '品牌形象片',
    description: '为高端时装品牌打造的视觉形象短片，以光影叙事展现品牌精神内核。',
    poster: 'https://picsum.photos/seed/video1/800/500',
    videoUrl: VOD_URL,
    category: ['商业', '宣传片'],
    featured: true,
  },
  {
    id: 'product-launch',
    title: '产品发布概念片',
    description: '科技产品全球发布的视觉概念视频，融合CG与实拍。',
    poster: 'https://picsum.photos/seed/video2/800/500',
    videoUrl: VOD_URL,
    category: ['广告', 'CG'],
    featured: true,
  },
  {
    id: 'documentary',
    title: '城市记忆 · 纪录短片',
    description: '关于城市变迁的个人纪录片项目，入围多个独立电影节。',
    poster: 'https://picsum.photos/seed/video3/800/500',
    videoUrl: VOD_URL,
    category: ['纪实', '叙事'],
    featured: true,
  },
  {
    id: 'music-video',
    title: '独立音乐 MV',
    description: '为独立音乐人执导的音乐录影带，实验性视觉风格。',
    poster: 'https://picsum.photos/seed/video4/800/500',
    videoUrl: VOD_URL,
    category: ['MV', '创意'],
    featured: false,
  },
  {
    id: 'event-recap',
    title: '设计周回顾视频',
    description: '年度设计周的现场回顾与幕后花絮剪辑。',
    poster: 'https://picsum.photos/seed/video5/800/500',
    videoUrl: VOD_URL,
    category: ['活动', '花絮'],
    featured: false,
  },
  {
    id: 'social-campaign',
    title: '社交媒体广告系列',
    description: '为快消品牌制作的社交媒体短视频系列，共6集。',
    poster: 'https://picsum.photos/seed/video6/800/500',
    videoUrl: VOD_URL,
    category: ['广告', '社交媒体'],
    featured: false,
  },
];
