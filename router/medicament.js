const express = require("express");
const router = express.Router();
const medicamentController = require("../controllers/medicament");


//Ajouter un medicament
router.post('/', medicamentController.addMedicament);

//Voir tous les medicaments
router.get('/liste-medocs', medicamentController.getAllMedicaments);

//Modifier un medicament
router.patch('/update/:id', medicamentController.updateMedicament);

//Supprimer un medicament
router.delete('/delete/:id', medicamentController.deleteMedicament);

router.get("/:id", medicamentController.getMedicamentById);

module.exports = router;