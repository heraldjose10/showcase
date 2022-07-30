// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type Item = {
  id: number,
  name: string
}

export type Project = {
  id: number,
  title: string,
  summary: string
}

export type Education = {
  id: number,
  college: string,
  place: string,
  duration: string,
  summary: string
}

export type Experience = {
  id: number,
  title: string,
  place: string,
  role: string,
  responsibilities: string[],
  duration: string
}

export type PersonalProject = Project & {
  home_page: string,
  slug: string
}

export type ProjectDetail = PersonalProject & {
  images: Image[],
  tags: string[],
  challenges: string[],
  learnings: string[]
}

export type Image = {
  link: string,
  alt: string,
  height: number,
  width: number
}