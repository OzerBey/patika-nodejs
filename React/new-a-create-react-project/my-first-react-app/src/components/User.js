// function User(props) {
//   console.log(props);
//   return (
//     <div>
//       <h1 style>
//         Hello {props.name} {props.surname}:) <br></br>
//         status:
//         {props.isLoggedIn ? "You are logged in" : "You are not logged in"}
//       </h1>
//     </div>
//   );
// }

function User({ name, surname, isLoggedIn, age }) {
  console.log(name);
  return (
    <div>
      <h1>
        Hello {name} {surname}:) my Age is {age}
        <br></br>
        status:
        {isLoggedIn ? "You are logged in" : "You are not logged in"}
      </h1>
    </div>
  );
}

export default User;
