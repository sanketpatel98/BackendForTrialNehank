const express = require('express');
const app = express();
const mongoose =require('mongoose');
const {graphqlHTTP} = require('express-graphql');
const movieSchema = require('./schema/schema');

const resolvers = require('./resolvers/resolvers')
const env = require("dotenv").config({ path: "./.env" });
const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');
// difining cors 
const cors=require('cors');
const corsOption ={
  origin:'*', 
  credentials:true, //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(cors(corsOption));
// static env 
app.use(express.static(process.env.STATIC_DIR));
const stripe=require("stripe")(process.env.STRIPE_SECRET_KEY,{
    apiVersion: "2022-11-15",
});

//csp
app.use(expressCspHeader({ 
  policies: { 
      'default-src': [expressCspHeader.NONE], 
      'img-src': [expressCspHeader.SELF], 
  } ,
  directives: {
    'default-src': [SELF],
    'script-src': [SELF, INLINE, 'somehost.com'],
    'style-src': [SELF, 'mystyles.net'],
    'img-src': ['data:', 'images.com'],
    'worker-src': [NONE],
    'block-all-mixed-content': true
}
}));  
// strip route 
app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "EUR",
      amount: 1999,
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});


mongoose.connect('mongodb+srv://root:root@cluster0.wm0xbsl.mongodb.net/?retryWrites=true&w=majority');




// setting graphql
app.use('/graphql',graphqlHTTP({
    schema:movieSchema,
    graphiql: true,
    rootValue: resolvers
}))


app.get('/',(req,res)=>{
    res.send('hello from backend')
})
const port = process.env.PORT || 4000;
app.listen(port,()=>{
   console.log( 'Running on 4000');
})