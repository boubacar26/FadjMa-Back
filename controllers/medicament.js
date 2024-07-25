const Medicament = require('../models/medicament')


//Ajouter un medicament
exports.addMedicament = async (req, res) => {
  const medicament = new Medicament({
    image: req.body.image,
    name: req.body.name,
    description: req.body.description,
    groupName: req.body.groupName,
    stock: req.body.stock,
    dosage: req.body.dosage,
    price: req.body.price,
    category: req.body.category,
  });

  try {
    const newMedicament = await medicament.save();
    res.status(201).json(newMedicament);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//Voir tous les medocs
exports.getAllMedicaments = async (req, res) => {
  try {
    const medicament = await Medicament.find();
    res.json(medicament);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



//Supprimer un medoc
exports.deleteMedicament = async (req, res) => {
  try {
    const deletedMedicament = await Medicament.findByIdAndDelete(req.params.id);
    if (!deletedMedicament) {
      return res
        .status(404)
        .json({ message: "Aucun medicament trouvé avec cet ID" });
    }
    res.status(200).json({ message: "Medicament supprimé avec succès" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


//Modifier un medoc
exports.updateMedicament = async (req, res) => {
  try {
    const updatedMedicament = await Medicament.findByIdAndUpdate( req.params.id, req.body);
    if (!updatedMedicament) {
      return res
        .status(404)
        .json({ message: "Aucun Medicament trouvé avec cet ID" });
    }
    res.status(200).json(updatedMedicament);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


// Voir les détails d'un médicament par ID
exports.getMedicamentById = async (req, res) => {
  try {
    const medicament = await Medicament.findById(req.params.id);
    if (!medicament) {
      return res.status(404).json({ message: "Aucun médicament trouvé avec cet ID" });
    }
    res.json(medicament);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};