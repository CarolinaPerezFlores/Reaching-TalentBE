const Candidate = require('../scheme/candidate-scheme');

// Create and Save a new Candidate
exports.create = (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Candidate content can not be empty"
        });
    }

    // Create a Candidate
    const candidate = new Candidate({
        table: req.body.table || "Untitled table", 
        content: req.body.content || "Untitled content", 
        total: req.body.total || "Untitled total" 
    });

    // Save Candidate in the database
    candidate.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Candidate."
        });
    });
};






// Retrieve and return all candidates from the database.
exports.findAll = (req, res) => {
    Candidate.find()
    .then(candidates => {
        res.send(candidates);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving candidate."
        });
    });
};



// Find a single candidate with a candidateId
exports.findOne = (req, res) => {
    Candidate.findById(req.params.candidateId)
    .then(candidate => {
        if(!candidate) {
            return res.status(404).send({
                message: "Candidate not found with id " + req.params.candidateId
            });            
        }
        res.send(candidate);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Candidate not found with id " + req.params.candidateId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Candidate with id " + req.params.candidateId
        });
    });
};



// Update a candidate identified by the candidateId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Candidate content can not be empty"
        });
    }

    // Find candidate and update it with the request body
    Candidate.findByIdAndUpdate(req.params.candidateId, {
        table: req.body.table || "Untitled table", 
        content: req.body.content || "Untitled content", 
        total: req.body.total || "Untitled total" 
    }, {new: true})
    .then(candidate => {
        if(!candidate) {
            return res.status(404).send({
                message: "Candidate not found with id " + req.params.candidateId
            });
        }
        res.send(candidate);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Candidate not found with id " + req.params.candidateId
            });                
        }
        return res.status(500).send({
            message: "Error updating candidate with id " + req.params.candidateId
        });
    });
};


// Delete a candidate with the specified candidateId in the request
exports.delete = (req, res) => {
    Candidate.findByIdAndRemove(req.params.candidateId)
    .then(candidate => {
        if(!candidate) {
            return res.status(404).send({
                message: "Candidate not found with id " + req.params.candidateId
            });
        }
        res.send({message: "Candidate deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Candidate not found with id " + req.params.candidateId
            });                
        }
        return res.status(500).send({
            message: "Could not delete candidate with id " + req.params.candidateId
        });
    });
};
