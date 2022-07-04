import Modal from "react-modal";
import { Line } from "../../pages/Products/styles";
import { Container, ModalContainer, ModalHeader } from "./styles";
import closeImg from "../../assets/clear.svg";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import { Button } from "../Button";
import { Input } from "../Input";
import { Select } from "../Select";
import { convertToBRL } from "../../utils/mask";

interface FormValues {
  fullName: string;
  address: string;
  typeOfPayment: string;
  paymentValue: string;
}

interface SendInformationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSubmit: (value: FormValues) => void;
}

Modal.setAppElement("#root");

export function SendInformationModal({
  isOpen,
  onRequestClose,
  onSubmit
}: SendInformationModalProps) {

  const selectValues = [
    "Dinheiro",
    "Cartão de credito",
    "Cartão de debito",
    "Pix",
  ];

  return (
    <Container>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <ModalHeader>
          <p>Informações</p>
          <button onClick={onRequestClose}>
            <img src={closeImg} alt="Fechar formulário de envio de dados" />
          </button>
        </ModalHeader>
        <Line />

        <ModalContainer>
          <Formik
            initialValues={{
              fullName: "",
              address: "",
              typeOfPayment: "",
              paymentValue: "0",
            }}
            validationSchema={object({
              fullName: string().min(1).required("Campo obrigatorio"),
              address: string().min(1).required("Campo obrigatorio"),
              typeOfPayment: string().required("Campo obrigatorio"),
              paymentValue: string().required("Campo obrigatorio"),
            })}
            onSubmit={(value) => onSubmit(value)}
          >
            {({
              values,
              errors,
              isValid,
              handleChange,
              handleSubmit,
              handleBlur,
            }) => (
              <Form>
                <p>
                  Seu pedido sera enviado por WhatsApp, por isso vamos precisar
                  de algumas informações
                </p>

                <Input
                  value={values.fullName}
                  name="fullName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Informe seu nome completo"
                  error={errors.fullName}
                />

                <Input
                  value={values.address}
                  name="address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Informe seu endereço completo"
                  inputType="textarea"
                  error={errors.address}
                />

                <Select
                  error={errors.typeOfPayment}
                  selectValues={selectValues}
                  name="typeOfPayment"
                  onChange={handleChange}
                  defaultValue="Selecione uma forma de pagamento"
                  value={values.typeOfPayment}
                  onBlur={handleBlur}
                />

                {values.typeOfPayment === "Dinheiro" && (
                  <Input
                    error={errors.paymentValue}
                    value={values.paymentValue}
                    name="paymentValue"
                    onChange={handleChange}
                    placeholder="Informe o valor para troco"
                    onBlur={handleBlur}
                    mask={convertToBRL}
                  />
                )}

                <Button
                  onClick={handleSubmit}
                  fullWidth={true}
                  disabled={!isValid}
                >
                  Enviar
                </Button>
              </Form>
            )}
          </Formik>
        </ModalContainer>
      </Modal>
    </Container>
  );
}
