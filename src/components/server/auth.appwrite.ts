import urlConfig from "../../config/url.config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(urlConfig.appwriteUrl)
            .setProject(urlConfig.appwriteProjectId);
        this.account = new Account(this.client);
    }

    /** Create Account */
    async createAccount( fullName: string, email: string, password: string) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                fullName
            );
            return userAccount;
        } catch (error: any) {
            console.log('authService :: createAccount :: error: ', error);
            throw error;
        }
    }

    /** Login to Account */
    async login(email: string, password: string) {
        try {
            const userAccount = await this.account.createEmailPasswordSession(email, password);
            return userAccount;
        } catch (error: any) {
            console.log('authService :: login :: error: ', error);
            throw error;
        }
    }

    /** Logout from Account */
    async logout() {
        try {
            const userAccount = await this.account.deleteSession('current');
            return userAccount;
        } catch (error: any) {
            console.log('authService :: logout :: error: ', error);
            throw error;
        }
    }

    /** Send Email Verification Link */
    async sendEmailVerification(url: string) {
        try {
            const userAccount = await this.account.createVerification(url);
            return userAccount;
        } catch (error: any) {
            console.log('authService :: sendEmailVerification :: error: ', error);
            throw error;
        }
    }

    /** Verify Email */
    async verifyEmail() {

        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get('userId');
        const secret = urlParams.get('secret'); 

        try {
            const updateEmail = await this.account.updateVerification(userId!, secret!);
            return updateEmail;
        } catch (error: any) {
            console.log('authService :: verifyEmail :: error: ', error);
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;