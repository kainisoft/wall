//UserSchema = new SimpleSchema({
//    username: {
//        type: String,
//        min: 4
//    },
//    email: {
//        type: String,
//        regEx: SimpleSchema.RegEx.Email
//    },
//    password: {
//        type: String,
//        min: 4
//    },
//    confirmPassword: {
//        type: String,
//        custom: function () {
//            if (this.value !== this.field('password').value) {
//                return "passwordMismatch";
//            }
//        }
//    }
//});
