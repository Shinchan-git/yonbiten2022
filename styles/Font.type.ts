export type Font = "NotoSans" | "ZennAntiqueSoft"

export const toFontName = (font: Font): string => {
  if (font == "NotoSans") {
    return "Noto Sans JP, sans-serif"
  }
  if (font == "ZennAntiqueSoft") {
    return "Zen Antique Soft, serif"
  }
  return ""
}