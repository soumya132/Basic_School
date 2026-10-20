/**
 * GALLERY METADATA
 * Images are illustrative stock photographs of school/classroom scenes
 * (sourced from Unsplash) — they are NOT photographs of this school or
 * its students. Replace with the school's own photographs when available.
 */
import type { ImageMetadata } from 'astro';
import heroClassroom from '../assets/images/hero-classroom.jpg';
import schoolBuilding from '../assets/images/school-building.jpg';
import classroomColorful from '../assets/images/classroom-colorful.jpg';
import studentLearning from '../assets/images/student-learning.jpg';
import library from '../assets/images/library.jpg';
import scienceLab from '../assets/images/science-lab.jpg';
import artCraft from '../assets/images/art-craft.jpg';
import teacherStudents from '../assets/images/teacher-students.jpg';
import kidsComputer from '../assets/images/kids-computer.jpg';
import assembly from '../assets/images/assembly.jpg';
import sportsKids from '../assets/images/sports-kids.jpg';
import culturalDance from '../assets/images/cultural-dance.jpg';
import books from '../assets/images/books.jpg';
import playground from '../assets/images/playground.jpg';
import kidsPainting from '../assets/images/kids-painting.jpg';
import schoolCorridor from '../assets/images/school-corridor.jpg';

export type GalleryCategory = 'Campus' | 'Classrooms' | 'Activities' | 'Celebrations';

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  image: ImageMetadata;
  alt: string;
  isSample: true;
};

export const galleryCategories: GalleryCategory[] = [
  'Campus',
  'Classrooms',
  'Activities',
  'Celebrations',
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'g-campus-1',
    title: 'School building (illustrative)',
    category: 'Campus',
    image: schoolBuilding,
    alt: 'Illustrative photograph of a school building exterior with lawns',
    isSample: true,
  },
  {
    id: 'g-campus-2',
    title: 'Campus corridor (illustrative)',
    category: 'Campus',
    image: schoolCorridor,
    alt: 'Illustrative photograph of a bright school corridor',
    isSample: true,
  },
  {
    id: 'g-campus-3',
    title: 'Assembly gathering (illustrative)',
    category: 'Campus',
    image: assembly,
    alt: 'Illustrative photograph of students gathered in an assembly hall',
    isSample: true,
  },
  {
    id: 'g-class-1',
    title: 'Primary classroom (illustrative)',
    category: 'Classrooms',
    image: heroClassroom,
    alt: 'Illustrative photograph of young students in a classroom raising their hands',
    isSample: true,
  },
  {
    id: 'g-class-2',
    title: 'Learning in class (illustrative)',
    category: 'Classrooms',
    image: classroomColorful,
    alt: 'Illustrative photograph of a colourful classroom with young learners',
    isSample: true,
  },
  {
    id: 'g-class-3',
    title: 'Reading corner (illustrative)',
    category: 'Classrooms',
    image: studentLearning,
    alt: 'Illustrative photograph of a student working at a chalkboard',
    isSample: true,
  },
  {
    id: 'g-class-4',
    title: 'Library shelves (illustrative)',
    category: 'Classrooms',
    image: library,
    alt: 'Illustrative photograph of library bookshelves filled with books',
    isSample: true,
  },
  {
    id: 'g-act-1',
    title: 'Science exploration (illustrative)',
    category: 'Activities',
    image: scienceLab,
    alt: 'Illustrative photograph of science laboratory glassware and equipment',
    isSample: true,
  },
  {
    id: 'g-act-2',
    title: 'Art & craft time (illustrative)',
    category: 'Activities',
    image: artCraft,
    alt: 'Illustrative photograph of children doing an art and craft activity',
    isSample: true,
  },
  {
    id: 'g-act-3',
    title: 'Computer learning (illustrative)',
    category: 'Activities',
    image: kidsComputer,
    alt: 'Illustrative photograph of children learning on a computer',
    isSample: true,
  },
  {
    id: 'g-act-4',
    title: 'Outdoor games (illustrative)',
    category: 'Activities',
    image: sportsKids,
    alt: 'Illustrative photograph of children playing outdoors on a sports field',
    isSample: true,
  },
  {
    id: 'g-act-5',
    title: 'Painting & colouring (illustrative)',
    category: 'Activities',
    image: kidsPainting,
    alt: 'Illustrative photograph of painting supplies used in a school art class',
    isSample: true,
  },
  {
    id: 'g-celeb-1',
    title: 'Cultural dance performance (illustrative)',
    category: 'Celebrations',
    image: culturalDance,
    alt: 'Illustrative photograph of a cultural dance performance on stage',
    isSample: true,
  },
  {
    id: 'g-celeb-2',
    title: 'Teacher-guided activity (illustrative)',
    category: 'Celebrations',
    image: teacherStudents,
    alt: 'Illustrative photograph of a teacher guiding students in class',
    isSample: true,
  },
  {
    id: 'g-celeb-3',
    title: 'Reading together (illustrative)',
    category: 'Celebrations',
    image: books,
    alt: 'Illustrative photograph of open books stacked on a table',
    isSample: true,
  },
  {
    id: 'g-celeb-4',
    title: 'Playground fun (illustrative)',
    category: 'Celebrations',
    image: playground,
    alt: 'Illustrative photograph of a children’s playground',
    isSample: true,
  },
];

/** Hero images reused across pages (all illustrative stock photos). */
export const images = {
  heroClassroom,
  schoolBuilding,
  classroomColorful,
  studentLearning,
  library,
  scienceLab,
  artCraft,
  teacherStudents,
  kidsComputer,
  assembly,
  sportsKids,
  culturalDance,
  books,
  playground,
  kidsPainting,
  schoolCorridor,
};
