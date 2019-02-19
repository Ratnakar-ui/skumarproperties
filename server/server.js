var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var config = require('./config/default');
var path = require('path');
var multer = require('multer');
var admin = require('./model/admin');
var websettings = require('./model/websettings');
var typesettings = require('./model/typesettings');
var statuses = require('./model/statuses');
var possession = require('./model/possession');
var age = require('./model/age');
var amenities = require('./model/amenities');
var facing = require('./model/facing');
var furnishing = require('./model/furnishing');
var flooring = require('./model/flooring');
var parkings = require('./model/parkings');
var measurements = require('./model/mesurements');
var coun_data = require('./model/country');
var state = require('./model/state');
var district = require('./model/district');
var mandal = require('./model/mandal');
var village = require('./model/village');
var layout = require('./model/layout');

mongoose.connect(config.dbConnect);

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },
});

var upload = multer({ storage: storage });
var type = upload.array('upload', 3);

app.use('/upload', express.static(path.join(__dirname + '/upload')));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Welcome to Skumar Properties');
});
// admin enter
app.post('/login', function (req, res) {
    admin.find({ email: req.body.email, password: req.body.password }, function (err, data) {
        if (data.length > 0) {
            res.json({ "_id": data[0]._id, "status": "Success" });
        } else {
            res.json({ "status": "fail", "msg": "Invalid Email/Password" });
        }
    });
});

// websetting starts here
app.post("/websettings", type, function (req, res) {
    console.log(req.body._id)
    var details = new websettings({
        address: req.body.address,
        email: req.body.email,
        contact: req.body.contact,
        about: req.body.about,
        ourvision: req.body.ourvision,
    });
    details.save(function (err, data) {
        res.send('data saved');
    });
    console.log(details);
});

app.get('/weblist', function (req, res) {
    websettings.find({}, function (err, data) {
        res.json(data);
    });
});
app.get('/weblist/:id', function (req, res) {
    websettings.find({ _id: req.params.id }, function (err, data) {
        res.json(data);
        console.log(data);
    });
});
app.delete('/weblist/:id', function (req, res) {
    websettings.remove({ "_id": req.params.id }, function (err, data) {
        res.json(data);
    });
});
// websettings ends here

// type starts here
app.post("/propertype", type, function (req, res) {
    console.log(req.body)
    if (req.body._id != '' && req.body._id != undefined) {
        console.log('ID Availble');
        editedData ={
            pro_type: req.body.pro_type,
            show_amenties: req.body.show_amenties,
            status: req.body.status
        }
        typesettings.findOneAndUpdate({ '_id': req.body._id }, editedData, function (err, data) {
            res.json(data);
        });
    }else{
        var Typesettings = new typesettings({
            pro_type: req.body.pro_type,
            show_amenties: req.body.show_amenties,
            status: req.body.status
        });
        Typesettings.save(function (err, data) {
            res.send('data saved');
        });
        console.log(Typesettings);
    }
});
app.get('/propertype', function (req, res) {
    typesettings.find({}, function (err, data) {
        res.json(data);
    });
});
app.get('/propertype/:id', function (req, res) {
    typesettings.find({ _id: req.params.id }, function (err, data) {
        res.json(data);
        console.log(data);
    });
});
app.delete('/propertype/:id', function (req, res) {
    typesettings.remove({ "_id": req.params.id }, function (err, data) {
        res.json(data);
    });
});

// statuses starts here
app.post("/properstatus", type, function (req, res) {
    console.log(req.body)
    if (req.body._id != '' && req.body._id != undefined) {
        console.log('ID Availble');
        editedData ={
            pro_status: req.body.pro_status,
            status: req.body.status
        }
        statuses.findOneAndUpdate({ '_id': req.body._id }, editedData, function (err, data) {
            res.json(data);
        });
    }else{
        var Statussettings = new statuses({
            pro_status: req.body.pro_status,
            status: req.body.status
        });
        Statussettings.save(function (err, data) {
            res.send('data saved');
        });
        console.log(Statussettings);
    }
});
app.get('/properstatus', function (req, res) {
    statuses.find({}, function (err, data) {
        res.json(data);
    });
});
app.get('/properstatus/:id', function (req, res) {
    statuses.find({ _id: req.params.id }, function (err, data) {
        res.json(data);
        console.log(data);
    });
});
app.delete('/properstatus/:id', function (req, res) {
    statuses.remove({ "_id": req.params.id }, function (err, data) {
        res.json(data);
    });
});

// statuses ends here


// possession starts here
app.post("/properpossession", type, function (req, res) {
    console.log(req.body)
    if (req.body._id != '' && req.body._id != undefined) {
        console.log('ID Availble');
        editedData ={
            pro_possession: req.body.pro_possession,
            status: req.body.status
        }
        possession.findOneAndUpdate({ '_id': req.body._id }, editedData, function (err, data) {
            res.json(data);
        });
    }else{
        var possessionsettings = new possession({
            pro_possession: req.body.pro_possession,
            status: req.body.status
        });
        possessionsettings.save(function (err, data) {
            res.send('data saved');
        });
        console.log(possessionsettings);
    }
});
app.get('/properpossession', function (req, res) {
    possession.find({}, function (err, data) {
        res.json(data);
    });
});
app.get('/properpossession/:id', function (req, res) {
    possession.find({ _id: req.params.id }, function (err, data) {
        res.json(data);
        console.log(data);
    });
});
app.delete('/properpossession/:id', function (req, res) {
    possession.remove({ "_id": req.params.id }, function (err, data) {
        res.json(data);
    });
});
// possession ends here


// age starts here
app.post("/property_age", type, function (req, res) {
    if (req.body._id != '' && req.body._id != undefined) {
        console.log('ID Availble');
        editedData ={
            pro_age: req.body.pro_age,
            status: req.body.status
        }
        age.findOneAndUpdate({ '_id': req.body._id }, editedData, function (err, data) {
            res.json(data);
        });
    }else{
        var agesettings = new age({
            pro_age: req.body.pro_age,
            status: req.body.status
        });
        agesettings.save(function (err, data) {
            res.send('data saved');
        });
        console.log(agesettings);
    }
});

app.get('/property_age', function (req, res) {
    age.find({}, function (err, data) {
        res.json(data);
    });
});
app.get('/property_age/:id', function (req, res) {
    age.find({ _id: req.params.id }, function (err, data) {
        res.json(data);
        console.log(data);
    });
});
app.delete('/property_age/:id', function (req, res) {
    age.remove({ "_id": req.params.id }, function (err, data) {
        res.json(data);
    });
});
// age ends here

// amenities starts here
app.post("/property_amenities", type, function (req, res) {
    console.log(req.body)
    if(req.body._id != '' && req.body._id != undefined){
        editedData= {
            pro_amenities: req.body.pro_amenities,
            status: req.body.status
        }
        amenities.findOneAndUpdate({ '_id': req.body._id }, editedData, function (err, data) {
            res.json(data);
        });
    }else{
        var amenitiessettings = new amenities({
            pro_amenities: req.body.pro_amenities,
            status: req.body.status
        });
        amenitiessettings.save(function (err, data) {
            res.send('data saved');
        });
        console.log(amenitiessettings);
    }
});
app.get('/property_amenities', function (req, res) {
    amenities.find({}, function (err, data) {
        res.json(data);
    });
});
app.get('/property_amenities/:id', function (req, res) {
    amenities.find({ _id: req.params.id }, function (err, data) {
        res.json(data);
        console.log(data);
    });
});
app.delete('/property_amenities/:id', function (req, res) {
    amenities.remove({ "_id": req.params.id }, function (err, data) {
        res.json(data);
    });
});
// amenities ends here

// facing starts here
app.post("/property_facing", type, function (req, res) {
    console.log(req.body)
    if(req.body._id != '' && req.body._id != undefined){
        editedData= {
            property_facing: req.body.property_facing,            
            status: req.body.status
        }
        facing.findOneAndUpdate({ '_id': req.body._id }, editedData, function (err, data) {
            res.json(data);
        });
    }else{
        var facingsettings = new facing({
            property_facing: req.body.property_facing,
            status: req.body.status
        });
        facingsettings.save(function (err, data) {
            res.send('data saved');
        });
        console.log(facingsettings);
    }
});
app.get('/property_facing', function (req, res) {
    facing.find({}, function (err, data) {
        res.json(data);
    });
});
app.get('/property_facing/:id', function (req, res) {
    facing.find({ _id: req.params.id }, function (err, data) {
        res.json(data);
        console.log(data);
    });
});
app.delete('/property_facing/:id', function (req, res) {
    facing.remove({ "_id": req.params.id }, function (err, data) {
        res.json(data);
    });
});
// facing ends here


// furnishing starts here
app.post("/property_furnishing", type, function (req, res) {
    console.log(req.body)
    if(req.body._id != '' && req.body._id != undefined){
        editedData= {
            property_furnishing: req.body.property_furnishing,
            status: req.body.status
        }
        furnishing.findOneAndUpdate({ '_id': req.body._id }, editedData, function (err, data) {
            res.json(data);
        });
    }else{
        var property_furnishing = new furnishing({
            property_furnishing: req.body.property_furnishing,
            status: req.body.status
        });
        property_furnishing.save(function (err, data) {
            res.send('data saved');
        });
        console.log(property_furnishing);
    }
});
app.get('/property_furnishing', function (req, res) {
    furnishing.find({}, function (err, data) {
        res.json(data);
    });
});
app.get('/property_furnishing/:id', function (req, res) {
    furnishing.find({ _id: req.params.id }, function (err, data) {
        res.json(data);
        console.log(data);
    });
});
app.delete('/property_furnishing/:id', function (req, res) {
    furnishing.remove({ "_id": req.params.id }, function (err, data) {
        res.json(data);
    });
});
// furnishing ends here

// flooring starts here
app.post("/property_flooring", type, function (req, res) {
    console.log(req.body)
    if(req.body._id != '' && req.body._id != undefined){
        editedData= {
            property_flooring: req.body.property_flooring,
            status: req.body.status
        }
        flooring.findOneAndUpdate({ '_id': req.body._id }, editedData, function (err, data) {
            res.json(data);
        });
    }else{
        var property_flooring = new flooring({
            property_flooring: req.body.property_flooring,
            status: req.body.status
        });
        property_flooring.save(function (err, data) {
            res.send('data saved');
        });
        console.log(property_flooring);
    }
});
app.get('/property_flooring', function (req, res) {
    flooring.find({}, function (err, data) {
        res.json(data);
    });
});
app.get('/property_flooring/:id', function (req, res) {
    flooring.find({ _id: req.params.id }, function (err, data) {
        res.json(data);
        console.log(data);
    });
});
app.delete('/property_flooring/:id', function (req, res) {
    flooring.remove({ "_id": req.params.id }, function (err, data) {
        res.json(data);
    });
});
// flooring ends here


// parking starts here
app.post("/property_parking", type, function (req, res) {
    console.log(req.body)
    if(req.body._id != '' && req.body._id != undefined){
        editedData= {
            property_parking: req.body.property_parking,
            status: req.body.status
        }
        parkings.findOneAndUpdate({ '_id': req.body._id }, editedData, function (err, data) {
            res.json(data);
        });
    }else{
        var property_parking = new parkings({
            property_parking: req.body.property_parking,
            status: req.body.status
        });
        property_parking.save(function (err, data) {
            res.send('data saved');
        });
        console.log(property_parking);
    }
});
app.get('/property_parking', function (req, res) {
    parkings.find({}, function (err, data) {
        res.json(data);
    });
});
app.get('/property_parking/:id', function (req, res) {
    parkings.find({ _id: req.params.id }, function (err, data) {
        res.json(data);
        console.log(data);
    });
});
app.delete('/property_parking/:id', function (req, res) {
    parkings.remove({ "_id": req.params.id }, function (err, data) {
        res.json(data);
    });
});
// parking ends here

// measurements starts here
app.post("/property_measurements", type, function (req, res) {
    console.log(req.body)
    if(req.body._id != '' && req.body._id != undefined){
        editedData= {
            property_measurments: req.body.property_measurments,
            status: req.body.status
        }
        measurements.findOneAndUpdate({ '_id': req.body._id }, editedData, function (err, data) {
            res.json(data);
        });
    }else{
        var property_measurements = new measurements({
            property_measurments: req.body.property_measurments,
            status: req.body.status
        });
        property_measurements.save(function (err, data) {
            res.send('data saved');
        });
        console.log(property_measurements);
    }
});
app.get('/property_measurements', function (req, res) {
    measurements.find({}, function (err, data) {
        res.json(data);
    });
});
app.get('/property_measurements/:id', function (req, res) {
    measurements.find({ _id: req.params.id }, function (err, data) {
        res.json(data);
        console.log(data);
    });
});
app.delete('/property_measurements/:id', function (req, res) {
    measurements.remove({ "_id": req.params.id }, function (err, data) {
        res.json(data);
    });
});
// measurements ends here

// country starts here
app.post('/country_data', function (req, res) {
    console.log(req.body);
    if(req.body._id != '' && req.body._id != undefined){
        editedData= {
            country_name: req.body.country_name            
        }
        coun_data.findOneAndUpdate({ '_id': req.body._id }, editedData, function (err, data) {
            res.json(data);
        });
    }else{
        var coun_details = new coun_data({
            country_name: req.body.country_name
        });
        coun_details.save(function (err, data) {
            res.send('data added');
        });
        console.log(coun_details);
    }
});
app.get('/country_data', function (req, res) {
    coun_data.find({}, function (err, data) {
        res.json(data);
    });
});
app.get('/country_data/:id', function (req, res) {
    coun_data.find({ _id: req.params.id }, function (err, data) {
        res.json(data);
        console.log(data);
    });
});
app.delete('/country_data/:id', function (req, res) {
    coun_data.remove({ '_id': req.params.id }, function (err, data) {
        res.json(data);
    });
});
// country ends here

// state starts here
app.post('/state_data', function (req, res) {
    console.log(req.body);
    if(req.body._id != '' && req.body._id != undefined){
        editedData= {
            country_name: req.body.country_name,
            state_name: req.body.state_name
        }
        state.findOneAndUpdate({ '_id': req.body._id }, editedData, function (err, data) {
            res.json(data);
        });
    }else{
        var state_details = new state({
            country_name: req.body.country_name,
            state_name: req.body.state_name
        });
        state_details.save(function (err, data) {
            res.send('data added');
        });
        console.log(state_details);
    }
});
app.get('/state_data', function (req, res) {
    state.find({}, function (err, data) {
        res.json(data);
    });
});
app.get('/state_data/:id', function (req, res) {
    state.find({ _id: req.params.id }, function (err, data) {
        res.json(data);
        console.log(data);
    });
});
app.delete('/state_data/:id', function (req, res) {
    state.remove({ '_id': req.params.id }, function (err, data) {
        res.json(data);
    });
});
// state ends here

// district starts here
app.post('/district_data', function (req, res) {
    console.log(req.body);
    if(req.body._id != '' && req.body._id != undefined){
        editedData= {
            country_name: req.body.country_name,
            state_name: req.body.state_name,
            district_name: req.body.district_name
        }
        district.findOneAndUpdate({ '_id': req.body._id }, editedData, function (err, data) {
            res.json(data);
        });
    }else{
        var district_details = new district({
            country_name: req.body.country_name,
            state_name: req.body.state_name,
            district_name: req.body.district_name
        });
        district_details.save(function (err, data) {
            res.send('data added');
        });
        console.log(district_details);
    }
});
app.get('/district_data', function (req, res) {
    district.find({}, function (err, data) {
        res.json(data);
    });
});
app.get('/district_data/:id', function (req, res) {
    district.find({ _id: req.params.id }, function (err, data) {
        res.json(data);
        console.log(data);
    });
});
app.delete('/district_data/:id', function (req, res) {
    district.remove({ '_id': req.params.id }, function (err, data) {
        res.json(data);
    });
});
// district ends here

// mandal starts here
app.post('/mandal_data', function (req, res) {
    console.log(req.body);
    if(req.body._id != '' && req.body._id != undefined){
        editedData= {
            country_name: req.body.country_name,
            state_name: req.body.state_name,
            district_name: req.body.district_name,
            mandal_name: req.body.mandal_name
        }
        mandal.findOneAndUpdate({ '_id': req.body._id }, editedData, function (err, data) {
            res.json(data);
        });
    }else{
        var mandal_details = new mandal({
            country_name: req.body.country_name,
            state_name: req.body.state_name,
            district_name: req.body.district_name,
            mandal_name: req.body.mandal_name
        });
        mandal_details.save(function (err, data) {
            res.send('data added');
        });
        console.log(mandal_details);
    }
});
app.get('/mandal_data', function (req, res) {
    mandal.find({}, function (err, data) {
        res.json(data);
    });
});
app.get('/mandal_data/:id', function (req, res) {
    mandal.find({ _id: req.params.id }, function (err, data) {
        res.json(data);
        console.log(data);
    });
});
app.delete('/mandal_data/:id', function (req, res) {
    mandal.remove({ '_id': req.params.id }, function (err, data) {
        res.json(data);
    });
});
// mandal ends here


// village starts here
app.post('/village_data', function (req, res) {
    console.log(req.body);
    if(req.body._id != '' && req.body._id != undefined){
        editedData= {
            country_name: req.body.country_name,
            state_name: req.body.state_name,
            district_name: req.body.district_name,
            mandal_name: req.body.mandal_name,
            village_name: req.body.village_name
        }
        village.findOneAndUpdate({ '_id': req.body._id }, editedData, function (err, data) {
            res.json(data);
        });
    }else{
        var village_details = new village({
            country_name: req.body.country_name,
            state_name: req.body.state_name,
            district_name: req.body.district_name,
            mandal_name: req.body.mandal_name,
            village_name : req.body.village_name
        });
        village_details.save(function (err, data) {
            res.send('data added');
        });
        console.log(village_details);
    }
});
app.get('/village_data', function (req, res) {
    village.find({}, function (err, data) {
        res.json(data);
    });
});
app.get('/village_data/:id', function (req, res) {
    village.find({ _id: req.params.id }, function (err, data) {
        res.json(data);
        console.log(data);
    });
});
app.delete('/village_data/:id', function (req, res) {
    village.remove({ '_id': req.params.id }, function (err, data) {
        res.json(data);
    });
});
// village ends here

// layout starts here
app.post('/layout_data', function (req, res) {
    console.log(req.body);
    if(req.body._id != '' && req.body._id != undefined){
        editedData= {
            layout_name: req.body.layout_name,
            upload: url + "/upload/" + req.files[0].filename,
            status: req.body.status
        }
        layout.findOneAndUpdate({ '_id': req.body._id }, editedData, function (err, data) {
            res.json(data);
        });
    }else{
        var layout_details = new layout({
            layout_name: req.body.layout_name,
            layout_files: req.body.layout_files,
            status: req.body.status
        });
        layout_details.save(function (err, data) {
            res.send('data added');
        });
        console.log(layout_details);
    }
});
app.get('/layout_data', function (req, res) {
    layout.find({}, function (err, data) {
        res.json(data);
    });
});
app.get('/layout_data/:id', function (req, res) {
    layout.find({ _id: req.params.id }, function (err, data) {
        res.json(data);
        console.log(data);
    });
});
app.delete('/layout_data/:id', function (req, res) {
    layout.remove({ '_id': req.params.id }, function (err, data) {
        res.json(data);
    });
});
// layout ends here

app.listen(config.port, function () {
    console.log('server runing on ' + config.port)
});