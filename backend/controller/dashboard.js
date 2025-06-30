

export const dashboard =(req,res)=>{
    try {
   const generateRandomAmount = (max = 100000) => Math.ceil(Math.random() * max);
const calculateChangePercent = (latest, previous) => {
  return previous !== 0
    ? (((latest - previous) / previous) * 100).toFixed(2)
    : '0.00';
};


const prevRevenue = generateRandomAmount();
const latestRevenue = generateRandomAmount();
const prevTransaction = generateRandomAmount(2000);
const latestTransaction = generateRandomAmount(2000);
const prevQuarterIncome = generateRandomAmount(100);
const latestQuarterIncome = generateRandomAmount(100);
const prevOrders = generateRandomAmount(50000);
const latestOrders = generateRandomAmount(50000);

const prevCustomers = generateRandomAmount(1000);
const latestCustomers = generateRandomAmount(1000);
const prevProfit = generateRandomAmount();
const latestProfit = generateRandomAmount();

const shop = generateRandomAmount(60000);
const clothing = generateRandomAmount(40000);
const sports = generateRandomAmount(20000);
const shoes = generateRandomAmount(15000);
const totalRevenue30Days = shop + clothing + sports + shoes;

const totalItems = generateRandomAmount(50000);


let sixMonthSale = [];

for (let i = 0; i < 6; i++) {
  const amount = generateRandomAmount();
  sixMonthSale.push(amount);
}

return res.status(200).json({
  success: true,
  dashboardData: {
    totalRevenue: {
      amount: latestRevenue,
      changePercent: calculateChangePercent(latestRevenue, prevRevenue)
    },
    totalTransaction: {
      count: latestTransaction,
      changePercent: calculateChangePercent(latestTransaction, prevTransaction)
    },
    quarterlyIncome: {
      incomePercent: latestQuarterIncome,
      changePercent: calculateChangePercent(latestQuarterIncome, prevQuarterIncome)
    },
    newOrders: {
      count: latestOrders,
      changePercent: calculateChangePercent(latestOrders, prevOrders)
    },
    salesOverview: {
      sales: [shop,clothing,sports,shoes],
      totalItems: totalItems,
      totalRevenue30Days
    },
  
    newCustomers: {
      count: latestCustomers,
      changePercent: calculateChangePercent(latestCustomers, prevCustomers)
    },
    totalProfit: {
      amount: latestProfit,
      changePercent: calculateChangePercent(latestProfit, prevProfit)
    },
    sixMonthSale
  }
});


    } catch (error) {
        console.log(error)
    }
}