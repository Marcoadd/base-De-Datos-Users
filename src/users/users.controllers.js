const userDB =[
  {
    id: 1,
    firstName: "Marco",
    lastName: "Diaz",
    email: "marco@academlo.com",
    password: "Antonio1234",
    age: 22
  },
  {
    id: 2,
    firstName: "Irene",
    lastName: "Delgado",
    email: "Irene@gmail.com",
    password: "irene1234",
    age: 22
  }
]

let baseId = 3

const findAllUsers = async () => {
  return await userDB
}

const findUsersById = async (id) => {
 const data = await userDB.find((user) => id === user.id)
  return data
}

const createNewUser = async (userObje) => {

    const newUser = {
      id: baseId++,
      firstName: userObje.firstName,
      lastName: userObje.lastName,
      email: userObje.email,
      password: userObje.password,
      age: userObje.age
    }
    
    await userDB.push(newUser)
    return newUser
  }

  module.exports = {
    findAllUsers,
    findUsersById,
    createNewUser
  }