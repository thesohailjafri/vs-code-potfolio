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
