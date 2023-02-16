const useList = () => {
    const INITIAL_STATE = {
        name: 'pepe',
        email: '',
        password: '',
    }

    const UserForm = () => {
        // const [name, setName] = useState('')
        // const [email, setEmail] = useState('')
        // const [password, setPassword] = useState('')
        const navigate = useNavigate();
        const [error, setError] = useState(null)

        function handleChange(e) {
            setUser({ ...user, [e.target.name]: e.target.value.email })

        }

        const [user, setUser] = useState(INITIAL_STATE)


        async function handleSubmit(e) {
            e.preventDefault()
            const response = await fetch('http://localhost:3000/user',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Authorization': 'bearer xxxxxxx'
                    },
                    body: JSON.stringify({ name, email, password })
                })
            if (!response.ok) {
                console.log('error en la peticion:')
            } else {
                //TODO mostrar un mensaje tipo toast
                navigate('/userList')
            }

        }

        useEffect(() => {
            if (!name) {


                setError("El nombre no puede estar vacion")
                return
            }
            if (name.length < 3) {
                setError("La longirud del nombre tiene que ser mayor de 2")
                return
            }
            setError(null)


        }, [name])
    }
}
return useList

export default useList