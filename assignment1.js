// input:
const changes = [
    /* First object is the initial state */
    { id: 1, username: "user", password: "password" },
    { phone: "123456789", user: "new user", password: "123456" },
    { email: "example@gmail.com", username: "example" },
    { phone: "987654321" },
    { phone: "2222" },
    { username: "gagi", password: "testtt" }
];
// output:
//   {
//    	id: 1,
//    	username: 'example',
//    	password: '123456',
//    	phone: '987654321',
//    	user: 'new user',
//    	email: 'example@gmail.com'
//    }

const calculateState = (changes) => {
    // Implement solution here
    let map = {};

    changes.map(element => {
        map = {
            ...map,
            ...element
        }
    });

    return map;
};


console.log(calculateState(changes));

