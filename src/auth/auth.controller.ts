import { Controller, Post } from '@nestjs/common';
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    login(): string {
        return this.authService.login();
    }

    @Post('logout')
    logout(): string {
        return this.authService.logout();
    }

    @Post('register')
    register(): string {
        return this.authService.register();
    }

    @Post('forgot-password')
    forgotPassword(): string {
        return this.authService.forgotPassword();
    }

    @Post('reset-password')
    resetPassword(): string {
        return this.authService.resetPassword();
    }

    @Post('change-password')
    changePassword(): string {
        return this.authService.changePassword();
    }

    @Post('verify-email')
    verifyEmail(): string {
        return this.authService.verifyEmail();
    }

    @Post('resend-email-verification')
    resendEmailVerification(): string {
        return this.authService.resendEmailVerification();
    }

    @Post('change-email')
    changeEmail(): string {
        return this.authService.changeEmail();
    }

    @Post('delete-account')
    deleteAccount(): string {
        return this.authService.deleteAccount();
    }

    @Post('get-profile')
    getProfile(): string {
        return this.authService.getProfile();
    }

    @Post('update-profile')
    updateProfile(): string {
        return this.authService.updateProfile();
    }
}
