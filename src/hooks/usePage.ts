import { pageLinks } from '@/utils/default'
import { usePathname } from 'next/navigation'
const usePage = () => {
  const pathname = usePathname()
  const currentPage = pageLinks.find((page) => page.href === pathname)
  return { pageSlug: currentPage ? currentPage.slug : null }
}

export default usePage
