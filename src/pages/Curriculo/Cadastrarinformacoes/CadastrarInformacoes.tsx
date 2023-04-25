
import styles from "../../../components/forms/Input/Input.module.css";
import Input from "../../../components/forms/Input/Input";
import Textarea from "../../../components/forms/textarea/textarea";
import { Informacoes, createInfomacoes } from "../../../services/informacoesServices";

import * as Yup from "yup";
import { Formik, Form  } from "formik";





const CadastrarInformacoes: React.FC = () => {

    const initialValues: Informacoes = {
        id: 1,
        foto: '',
        nome: '',
        cargo: '',
        resumo: ''
    };

    const validationSchema = Yup.object().shape({
        foto: Yup.string().required('Campo obrigatório'),
        nome: Yup.string().required('Campo obrigatório'),
        cargo: Yup.string().required('Campo obrigatório'),
        resumo: Yup.string().required('Campo obrigatório')
    });

    const onSubmit = async (values: Informacoes, { resetForm }: { resetForm: () => void }) => {
        



        try {
            await createInfomacoes(values);
           
            console.log(values);
            // resetForm();
            alert('Formulário enviado com sucesso!');

        } catch (error) {

            console.error('Erro ao enviar formulário', error);
            alert('Erro ao enviar formulário. Tente novamente.');

        }
        // //Lógica de envio para backend
        // console.log(values);
        // resetForm();
        // alert('Formulário enviado com sucesso!');
        
    };

    return (
        <div className={styles.formWrapper}>
            
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>

            {({ errors, touched }) => (

            <Form className={styles.form}>

                <h2 className={styles.title}> Cadastradar Informações </h2>
                
                        <Input
                            label="Foto"
                            name="foto"
                            errors={errors.foto}
                            touched={touched.foto}
                        />

                        <Input
                            label="Nome"
                            name="nome"
                            errors={errors.nome}
                            touched={touched.nome}
                        />

                        <Input
                            label="Cargo"
                            name="cargo"
                            errors={errors.cargo}
                            touched={touched.cargo}
                        />

                        <Textarea
                            label="Resumo"
                            name="resumo"
                            errors={errors.resumo}
                            touched={touched.resumo}
                        />

                        <button type="submit" className={styles.button}>Salvar</button>

            
            </Form>
            )}
            </Formik>

        </div>
    );
};

export default CadastrarInformacoes;