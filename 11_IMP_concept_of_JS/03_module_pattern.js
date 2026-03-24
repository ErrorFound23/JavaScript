const kiranaStore = (function () {
  // Private data membar
  let itemCount = 0;
  const godown = [];

  return {
    add(name) {
      itemCount++;
      godown.push(name);

      return `Sharma ji stocked items ${name}`;
    },

    count() {
      return itemCount;
    },

    list() {
      return godown.slice(); // duplicate array
    },
  };
})();

// console.log(kiranaStore.add("Tea 10 Packs"));
// console.log(kiranaStore.add("Ginger 10KGs"));
// console.log("Count: ", kiranaStore.count());
// console.log("List: ", kiranaStore.list());
// console.log("Direct godown ?:", typeof kiranaStore.godown);
// console.log("Direct items ?:", typeof kiranaStore.itemCount);

const accountBook = (function () {
  const records = [];
  const accesslog = [];

  // Private function memeber
  function logAccess(action) {
    accesslog.push(`[${new Date().toDateString().slice(0, 10)}] - ${action}`);
  }

  function store(doc) {
    logAccess(`Stored: ${doc}`);
    records.push(doc);
  }

  function retrieve(index) {
    logAccess(`Retrieve index ${index}`);
    return records[index] || "Not Found";
  }

  function getRecordCount() {
    return records.length;
  }

  function getAccessLog() {
    return accesslog.slice();
  }

  return {
    store,
    retrieve,
    count: getRecordCount,
    log: getAccessLog,
  };
})();

accountBook.store("Sugar 2KG");
accountBook.store("Rice 3KG");

// console.log('Sharma ji retrieve: ' , accountBook.retrieve(0));
// console.log('Count: ' , accountBook.count());
// console.log('Log Length: ' , accountBook.log().length);
// console.log("Show me type of log access:", typeof accountBook.logAccess);

// Simulation - Dependency Injection

const SharmaMart = {};

SharmaMart.Invetory = (function () {
  function uniPrice(totalPrice, quantity) {
    return totalPrice / quantity;
  }

  function totalWeight(weightPerItem, quantity) {
    return weightPerItem * quantity;
  }

  // export {uniPrice, totalWeight}
  return { uniPrice, totalWeight };
})();

SharmaMart.BillingCalculator = (function (Inv) {
  function bulkDiscount(pricePerKg, kgs) {
    const totalWeight = Inv.totalWeight(pricePerKg, kgs);

    return `${(totalWeight * 0.95).toFixed(1)} after 5% bulk discount`;
  }
  return { bulkDiscount };
})(SharmaMart.Invetory);

console.log(SharmaMart.BillingCalculator.bulkDiscount(60, 10));
console.log("Store module: ", Object.keys(SharmaMart));
console.log("Inventory API: ", Object.keys(SharmaMart.Invetory));
