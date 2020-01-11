exports.getUsers = (req, res) => {
    res.status(200).json({
        users:[{name: 'user1', gender: 'f'}]
    });
}

exports.postUsers = (req, res) => {
    const name = req.body.name;
    const gender = req.body.gender;
    res.status(201).json({
        message:"User added successfully",
        user: {id: new Date().toISOString(), name: name, gender: gender}
    });
}