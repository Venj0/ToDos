const GetAll = {
    url:  `https://todo.eachbase.com/api/SmbatSiradeghyan/todos`,
    method: "GET",


}
const GetById = id => ({
    url: `https://todo.eachbase.com/api/SmbatSiradeghyan/todos/${id}`,
    method: "GET",


})
const newToDo = (title, description, color) => ({
    url: `https://todo.eachbase.com/api/SmbatSiradeghyan/todos`,
    method: "POST",
    body:  JSON.stringify({title, description, color})
})

const rmToDo = id => ({
    url: `https://todo.eachbase.com/api/SmbatSiradeghyan/todos/${id}`,
    method: "DELETE",

})
const upToDo = (_id, title, description, color) => ({
    url: `https://todo.eachbase.com/api/SmbatSiradeghyan/todos/${_id}`,
    method: "PATCH",
    body: JSON.stringify({ title, description, color})
})


export const Actions = (type, args = {}) => {
    switch (type) {
        case "all" :
            return GetAll
        case "getById" :
            return GetById(args._id)
        case "new" :
            return newToDo(args.title, args.description, args.color)
        case "remove":
            return rmToDo(args._id)
        case "update":
            return upToDo(args._id, args.title, args.description, args.color)
        default:
            return false
    }
}