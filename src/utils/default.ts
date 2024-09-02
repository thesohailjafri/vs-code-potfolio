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
    color: '#00BCD4',
  },
  {
    slug: 'about',
    title: 'about.json',
    icon: VscJson,
    href: getPath.about,
    color: '#FBC02D',
  },
  {
    slug: 'contact',
    title: 'contact.css',
    icon: FaCss3Alt,
    href: getPath.contact,
    color: '#42A5F5',
  },
  {
    slug: 'blogs',
    title: 'blogs.html',
    icon: FaHtml5,
    href: getPath.blogs,
    color: '#E44D26',
  },
  {
    slug: 'projects',
    title: 'projects.ts',
    icon: BiLogoTypescript,
    href: getPath.projects,
    color: '#42A5F5',
  },
  {
    slug: 'github',
    title: 'github.md',
    icon: FaMarkdown,
    href: getPath.github,
    color: '#42A5F5',
  },
  {
    slug: 'services',
    title: 'services.d.ts',
    icon: TbBrandTypescript,
    href: getPath.services,
    color: '#42A5F5',
  },
]
