import UserModels from "../models/usersModels.js";

const UserController = {
    getAllUsers: async (req, res) => {
       try {
            const [data] = await UserModels.getAllUsers();

            res.status(200).json({
                data: data,
                message: 'get all userss'
            })
       } catch (error) {
            res.status(500).json({
                error: "server error",
                message: error
            })
       }
    },

    getUserById: async (req, res) => {
        const userId = req.params.id
        try {
            const [data] = await UserModels.getUserById(userId)

            if(userId == null){
                res.status(404).json({
                    error: "user not found",
                    message: error
                })
            }

            res.status(200).json({
                data: data,
                message: 'get user by id'
            })
        } catch (error) {
            res.status(500).json({
                error: "server error",
                message: error
            })
        }
    
    },

    addUser: async (req, res) => {
        const {body} = req;
        if(!body.nik || !body.name || !body.email || !body.divisi || !body.alamat){
            return res.status(400).json({
                message: "please input all value"
            })
        }

        try {
            await UserModels.addUser(body);
            res.status(201).json({
                data: req.body,
                message : "add user success"
            })
        } catch (error) {
            res.status(400).json({
                error: "bad request",
                message: error
            })
        }
    },
    
    updateUser: async (req, res) => {
        const {id} = req.params
        const {body} = req;
        if(!body.nik || !body.name || !body.email || !body.divisi || !body.alamat){
            return res.status(400).json({
                message: "please input all value"
            })
        }
        try {
            await UserModels.updateUser(body, id)
            res.status(201).json({
                data: body,
                message : "update user success"
            })
        } catch (error) {
            res.status(400).json({
                error: "bad request",
                message: error
            })
        }
        
    },
    
    deleteUser: async (req, res) => {
        const userId = req.params.id
        try {
            const [data] = await UserModels.deleteUser(userId)
            res.status(200).json({
                message: 'users has been deleted'
            })
        } catch (error) {
            res.status(400).json({
                error: "deleted user failed",
                message: error
            })
        }
    }
}

export default UserController