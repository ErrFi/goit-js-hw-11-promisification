// Перепиши функцию toggleUserState() так,
// чтобы она не использовала callback-функцию callback,
// а принимала всего два параметра allUsers и userName и возвращала промис.

const users = [
	{ name: 'Mango', active: true },
	{ name: 'Poly', active: false },
	{ name: 'Ajax', active: true },
	{ name: 'Lux', active: false }
];
const logger = (updatedUsersMSG) => console.table(updatedUsersMSG);
console.log('Initial state is:');
logger(users);

//   const toggleUserStateCB = (allUsers, userName, callback) => {
//     const updatedUsers = allUsers.map(user =>
//       user.name === userName ? { ...user, active: !user.active } : user,
//     );

//     callback(updatedUsers);
//   };
// use promise
const toggleUserState = (allUsers, userName) => {
	return new Promise((resolve, reject) => {
		const updatedUsers = allUsers.map(
			(user) => (user.name === userName ? { ...user, active: !user.active } : user)
		);
		resolve(updatedUsers);
	});
};

/*
   * initial version:
   */
//   console.log("Users Mango & Lux CB toggled");
//   toggleUserStateCB(users, 'Mango', logger);
//   toggleUserStateCB(users, 'Lux', logger);
// console.log("Task #2 processing ...");
console.log('Users Mango & Lux promise toggled:');
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
