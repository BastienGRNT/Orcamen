export class User {
    private constructor(
        private readonly _id: string,
        private _name: string,
        private _email: string,
    ) {}

    public get id(): string { return this._id; }
    public get name(): string { return this._name; }
    public get email(): string { return this._email; }

    public static create(id: string, name: string, email: string): User {
        if (!id) throw new Error("ID_REQUIRED");
        if (!name || name.length < 2) throw new Error("INVALID_NAME_LENGTH");
        if (!this.isValidEmail(email)) throw new Error("INVALID_EMAIL_FORMAT");

        return new User(id, name, email);
    }

    public changeEmail(newEmail: string): void {
        if (!User.isValidEmail(newEmail)) throw new Error("INVALID_EMAIL_FORMAT");
        this._email = newEmail;
    }

    public rename(newName: string): void {
        if (!newName || newName.length < 2) throw new Error("INVALID_NAME_LENGTH");
        this._name = newName;
    }

    private static isValidEmail(email: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}