async function getPostComments (postId) {
try{
const response = await fetch (`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
const data = await response.json()
console.log(data)
}catch(error){
console.error("something is wrong")
}
}

getPostComments(1)