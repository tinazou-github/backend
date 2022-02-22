const express = require("express");
// import the mysql database connection
const database = require("./database");

// cors policy, frontend and backend to operate on the same machine.
const cors = require("cors");

const SUCCESS = 200;

app = express();
app.use(cors());
app.use(express.json());

router = express.Router();

// All the APIs here
router.get("/users/all", (request, response) => {
  database.connection.query("select * from users", (errors, records) => {
    if (errors) {
      console.log(errors);
      response.status(500).send("Something wrong happened in the Server");
    } else {
      response.status(SUCCESS).send(records);
      console.log(SUCCESS);
    }
  });
});

router.post("/users/add", (request, response) => {
  // verify the request data

  // then they execute the query
  database.connection.query(
    `insert into 
      users (user_name, user_email, user_dob) 
    values 
      ("${request.body.name}", "${request.body.email}", "${request.body.dob}")`,
    (errors, records) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("Something wrong happened in the Server");
      } else {
        response.status(200).send("User added!");
      }
    }
  );
});

app.use(router);

app.listen(3000, (errors) => {
  if (errors) {
    console.log(errors);
  } else {
    console.log("Server started at Port 3000.");
  }
}); 

router.delete("/delete_user", (request, response) =>{
    database.connection.query(
      `DELETE FROM users WHERE user_id = "${request.query.user_id}"`,
      (errors, records) => {
        if(errors) {
          console.log("errors");
          response.status(500).send("Error 500");
        }else {
          response.status(200).send(records);
          console.log(records);
        }
      }
    );
      });

      