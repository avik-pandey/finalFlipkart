const express = require('express');
var flipkart = require('../models/flipkart.js');
const router = new express.Router()

var allItems = [];
var majCatFin = [];
var majCat = [];
var allWomenItems = [];
var subCatWomen = [];
var subCatWomenFin = [];
var allMenItems = [];
var subCatMen = [];
var subCatMenFin = [];
var footwearMen = [];
var sportShoesMen = [];
var casualShoesMen = [];
var formalShoesMen = [];
var sandalsMen = [];
var flipflopsMen = [];
var loafersMen = [];
var bootsMen = [];
var runningShoesMen = [];

var sneakersMen = [];


var clothingMen = [],topWearMen = [],tShirts = [],formalShirtsMen = [],casualShirtsMen = [],bottomWear = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],shortsMen = [],cargosMen = [],threeFourthsMen = [],suitsMen = [],tiesMen = [],fabricsMen = [],winterWearMen = [],sweatshirtsMen = [],jacketsMen = [],sweaterMen = [],trackMen = [],ethnicMen = [],kurtaMen = [],ethnicSuitsMen = [],sherwanis = [],ethnicPyjamaMen = [],dhotiMen = [],lungiMen = [],innerwearMen = [],briefsMen = [],vestsMen = [],boxersMen = [],pyjamasMen = [],thermalsMen = [],nightSuitsMen = [],raincoatsMen = [],fastrackMen = [],CasioMen = [],titanMen = [],fossilMen = [],sonataMen = [],backpacksMen = [],walletsMen = [],beltsMen = [],sunglassesMen = [],luggageMen = [],framesMen = [],jewlleryMen = [],adidasMen = [],reebokMen = [],skechersMen = [],nikeMen = [];

var shortsWomen= [];




router.get('/flipkartShorts', (req, res) => {

    footwearMen = [];
    clothingWomen=[];
    dressesWomen= [];
    topwearWomen= [];
    jeansWomen= [];
    skirtsWomen= [];
    casualShoesMen = [];
    formalShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Shorts" }, function (err, collection) {
            if (err) console.log(err)
            shortsWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(shortsWomen);
            res.render("flipkart", { subCatWomenFin, clothingWomen, dressesWomen, topwearWomen, skirtsWomen, jeansWomen, majCatFin, shortsWomen, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

var topwearWomen= [];

router.get('/flipkartTopwear', (req, res) => {

    footwearMen = [];
    clothingWomen=[];
    skirtsWomen=[];
    shortsWomen= [];
    dressesWomen= [];
    jeansWomen= [];
    casualShoesMen = [];
    formalShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Topwear" }, function (err, collection) {
            if (err) console.log(err)
            topwearWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(topwearWomen);
            res.render("flipkart", { subCatWomenFin, clothingWomen, skirtsWomen, shortsWomen, dressesWomen, jeansWomen, majCatFin, topwearWomen, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})



var clothingWomen= [];

router.get('/flipkartClothing', (req, res) => {

    footwearMen = [];
    dressesWomen= [];
    topwearWomen= [];
    shortsWomen= [];
    skirtsWomen= [];
    jeansWomen= [];
    casualShoesMen = [];
    formalShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Clothing" }, function (err, collection) {
            if (err) console.log(err)
            clothingWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(clothingWomen);
            res.render("flipkart", { subCatWomenFin, majCatFin, jeansWomen, topwearWomen, shortsWomen, skirtsWomen, dressesWomen,  clothingWomen, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})


var jeansWomen= [];
router.get('/flipkartJeans', (req, res) => {

    footwearMen = [];
    clothingWomen= [];
    skirtsWomen=[];
    shortsWomen=[];
    dressesWomen= [];
    topwearWomen= [];
    casualShoesMen = [];
    formalShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Jeans" }, function (err, collection) {
            if (err) console.log(err)
            jeansWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(jeansWomen);
            res.render("flipkart", { subCatWomenFin, skirtsWomen, shortsWomen, clothingWomen, dressesWomen, topwearWomen, majCatFin, jeansWomen, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

var dressesWomen= [];
router.get('/flipkartDresses', (req, res) => {

    footwearMen = [];
    skirtsWomen=[];
    clothingWomen= [];
    topwearWomen=[];
    shortsWomen=[];
    jeansWomen=[];
    casualShoesMen = [];
    formalShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Dresses" }, function (err, collection) {
            if (err) console.log(err)
            dressesWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(dressesWomen);
            res.render("flipkart", { subCatWomenFin, clothingWomen, topwearWomen, shortsWomen, skirtsWomen, jeansWomen, majCatFin, dressesWomen, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

var jeggTights= []
router.get('/flipkartJeggings%20&%20Tights', (req, res) => {

    footwearMen = [];
    skirtsWomen=[];
    dressesWomen=[];
    clothingWomen= [];
    topwearWomen=[];
    shortsWomen=[];
    jeansWomen=[];
    casualShoesMen = [];
    formalShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Jeggings & Tights" }, function (err, collection) {
            if (err) console.log(err)
            jeggTights = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(jeggTights);
            res.render("flipkart", { subCatWomenFin, clothingWomen, jeggTights, dressesWomen, topwearWomen, shortsWomen, skirtsWomen, jeansWomen, majCatFin, dressesWomen, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

var trousersCapris= [];
router.get('/flipkartTrousers%20&%20Capris', (req, res) => {

    footwearMen = [];
    skirtsWomen=[];
    dressesWomen=[];
    jeggTights= [];
    clothingWomen= [];
    topwearWomen=[];
    shortsWomen=[];
    jeansWomen=[];
    casualShoesMen = [];
    formalShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Trousers & Capris" }, function (err, collection) {
            if (err) console.log(err)
            trousersCapris= collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(trousersCapris);
            res.render("flipkart", { subCatWomenFin, clothingWomen, trousersCapris, jeggTights, dressesWomen, topwearWomen, shortsWomen, skirtsWomen, jeansWomen, majCatFin, dressesWomen, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})


var skirts= [];
router.get('/flipkartSkirts', (req, res) => {

    footwearMen = [];
    brasWomen= [];
    panties=[];
    lingerieSets=[];
    dressesGowns= [];
    lingerieSleepwear= [];
    dressesWomen=[];
    trousersCapris=[];
    jeggTights= [];
    clothingWomen= [];
    topwearWomen=[];
    shortsWomen=[];
    jeansWomen=[];
    casualShoesMen = [];
    formalShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Skirts" }, function (err, collection) {
            if (err) console.log(err)
            skirts = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(skirts);
            res.render("flipkart", { subCatWomenFin, clothingWomen, dressesGowns, shapewear, lingerieSets, panties, brasWomen, lingerieSleepwear, trousersCapris, jeggTights, dressesWomen, topwearWomen, shortsWomen, skirtsWomen, jeansWomen, majCatFin, dressesWomen, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

var lingerieSleepwear= [];
router.get('/flipkartLingerie%20&%20Sleepwear', (req, res) => {

    footwearMen = [];
    skirtsWomen=[];
    dressesWomen=[];
    trousersCapris=[];
    jeggTights= [];
    clothingWomen= [];
    topwearWomen=[];
    shortsWomen=[];
    jeansWomen=[];
    casualShoesMen = [];
    formalShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Lingerie & Sleepwear" }, function (err, collection) {
            if (err) console.log(err)
            lingerieSleepwear = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(lingerieSleepwear);
            res.render("flipkart", { subCatWomenFin, clothingWomen, lingerieSleepwear, trousersCapris, jeggTights, dressesWomen, topwearWomen, shortsWomen, skirtsWomen, jeansWomen, majCatFin, dressesWomen, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

var brasWomen=[];
router.get('/flipkartBras', (req, res) => {

    footwearMen = [];
    skirtsWomen=[];
    lingerieSleepwear= [];
    dressesWomen=[];
    trousersCapris=[];
    jeggTights= [];
    clothingWomen= [];
    topwearWomen=[];
    shortsWomen=[];
    jeansWomen=[];
    casualShoesMen = [];
    formalShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Bras" }, function (err, collection) {
            if (err) console.log(err)
            brasWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(brasWomen);
            res.render("flipkart", { subCatWomenFin, clothingWomen, brasWomen, lingerieSleepwear, trousersCapris, jeggTights, dressesWomen, topwearWomen, shortsWomen, skirtsWomen, jeansWomen, majCatFin, dressesWomen, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

var panties= [];
router.get('/flipkartPanties', (req, res) => {

    footwearMen = [];
    skirtsWomen=[];
    brasWomen= [];
    lingerieSleepwear= [];
    dressesWomen=[];
    trousersCapris=[];
    jeggTights= [];
    clothingWomen= [];
    topwearWomen=[];
    shortsWomen=[];
    jeansWomen=[];
    casualShoesMen = [];
    formalShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Panties" }, function (err, collection) {
            if (err) console.log(err)
            panties = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(panties);
            res.render("flipkart", { subCatWomenFin, clothingWomen, panties, brasWomen, lingerieSleepwear, trousersCapris, jeggTights, dressesWomen, topwearWomen, shortsWomen, skirtsWomen, jeansWomen, majCatFin, dressesWomen, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

var lingerieSets= [];
router.get('/flipkartLingerie%20Sets', (req, res) => {

    footwearMen = [];
    skirtsWomen=[];
    brasWomen= [];
    panties=[];
    lingerieSleepwear= [];
    dressesWomen=[];
    trousersCapris=[];
    jeggTights= [];
    clothingWomen= [];
    topwearWomen=[];
    shortsWomen=[];
    jeansWomen=[];
    casualShoesMen = [];
    formalShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Lingerie Sets" }, function (err, collection) {
            if (err) console.log(err)
            lingerieSets = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(lingerieSets);
            res.render("flipkart", { subCatWomenFin, clothingWomen, lingerieSets, panties, brasWomen, lingerieSleepwear, trousersCapris, jeggTights, dressesWomen, topwearWomen, shortsWomen, skirtsWomen, jeansWomen, majCatFin, dressesWomen, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

var dressesGowns= [];
router.get('/flipkartNight%20Sets%20Dresses%20&%20Nighties%20Gowns', (req, res) => {

    footwearMen = [];
    skirtsWomen=[];
    brasWomen= [];
    panties=[];
    lingerieSets=[];
    lingerieSleepwear= [];
    dressesWomen=[];
    trousersCapris=[];
    jeggTights= [];
    clothingWomen= [];
    topwearWomen=[];
    shortsWomen=[];
    jeansWomen=[];
    casualShoesMen = [];
    formalShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Night Dresses & Nighties Gowns" }, function (err, collection) {
            if (err) console.log(err)
            dressesGowns = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(dressesGowns);
            res.render("flipkart", { subCatWomenFin, clothingWomen, dressesGowns, lingerieSets, panties, brasWomen, lingerieSleepwear, trousersCapris, jeggTights, dressesWomen, topwearWomen, shortsWomen, skirtsWomen, jeansWomen, majCatFin, dressesWomen, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

var shapewear= [];
router.get('/flipkartShapewear', (req, res) => {

    footwearMen = [];
    skirtsWomen=[];
    brasWomen= [];
    panties=[];
    lingerieSets=[];
    dressesGowns= [];
    lingerieSleepwear= [];
    dressesWomen=[];
    trousersCapris=[];
    jeggTights= [];
    clothingWomen= [];
    topwearWomen=[];
    shortsWomen=[];
    jeansWomen=[];
    casualShoesMen = [];
    formalShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Shapewear" }, function (err, collection) {
            if (err) console.log(err)
            shapewear = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(shapewear);
            res.render("flipkart", { subCatWomenFin, clothingWomen, dressesGowns, shapewear, lingerieSets, panties, brasWomen, lingerieSleepwear, trousersCapris, jeggTights, dressesWomen, topwearWomen, shortsWomen, skirtsWomen, jeansWomen, majCatFin, dressesWomen, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

var camisolesSlips= [];
router.get('/flipkartCamisoles%20&%20Slips', (req, res) => {

    footwearMen = [];
    skirtsWomen=[];
    brasWomen= [];
    shapewear= [];
    panties=[];
    lingerieSets=[];
    dressesGowns= [];
    lingerieSleepwear= [];
    dressesWomen=[];
    trousersCapris=[];
    jeggTights= [];
    clothingWomen= [];
    topwearWomen=[];
    shortsWomen=[];
    jeansWomen=[];
    casualShoesMen = [];
    formalShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Camisoles & Slips" }, function (err, collection) {
            if (err) console.log(err)
            camisolesSlips = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(camisolesSlips);
            res.render("flipkart", { subCatWomenFin, clothingWomen, camisolesSlips, dressesGowns, shapewear, lingerieSets, panties, brasWomen, lingerieSleepwear, trousersCapris, jeggTights, dressesWomen, topwearWomen, shortsWomen, skirtsWomen, jeansWomen, majCatFin, dressesWomen, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

var swimBeachWomen= [];
router.get('/flipkartSwim%20&%20Beachwear', (req, res) => {

    footwearMen = [];
    skirtsWomen=[];
    brasWomen= [];
    shapewear= [];
    camisolesSlips=[];
    panties=[];
    lingerieSets=[];
    dressesGowns= [];
    lingerieSleepwear= [];
    dressesWomen=[];
    trousersCapris=[];
    jeggTights= [];
    clothingWomen= [];
    topwearWomen=[];
    shortsWomen=[];
    jeansWomen=[];
    casualShoesMen = [];
    formalShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Swim & Beachwear" }, function (err, collection) {
            if (err) console.log(err)
            swimBeachWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(swimBeachWomen);
            res.render("flipkart", { subCatWomenFin, clothingWomen, swimBeachWomen, camisolesSlips, dressesGowns, shapewear, lingerieSets, panties, brasWomen, lingerieSleepwear, trousersCapris, jeggTights, dressesWomen, topwearWomen, shortsWomen, skirtsWomen, jeansWomen, majCatFin, dressesWomen, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})
var partyDresses= [];
router.get('/flipkartParty%20Dresses', (req, res) => {

    footwearMen = [];
    skirtsWomen=[];
    brasWomen= [];
    swimBeachWomen=[];
    shapewear= [];
    camisolesSlips=[];
    panties=[];
    lingerieSets=[];
    dressesGowns= [];
    lingerieSleepwear= [];
    dressesWomen=[];
    trousersCapris=[];
    jeggTights= [];
    clothingWomen= [];
    topwearWomen=[];
    shortsWomen=[];
    jeansWomen=[];
    casualShoesMen = [];
    formalShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Party Dresses" }, function (err, collection) {
            if (err) console.log(err)
            partyDresses = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(partyDresses);
            res.render("flipkart", { subCatWomenFin, clothingWomen, swimBeachWomen, partyDresses, camisolesSlips, dressesGowns, shapewear, lingerieSets, panties, brasWomen, lingerieSleepwear, trousersCapris, jeggTights, dressesWomen, topwearWomen, shortsWomen, skirtsWomen, jeansWomen, majCatFin, dressesWomen, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

var sportsWomen= [];
router.get('/flipkartSports%20Wear', (req, res) => {

    footwearMen = [];
    skirtsWomen=[];
    brasWomen= [];
    partyDresses= [];
    swimBeachWomen=[];
    shapewear= [];
    camisolesSlips=[];
    panties=[];
    lingerieSets=[];
    dressesGowns= [];
    lingerieSleepwear= [];
    dressesWomen=[];
    trousersCapris=[];
    jeggTights= [];
    clothingWomen= [];
    topwearWomen=[];
    shortsWomen=[];
    jeansWomen=[];
    casualShoesMen = [];
    formalShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Sports Wear" }, function (err, collection) {
            if (err) console.log(err)
            sportsWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(sportsWomen);
            res.render("flipkart", { subCatWomenFin, clothingWomen, sportsWomen, swimBeachWomen, partyDresses, camisolesSlips, dressesGowns, shapewear, lingerieSets, panties, brasWomen, lingerieSleepwear, trousersCapris, jeggTights, dressesWomen, topwearWomen, shortsWomen, skirtsWomen, jeansWomen, majCatFin, dressesWomen, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})
var winterWomen= [];
router.get('/flipkartWinter%20Wear', (req, res) => {

    footwearMen = [];
    skirtsWomen=[];
    brasWomen= [];
    sportsWomen=[];
    partyDresses= [];
    swimBeachWomen=[];
    shapewear= [];
    camisolesSlips=[];
    panties=[];
    lingerieSets=[];
    dressesGowns= [];
    lingerieSleepwear= [];
    dressesWomen=[];
    trousersCapris=[];
    jeggTights= [];
    clothingWomen= [];
    topwearWomen=[];
    shortsWomen=[];
    jeansWomen=[];
    casualShoesMen = [];
    formalShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Winter Wear" }, function (err, collection) {
            if (err) console.log(err)
            winterWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(winterWomen);
            res.render("flipkart", { subCatWomenFin, clothingWomen, winterWomen, sportsWomen, swimBeachWomen, partyDresses, camisolesSlips, dressesGowns, shapewear, lingerieSets, panties, brasWomen, lingerieSleepwear, trousersCapris, jeggTights, dressesWomen, topwearWomen, shortsWomen, skirtsWomen, jeansWomen, majCatFin, dressesWomen, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

var sarees= [];
router.get('/flipkartSarees', (req, res) => {

    footwearMen = [];
    skirtsWomen=[];
    brasWomen= [];
    sportsWomen=[];
    partyDresses= [];
    swimBeachWomen=[];
    shapewear= [];
    camisolesSlips=[];
    panties=[];
    lingerieSets=[];
    dressesGowns= [];
    lingerieSleepwear= [];
    dressesWomen=[];
    trousersCapris=[];
    jeggTights= [];
    clothingWomen= [];
    topwearWomen=[];
    shortsWomen=[];
    jeansWomen=[];
    casualShoesMen = [];
    formalShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Sarees" }, function (err, collection) {
            if (err) console.log(err)
            sarees = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(sarees);
            res.render("flipkart", { subCatWomenFin, sarees, clothingWomen, winterWomen, sportsWomen, swimBeachWomen, partyDresses, camisolesSlips, dressesGowns, shapewear, lingerieSets, panties, brasWomen, lingerieSleepwear, trousersCapris, jeggTights, dressesWomen, topwearWomen, shortsWomen, skirtsWomen, jeansWomen, majCatFin, dressesWomen, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})





router.get('/flipkartFootwear', (req, res) => {

    sportShoesMen = [];
    casualShoesMen = [];
    formalShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];
    clothingMen = [];
    topWearMen = [],tShirts = [],formalShirtsMen = [],casualShirtsMen = [],bottomWear = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],shortsMen = [],cargosMen = [],threeFourthsMen = [],suitsMen = [],tiesMen = [],fabricsMen = [],winterWearMen = [],sweatshirtsMen = [],jacketsMen = [],sweaterMen = [],trackMen = [],ethnicMen = [],kurtaMen = [],ethnicSuitsMen = [],sherwanis = [],ethnicPyjamaMen = [],dhotiMen = [],lungiMen = [],innerwearMen = [],briefsMen = [],vestsMen = [],boxersMen = [],pyjamasMen = [],thermalsMen = [],nightSuitsMen = [],raincoatsMen = [],fastrackMen = [],CasioMen = [],titanMen = [],fossilMen = [],sonataMen = [],backpacksMen = [],walletsMen = [],beltsMen = [],sunglassesMen = [],luggageMen = [],framesMen = [],jewlleryMen = [],adidasMen = [],reebokMen = [],skechersMen = [],nikeMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Footwear" }, function (err, collection) {
            if (err) console.log(err)
            footwearMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(footwearMen);
            res.render("flipkart", { clothingMen ,topWearMen ,tShirts ,formalShirtsMen ,casualShirtsMen ,bottomWear ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,subCatWomenFin, majCatFin, subCatMenFin, footwearMen, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

router.get('/flipkartSports%20Shoes', (req, res) => {

    footwearMen = [];

    casualShoesMen = [];
    formalShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];
    clothingMen = [];
    topWearMen = [],tShirts = [],formalShirtsMen = [],casualShirtsMen = [],bottomWear = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],shortsMen = [],cargosMen = [],threeFourthsMen = [],suitsMen = [],tiesMen = [],fabricsMen = [],winterWearMen = [],sweatshirtsMen = [],jacketsMen = [],sweaterMen = [],trackMen = [],ethnicMen = [],kurtaMen = [],ethnicSuitsMen = [],sherwanis = [],ethnicPyjamaMen = [],dhotiMen = [],lungiMen = [],innerwearMen = [],briefsMen = [],vestsMen = [],boxersMen = [],pyjamasMen = [],thermalsMen = [],nightSuitsMen = [],raincoatsMen = [],fastrackMen = [],CasioMen = [],titanMen = [],fossilMen = [],sonataMen = [],backpacksMen = [],walletsMen = [],beltsMen = [],sunglassesMen = [],luggageMen = [],framesMen = [],jewlleryMen = [],adidasMen = [],reebokMen = [],skechersMen = [],nikeMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err,"ok")
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Sports Shoes" }, function (err, collection) {
            if (err) console.log(err)
            sportShoesMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(sportShoesMen);
            res.render("flipkart", { clothingMen ,topWearMen ,tShirts ,formalShirtsMen ,casualShirtsMen ,bottomWear ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,subCatWomenFin, majCatFin, subCatMenFin, footwearMen, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})



router.get('/flipkartClothing', (req, res) => {

    footwearMen = [];
    
    casualShoesMen = [];
    formalShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];
    clothingMen = [];
    topWearMen = [],tShirts = [],formalShirtsMen = [],casualShirtsMen = [],bottomWear = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],shortsMen = [],cargosMen = [],threeFourthsMen = [],suitsMen = [],tiesMen = [],fabricsMen = [],winterWearMen = [],sweatshirtsMen = [],jacketsMen = [],sweaterMen = [],trackMen = [],ethnicMen = [],kurtaMen = [],ethnicSuitsMen = [],sherwanis = [],ethnicPyjamaMen = [],dhotiMen = [],lungiMen = [],innerwearMen = [],briefsMen = [],vestsMen = [],boxersMen = [],pyjamasMen = [],thermalsMen = [],nightSuitsMen = [],raincoatsMen = [],fastrackMen = [],CasioMen = [],titanMen = [],fossilMen = [],sonataMen = [],backpacksMen = [],walletsMen = [],beltsMen = [],sunglassesMen = [],luggageMen = [],framesMen = [],jewlleryMen = [],adidasMen = [],reebokMen = [],skechersMen = [],nikeMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Clothing" }, function (err, collection) {
            if (err) console.log(err)
            sportShoesMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(sportShoesMen);
            res.render("flipkart", { clothingMen ,topWearMen ,tShirts ,formalShirtsMen ,casualShirtsMen ,bottomWear ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,subCatWomenFin, majCatFin, subCatMenFin, footwearMen, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

router.get('/flipkartCasual%20Shoes', (req, res) => {

    footwearMen = [];
    sportShoesMen = [];

    formalShoesMen = [];
    clothingMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];
    topWearMen = [],tShirts = [],formalShirtsMen = [],casualShirtsMen = [],bottomWear = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],shortsMen = [],cargosMen = [],threeFourthsMen = [],suitsMen = [],tiesMen = [],fabricsMen = [],winterWearMen = [],sweatshirtsMen = [],jacketsMen = [],sweaterMen = [],trackMen = [],ethnicMen = [],kurtaMen = [],ethnicSuitsMen = [],sherwanis = [],ethnicPyjamaMen = [],dhotiMen = [],lungiMen = [],innerwearMen = [],briefsMen = [],vestsMen = [],boxersMen = [],pyjamasMen = [],thermalsMen = [],nightSuitsMen = [],raincoatsMen = [],fastrackMen = [],CasioMen = [],titanMen = [],fossilMen = [],sonataMen = [],backpacksMen = [],walletsMen = [],beltsMen = [],sunglassesMen = [],luggageMen = [],framesMen = [],jewlleryMen = [],adidasMen = [],reebokMen = [],skechersMen = [],nikeMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Casual Shoes" }, function (err, collection) {
            if (err) console.log(err)
            casualShoesMen = collection;
            modelsFin = [];
            console.log(collection);
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(casualShoesMen);
            res.render("flipkart", { clothingMen ,topWearMen ,tShirts ,formalShirtsMen ,casualShirtsMen ,bottomWear ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,subCatWomenFin, majCatFin, subCatMenFin, footwearMen, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

router.get('/flipkartFormal%20Shoes', (req, res) => {

    footwearMen = [];
    sportShoesMen = [];
    casualShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];
    clothingMen = [];
    topWearMen = [],tShirts = [],formalShirtsMen = [],casualShirtsMen = [],bottomWear = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],shortsMen = [],cargosMen = [],threeFourthsMen = [],suitsMen = [],tiesMen = [],fabricsMen = [],winterWearMen = [],sweatshirtsMen = [],jacketsMen = [],sweaterMen = [],trackMen = [],ethnicMen = [],kurtaMen = [],ethnicSuitsMen = [],sherwanis = [],ethnicPyjamaMen = [],dhotiMen = [],lungiMen = [],innerwearMen = [],briefsMen = [],vestsMen = [],boxersMen = [],pyjamasMen = [],thermalsMen = [],nightSuitsMen = [],raincoatsMen = [],fastrackMen = [],CasioMen = [],titanMen = [],fossilMen = [],sonataMen = [],backpacksMen = [],walletsMen = [],beltsMen = [],sunglassesMen = [],luggageMen = [],framesMen = [],jewlleryMen = [],adidasMen = [],reebokMen = [],skechersMen = [],nikeMen = [];


    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Formal Shoes" }, function (err, collection) {
            if (err) console.log(err)
            formalShoesMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(formalShoesMen);
            res.render("flipkart", { clothingMen ,topWearMen ,tShirts ,formalShirtsMen ,casualShirtsMen ,bottomWear ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,subCatWomenFin, majCatFin, subCatMenFin, footwearMen, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

router.get('/flipkartSandals%20&%20Floaters', (req, res) => {

    footwearMen = [];
    sportShoesMen = [];
    casualShoesMen = [];
    formalShoesMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];
    topWearMen = [],tShirts = [],formalShirtsMen = [],casualShirtsMen = [],bottomWear = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Sandals & Floaters" }, function (err, collection) {
            if (err) console.log(err)
            sandalsMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(sandalsMen);
            res.render("flipkart", { clothingMen ,topWearMen ,tShirts ,formalShirtsMen ,casualShirtsMen ,bottomWear ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,subCatWomenFin, majCatFin, subCatMenFin, footwearMen, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

router.get('/flipkartFlip-%20Flops', (req, res) => {

    footwearMen = [];
    sportShoesMen = [];
    casualShoesMen = [];
    sandalsMen = [];
    formalShoesMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];
    topWearMen = [],tShirts = [],formalShirtsMen = [],casualShirtsMen = [],bottomWear = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [], clothingMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Flip- Flops" }, function (err, collection) {
            if (err) console.log(err)
            flipflopsMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(flipflopsMen);
            res.render("flipkart", { clothingMen ,topWearMen ,tShirts ,formalShirtsMen ,casualShirtsMen ,bottomWear ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,subCatWomenFin, majCatFin, subCatMenFin, footwearMen, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

router.get('/flipkartLoafers', (req, res) => {

    footwearMen = [];
    sportShoesMen = [];
    casualShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    formalShoesMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];
    clothingMen = [];
    topWearMen = [],tShirts = [],formalShirtsMen = [],casualShirtsMen = [],bottomWear = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],shortsMen = [],cargosMen = [],threeFourthsMen = [],suitsMen = [],tiesMen = [],fabricsMen = [],winterWearMen = [],sweatshirtsMen = [],jacketsMen = [],sweaterMen = [],trackMen = [],ethnicMen = [],kurtaMen = [],ethnicSuitsMen = [],sherwanis = [],ethnicPyjamaMen = [],dhotiMen = [],lungiMen = [],innerwearMen = [],briefsMen = [],vestsMen = [],boxersMen = [],pyjamasMen = [],thermalsMen = [],nightSuitsMen = [],raincoatsMen = [],fastrackMen = [],CasioMen = [],titanMen = [],fossilMen = [],sonataMen = [],backpacksMen = [],walletsMen = [],beltsMen = [],sunglassesMen = [],luggageMen = [],framesMen = [],jewlleryMen = [],adidasMen = [],reebokMen = [],skechersMen = [],nikeMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Loafers" }, function (err, collection) {
            if (err) console.log(err)
            loafersMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(loafersMen);
            res.render("flipkart", { clothingMen ,topWearMen ,tShirts ,formalShirtsMen ,casualShirtsMen ,bottomWear ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,subCatWomenFin, majCatFin, subCatMenFin, footwearMen, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

router.get('/flipkartBoots', (req, res) => {

    footwearMen = [];
    sportShoesMen = [];
    casualShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    formalShoesMen = [];
    runningShoesMen = [];
    sneakersMen = [];
    topWearMen = [],tShirts = [],formalShirtsMen = [],casualShirtsMen = [],bottomWear = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Boots" }, function (err, collection) {
            if (err) console.log(err)
            bootsMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(bootsMen.length, "ok");
            res.render("flipkart", { clothingMen ,topWearMen ,tShirts ,formalShirtsMen ,casualShirtsMen ,bottomWear ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,subCatWomenFin, majCatFin, subCatMenFin, footwearMen, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})


router.get('/flipkartRunning%20Shoes', (req, res) => {

    footwearMen = [];
    sportShoesMen = [];
    casualShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    formalShoesMen = [];
    runningShoesMen = [];
    sneakersMen = [];
    topWearMen = [],tShirts = [],formalShirtsMen = [],casualShirtsMen = [],bottomWear = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingMen = [];


    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Running Shoes" }, function (err, collection) {
            if (err) console.log(err)
            runningShoesMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(footwearMen);
            res.render("flipkart", { clothingMen ,topWearMen ,tShirts ,formalShirtsMen ,casualShirtsMen ,bottomWear ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,subCatWomenFin, majCatFin, subCatMenFin, footwearMen, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

router.get('/flipkartSneakers', (req, res) => {

    footwearMen = [];
    sportShoesMen = [];
    casualShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    formalShoesMen = [];
    topWearMen = [],tShirts = [],formalShirtsMen = [],casualShirtsMen = [],bottomWear = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingMen = [];




    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Sneakers" }, function (err, collection) {
            if (err) console.log(err)
            sneakersMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(sneakersMen);
            res.render("flipkart", { clothingMen ,topWearMen ,tShirts ,formalShirtsMen ,casualShirtsMen ,bottomWear ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,subCatWomenFin, majCatFin, subCatMenFin, footwearMen, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})


router.get('/flipkartTopwear', (req, res) => {

    footwearMen = [];
    sportShoesMen = [];
    casualShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    formalShoesMen = [];
    topWearMen = [],tShirts = [],formalShirtsMen = [],casualShirtsMen = [],bottomWear = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingMen = [];




    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Topwear" }, function (err, collection) {
            if (err) console.log(err)
            sneakersMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(sneakersMen);
            res.render("flipkart", { clothingMen ,topWearMen ,tShirts ,formalShirtsMen ,casualShirtsMen ,bottomWear ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen  ,subCatWomenFin, majCatFin, subCatMenFin, footwearMen, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

router.get('/flipkartT-Shirts', (req, res) => {

    footwearMen = [];
    sportShoesMen = [];
    casualShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    formalShoesMen = [];
    topWearMen = [],tShirts = [],formalShirtsMen = [],casualShirtsMen = [],bottomWear = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [];




    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "T-Shirts" }, function (err, collection) {
            if (err) console.log(err)
            sneakersMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(sneakersMen);
            res.render("flipkart", { clothingMen ,topWearMen ,tShirts ,formalShirtsMen ,casualShirtsMen ,bottomWear ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen  ,subCatWomenFin, majCatFin, subCatMenFin, footwearMen, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

router.get('/flipkartFormal%20Shirts', (req, res) => {

    footwearMen = [];
    sportShoesMen = [];
    casualShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    formalShoesMen = [];
    topWearMen = [],tShirts = [],formalShirtsMen = [],casualShirtsMen = [],bottomWear = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [];




    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Formal Shirts" }, function (err, collection) {
            if (err) console.log(err)
            sneakersMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(sneakersMen);
            res.render("flipkart", { clothingMen ,topWearMen ,tShirts ,formalShirtsMen ,casualShirtsMen ,bottomWear ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen  ,subCatWomenFin, majCatFin, subCatMenFin, footwearMen, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

router.get('/flipkartCasual%20Shirts', (req, res) => {

    footwearMen = [];
    sportShoesMen = [];
    casualShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    formalShoesMen = [];
    topWearMen = [],tShirts = [],formalShirtsMen = [],casualShirtsMen = [],bottomWear = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [];




    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Casual Shirts" }, function (err, collection) {
            if (err) console.log(err)
            casualShirtsMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(casualShirtsMen);
            res.render("flipkart", { clothingMen ,topWearMen ,tShirts ,formalShirtsMen ,casualShirtsMen ,bottomWear ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen  ,subCatWomenFin, majCatFin, subCatMenFin, footwearMen, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

router.get('/flipkartBottom%20wear', (req, res) => {

    footwearMen = [];
    sportShoesMen = [];
    casualShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    formalShoesMen = [];
    topWearMen = [],tShirts = [],formalShirtsMen = [],casualShirtsMen = [],bottomWear = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [];




    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Bottom wear" }, function (err, collection) {
            if (err) console.log(err)
            bottomWear = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(bottomWear);
            res.render("flipkart", { clothingMen ,topWearMen ,tShirts ,formalShirtsMen ,casualShirtsMen ,bottomWear ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen  ,subCatWomenFin, majCatFin, subCatMenFin, footwearMen, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

router.get('/flipkartJeans', (req, res) => {

    footwearMen = [];
    sportShoesMen = [];
    casualShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    formalShoesMen = [];
    topWearMen = [],tShirts = [],formalShirtsMen = [],casualShirtsMen = [],bottomWear = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [];




    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Jeans" }, function (err, collection) {
            if (err) console.log(err)
            jeansMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(jeansMen);
            res.render("flipkart", { clothingMen ,topWearMen ,tShirts ,formalShirtsMen ,casualShirtsMen ,bottomWear ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen  ,subCatWomenFin, majCatFin, subCatMenFin, footwearMen, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

router.get('/flipkartCasual%20Trousers', (req, res) => {

    footwearMen = [];
    sportShoesMen = [];
    casualShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    formalShoesMen = [];
    topWearMen = [],tShirts = [],formalShirtsMen = [],casualShirtsMen = [],bottomWear = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [];




    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Casual Trousers" }, function (err, collection) {
            if (err) console.log(err)
            casualTrousersMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(casualTrousersMen);
            res.render("flipkart", { clothingMen ,topWearMen ,tShirts ,formalShirtsMen ,casualShirtsMen ,bottomWear ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen  ,subCatWomenFin, majCatFin, subCatMenFin, footwearMen, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

router.get('/flipkartFormal%20Trousers', (req, res) => {

    footwearMen = [];
    sportShoesMen = [];
    casualShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    formalShoesMen = [];
    topWearMen = [],tShirts = [],formalShirtsMen = [],casualShirtsMen = [],bottomWear = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [];




    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Formal trousers" }, function (err, collection) {
            if (err) console.log(err)
            formalTrousersMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(formalTrousersMen);
            res.render("flipkart", { clothingMen ,topWearMen ,tShirts ,formalShirtsMen ,casualShirtsMen ,bottomWear ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen  ,subCatWomenFin, majCatFin, subCatMenFin, footwearMen, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

router.get('/flipkartTrack%20Pants', (req, res) => {

    footwearMen = [];
    sportShoesMen = [];
    casualShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    formalShoesMen = [];
    topWearMen = [],tShirts = [],formalShirtsMen = [],casualShirtsMen = [],bottomWear = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [];




    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "Track Pants" }, function (err, collection) {
            if (err) console.log(err)
            trackPantsMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(trackPantsMen);
            res.render("flipkart", { clothingMen ,topWearMen ,tShirts ,formalShirtsMen ,casualShirtsMen ,bottomWear ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen  ,subCatWomenFin, majCatFin, subCatMenFin, footwearMen, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})








router.get('/flipkart', (req, res) => {

    footwearMen = [];
    sportShoesMen = [];
    casualShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];
    formalShoesMen = [];
    topWearMen = [],tShirts = [],formalShirtsMen = [],casualShirtsMen = [],bottomWear = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],shortsMen = [],cargosMen = [],threeFourthsMen = [],suitsMen = [],tiesMen = [],fabricsMen = [],winterWearMen = [],sweatshirtsMen = [],jacketsMen = [],sweaterMen = [],trackMen = [],ethnicMen = [],kurtaMen = [],ethnicSuitsMen = [],sherwanis = [],ethnicPyjamaMen = [],dhotiMen = [],lungiMen = [],innerwearMen = [],briefsMen = [],vestsMen = [],boxersMen = [],pyjamasMen = [],thermalsMen = [],nightSuitsMen = [],raincoatsMen = [],fastrackMen = [],CasioMen = [],titanMen = [],fossilMen = [],sonataMen = [],backpacksMen = [],walletsMen = [],beltsMen = [],sunglassesMen = [],luggageMen = [],framesMen = [],jewlleryMen = [],adidasMen = [],reebokMen = [],skechersMen = [],nikeMen = [];


    async function f1(req, rep) {


        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });

        if (temp2.err) {
            console.log(err)
        }
        else {

            res.render("flipkart", { clothingMen ,topWearMen ,tShirts ,formalShirtsMen ,casualShirtsMen ,bottomWear ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,subCatWomenFin, majCatFin, subCatMenFin, footwearMen, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }


    }

    f1();

})

module.exports = router;