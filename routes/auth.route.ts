// import { Router } from "express";
// import { AuthController } from "../controllers";
// import { ValidateBody } from "../middleware";
// import { LoginDtoSchema, RegisterDtoSchema } from "../types";

// export default class AuthRoutes {
//     private authController: AuthController;

//     constructor(private router: Router) {
//         this.authController = new AuthController();
//         this.configureRoutes();
//     }

//     private configureRoutes() {
//         // POST api/auth/register
//         this.router.post(
//             `/auth/register`,
//             ValidateBody(RegisterDtoSchema),
//             this.authController.register
//         );

//         // POST api/auth/login
//         this.router.post(
//             `/auth/login`,
//             ValidateBody(LoginDtoSchema),
//             this.authController.login
//         );

//         // POST api/auth/refresh-token
//         // this.router.post(
//         //     `/auth/refresh-token`,
//         //     this.authController.refreshToken
//         // );

//         // POST api/auth/logout
//         this.router.post(
//             `/auth/logout`,
//             this.authController.logout
//         );
//     }
// } 