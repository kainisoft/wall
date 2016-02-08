AccountsTemplates.configure({
    // Behavior
    forbidClientAccountCreation: false,

    // Appearance
    showForgotPasswordLink: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/',
    redirectTimeout: 4000,

    defaultLayout: 'authContent',
    defaultLayoutRegions: {},
    defaultContentRegion: 'main'
});

AccountsTemplates.configure({
    texts: {
        title: {
            signIn: '',
            signUp: ''
        }
    },
    hideSignInLink: true,
    showLabels: false
});

AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
    {
        _id: "username",
        type: "text",
        displayName: "username",
        required: true,
        minLength: 5,
        options: {
            inputIcon: 'user'
        },
        placeholder: 'Username'
    },
    {
        _id: 'email',
        type: 'email',
        required: true,
        displayName: "email",
        re: /.+@(.+){2,}\.(.+){2,}/,
        errStr: 'Invalid email',
        options: {
            inputIcon: 'mail'
        },
        placeholder: 'E-mail'
    },
    {
        _id: 'username_and_email',
        type: 'text',
        required: true,
        options: {
            inputIcon: 'user'
        },
        placeholder: 'Username or E-mail'
    },
    {
        _id: "password",
        type: "password",
        required: true,
        minLength: 4,
        displayName: {
            "default": "password",
            changePwd: "newPassword",
            resetPwd: "newPassword",
        },
        placeholder: {
            "default": "password",
            changePwd: "newPassword",
            resetPwd: "newPassword",
        },
        options: {
            inputIcon: 'lock'
        }
    }
]);

