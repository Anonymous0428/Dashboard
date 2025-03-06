const AUTHENTIFICATION = {
    initLocalStorage : ()  => {
        const userList = localStorage.getItem('users')
        if(userList){
            const users = JSON.parse(userList)
            return users
        }else {
            localStorage.setItem('users', JSON.stringify([]))
        }
    },

    submitForm : () => {
        const formTag = document.querySelector('.form')
        if(formTag){
            formTag.addEventListener('submit', e => {
                e.preventDefault()
                const emailField = document.querySelector('.email__input')
                const passwordField = document.querySelector('.password__input')
                const formResult = {
                    email : emailField.value,
                    password : passwordField.value
                }
                console.log(formResult)
                const userList = AUTHENTIFICATION.initLocalStorage()
                /*userList.push(formResult)
                localStorage.setItem('users', JSON.stringify(userList))*/
                userList.forEach( (object, index) =>{
                    if( formResult.email === object.email && formResult.password === object.password ){
                        
                    } else if( formResult.email != object.email && formResult.password != object.password ){
                        console.log("error")
                        const errorTag = document.querySelector('.create__compt')
                        errorTag.innerHTML = ` 
                            <div class="error__text">
                                <p>Désolé nous n'avons trouvé aucun compte associé à <span>${formResult.email}</span>. Voulez-vous créer un compte? <a href="indexInscription.html">Créer un compte</a></p>
                            </div>
                        `
                    }
                })
                formTag.reset()
            })
        }
    },
}
AUTHENTIFICATION.initLocalStorage()
AUTHENTIFICATION.submitForm()