// import Image from "next/image";

// import family from "../../img/family.jpg";
import EmailStyles from "./EmailStyles";

const EmailAdmin = (data) => {
  const { name, email, provider, message, address, dob } = data.emailObj;
  return (
    <body style={EmailStyles.containerStyles}>
      <header>
        <h1 style={EmailStyles.titleStyles}>Perry Morris</h1>
      </header>
      {/* <div className={classes.banner}>
        <Image src={family} alt="" fill />
      </div> */}
      <main style={EmailStyles.contentStyles}>
        <h1 style={EmailStyles.headerStyles}>
          You have received a new message from {name}
        </h1>
        <p style={EmailStyles.textStyles}>
          Here is the information that {name} sent you:
        </p>
        <ul style={EmailStyles.infoStyles}>
          <li>
            Name: <span style={EmailStyles.infoItemStyles}>{name}</span>
          </li>
          <li>
            Email: <span style={EmailStyles.infoItemStyles}>{email}</span>
          </li>
          <li>
            Address: <span style={EmailStyles.infoItemStyles}>{address}</span>
          </li>
          <li>
            Date of Birth: <span style={EmailStyles.infoItemStyles}>{dob}</span>
          </li>
          <li>
            Provider: <span style={EmailStyles.infoItemStyles}>{provider}</span>
          </li>
          <li>
            Message: <span style={EmailStyles.infoItemStyles}>{message}</span>
          </li>
        </ul>
        <p style={EmailStyles.textStyles}>An email has been sent to {name}</p>
      </main>
      <hr style={EmailStyles.hrStyles} />
      <footer>
        <ul style={EmailStyles.contactStyles}>
          <li>1480 East 3100 North</li>
          <li>Logan, UT 84341</li>
          <li>perry@perrymorrisinsurance.com</li>
        </ul>
      </footer>
    </body>
  );
};

export default EmailAdmin;
