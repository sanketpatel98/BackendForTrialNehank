const Product = require('../model/model')
const User = require('../model/user')
const Order = require('../model/order')
const resolvers = {
    products: () =>{
        return Product.find({})
    },
    users: () =>{
        return User.find({})
    },
    orders: () =>{
        return Order.find({})
    },
    productByName: (args)=>{
        return Product.findOne({name: args.name})
    },
    productById: (args)=>{
        // console.log('resolver-byId',args);
        return Product.findOne({_id: args._id})
    },
    userById: (args)=>{
        // console.log('resolver-byId',args);
        return User.findOne({_id: args._id})
    },
    allOrderById: (args)=>{
        // console.log('allOrderById',args);
        return Order.find({clientid: args.clientid})
    },
    userByfirstName: (args)=>{
        // console.log('args',args);
        return User.findOne({mail: args.mail})
    },
    loginUser: (args)=>{
        // console.log('args',args);
        return User.findOne({mail: args.mail})
    },
    updateUser:(args)=>{
        // console.log('updateUser',args.modifyUser._id);
        // console.log('updateUser-id',args.modifyUser);
        let updatedData = new User ({
            _id:args.modifyUser._id,
            firstname:args.modifyUser.firstname,
            lastname:args.modifyUser.lastname,
            mail:args.modifyUser.mail,
            username:args.modifyUser.username,
            password:args.modifyUser.password,
        });
        // console.log('updated-data',updatedData);
       return  User.findByIdAndUpdate(updatedData._id, 
          updatedData
        );
      
        
    },
    updateProduct:(args)=>{
        // console.log('updateUser',args.modifyUser._id);
        // console.log('updateProduct-id',args.modifyProduct._id);
        let updatedData = new Product ({
            _id:args.modifyProduct._id,
            name:args.modifyProduct.name,
            description:args.modifyProduct.description,
            qty:args.modifyProduct.qty,
            price:args.modifyProduct.price,
            rating:args.modifyProduct.rating,
            image:args.modifyProduct.image,
        });
        // console.log('updated-data',updatedData);
       return  Product.findByIdAndUpdate(updatedData._id, 
          updatedData
        );
      
        
    },
    updateOrder:(args)=>{
        // console.log('updateUser',args.modifyUser._id);
        // console.log('updateProduct-id',args.modifyProduct._id);
        // console.log('updateorder',args.modifyOrder);
        let updatedData = new Order ({
            _id:args.modifyOrder._id,
            clientid:args.modifyOrder.clientid,
            name:args.modifyOrder.name,
            description:args.modifyOrder.description,
            qty:args.modifyOrder.qty,
            price:args.modifyOrder.price,
            rating:args.modifyOrder.rating,
            image:args.modifyOrder.image,
            status:args.modifyOrder.status,
        });
        // console.log('updated-data',updatedData);
       return  Order.findByIdAndUpdate(updatedData._id, 
          updatedData
        );
      
        
    },

    addUser:(args)=>{
        // using model to give structure for adding user  
        let user = new User({
            firstname:args.firstname,
            lastname:args.lastname,
            mail:args.mail,
            username:args.username,
            password:args.password,
            role:args.role,
        })
        // to save inside mongodb server 
        user.save()
        return user
    },
    addOrder:(args)=>{
        // using model to give structure for adding order
        // console.log('addOrder',args);  
        let order = new Order({
           clientid:args.clientid,
           name:args.name,
            lastname:args.lastname,
            description:args.description,
            qty:args.qty,
            price:args.price,
            rating:args.rating,
            image:args.image,
            mail:args.mail,
            address:args.address,
            city:args.city,
            province:args.province,
            areacode:args.areacode,
            
        })
        // to save inside mongodb server 
        order.save()
        return order
    },
    addAddress:(args)=>{
        // using model to give structure for adding order
        console.log('add-Address',args);  
        let order = new Order({
           mail:args.mail,
           address:args.address,
            city:args.city,
            province:args.province,
            areacode:args.areacode,
         
        })
        // to save inside mongodb server 
        order.save()
        return order
    },
    addMovie:(args)=>{
        // using model to give structure for adding movie  
        let product = new Product({
            _id:args._id,
            name: args.name,
            description: args.description,
            qty: args.qty,
            price:args.price,
            rating: args.rating,
            image: args.image
        })
        // to save inside mongodb server 
        product.save()
        return product
    }
}

module.exports = resolvers