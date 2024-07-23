const express=require('express');
const Joi = require('joi');
const cors = require('cors');
let app = express();
app.use(cors());
app.options('*', cors());

// import bodyParser from 'body-parser'
// app.use(bodyParser.json());    use the json data
app.use(express.json());
let courses=[
    { id:1,fname:"course1", lname:"kharat", address:"at post ph", email:"abc@gmail.com", pnumber: 9876543210},
    { id:2,fname:"course2", lname:"abc", address:"at post pune", email:"xyz@gmail.com", pnumber: 9876543210},
]

app.get('/',(req,res)=>{
    res.send('Helllo express data');
});
// app.get('/api/customer',(req,res)=>{
//     res.send([1,2,3]);
// });

// // pass id in api
// app.get('/api/customer/:id',(req,res)=>{
//     res.send(req.params.id);
// });
 

// // query param
// app.get('/api/posts/:year/:month',(req,res)=>{
//     res.send(req.query);
// });

// 1. to get all data 
app.get('/api/getAllCourses',(req,res)=>{
    res.send(courses);
});

app.use(express.json());
let registrationData=[
    { id:1,fname:"course1", lname:"kharat", address:"at post ph", email:"abc@gmail.com", pnumber: 9876543210},
    { id:2,fname:"course2", lname:"abc", address:"at post pune", email:"xyz@gmail.com", pnumber: 9876543210},
]

app.get('/',(req,res)=>{
    res.send('Helllo express data');
});


// 1. to get all data 
app.get('/api/getAllRegisterData',(req,res)=>{
    res.send(registrationData);
});

//2.  to get single data using id
app.get('/api/registrationData/:id',(req,res)=>{
    const course=registrationData.find(c=>c.id===parseInt(req.params.id))
    console.log(course);
    if(!course) res.status(404).send("Course Id is not found");
    res.send(course);
    
});

//3.  to insert data using post method 

 app.post('/api/insertRegistrationData',(req,res)=>{
  
    const result=validateCourse(req.body)
    console.log(result)
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return
    }
    const course={
        id:registrationData.length + 1,
        fname:req.body.fname,
        lname:req.body.lname,
        pnumber:req.body.pnumber,
        email: req.body.email,
        address:req.body.address,
    }
    registrationData.push(course)
    res.send(course);

});

//2.  to get single data using id
app.get('/api/courses/:id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id))
    console.log(course);
    if(!course) res.status(404).send("Course Id is not found");
    res.send(course);
    
});


//3.  to insert data using post method 

app.post('/api/insertCourses',(req,res)=>{
  
    const result=validateCourse(req.body)
    console.log(result)
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return
    }
    const course={
        id:courses.length + 1,
        fname:req.body.fname,
        lname:req.body.lname,
        pnumber:req.body.pnumber,
        email: req.body.email,
        address:req.body.address,
    }
    courses.push(course)
    res.send(course);

});


//4. To update record using put method

app.put('/api/updateCourses/:id',(req,res)=>{
     result=validateCourse(req.body)
    console.log(result)
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return
    }
    const course=courses.find(c=>c.id===parseInt(req.params.id))
    console.log(course);
    if(!course) res.status(404).send("Course Id is not found");
    course.fname=req.body.fname;
    course.lname=req.body.lname;
    course.email=req.body.email;
    course.address=req.body.address;
    course.pnumber=req.body.pnumber;
    res.send(course)

}); 

//5. To delete record using delete method
app.delete('/api/deleteCourses/:id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id))
    console.log(course);
    if(!course) res.status(404).send("Course Id is not found");
    let index=courses.indexOf(course);
    console.log('index',index)
    courses.splice(index,1)
    res.send(course);
})


const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`listening  on port ${port}...`)
})

function validateCourse(course){
    const schema = Joi.object({
        // name: Joi.string()
        //     .min(3)  
        //     .required(),
        age: Joi.number(),
        empId:Joi.number(),
        branch:Joi.string(),
        role:Joi.string(),
        fname: Joi.string(),
        lname: Joi.string(),
        address: Joi.string(),
        pnumber: Joi.string(),
        email: Joi.string()

    })
    return schema.validate(course)
}
