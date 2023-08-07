export default function getUsers() {
  const data = fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );

  return data;
}
