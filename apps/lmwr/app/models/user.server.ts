
export type User = {
  id: string;
  email: string;
  username: string;
}
export async function getUserById(id: User["id"]) {
  return {
    id: '0',
    username: "admin",
    email: "cezar@limewire.com"
  }
}
