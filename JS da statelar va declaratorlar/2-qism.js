/**
 * JavaScriptda async funksiyalar
 */
// Asinxron ravishda ishlaydigan funksiyalar
// Bunday amallar dasturlashda juda ko'p ishlatiladi
// Misol tariqasida
/**
 * 1. Ma'lumotlarni backend dan yuklash jarayonida
 * 2. Ekran ochilish jarayonida
 * 3. Ma'lumotlarni backend ga yuborish jarayonida
 * 4. Timer qo'ygan bo'lsak shu timerlarni kutish jarayonida 
 * va h.k.
 */

function timerli(){
    return new Promise((qiymat)=>{
        setTimeout(() => {
           qiymat("Timerli funksiya")
        }, 2000);
    })
}

async function asinxron(){
    console.log("Asinxron funksiya ishlayapdi, timerli funksiya kutilayapdi")
    var r = await timerli();
    console.log(r)
}

asinxron()