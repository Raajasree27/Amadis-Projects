const express=require('express');
const app=express();
const path=require('path');
// const fs=require('fs');
const port=3000;
const nodemailer=require('nodemailer')
const multer=require('multer');

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,"uploads"))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${file.originalname.replace(/\s+/g, '_')}`;
    cb(null, uniqueSuffix)
  }
})

const fileFilter=(req,file,cb)=>{
    const allowedTypes=['application/pdf','application/msword']
    if(allowedTypes.includes(file.mimetype)){
        cb(null,true)
    }
    else{
        cb(new Error("only pdf and word is accepted"),false);
    }
}

const upload = multer({ storage,fileFilter})

app.post('/submit',upload.single('cv'), async(req, res)=> {
    const {name,email}=req.body
    const cvFile=req.file;
    if (!cvFile) {
      // A Multer error occurred when uploading.
      return res.status(400).send("CV Upload failed or Invalid")
    } 

    // Everything went fine.
    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:"raajasree27@gmail.com",
            pass:"fhxj oosh rlwe ckpt"
        }
    })

    const hrEmail="varshaakme@gmail.com"

    try{
        await transporter.sendMail({
            from:"raajasree27@gmail.com",
            to:email,
            subject:"Job Application Received",
            text:`Hi ${name},\n\n We have received your job application for the Software Engineering Role, Our team will validate your CV and get back to you soon.\n\n Thankyou.`
        })
        await transporter.sendMail({
            from: 'raajasree27@gmail.com',
            to: hrEmail,
            subject: `New Job Application from ${name}`,
            text: `Candidate Name: ${name}\nCandidate Email: ${email}`,
            attachments: [{
                filename: cvFile.originalname,
                path: cvFile.path
            }]
        })
        res.send("Application Submitted Successfully and confirm mail has been sent!")
    }catch(err){
        console.log(err);
    }
  })

  app.listen(port,()=>{
    console.log("Servern in rnning i the localhost:3000")
  })
