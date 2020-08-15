const router = require('express').Router();
const Test = require('../db/models/test')
const Student = require('../db/models/student')

router.get("/", async (req, res, next) => {
    try {
    const allTests = await Test.findAll()
    res.send(allTests)
    }
    catch (error){
    next(error)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
    const oneTest = await Test.findByPk(req.params.id)
    if (oneTest) {
        res.send(oneTest)
    } else {
        res.sendStatus(404);
    }
    }
    catch (error){
    next(error)
    }
})

//FROM SOLUTION
// router.post('/student/:studentId', async (req, res, next) => {
//     try {
//       let student = await Student.findById(req.params.studentId);
//       let test = await Test.create(req.body);
//       let studentTest = await test.setStudent(student);
//       res.status(201).send(studentTest);
//     } catch (err) {
//       next(err);
//     }
//   });

  //
  router.post('/student/:studentId', async (req, res, next) => {
      try {
      const newTest = await Test.create(req.body);
      newTest.setStudent(+req.params.studentId);
      res.status(201).send(newTest)
      } catch (error) {
          next(error)
      }
  })


router.delete("/:id", async (req, res, next) => {
    try {
     const deletedTest = await Test.destroy({
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


