import {getUser} from "@/services/users";


export async function checkAuth(authToken: string) {
    if (authToken) return null;
    const user = await getUser(authToken);
    if (!user) return null;
    return user.role;
}