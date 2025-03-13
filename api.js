const express = require(`express`);
const mongoose = require(`mongoose`);
const cors = require(`cors`);
const app = express();
const port = 3000;

// permet de lire les requettes en json
app.use(express.json());

// pour eviter les erreurs de cors
app.use(cors());

// connection de mongoDB
mongoose.connect(`mongodb://localhost:27017/taskDB`)
    .then(() => console.log(`MongoDB connecté`))
    .catch(err => console.error(`Erreur de connexion`, err));

// 
const Task = mongoose.model(`Task`, {
    title: String
});

// pour ajouter les taches
app.post(`/tasks`, async (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ message: `veillez ajouter une tache` })
    }
    const newTask = new Task({ title });
    await newTask.save();
    res.status(200).json(newTask);
});

// pour lire les taches
app.get(`/tasks`, async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
})

// afficher une tache spesifique( GET/tasks/: id)
app.get(`/tasks/:id`, async (req, res) => {
    const task = Task.findById(req.params.id);
    if (!task) {
        return res.status(400).json({ massage: `tache non trouver` })
    }
    res.json(task);
});

//Modifier une tache(PUI/tasks/:id)
app.put(`/tasks/:id`, async (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ message: `vous devez ajouter une tache` });
    }

    const task = await Task.findById(req.params.id, { title }, { new: true });
    if (!task) {
        return res.status(400).json({ message: `Tache non trouvé!` })
    }
    res.json(task);
})

//Supprimer une tache ( DELTE/tasks/:id)
app.delete(`/tasks/:id`, async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
        return res.status(400).json({ message: `Tache non trouvé` });
    }
    res.json({ message: `Tache supprimée` });
})

// Demarer le compteura 
app.listen(port, () => {
    console.log(`API disponible sur http://localhost:${port}`)
});