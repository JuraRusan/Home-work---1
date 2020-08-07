

const apple = 15.678;
const banana = 123.965;
const telephone = 90.2345;
const ProductMaxPrice = Math.max(apple, banana, telephone);
const productMinPrice = Math.min(apple, banana, telephone);
const allProductPrice = apple + banana + telephone;
const appleMin = Math.floor(apple);
const bananaMin = Math.floor(banana);
const telephoneMin = Math.floor(telephone);
const allProductMin = appleMin + bananaMin + telephoneMin;
const allProductMaxPrice = Math.round(allProductMin / 100) * 100;
const isOddProduct = allProductMin % 2 === 0;
const PriceMax = 500;
const rest = PriceMax - apple - banana - telephone;
const averagePrice = parseInt(((apple + banana + telephone) / 3).toFixed(2));
const discount = Math.random();
const discountPrise = Number ((allProductPrice - (allProductPrice * discount)).toFixed(2));
const allProductDiscount = ((allProductPrice/2) - ((allProductPrice) * discount));

console.log(ProductMaxPrice);
console.log(productMinPrice);
console.log(allProductPrice);
console.log(allProductMin);
console.log(allProductMaxPrice);
console.log(isOddProduct);
console.log(rest);
console.log(averagePrice);
console.log(discount);
console.log(discountPrise);
console.log(allProductDiscount);

document.writeln(`Максимальна ціна: ${ProductMaxPrice}; <br>`);
document.writeln(`Мінімальна ціна: ${productMinPrice}; <br>`);
document.writeln(`Загальна вартість товару: ${allProductPrice}; <br>`);
document.writeln(`Загальна округлена вартість товару: ${allProductMin}; <br>`);
document.writeln(`Загальна вартість товару округлена до сотні: ${allProductMaxPrice}; <br>`);
document.writeln(`Округлене значення чи є парним чи непарним: ${isOddProduct}; <br>`);
document.writeln(`Решта після оплати всіх товарів: ${rest}; <br>`);
document.writeln(`Середне значення цін, округлене до другого знаку після коми: ${averagePrice}; <br>`);
document.writeln(`Знижка: ${discount}; <br>`);
document.writeln(`Товар зі знижкою: ${discountPrise}; <br>`);
document.writeln(`Товар зі знижкою 2 два рази меньше : ${allProductDiscount}; <br>`);















