const express = require('express')
const router = express.Router()
//let {people} = require('../data')
const { getPeople, createPerson, createPersonPostMan, updatePerson, deletePerson } = require('../controllers/people');  // Adjust the path to where your functions are located
//Using a Get Method...
router.get('/'/*,getPeople*/)
//using a Post method
router.post('/:id'/*,createPerson*/)
//
router.post('/postman'/*, createPersonPostMan*/)
//update
router.put('/:id'/*,updatePerson*/)

//delete 
router.delete('/:id'/*,deletePerson*/ );
  //
  
module.exports = router
