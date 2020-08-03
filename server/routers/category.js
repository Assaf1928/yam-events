const express = require('express')
const fs = require('fs');
const router = new express.Router();
const app = express();


const data = [{
    id:1,
    name: 'alternativeEquipment',
    path: '../src/image/subCategory/alternativeEquipment/',
    clientNeededPath: 'src/image/subCategory/alternativeEquipment/',
    subs: [{
        id:1,
        name: 'beanbag/', //folder name
    }, {
        id:2,
        name:'cutlery/'
    }, {
        id:3,
        name:'plates/'
    }]
    
}]


router.get('/category', async (req,res) => {
      try {
        await  fs.readdir('../src/image/bigCarousel', (err, files) => {
            res.status(201).send(files)
            console.log(files);
        });
        } catch(e) {
            res.status(400).send(e)
            console.log(e)
        }
})

router.get('/sub', async (req,res) => {
    try {
    const id = req.query.id
    const subid = req.query.subId
    let category =  await data.find(category=> category.id == id)
    let sub = await category.subs.find(sub => sub.id == subid)
    //reciving current location path
    //removing the backend/routers so we can get the base url.
    // e.x. C:/Users/asaf/Desktop/yam-events/ -- > base url
    var publicDir = require('path').join(__dirname,'/public');
    app.use(express.static(publicDir));

    let baseUrl  = __dirname.replace(/\\/g, "/");
    baseUrl = baseUrl.replace("server/routers","");
  //  console.log(baseUrl)
    baseUrl = (require('path').resolve(__dirname, '../../'))
    //console.log(require('path').resolve(__dirname, '../../'))
    console.log(baseUrl + "/" + category.clientNeededPath + sub.name)
    await  fs.readdir(category.path + sub.name, (err, files) => {
        // res.status(201).send({files, path:   baseUrl + category.clientNeededPath + sub.name})
        res.status(201).send({files, path:  "http://127.0.0.1:8887/alternativeEquipment/" + sub.name})
      //  console.log(baseUrl + category.clientNeededPath + sub.name)
    });
    } catch(e){
        res.status(400).send(e)
        console.log(e)
    }

})

module.exports = router