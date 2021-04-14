# Questions

1. Write a function in Javascript that receives as a parameter an array of changes done to an object since it was created, and returns the current state of the object after all the changes.

   - The function receives the changes in this format:

   ```js
   const changes = [
   	/* First object is the initial state */
   	{ id: 1, username: "user", password: "password" },
   	{ phone: "123456789", user: "new user", password: "123456" },
   	{ email: "example@gmail.com", username: "example" },
   	{ phone: "987654321" },
   ];
   ```

   - Given the above example the result would be:

   ```js
   {
   	id: 1,
   	username: 'example',
   	password: '123456',
   	phone: '987654321',
   	user: 'new user',
   	email: 'example@gmail.com'
   }
   ```

   - Implement the function in the following way:

   ```js
   const calculateState = (changes) => {
   	// Implement solution here
   };
   ```

   - You are allowed to write more than function to implement the solution (but calculateState must return the correct result)
   - BONUS: Make the function handle deeply nested objects and arrays.
   - It is recommended to use Lodash for this task.

2. Write a single file Vue component (.vue file) that will receive as a prop an array of strings called "items", the component will render a button that when clicked, will open a menu that will allow to scroll down the list of items you received as a prop.

   - The component must render the list in chunks of 20 items every time you scroll down to the end of the current chunk, which means that when you scroll down the list, as you get close to the end of the current chunk you render the next 20 items.
   - When you render the next 20 items, the previous chunks should not disappear, and when you scroll back they should be rendered already, which means that when you scrolled to the end of the items you received as a prop the entire list should be rendered.
   - You are allowed to use Vuetify for this component, but you are not allowed to use the vuetify component: 'v-virtual-scroll'.
   - You are not allowed to use any external NPM library to solve this problem.

3. Given the following SQL tables:

```sql
   users
   -------------------------
   | id	|  name  | country |
   -------------------------
   | 1	|  user1 | 	  1	   |
   | 2	|  user2 | 	  2	   |
   | 3	|  user3 |    3	   |
   | 4	|  user4 |    4	   |
   | 5	|  user5 |    1	   |
   | 6	|  user6 |    2	   |
   -------------------------

   countries
   ----------------
   | id	|   name  |
   ----------------
   | 1	| Sweden  |
   | 2	| England |
   | 3	| Germany |
   | 4	| Greece  |
   ----------------
```

Write a SQL query that will provide the following result:

```sql
-------------------------
| country | users_count |
-------------------------
| Sweden  |   	 2 	    |
| England |   	 2 	    |
| Germany |   	 1 	    |
| Greece  |   	 1 	    |
-------------------------
```