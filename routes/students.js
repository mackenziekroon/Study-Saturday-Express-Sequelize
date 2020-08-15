const router = require('express').Router();
const Student = require('../db/models/student')

router.get("/", async (req, res, next) => {
    try {
    const allStudents = await Student.findAll()
    res.send(allStudents)
    }
    catch (error){
    next(error)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
    const oneStudent = await Student.findByPk(req.params.id)
    if (oneStudent) {
        res.send(oneStudent)
    } else {
        res.sendStatus(404);
    }
    }
    catch (error){
    next(error)
    }
})


router.post("/", async (req, res, next) => {
    try {
      const newStudent = await Student.create(req.body)
      res.status(201).send(newStudent);
    } catch (error) {
        next(error)
    }
})

// simple update queries
router.put("/:id", async (req, res, next) => {
    try {
    const updatedStudent = await Student.update(req.body, {
        where: {
            id: req.params.id
        }
    }) 
    const reallyUpdatedStudent = await Student.findByPk(req.params.id) 
    res.send(reallyUpdatedStudent) 
    } catch (error) {
       next(error) 
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
     const deletedStudent = await Student.destroy({
         where: {
            id: req.params.id
         }
     })   
     res.sendStatus(204)
    } catch (error) {
        next(error)
    }
})


module.exports = router;


