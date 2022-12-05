import express from 'express'
import multer from "multer"
import fs from 'fs'

const router= express.Router();
const upload= multer({dest: 'uploads'})
const uploadImages=upload.fields([
    {name: 'postImage', maxCount:1},
    {name: 'postImages', maxCount:4}
])

router.post('/addImage', uploadImages , (req, res)=>{
    // upload.single('postImage')
    const postImage= req.file;
    const postImages= req.files;

    const singleImage= req.files.postImage[0];
    const multipleImages= req.files.postImages;
    console.log(postImages)
    //image/jpeg
    let fileType= (singleImage.mimetype).split('/')
    let newFileName=singleImage.filename + '.'+ fileType[1];
    //original fileName, new file name a callback/ function
    fs.rename(`./uploads/${singleImage.filename}`,`./uploads/${newFileName}`,()=>{
        // res.send('Successfully saved Image') 
    })

    
    // renameing the multiple images
    let imageNames= multipleImages.map((image)=>{
        let fileType= (image.mimetype).split('/')
        let newFileName=image.filename + '.'+ fileType[1];
        //original fileName, new file name a callback/ function
        fs.rename(`./uploads/${image.filename}`,`./uploads/${newFileName}`,()=>{
            // res.send('Successfully saved Image') 
        })
        return newFileName;
    })
    console.log(imageNames)
    res.send('Successfully saved Image') 
// http://localhost:4001/4beeb22f72bf996dcebc048f62fb12f4.jpeg
})

export default router;