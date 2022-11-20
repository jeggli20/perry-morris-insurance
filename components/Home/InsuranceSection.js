import Card from "../UI/Card";
import pic from "../../img/coverage.jpg";
import classes from "./InsuranceSection.module.css";

const InsuranceSection = (props) => {
  return (
    <section className={classes.container} id="insurance">
      <p data-aos="fade-up">Get The Perfect Insurance For You</p>
      <h2 data-aos="fade-up" onClick={props.onShowModal}>
        The coverage we provide.
      </h2>
      <div className={classes.boxMenu} data-aos="fade-up">
        <Card
          className="card_ind"
          src={pic}
          alt="Coverage Umbrella"
          onShowModal={props.onShowModal}
        >
          <h4>Individuals</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </Card>
        <Card
          className="card_fam"
          src={pic}
          alt="Coverage Umbrella"
          onShowModal={props.onShowModal}
        >
          <h4>Families</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </Card>
        <Card
          className="card_smb"
          src={pic}
          alt="Coverage Umbrella"
          onShowModal={props.onShowModal}
        >
          <h4>Small Businesses</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </Card>
        <Card
          className="card_ret"
          src={pic}
          alt="Coverage Umbrella"
          onShowModal={props.onShowModal}
        >
          <h4>Retired</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </Card>
        <Card
          className="card_propDmg"
          src={pic}
          alt="Coverage Umbrella"
          onShowModal={props.onShowModal}
        >
          <h4>Property and Damage</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </Card>
      </div>
    </section>
  );
};

export default InsuranceSection;
