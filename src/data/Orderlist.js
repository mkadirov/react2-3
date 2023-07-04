const orderList = [
    {
        user: "Abdulaziz Ochilov",
        foodName: "Osh",
        price: 20000,
        quantity: 2,
        tel: +998978881027,
        description: "Yog'siz"
    },
    {
        user: "Ergashev Islom",
        foodName: "Osh",
        price: 20000,
        quantity: 1,
        tel: +998978881235,
        description: "Alohida idishda"
    },
    {
        user: "samidullayev Bahodir",
        foodName: "manti",
        price: 5000,
        quantity: 10,
        tel: +998978881023,
        description: "Qatiqsiz"
    },
    {
        user: "To'ramurodov Shoislom",
        foodName: "Big Lavash",
        price: 24000,
        quantity: 3,
        tel: +998978886715,
        description: "Alohida paketlarda"
    }

   
]

function getOrderList() {
    return orderList;
}

export default getOrderList;
