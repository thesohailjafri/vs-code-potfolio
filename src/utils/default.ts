import { color } from 'framer-motion'
import { BiLogoTypescript } from 'react-icons/bi'
import { FaCss3Alt, FaHtml5, FaMarkdown, FaReact } from 'react-icons/fa6'
import { TbBrandTypescript } from 'react-icons/tb'
import { VscJson } from 'react-icons/vsc'

export class getPath {
  static home = '/'
  static about = '/about'
  static contact = '/contact'
  static blogs = '/blogs'
  static projects = '/projects'
  static github = '/github'
  static services = '/services'
}

export const pageLinks = [
  {
    slug: 'home',
    title: 'home.tsx',
    icon: FaReact,
    href: getPath.home,
    color: 'red',
  },
  {
    slug: 'about',
    title: 'about.json',
    icon: VscJson,
    href: getPath.about,
    color: 'blue',
  },
  {
    slug: 'contact',
    title: 'contact.css',
    icon: FaCss3Alt,
    href: getPath.contact,
    color: 'green',
  },
  {
    slug: 'blogs',
    title: 'blogs.html',
    icon: FaHtml5,
    href: getPath.blogs,
    color: 'yellow',
  },
  {
    slug: 'projects',
    title: 'projects.ts',
    icon: BiLogoTypescript,
    href: getPath.projects,
    color: 'purple',
  },
  {
    slug: 'github',
    title: 'github.md',
    icon: FaMarkdown,
    href: getPath.github,
    color: 'pink',
  },
  {
    slug: 'services',
    title: 'services.d.ts',
    icon: TbBrandTypescript,
    href: getPath.services,
    color: 'cyan',
  },
]
