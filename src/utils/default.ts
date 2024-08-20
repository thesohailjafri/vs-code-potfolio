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

export const openFileLinks = [
  {
    title: 'home.tsx',
    icon: FaReact,
    href: getPath.home,
  },
  {
    title: 'about.json',
    icon: VscJson,
    href: getPath.about,
  },
  {
    title: 'contact.css',
    icon: FaCss3Alt,
    href: getPath.contact,
  },
  {
    title: 'blogs.html',
    icon: FaHtml5,
    href: getPath.blogs,
  },
  {
    title: 'projects.ts',
    icon: BiLogoTypescript,
    href: getPath.projects,
  },
  {
    title: 'github.md',
    icon: FaMarkdown,
    href: getPath.github,
  },
  {
    title: 'services.d.ts',
    icon: TbBrandTypescript,
    href: getPath.services,
  },
]
