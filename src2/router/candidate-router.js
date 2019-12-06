var cors = require('cors')

module.exports = (app) => {
    const candidate = require('../controler/candidate-controler');

    app.use(cors({credentials: true,}));
 
    // Create a new Candidate
    app.post('/candidates', candidates.create);

    // Retrieve all Candidates
    app.get('/candidates', candidates.findAll);

    // Retrieve a single Candidate with candidateId
    app.get('/candidates/:candidateId', candidates.findOne);

    // Update a Candidate with candidateId
    app.put('/candidates/:candidateId', candidates.update);

    // Delete a Candidate with candidateId
    app.delete('/candidates/:candidateId', candidates.delete);
    
}
