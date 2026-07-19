const URL = "";
const getFacts = async () => {
  console.log("Fetching facts...");
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data);
}