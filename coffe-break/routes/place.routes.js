const router = require("express").Router()
const Place = require('../models/place.model')


//crear places

router.get('/create', (req, res) => {
    res.render('new-place')
})

router.post('/create', (req, res) => {
    const { name, type } = req.body

    Place
        .create({ name, type })
        .then(() => {
            res.redirect('/list')
        })
        .catch(err => {
            console.log(err)
            res.render('new-place')
        })

})

//mostrar lista de places

router.get('/list', (req, res) => {

    Place
        .find()
        .then(places => {
            res.render('list-place', { places })
        })
        .catch(err => console.log(err))
})


//editar places

router.get('/:id/edit', (req, res) => {   //al poner los dos puntos estoy diciendo que sera un id dinamico
    const { id } = req.params  //al poner el req.params le estoy diciendo que de toda la informacion me tiene que buscar es lo que diga id

    Place
        .findById(id)
        .then(place => {
            res.render('edit-place', place)
        })

})

router.post('/:id/edit', (req, res) => {
    const { id } = req.params
    const { name, type } = req.body //con el req.body le estoy diciendo que me lo busque en el formulario

    Place
        .findByIdAndUpdate(id, { name, type })
        .then(() => {
            res.redirect('/list')
        })
        .catch(err => console.log(err))
})


router.post('/:id/delete', (req, res) => {
    const { id } = req.params


    Place
        .findByIdAndDelete(id)
        .then(() => {
            res.redirect('/list')
        })
        .catch(err => console.log(err))

})





module.exports = router

