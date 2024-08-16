export type ColorName =
  | 'mainBg'
  | 'bgText'
  | 'textColor'
  | 'accentColor'
  | 'titleBarBg'
  | 'sideBarBg'
  | 'sideBarHoverBg'
  | 'explorerBg'
  | 'explorerHoverBg'
  | 'explorerBorder'
  | 'tabsBg'
  | 'tabBg'
  | 'tabActiveBg'
  | 'tabBorder'
  | 'bottomBarBg'
  | 'bottomBarBorder'
  | 'buttonBg'
  | 'buttonText'
  | 'bottomBarHoverBg'
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
