/**
 * Barcha dasturlash tillarida bo'lgani singari JS da ham String larning o'ziga hos funksiyalari bor.
 * Bular biz dastur davomida ishlatishimiz mumkin bo'lgan funksiyalar hisoblanadi.
 */

var matn = "JavaScript";

console.log(matn.charAt(2));            // Bu funksiya 2 - indexda qaysi belgi turganini aniqlab beradi
console.log(matn.charCodeAt(2))         // Bu funksiya 2 - indexda turgan belgining ASCII dagi kodini aniqlab beradi
console.log(matn.codePointAt(2))        // Bu funksiya 2 - indexda turgan belgining ASCII dagi kodini aniqlab beradi
console.log(matn.concat(" ", "Welcom")) // Bu funksiya stringlarni qo'shish uchun ishlatiladi.
console.log(matn.endsWith('t'))         // Bu funksiya t harfini matn o'zgaruvchisining oxiridan boshlab qidirib boshlaydi va topilsa true, topilmasa false
console.log(matn.includes("t"))         // Bu funksiya t harfini matn o'zgaruvchisida bor yo'qligini aniqlab , bor bo'lsa true, aks holda false
console.log(matn.indexOf('t'))          // Bu funksiya t harfini qaysi indexda ekanini aniqlab beradi.
console.log(matn.lastIndexOf('t'))      // Bu funksiya t harfini oxirdan boshlab izlab keladi va uning indexini aniqlaydi
console.log(matn.length)                // Bu funksiya string nechta belgidan iborat ekanini aniqlaydi
console.log(matn.localeCompare('JavaScript')) // Bu funksiya 2 ta matnni solishtiradi. Matnlar o'zaro o'xshash bo'lsa 0 qaytadi, qisman o'xshash bo'lsa 1 als holda -1 qaytqadi
console.log(matn.localeCompare('javascript')) //1
console.log(matn.localeCompare('JavaScript')) //0
console.log(matn.localeCompare('javasript')) //-1
console.log(matn.match(/java/))         // Bu funksiya stringning ichida biz qidirgan belgi yoki so'zning bor yo'qligini aniqlab beradi.
/**
 * Shu funksiyaga etiborli bo'ling Bunda regEx bilan ishlash imkoniyati mavjud. RegEX nima desangiz RegularExpression https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
 * Bu yerda 2 hil usulda qidirish mumkin. 
 * String sifatida 
 * RegEx sifatida
 */
// String usuldagisi
console.log(matn.match("java"))         // null qaytaradi chunki java so'zi yo'q matn o'zgaruvchisida
// RegEx usulida
console.log(matn.match(/java/))         // bu ham null qaytaradi
/**
 * Ammo RegEx da qo'shimcha funksiyalari mavjud
 * g - global. Yani matnning barcha qismidan qidiradi
 * i - harflarni katta kichigiga qaramasdan qidiradi
 */
console.log(matn.match(/java/g))        // null qaytaradi
console.log(matn.match(/java/gi))       // ["Java"] massivini qaytaradi
console.log(matn.match(/a/gi))          //  ["a", "a"] massivini qaytaradi chunki JavaScripda 2 ta a mavjud
console.log("5".padEnd(10, "h"))       // 5 o'zgaruvchisiga 10 ta h qo'shib berishi kerak
console.log(matn.padStart(10, "h"))     // Boshiga qo'shib beradi
console.log(matn.repeat(4))             // matn o'zgaruvchisidagi qiymatni 4 marta takrorlaydi
console.log(matn.replace("Ja", "ja"))   // JavaScrip dagi Ja ni javaScriptga o'zgartiradi
console.log(matn.search('a'))           // qidirish hisoblanadi topa olmasa -1 qaytqaradi topsa 1
console.log(matn.slice(0, 2))           // matn qirqib olish uchun
console.log(matn.split("a"))            // matn o'zgaruvchisidagi qiymatni a harfidan bo'lib tashlaydi va massiv yaratadi
console.log(matn.startsWith("a",3))     // qidirish