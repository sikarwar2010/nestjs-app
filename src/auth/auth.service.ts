import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    login(): string {
        return 'This action logs a user in';
    }

    logout(): string {
        return 'This action logs a user out';
    }

    register(): string {
        return 'This action registers a user';
    }

    forgotPassword(): string {
        return 'This action sends a password reset email';
    }

    resetPassword(): string {
        return 'This action resets a user password';
    }

    changePassword(): string {
        return 'This action changes a user password';
    }

    verifyEmail(): string {
        return 'This action verifies a user email';
    }

    resendEmailVerification(): string {
        return 'This action resends a user email verification';
    }

    changeEmail(): string {
        return 'This action changes a user email';
    }

    deleteAccount(): string {
        return 'This action deletes a user account';
    }

    getProfile(): string {
        return 'This action gets a user profile';
    }

    updateProfile(): string {
        return 'This action updates a user profile';
    }
}
