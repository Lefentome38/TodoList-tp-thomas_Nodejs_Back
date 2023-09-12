console.log("hello");
import express from 'express'
import "dotenv/config"
import { DataTypes, NUMBER, Sequelize } from "sequelize"

// import { Sequelize } from 'sequelize';

// const sequelize = new Sequelize(process.env.BD_DATABASE as string ,process.env.BD_USERNAME as string ,process.env.BD_PASSWORD, {
//   host: 'localhost',
//   dialect: 'postgres'
// });

// async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }



// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "./db.sqlite",
// })

// const Todo = sequelize.define("Todo", {
//   name: {
//     type: DataTypes.STRING,
//     allowNull:false
//   },
//   status: {
//     type: DataTypes.BOOLEAN,
//     allowNull:false
//   },
//   age: {
//     type: DataTypes.NUMBER
//   }
// }, {
//   timestamps: false,
// })

// const tutu = sequelize.define("tutu", {
//   name: {
//     type: DataTypes.STRING,
//     allowNull:false
//   },
//   status: {
//     type: DataTypes.BOOLEAN,
//     allowNull:false
//   },
//   age: {
//     type: DataTypes.NUMBER
//   }
// }, {
//   timestamps: false,
// })

// sequelize
//   .sync({ force: true })
//   // table tutu
//   .then(() => {

//     console.log('La synchronisation a réussi.');

//     tutu.create({
//       name: "tache 1",
//       status: true,
//       age: 21
//     })

//     tutu.create({
//       name: "tache 2",
//       status: true,
//       age: 47
//     })

//     .then((tutus) => {
//       console.log("tutus", tutus)
//       tutu.findAll().then((tutus) => {
//         console.log("tutus", tutus)
//       })
//     })
    
//   })

//   //  table Todo
//   .then(() => {

//     console.log('La synchronisation a réussi.');

//     Todo.create({
//       name: "tache 1",
//       status: true,
//       age: 30,
//     })

//     .then((todo) => {
//       console.log("todo", todo)
//       Todo.findAll().then((todos) => {
//         console.log("todos", todos)
//       })
//     })
    
//   })
  
//   .catch(error => {
//     console.error('Erreur de synchronisation:', error);
//   });



const app = express();
const PORT = process.env.PORT as string;

app.get('/helloo', async (_, res) => {
    console.log("hello les toutous");
    res.send("ok")
})

app.get('/nombre_alea', async (_, res) => {
  let a = Math.floor(Math.random()*101)
  res.send("tirage " + a);
})

app.get('/CreateTache/:nomtache', async (req, res) => {
  Create_BDD(req)
  console.log("hello");
  res.send("ça marche " + req.params.nomtache);
})

// app.get('/delete/:nomtache', (req, res) => {
//   Delete_BDD(req)
//   res.send("delete ");
// })


app.listen( parseInt(PORT), () =>
  console.log("Server is listening on port " + PORT + "...")
);



// async function Delete_BDD(req:any) {
//   const sequelize = new Sequelize({
//     dialect: "sqlite",
//     storage: "./db.sqlite",
//   })

//   const Taches = sequelize.define(req.params.nomtache, {
//     name: {
//       type: DataTypes.STRING,
//       allowNull:false
//     },
//     status: {
//       type: DataTypes.BOOLEAN,
//       allowNull:false
//     },
//     age: {
//       type: DataTypes.NUMBER
//     }
//   }, {
//     timestamps: false,
//   })

//   await Taches.destroy({
//     where: {
//       name: "logane"
//     },
//   });
// }
  

function Create_BDD(req:any) {

  const a = Math.floor(Math.random()*101)

  const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./db.sqlite",
  })
  const Taches = sequelize.define(req.params.nomtache, {
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    tirage: {
      type: DataTypes.NUMBER
    },
  }, {
    timestamps: false,
  })
  sequelize
  .sync({ force: true })
  .then(() => {
    Taches.create({
      name: req.params.nomtache,
      tirage: a
      }) 
    })
    .catch(error => {
    console.error('Erreur de synchronisation:', error);
  });

}