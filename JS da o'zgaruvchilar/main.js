// Javascript dasturlash tilida o'zgaruvchilarni elon qilish.

// O'zgaruvchi nima ? o'zgaruvchi bu dastur davomida ishlatiluvchi ma'lumot hisoblanadi. Undan foydalanish orqali biz dasturimizni mukammal qilamiz.

// O'zgaruvchilarni elon qilish uchun biz 2 ta kalit so'zdan foydalanamiz 

// 1. var kalit so'zi orqali
// 2. let kalit so'zi orqali
// Ularning bir biridan farqi var kalit so'zi orqali siz o'zgaruvchi ochadigan bo'lsangiz siz ochga kalit so'zni eski komputerlar ham o'qiy olishida.

// O'zgaruvchilarni qanday qilib ochishimiz mumkin ?

/**
 * O'zgaruvchilarni biz lotin harflaridan boshlagan hohlagan biror bir harf yoki so'zdan foydalansak bo'ladi. 
 * Misol tariqasida:
 * var s;
 * var ism;
 * var kun;
 * 
 * O'zgaruvchi ochganda etibor berishimiz kerak bo'ladigan holatlar mavjud:
 * 1. O'zgaruvchilar ochishda birinchi navbatda kichik harflardan boshlash.
 * 2. O'zgaruvchilar ochganda birinchi belgini raqamdan boshlamaslik.
 * 3. O'zgaruvchilar agarda 2 ta so'z yoki undan ham ko'p bo'ladigan bo'lsa uni ajratib yozmaslik
 * 4. O'zgaruvchilar ochganda tinish belgilardan foydalanmaslik. 
 * 
 * Yuqoridagi foydalanishi mumkin bo'lmagan holatni ko'rdik. Endi buni misollar yordamida ko'rib chiqamiz.
 * var Ism;    bu hato
 * var ism:     bu to'g'ro
 * var 1user;   bu hato
 * var user1; yoki var u1ser;    bu to'g'ri
 * var dostimning ismi; bu hato
 * var dostimningismi; bu to'g'ri
 * var do'stimningismi; bu hato
 * var dostimningismi; bu to'g'ri
 */


// O'zgaruvchilarni ochishni ham ko'rib o'tdik. Endi ushbu o'zgaruvchilarga qiymat berishni amalda ko'rib chiqaylik;

/**
 * O'zgaruvchilarga qiymat berishda biz bermoqchi bo'lgan o'zgaruvchimizning qanday ma'lumot bo'lishiga eng avvalo qarashimiz kerak;
 * O'zgaruvchi qiymatlari: matn, belgi, raqam, mantiqiy qiymat va h.k bo'lishi mumkin.
 * Bu o'zgaruvchilarga qiymatni ham to'g'ri berishni o'rganishimiz joiz.
 * Eng avvalo matn hamda belgini ko'rib chiqaylik.
 * Matn bilan bog'liq bo'lgan qiymatlarni berishda biz " " yoki ' ' yoki ` ` qo'shtirnoqlardan foydalanamiz. 
 * Raqamlarni yozishda esa biz hech qanday belgi qo'yishimiz kerak emas.
 * Mantiqiy toifalar esa faqatgina 2 ta qiymatga ega true, false 
 */

/**
 * var ism="Nodir";
 * var familiya="Abdullayev";
 * var yosh = 20;
 * var uylangan=false;
 * 
 * 
 * manashu ko'rinishda biz elementlarga qiymat berishimiz mumkin bo'ladi.
 */

/**
 * Har bir dasturlash tilida bo'lgani singari Javascriptda ham o'zgarmaslar mavjud. Ularni elon qilish uchun 
 * const kalit so'zidan foydalaniladi.
 * O'zgarmasni elon qilgandan keyin uning qiymatini biz o'zgartira olmaymiz.
 */