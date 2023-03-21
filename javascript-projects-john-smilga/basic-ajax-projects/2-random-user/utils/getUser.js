const URL = "https://randomuser.me/api/";

const getUser = async () => {
  const data = await fetch(URL);
  const response = await data.json();
  const randomPerson = response.results[0];
  // destructing
  const { email, phone } = randomPerson;
  const { large: image } = randomPerson.picture;
  const { first, last } = randomPerson.name;
  const { password } = randomPerson.login;
  const {
    dob: { age },
  } = randomPerson;
  const {
    location: {
      street: { number, name },
    },
  } = randomPerson;

  return {
    phone,
    email,
    image,
    password,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  };
};

export default getUser;
