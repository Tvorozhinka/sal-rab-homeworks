function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная сумма для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки
  
    // Задание №2.1. Рассчитать доставку
  
    let shippingSum; // создайте переменную shippingSum
  
  if (productsSum == 0 || productsSum >= freeShippingMinSum) {// если productsSum равно 0,
        shippingSum = 0;// то shippingSum присвоить значение 0
    } else if (productsSum > 0 || productsSum < freeShippingMinSum) { // если productsSum больше 0 и меньше freeShippingMinSum,
      shippingSum = shippingPrice;// то shippingSum присвоить значение shippingPrice
    }
   return shippingSum;
  }

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная сумма для скидки
    let discountPart = discount; // величина скидки в процентах

    // Задание №2.2. Рассчитать скидку

    let discountSum = productsSum >= discountMinSum ? discountPart / 100 * productsSum : 0;

    // Конец решения задания №2.2.

    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задача №2.3. Рассчитать скидки и доставку в корзине

    let totalSum// создайте переменную totalSum

    totalSum = productsSum;// присвойте totalSum значение productsSum
    totalSum = totalSum - discountSum;// уменьшите totalSum на discountSum

    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!

    totalSum = totalSum + shippingSum// прибавьте к totalSum значение shippingSum

    let freeShipping// создайте переменную freeShipping
    // запишите без использования if или любых других условий:
    freeShipping = !shippingSum; // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false
    
    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
