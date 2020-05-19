const express = require('express')
const fs = require('fs');
const router = new express.Router();

router.get('/category/:id:/subid', async (req,res) => {

})

router.get('/category', async (req,res) => {
      try {
        await  fs.readdir('../src/image/bigCarousel', (err, files) => {
            res.status(201).send(files)
        });
        } catch(e) {
            res.status(400).send(e)
            console.log(e)
        }
})

module.exports = router