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
        const userId = req.params.id;
        try {
            const [data] = await UserModels.getUserById(userId);
    
            if (data.length === 0) {
                return res.status(404).json({
                    error: "user not found",
                    message: "User not found with the provided ID"
                });
            }
    
            res.status(200).json({
                data: data,
                message: 'get user by id'
            });
        } catch (error) {
            res.status(500).json({
                error: "server error",
                message: error.message
            });
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
        const { id } = req.params;
        const { body } = req;
        if (!body.nik || !body.name || !body.email || !body.divisi || !body.alamat) {
            return res.status(400).json({
                message: "please input all value"
            });
        }
        try {
            const [existingUser] = await UserModels.getUserById(id);
    
            if (existingUser.length === 0 ) {
                return res.status(404).json({
                    error: "user not found",
                    message: "User not found with the provided ID"
                });
            }
    
            await UserModels.updateUser(body, id);
            res.status(200).json({
                data: body,
                message: "update user success"
            });
        } catch (error) {
            res.status(500).json({
                error: "server error",
                message: error.message
            });
        }
    },
    
    deleteUser: async (req, res) => {
        const userId = req.params.id;
        try {
            const [data] = await UserModels.getUserById(userId);
    
            if (data.length === 0) {
                return res.status(404).json({
                    error: "user not found",
                    message: "User not found with the provided ID"
                });
            }
    
            await UserModels.deleteUser(userId);
            res.status(200).json({
                message: 'user has been deleted'
            });
        } catch (error) {
            res.status(500).json({
                error: "server error",
                message: error.message
            });
        }
    }
    
}

export default UserController
