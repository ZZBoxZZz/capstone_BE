// yarn init => tạo file package.json : quản lý tất cả các thư viện thông qua định dạng json

// yarn add express => cài đặt framework express 
// yarn install => cài đặt thư viện và tạo thư mục node_modules cho dự án 

// tạo server BE bằng express


// khởi động server => node index.js

// yarn start => cấu hình ở file package.json

// yarn add nodemon => auto reset server : dùng cho code localhost

// tạo API
// Url => path , Method 

// // /demo , GETb
// app.get("/demo/:id", (req, res) => {

//     // 3 cách
//     // - lấy từ url: 
//     //    + query params => /:[tên biến]
//     // localhost:8080/demo/hello node
//     let { id } = req.params; // => destructering

//     //    + query string => ?[tên biến] = [data] & [tên biến thứ 2] = [data 2]
//     // localhost:8080/demo/1 ?id2=123
//     let { id2 } = req.query;

//     // - lấy từ body: json

//     let { hoTen, email, phone, diaChi } = req.body;



//     res.status(500).send(diaChi); // trả tất cả định dạng trừ number cho FE

// }) // tham số Rest params

// // StatusCode


// // yarn add mysql2

// // kết nối CSDL => 5 thông tin login vào hệ CSDL
// const mysql2 = require('mysql2');
// const connect = mysql2.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1234",
//     port: 3306,
//     database: "db_food"
// })
// lấy danh sách user
// app.get("/get-user", async (req, res) => {

//     // câu truy vấn CSDL => SQL
//     // ORM : find(), findIndex(), .map()
//     let sql = "SELECT * FROM user";

//     // bất đồng bộ
//     let data = await connect.promise().query(sql);

//     res.send(data[0]);
// })

// ORM: sequelize => findAll, prisma => findMany

// const {getUser} = require('./Controllers/userController');





const express = require('express'); // import thư viện
const app = express();
// middleware
// chuyển dữ liệu sang dạng json để req.body có thể hiểu
app.use(express.json());

app.use(express.static("."));

// cho phép FE truy cập vào API của source BE
const cors = require('cors');
app.use(cors());

// khởi tạo server với port bất kỳ
app.listen(8080);



const rootRouter = require('./Routers/rootRouter');
app.use("/api", rootRouter) 

// yarn sequelize-auto -h localhost -d capstone -u root -x 1234 -p 3306  --dialect mysql -o src/Models -l es6
