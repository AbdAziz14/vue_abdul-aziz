import { penambahan,pengurangan,perkalian,pembagian,çç, modulus }from '@/utils/mathFundamental'

describe("Melakukan Matematika Dasar - Pernambahan ", () => {
  test("Penambahan 2 Bilangan Positif", () => {
    expect(penambahan(2, 4)).toBe(6)
  })
  test("Penambahan 2 Bilangan Negatif", () => {
    expect(penambahan(-2, -4)).toBe(-6)
  })
  test("Penambahan 2 Bilangan Non Numerik", () => {
    expect(penambahan("2", "4")).toBe("24")
  })
})

describe("Melakukan Matematika Dasar - Pengurangan ", () => {
  test("Pengurangan 2 Bilangan Positif", () => {
    expect(pengurangan(4, 4)).toBe(0)
  })
  test("Pengurangan 2 Bilangan Negatif", () => {
    expect(pengurangan(-4, -2)).toBe(-2)
  })
  test("Pengurangan 2 Bilangan Non Numerik", () => {
    expect(pengurangan("2", "4")).toBe(-2)
  })
})

describe("Melakukan Matematika Dasar - Perkalian ", () => {
  test("Perkalian 2 Bilangan Positif", () => {
    expect(perkalian(4, 4)).toBe(16)
  })
  test("Perkalian 2 Bilangan Negatif", () => {
    expect(perkalian(-4, -2)).toBe(8)
  })
  test("Perkalian 2 Bilangan Non Numerik", () => {
    expect(perkalian("2", "4")).toBe(8)
  })
})

describe("Melakukan Matematika Dasar - Pembagian ", () => {
  test("Pembagian 2 Bilangan Positif", () => {
    expect(pembagian(4, 4)).toBe(1)
  })
  test("Pembagian 2 Bilangan Negatif", () => {
    expect(pembagian(-4, -2)).toBe(2)
  })
  test("Pembagian 2 Bilangan Non Numerik", () => {
    expect(pembagian("2", "4")).toBe(0.5)
  })
})

describe("Melakukan Matematika Dasar - Pembagian ", () => {
  test("Pembagian 2 Bilangan Positif", () => {
    expect(pembagian(4, 4)).toBe(1)
  })
  test("Pembagian 2 Bilangan Negatif", () => {
    expect(pembagian(-4, -2)).toBe(2)
  })
  test("Pembagian 2 Bilangan Non Numerik", () => {
    expect(pembagian("2", "4")).toBe(0.5)
  })
})

describe("Melakukan Matematika Dasar - Modulus ", () => {
  test("Modulus 2 Bilangan Positif", () => {
    expect(modulus(4, 4)).toBe(0)
  })
  test("Modulus 2 Bilangan Negatif", () => {
    expect(modulus(-4, -2)).toBe(-0)
  })
  test("Modulus 2 Bilangan Non Numerik", () => {
    expect(modulus("2", "4")).toBe(2)
  })
})