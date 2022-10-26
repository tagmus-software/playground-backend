

export function validatePassword(password: string, password_confirma: string) {

    if (!password) {
        throw new Error("'senha obrigatória!'");



    }

    if (/^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/.test(password) == false) {

        throw new Error(" 'A senha Deve conter mais que 6 caracteres, um numero, uma letra maiuscula e um simbolo'");


    }
    if (password !== password_confirma) {


        throw new Error("'A senhas nao confere!!'");


    }
}








