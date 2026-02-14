/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextFunction, Request, Response } from "express"
// import { User } from "./user.model";
import httpStatus from "http-status-codes";
import { UserService } from "./user.service";
import { catchAsync } from "../../utils/catchAsync";



const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const user = await UserService.createUser(req.body);
    res.status(httpStatus.CREATED).json({
        message: "User created successfully",
        user
    })
})

const getAllUsers = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const users = await UserService.getAllUsers();
    res.status(httpStatus.OK).json({
        success: true,
        message: "All users fetched successfully",
        data: users
    })
})

export const UserController = {
    createUser,
    getAllUsers
}