import { mean } from '@/utils/mathMean'

describe("Melakukan Matematika Statistik - Mencari Rata-rata ", () => {
  test("Rata-rata dengan 5 Bilangan Positif", () => {
    expect(mean(2, 4, 6, 8, 10)).toBe(6)
  })
  test("Rata-rata dengan 5 Bilangan Negatif", () => {
    expect(mean(-2, -4, -6, -8, 10)).toBe(-2)
  })
  test("Rata-rata dengan 5 Bilangan Non Numerik", () => {
    expect(mean("2", "4", "6", "8", "10")).toBe(49362)
  })
})