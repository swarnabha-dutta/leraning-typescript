let subs = '1M';
let apiRequestStatus = 'pending';
apiRequestStatus = 'success';
let airlineSeat = 'aisle';
airlineSeat = 'window';
let orders = ['12', '20', '28', '42'];
let currentorder;
for (let order of orders) {
    if (order === '28') {
        currentorder = order;
        break;
    }
    currentorder = "12";
}
// currentorder = 42;
console.log(currentorder);
export {};
//# sourceMappingURL=unionAndany.js.map