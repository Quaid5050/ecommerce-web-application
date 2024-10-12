
'use server'
import { handleExistingAccessToken } from '@/lib/utils';
import { signIn, signOut } from "@/auth";

// doSocialLogin function
export async function doSocialLogin(formData: any) {
    const action = formData.get("action");
    await signIn(action, {
        redirectTo: "/"
    });
    console.log(action);
}


export async function doLogout() {
    await handleExistingAccessToken();
    await signOut({
        redirectTo: "/products"
    });
}