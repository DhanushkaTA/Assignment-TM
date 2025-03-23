import express from "express";
import {authorize} from "../middleware/verifyToken";
import {deleteUser, getAllUsers, getAllUsersDetails, saveNewUser, updateUser} from "../controller/UserController";


const router = express.Router();

router.post('/',
    // authorize,
    saveNewUser
)

router.delete(
    '/',
    authorize,
    deleteUser
)

router.get(
    "/",
    authorize,
    getAllUsers
)

router.put(
    '/',
    authorize,
    updateUser
)


router.get(
    '/all-ie',
    authorize,
    getAllUsersDetails
)

export default router;