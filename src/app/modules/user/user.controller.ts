import { NextFunction, Request, Response } from "express"
// import { User } from "./user.model";
import httpStatus from "http-status-codes";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await UserService.createUser(req.body);
        res.status(httpStatus.CREATED).json({
            message: "User created successfully",
            user
        })
    } catch (error) {
        console.log(error)
        // res.status(httpStatus.BAD_REQUEST).json({
        //     message: `Error creating user ${error} from user controller`,
        // })
        next(error)
    }
}

export const UserController = {
    createUser
}