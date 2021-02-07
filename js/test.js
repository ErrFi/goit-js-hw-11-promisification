// Перепиши функцию makeTransaction() так,
// чтобы она не использовала callback-функции onSuccess и onError,
// а принимала всего один параметр transaction и возвращала промис.

//get random number from the interval
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
// loggers
const logSuccess = ({id, time}) => {
    console.log(`Transaction ${id} processed in ${time}ms`);
  };
  
  const logError = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
  };
  // old realisation:

//   const makeTransaction = (transaction, onSuccess, onError) => {
//     const delay = randomIntegerFromInterval(200, 500);
  
//     setTimeout(() => {
//       const canProcess = Math.random() > 0.3;
  
//       if (canProcess) {
//         onSuccess(transaction.id, delay);
//       } else {
//         onError(transaction.id);
//       }
//     }, delay);
//   };

// new realisation:

  const makeTransaction = (transaction) => {
    const delay = randomIntegerFromInterval(200, 500);
    return new Promise( (ok, fail)=>{
        setTimeout(() => {
            const canProcess = Math.random() > 0.3;
            if (canProcess) {

                ok({id:transaction.id, time:delay});
              } else {
                fail(transaction.id);
              }
          }, delay);
        }

    );  

};
  
  makeTransaction({ id: 70, amount: 150 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 71, amount: 230 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 72, amount: 75 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 73, amount: 100 })
    .then(logSuccess)
    .catch(logError);