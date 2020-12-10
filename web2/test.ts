import LoginController from "./controllers/login";

(async () => {
  console.log(
    await LoginController("email", "password")
  )
})();
