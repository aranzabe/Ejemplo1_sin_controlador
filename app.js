import express from 'express'
import chalk from 'chalk'
import kleur from 'kleur';
import { addValue,
    addValueAt,
    getValue,
    getValues,
    removeValueAt,
    updateValueAt } from './database/database.js'

const app = express()
const port = 9090
app.use(express.json())

app.get('/', (req,res) => {
        res.status(200).json({'msg' : 'Gestión del vector', 'valores' : getValues()})
    })

app.get('/:id', (req,res) => {
        res.status(200).json({'pos' : req.params.id, 'valor' : getValue(req.params.id)})
    })

app.delete('/:id', (req, res) => {
        let indice = parseInt(req.params.id,10)
        
        removeValueAt(indice)
        res.status(200).json({'msg' : 'Elemento borrado', 'valores' : getValues()})
    })

app.post('/',(req, res) => {
        let nuevoValor = req.body.valor
        addValue(nuevoValor)
        res.status(200).json({'msg' : 'Elemento insertado', 'valores' : getValues()})
    })

app.post('/:id',(req, res) => {
        let pos = req.params.id
        let nuevoValor = req.body.valor
    
        addValueAt(nuevoValor, pos)
        res.status(200).json({'msg' : 'Elemento insertado', 'valores' : getValues()})
    })

app.put('/:id',  (req, res) => {
        let indice = parseInt(req.params.id,10)
    
        updateValueAt(indice, req.body.valor)
        res.status(200).json({'msg' : 'Elemento modificado', 'valores' : getValues()})
    })

app.listen(port, () => {
  console.log(chalk.green(`✅ Servidor corriendo en ${port}`))
})
// console.log(' ✅ Server is running on port 9090')
// console.log(chalk.red('❌ Texto rojo'));
// console.log(chalk.green('✅ Texto verde'));
// console.log(chalk.yellow('‼️ Texto amarillo'));
// console.log(chalk.blue('👽Texto azul'));
// console.log(chalk.blue.bold('🔵 Texto azul y en negrita'));
// console.log(chalk.bgMagenta.white('🌎 Texto blanco con fondo magenta'));
// console.log(chalk.bold.underline.cyan('🔴 Texto llamativo'));
// console.log(chalk.inverse('🟡 Texto con colores invertidos'));


// console.log(kleur.red('⛔️ Error'));
// console.log(kleur.green().bold('🟢 Éxito'));
// console.log(kleur.yellow().underline('⚠️ Advertencia'));

