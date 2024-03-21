/**
 * Javascripda funksiyalar.
 * 
 * 
 * 
 * 
 * Funksiyalar dasturchi uchun juda kerakli va juda ko'p qo'llaniladigan operatorlar hisoblanadi.
 * Dastur yozish davomida juda ko'plab kodlar takroriy yozilishi mumkin. Bu esa bir muncha qiyinchiliklarni va tushunarsizliklarni vujudga kelitradi.
 * shuning uchun ham funksiyalar takrorlarnuvchi kodlarning o'rnini bosa oladi desam adashmayman.
 * 
 * 
 * 
 * Funksiyalar dasturlash tillarida ham juda ko'plab ishlatiladi.
 * 
 * JavaScript dasturlash tilida biz funksiyalarni function kalit so'zi orqali yaratishimiz mumkin
 * 
 * function funksiya_nomi(){}
 * 
 * Manashu ko'rinishda funksiya tanasi shakillanadi
 */

function myname(){
    console.log("Your name")
}

/**
 * Javascripda funksiya yaratishning yana bir usuli mavjud. Bu funksiyani arrow function deb atashadi
 * U quyidagicha bo'ladi 
 * ()=>{}
 * Mana shu ko'rinishda ham biz yangi funksiyani yaratishimiz mumkin bo'ladi. ammmo bu funksiyaning nomi mavjud emas hozircha.
 * Demak biz arrow function larga nom ham berishimiz mumkin. Ammo nom berishda biz o'zgaruvchi sifatida elon qilamiz va uni arrow function ga tenglab qo'yamiz
 *  
 */

const myname = ()=>{
    console.log("Your name")
}

// Bu yerda biz o'zgaruvchini kanstanta qilib olishga majburmiz. Chunki funksiyani nomini o'zgartirishimiz mumkin emas.


// Funksiyalarga biz argument ham berishimiz mumkin. Argument deganda funksiya tanasida qo'llanilishi mumkin bo'lgan qandayda o'zgaruvchi nazarda tutiladi.
const myname = (name) =>{
    console.log(name);
}

//  bu yerda name argument hisoblanadi.