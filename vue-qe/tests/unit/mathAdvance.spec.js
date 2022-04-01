import { luasPersegi,luasLingkaran,luasKubus,volumeKubus } from '@/utils/mathShape'

describe("Melakukan Matematika Ruang - Mencari Luas Persegi", () => {
  test("luasPersegi dengan 2 Bilangan Positif", () => {
    expect(luasPersegi(2, 2)).toBe(4)
  })
  test("luasPersegi dengan 2 Bilangan Negatif", () => {
    expect(luasPersegi(-2, -2)).toBe(4)
  })
  test("luasPersegi dengan 2 Bilangan Non Numerik", () => {
    expect(luasPersegi("2", "2")).toBe(4)
  })
})

describe("Melakukan Matematika Ruang - Mencari Luas Persegi", () => {
  test("luasPersegi dengan 2 Bilangan Positif", () => {
    expect(luasLingkaran(2, 2)).toBe(12.56)
  })
  test("luasPersegi dengan 2 Bilangan Negatif", () => {
    expect(luasLingkaran(-2, -2)).toBe(12.56)
  })
  test("luasPersegi dengan 2 Bilangan Non Numerik", () => {
    expect(luasLingkaran("2", "2")).toBe(12.56)
  })
})

describe("Melakukan Matematika Ruang - Mencari Luas Persegi", () => {
  test("luasPersegi dengan 3 Bilangan Positif", () => {
    expect(luasKubus(2, 2, 2)).toBe(8)
  })
  test("luasPersegi dengan 3 Bilangan Negatif", () => {
    expect(luasKubus(-2, -2, -2)).toBe(-8)
  })
  test("luasPersegi dengan 3 Bilangan Non Numerik", () => {
    expect(luasKubus("2", "2", "2")).toBe(8)
  })
})

describe("Melakukan Matematika Ruang - Mencari Luas Persegi", () => {
  test("luasPersegi dengan 2 Bilangan Positif", () => {
    expect(volumeKubus(2, 2)).toBe(4)
  })
  test("luasPersegi dengan 2 Bilangan Negatif", () => {
    expect(volumeKubus(-2, -2)).toBe(4)
  })
  test("luasPersegi dengan 2 Bilangan Non Numerik", () => {
    expect(volumeKubus("2", "2")).toBe(4)
  })
})