import cors from "cors"
import Express,{Request,Response,NextFunction} from "express"
import { productRouter } from "./src/Controllers/ProductController";
import { userRouter } from "./src/Controllers/UserController";
import { handleError } from "./src/handler/ExceptionHandler";
import { AuthenticateToken } from "./src/Middleware/AuthenticateToken";


const app = Express();
var port =process.env.PORT||8081;
app.use(cors());
app.use(Express.static(__dirname));
app.use(Express.json())
app.use('/api/userDetail',userRouter);
app.use('/api/productDetail',AuthenticateToken,productRouter);

app.use((err:any, req:Request, res:Response, next:NextFunction) => {
    handleError(err, res);
  });
app.listen(8081,()=>console.log('Http server started on port '+port))