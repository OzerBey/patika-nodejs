import PropTypes from "prop-types";

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

// function User({ name, surname, isLoggedIn, age,  }) {
//   console.log(name);
//   return (
//     <div>
//       <h1>
//         Hello {name} {surname}:) my Age is {age}
//         <br></br>
//         status:
//         {isLoggedIn ? "You are logged in" : "You are not logged in"}
//       </h1>
//     </div>
//   );
// }

function User({ name, surname, isLoggedIn, age, friends, address }) {
  console.log(name);
  return (
    <>
      <h1>
        {isLoggedIn
          ? `${name} ${surname} (${age}) is logged in successfully`
          : `You are not logged in, please try again later`}
      </h1>
      {/* {friends.map((friend, index) => (
        <div key={index}>
          {index}. {friend}
        </div>
      ))} */}
      {address.title} {address.street} {address.city} {address.zipCode}
    </>
  );
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  friends: PropTypes.arrayOf(PropTypes.string),
  address: PropTypes.shape({
    //shape: object
    title: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    city: PropTypes.number.isRequired,
    zipCode: PropTypes.string.isRequired,
  }),
};

//defaultProps: assign default value to props
User.defaultProps = {
  name: "Yasin(default name)",
  surname: "Ozer(default surname)",
  isLoggedIn: false,
  age: 24,
  friends: [],
  address: {
    title: "Beylikdüzü",
    street: "Istanbul",
    zipCode: "34000",
  },
};

export default User;
