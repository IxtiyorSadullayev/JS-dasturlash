// JavaScriptda massivlar va ular bilan ishlash.
var sonlar = [1,4,2,3,5,63,4,35,63];
var ismlar = ["Ali", "Vali", "Bekzod", "Shahzod", "Sherzod"]
var aralash = ['A', 1, "b", true, 'h', 5]
//  Yuqorida yozilgan massivlarning barchasi 1 o'lchamli massiv hisoblanadi.

console.log(sonlar.concat(ismlar))          // sonlar massiviga ismlar massividagi qiymatlarni qo'shadi va yangi massiv hosil bo'ladi
console.log(sonlar.copyWithin(3, 0, 4))     // Massiv ichidan nusxa olish 
console.log(sonlar.entries().next().value)  // Massivdagi bu method massiv ichidagi har bir elementni bittadan ko'rib chiqish uchun ishlatiladi. Iteratsiya qiladi qisqacha qilib aytganda
console.log(sonlar.entries().next().value)  // Bunda iteratsiya indexi orqali amalga oshadi 
console.log(sonlar.every((a)=> a<50))       // Massiv ichidagi har bir belgini solishtirib chiqish. Agarda solishtirish to'g'ri bo'lsa true qaytadi aks holda false
console.log(sonlar.every((a, index, massiv2=aralash) => massiv2.includes(a)))
console.log(sonlar.fill(0,0, 3))            // Massivni to'ldirish hisoblanadi, 0 qiymatini 0-indexdan boshlab 3-indexgacha joylashtirish
console.log(sonlar.filter((a)=> a>4))       // Massivni solishtirishda ishlatiladi. 4 dan katta bo'lgan sonlarni chiqarib beradi.
console.log(sonlar.find((a)=> a>54))        // Massiv ichidan bizga kerakli bo'lgan qiymatni topish
console.log(ismlar.findIndex((ism)=> ism.length > 7)) // Massiv elementlarini topish va uning indexini qaytarish, yuqoridagi funksiyani qiymatini emas balki indexini qaytaradi, topa olmasa -1 qaytaradi
var flatmisol = [12,32,4,3,2,543,[3,4,2,5,2]]
console.log(flatmisol.flat())               // Massiv ichida massiv bo'ladigan bo'lsa uni bitta massiv shakliga olib keladi.
console.log(sonlar.flatMap((x) => [x*3]))   // Massiv ichidagi barcha qiymatni 3 ga ko'paytirib chiqadi
sonlar.forEach((a)=> console.log(a))      // Massiv ichidagi har bir elementni chiqarib beradi
console.log(sonlar.includes(63))            // Massiv ichida biron bir qiymatni izlash uchun ishlatiladi
console.log(sonlar.indexOf(63))             // Massiv elementining indexini aniqlab beradi
console.log(sonlar.join(" "))               // Massiv elementlarini bir biriga qo'shib beradi
console.log(sonlar.keys())                  // Massiv elementlarining keyini qaytaradi yani indexini
console.log(sonlar.length)                  // Massiv uzunligini aniqlaydi
console.log(sonlar.map((a)=> a*2))          // Massiv ichidagi barcha elementni 2 ga oshiradi
console.log(sonlar.pop())                   // Massiv ichidan eng oxirgi elementni olib tashlaydi
console.log(sonlar.push(100))               // Massiv ichiga eng oxiriga 100 ni qo'shadi
// Massiv elementlarini qo'shib beruvchi
console.log(sonlar.reduce((yigindi, qoshiluvchi) => yigindi+qoshiluvchi))   // Massiv yig'indisini hisoblab beradi
console.log(sonlar.reduce((yigindi, qoshiluvchi) => yigindi*qoshiluvchi))   // Massiv ko'paytmasini hisoblab beradi
console.log(sonlar.reverse())               // Massivni teskari tartibda chiqarib beradi
console.log(sonlar.shift())                 // Massivning 1-elementini olib beradi
console.log(sonlar.slice(0, 3))             // Massivni qirqib beradi. (0-elementdan 3-elementgacha)
console.log(sonlar.some((a)=> a>10))        // Massiv ichida 10 dan katta son bor yoki yo'qligini aniqlaydi, bor bo'lsa true, aks holda false
console.log(sonlar.sort((a,b)=> a-b))       // Massivni tartibga solib beradi, (Bu misolda sonlar bilan ishlatilgan,Agar massiv String bo'lsa shunchaki sort ni o'zi yetarli )
console.log(sonlar.splice(0, 2))            // Massivni qirqib olish
console.log(sonlar.unshift(100))            // Massiv boshiga 100ni qo'shib qo'yish