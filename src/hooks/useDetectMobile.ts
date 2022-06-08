export function useDetectMobile(): boolean {
  return window.innerWidth <= 768 || window.outerWidth <= 768
}