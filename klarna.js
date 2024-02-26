import fetch from "node-fetch";

export function getKlarnaAuth(){
  const username = process.env.PUBLIC_KEY;
  const password = process.env.SECRET_KEY;
  const auth = `Basic ${Buffer.from(username + ':' + password)} `
  return auth;

}

//Skapar en order hos klarna
export async function createOrder(product) {}

//Hämtar en order hos klarna
export async function retrieveOrder(order_id) {}