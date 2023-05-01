
import * as Yup from "yup";
import styles from "./login.module.css";
import Input from "../../components/forms/Input/Input";
import { Formik, Form } from "formik";
import { login as loginService } from "../../services/authServices";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AutContexts";


interface LoginValues {
    email: string;
    password: string;
}

const initialValues: LoginValues = {
    email: "",
    password: "",
};

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("E-mail inválido")
        .required("E-mail é obrigatório"),
    password: Yup.string()
        .min(6, "A senha deve ter no mínimo 6 caracteres")
        .required("Senha é obrigatória"),
});


   const Login = () => {

    const navigate = useNavigate();
    const { login } = useAuth();

    const onSubmit = async (values: LoginValues) => {
        try {
            const user = await loginService(values.email, values.password);
            login(user);
            navigate('/');
            console.log(values);
        } catch (error) {
            console.log(error);
            alert('Erro ao realizar login');
        }
    };


    
    return (
        <div className={styles.loginWrapper}>
             <div className={styles.formWrapper}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
               
            >
                {({ errors, touched }) => (
                    <Form className={styles.form}>
                    
                        <h1 className={styles.titile}> Meu site Pessoal</h1>

                        <Input
                            label="E-mail"
                            name="email"
                            type="email"
                            errors={errors.email}
                            touched={touched.email}
                        />

                        <Input
                            label="Password"
                            name="password"
                            type="password"
                            errors={errors.password}
                            touched={touched.password}
                        />

                        <button type="submit" className={styles.button}>
                            Login
                            </button>
            
                        </Form>
                )}
                </Formik>
             </div>
        </div>
    );
};



export default Login;


