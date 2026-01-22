async function createTodo () {

try {
  const response = await fetch ("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  headers: {
   "Content-Type": "application/json"
  },
  body: JSON.stringify({ title: 'React öğren', completed: false, userId: 1 })
})
const data = await response.json()
console.log(data)
}


catch (error) {
console.log(error)
}
}

