export interface Useraccount {
    username: string;
    email: string;
    hashpassword: string;
    emailVerified: boolean;
    roles?: string[];
}
export interface UseraccountEntity extends Useraccount {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface UserProfile {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
}
export interface userProfileEntity extends UserProfile {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
