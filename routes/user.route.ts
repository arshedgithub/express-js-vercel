// import { Router } from "express";
// import { UserController } from "../controllers";
// import { Authenticate, Authorize } from "../middleware";
// import { USER_TYPE } from "../types";

// export default class UserRoutes {
//     private userController: UserController;

//     constructor(private router: Router) {
//         this.userController = new UserController();
//         this.configureRoutes();
//     }

//     private configureRoutes() {
//         // GET api/admin/users
//         this.router.get(
//             `/admin/users`,
//             Authenticate(),
//             Authorize([USER_TYPE.ADMIN]),
//             this.userController.getAllUsers
//         );

//         // GET api/admin/users/:id
//         this.router.get(
//             `/admin/users/:id`,
//             Authenticate(),
//             Authorize([USER_TYPE.ADMIN]),
//             this.userController.getUserById
//         );

//         // PATCH api/admin/users/:id/status
//         this.router.patch(
//             `/admin/users/:id/status`,
//             Authenticate(),
//             Authorize([USER_TYPE.ADMIN]),
//             this.userController.updateUserStatus
//         );

//         // DELETE api/admin/users/:id
//         this.router.delete(
//             `/admin/users/:id`,
//             Authenticate(),
//             Authorize([USER_TYPE.ADMIN]),
//             this.userController.deleteUser
//         );

//         // GET api/users/upload
//         this.router.get(
//             `/users/upload`,
//             this.userController.getUploadForm
//         );

//         // GET api/users/me
//         this.router.get(
//             `/users/me`,
//             Authenticate(),
//             this.userController.getCurrentUser
//         );
//     }
// } 