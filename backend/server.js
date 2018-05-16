const express = require('express')
const {MongoClient, ObjectID } = require('mongodb')
const bodyParser= require('body-parser')
const assert =require('assert')

const app=express()

app.use(bodyParser.json());

const mongo_url="mongodb://localhost:27017"
const database="contact"

MongoClient.connect(mongo_url,(err,client)=>{
	assert.equal(null,err,'can not connect to mongo db')
	const db=client.db(database)

	app.post('/contacts',(req,res)=>{
		let new_contact=req.body

		db.collection('friends').insertOne({...new_contact},(err,data)=>{
			if(err) {
				res.send('can not add new contact')
			}
			else{
				res.send(data)
			}
		})
	})


	app.get('/contacts',(req,res)=>{
		db.collection('friends').find().toArray((err,data)=>{
			if(err) {
				res.send('can not add new contact')
			}
			else{
				res.send(data)
			}
  })

	app.get('/contact/:id',(req,res)=>{
		const id=ObjectID(req.params.id)

		db.collection('friends').findOne({"_id":id},(err,data)=>{
			if(err) {
				res.send('notfound')
			}
			else{
				res.send(data)
			}
		})
	})

	app.put('/contact/:id',(req,res)=>{
		const id=ObjectID(req.params.id)
		const updatedInformation=req.body

		db.collection('friends').findOneAndUpdate({"_id":id},{...updatedInformation},(err,data)=>{
			if(err) {
				res.send('notfound')
			}
			else{
				res.send(data)
			}
		})
	})


})

app.delete('/contact/:id',(req,res)=>{
		const id=ObjectID(req.params.id)
		db.collection('friends').findOneAndDelete({"_id":id},(err,data)=>{
			if(err) {
				res.send('not found')
			}
			else{
				res.send('contact removed')
			}
		})
})



})

app.listen(3001,(err)=>{
	if(err) return console.log('erreur')

	else {
		console.log('server is running')
	}
 })
