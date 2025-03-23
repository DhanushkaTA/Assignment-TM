import express from "express";
import {authorize} from "../middleware/verifyToken";
import {
    creatTask,
    deleteTask,
    getAllTasks,
    getTaskById,
    changeTaskStatus,
    updateTask, getAllTaskByUserId
} from "../controller/TaskController";
import {getAllUsersDetails} from "../controller/UserController";

const router = express.Router();

router.post(
    '/',
    authorize,
    creatTask
)

router.delete(
    '/',
    authorize,
    deleteTask
)

router.put(
    '/',
    authorize,
    updateTask
)

router.put(
    '/status',
    authorize,
    changeTaskStatus
)

router.get(
    '/',
    authorize,
    getAllTasks
)

router.get(
    '/user',
    authorize,
    getAllTaskByUserId
)


router.get(
    '/:id',
    authorize,
    getTaskById
)


export default router;