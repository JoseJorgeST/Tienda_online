function validar() {
    let todo_correcto = true;
    let expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    let email = document.form1.email.value;
    if (!expresion.test(email)) {
        todo_correcto = false;
    }

    if (!todo_correcto) {
        alert("Algunos campos no son correctos, vuelva a evaluar")
    }

    return todo_correcto;
}