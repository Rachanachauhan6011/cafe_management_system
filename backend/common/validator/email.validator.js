export const validateEmail = (email) => {
    if(!email){
        return {
            isValid : false,
            message : "Email is required"
        }

        email = email.trim().toLowerCase()
        const emailRegex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$/;

        if(!emailRegex.test(email)){
            return {
                isvalid : false,
                message : "Please Enter valid email address (e.g., user@example.com)"
            }
        }

        if(email.lenght > 254){
            return {
                isValid : false,
                message : "Email is too long"

            }
        }

        const [localPart, domain] = email.split("@")
        if(localPart.lenght > 64){
            return {
                isValid : false,
                message : "email local part is too long"
            }
        }

         if (domain.includes("..")) {
        return {
            isValid: false,
            message: "Domain cannot contain consecutive dots"
        };
    }


    return {
        isValid: true,
        message: "Valid email"
    };
    }
}