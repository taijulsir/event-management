<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Write your explanation here</i>
 Explanation: The code tries to declare a variable called "greeting" but mistakenly assigns an empty object to a non-existent variable called "greetign" due to the type-error. Since "greetign" is not defined in the code, it results in a ReferenceError when you try to log it using console.log(greetign).
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Write your explanation here</i>
 Explanation: When we call the sum(1, "2") function, JavaScript performs type coercion to convert the number 1 to a string, and then it concatenates the two strings together, resulting in the string "12". So, the correct answer is indeed "12."
</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Write your explanation here</i>
 Explanation: Initially, info.favoriteFood is assigned to the first element of the food array, which is "🍕". However, later in the code, it is reassigned to "🍝" with the line info.favoriteFood = "🍝". This reassignment changes the value of info.favoriteFood, but it doesn't modify the original food array. Therefore, when you log food, it remains the same as the original array, except for the info.favoriteFood variable, which now holds the value "🍝".

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Write your explanation here</i>
 Explanation:In the code, there's a function called sayHi that's supposed to greet someone by their name. It needs a name to work properly. However, when we call sayHi() with empty parentheses, we don't give it any name to greet. So, inside the function, the name is undefined because it's like trying to say "Hi" to no one in particular.

Therefore, the correct answer is B: Hi there, undefined. It's saying "Hi there" but doesn't know who to say it to, hence "undefined" is used to represent the missing name.
</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Write your explanation here</i>
 Explanation: In this code, the forEach method iterates over each element in the nums array. Inside the callback function, there's a conditional statement if (num) that checks if the current element is truthy. Only the numbers 1, 2, and 3 are truthy, while 0 is falsy.

So, for each of the three truthy elements (1, 2, and 3), the count variable is incremented by 1. Therefore, when you log count, it will be equal to 2 because there are two truthy elements in the array.
</p>
</details>
