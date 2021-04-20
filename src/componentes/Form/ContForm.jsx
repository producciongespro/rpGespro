import Form from "./Form";
import controles from "./data/controles.json";
//import chekboxes from "./data/chekboxes.json";
import inputs from "./data/inputs.json";

const getDataForm = (data) => {
  console.log("Dataos a enviar al servidor", data);
};

/* 
-Tipos de imputs testeados:
 *input types: text, password, date, number, email,  range, url
 
 -Tipos de contorles admitidos:
  *control: input, textarea, select, chekbox
 */

const ContForm = () => {
  return <Form getDataForm={getDataForm} array={inputs} />;
};

export default ContForm;
