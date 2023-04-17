const {buildSchema} = require('graphql')



const movieSchema = buildSchema(`
    type Query {
        products: [Product],
        users:[User],
        orders:[Order],
        productByName(name: String!) : Product
        productById(_id: ID) : Product
        userById(_id: ID) : User
        allOrderById(clientid: String) : [Order]
    }
    input modifyUser {
        _id:ID,
        firstname:String,
        lastname:String,
        mail:String,
        username:String,
        password:String,
        role:String,
    }
    input modifyProduct {
        _id:ID,
        name:String,
        description:String,
        qty:String,
        price:String,
        rating:String,
        image:String
    }
    input modifyOrder {
        _id:String,
        clientid:String,
        name:String,
        description:String,
        qty:String,
        price:String,
        rating:String,
        image:String,
        status:String,
    }
    type Mutation {
        addProduct(name: String!,description: String!,qty: String!,price: String!,rating:String!,image:String) : Product
        addUser(firstname: String!,lastname: String!,mail: String!,username: String!,password:String!,role:String!) : User
        addOrder(clientid: String!,name: String!,description: String!,qty: String!,price: String!,rating:String!,image:String,status:String,mail: String!,address: String!,city: String!,province: String!,areacode: String!) : Order
        addAddress(mail: String!,address: String!,city: String!,province: String!,areacode: String!) : Order
        userByfirstName(mail:String!):User
        loginUser(mail:String!):User
        updateUser(modifyUser:modifyUser):Boolean
        updateProduct(modifyProduct:modifyProduct):Boolean
        updateOrder(modifyOrder:modifyOrder):Boolean


        
    }
    type Product {
        _id:ID,
        name:String,
        description:String,
        qty:String,
        price:String,
        rating:String,
        image:String,
        color:String,
        brand:String,
        category:String,
        about:String,
        vendormail:String,
        dimension:String,
        available:String,
        purchased:String
    }
    type User{
        _id:ID,
        firstname:String,
        lastname:String,
        mail:String,
        username:String,
        password:String,
        role:String,
    }
    type Order{
        _id:ID,
        clientid:String,
        name:String,
        description:String,
        qty:String,
        price:String,
        rating:String,
        image:String,
        status:String,
        mail:String,
        address:String,
        city:String,
        province:String,
        areacode:String,
    }
    
`)

module.exports = movieSchema;