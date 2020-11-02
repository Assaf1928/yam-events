const { SSL_OP_TLS_D5_BUG } = require('constants');
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
        name:'footstool/'
    }, {
        id:3,
        name:'mats/'
    }, {
        id:4,
        name:'photons/'

    }, {
        id:5,
        name:'pillow/'
    }]
    
}, {
    id:2,
    name: 'furniture',
    path: '../src/image/subCategory/furniture/',
    clientNeededPath: 'src/image/subCategory/furniture/',
    subs: [{
        id:1,
        name: 'buffets/', 
    }, {
        id:2,
        name:'chairs/'
    }, {
        id:3,
        name:'tables/'
    }]
}, {
    id:3,
    name: 'servingDishes',
    path: '../src/image/subCategory/servingDishes/',
    clientNeededPath: 'src/image/subCategory/servingDishes/',
    subs: [{
        id:1,
        name: 'barBowls/', 
    }, {
        id:2,
        name:'clearanceTray/'
    }, {
        id:3,
        name:'cups/'
    }, {
        id:4,
        name:'cutlery/'
    },{
        id:5,
        name:'plates/',
    }, {
        id:6,
        name:'pots/'
    }, {
        id:7,
        name:'salters/'
    },{
    id:8,
    name:'servingBowls/'
    },{
    id:9,
    name:'shefinDish/'}]
    },{
        id:4,
        name: 'supplementaryEquipment',
        path: '../src/image/subCategory/supplementaryEquipment/',
        clientNeededPath: 'src/image/subCategory/supplementaryEquipment/',
        subs: [{
            id:1,
            name: 'airConditioning/', 
        }, {
            id:2,
            name:'curtain/'
        }, {
            id:3,
            name:'heatingAndCoolingUtensils/'
        }, {
            id:4,
            name:'napkins/'
        }, {
            id:5,
            name:'shadows/'
        }, {
            id:6,
            name:'tableCloths/'
        }]
    }
]


router.get('/category', async (req,res) => {
    const param = req.query.name;
    //building URL
    let url = __dirname.replace(/\\/g, "/");
    url = url.replace("server/routers","");

      try {
        await  fs.readdir(url + `/src/image/${param}`, (err, files) => {
            if(err) console.log(err);
            else {
            res.status(201).send(files)
            }
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
    publicDir = (require('path').resolve(__dirname, '../../'))
    publicDir = publicDir.replace(/\\/g,"/");

    const url = publicDir + "/" + category.clientNeededPath + sub.name;

    console.log(url)
    await  fs.readdir(url, (err, files) => {
        if(err) console.log(err) 
        else {
        res.status(201).send({files, path:  url})
        }
    });
    } catch(e){
        res.status(400).send(e)
        console.log(e)
    }

})

module.exports = router