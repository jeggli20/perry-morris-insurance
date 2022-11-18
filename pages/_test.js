import EmailAdmin from "../components/Email/EmailAdmin";
import EmailClient from "../components/Email/EmailClient";

const test1 = function () {
   const obj = {
      name: "John",
      email: "doe@gmail.com",
      provider: "State Farm",
      message: "Hello world!, I would like some insurance please.",
      address: "123 Pinewood Avenue",
      dob: "12/17/1901",
      policy: "Premium Life",
   };
   return (
      <>
         <EmailClient emailObj={obj}></EmailClient>
         <EmailAdmin emailObj={obj} />
      </>
   );
};
export default test1;
