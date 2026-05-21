let subs: string | number = '1M';

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';

apiRequestStatus = 'success';


let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle';

airlineSeat = 'window';

let orders = ['12', '20', '28', '42'];

let currentorder:string;


for (let order of orders) {
    if (order === '28') {
        currentorder = order;
        break;
    }
    // currentorder = "12";
}

// currentorder = 42;
console.log(currentorder);