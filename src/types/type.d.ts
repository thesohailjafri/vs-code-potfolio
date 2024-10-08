export type ColorName =
  // Main colors
  | 'mainBg'
  | 'bgText'
  | 'textColor'
  | 'accentColor'
  // Title bar colors
  | 'titleBarBg'
  | 'titleBarSearchBg'
  | 'titleBarSearchBorder'
  // Bread crumb colors
  | 'breadCrumbBg'
  // Sidebar colors
  | 'sideBarBg'
  | 'sideBarHoverBg'
  // Explorer colors
  | 'explorerBg'
  | 'explorerHoverBg'
  | 'explorerBorder'
  // Tabs colors
  | 'tabsBg'
  | 'tabBg'
  | 'tabActiveBg'
  | 'tabBorder'
  // Bottom bar colors
  | 'bottomBarBg'
  | 'bottomBarBorder'
  | 'bottomBarHoverBg'
  // Button colors
  | 'buttonBg'
  | 'buttonText'
  // Scrollbar colors
  | 'scrollbarTrackBg'
  | 'scrollbarThumbBg'
  | 'articleBg'

export interface AppTheme {
  name: string
  id: string
  colors: {
    primary: Record<ColorName, string>
  }
}

export type Repo = {
  id: number
  name: string
  description: string
  watchers: number
  forks: number
  stargazers_count: number
  html_url: string
  homepage: string
}
