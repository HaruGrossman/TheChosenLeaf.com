import "./maps.css";

export default function Stores() {
  return (
    <main className="storeContainer">
      <section className="storeLocal">
        <h1>Stores Near Me</h1>
        <br></br>
        <h3>Sakson Nursery</h3>
        <p>
          476 North Ave S <br></br>
          Greenwich, CT 06830
        </p>
        <br></br>
        <h3>Greenwich Garden Center</h3>
        <p>
          1194 King St <br></br>
          Greenwich, CT 06830
        </p>
        <br></br>
        <h3>Kennedy Nursery </h3>
        <p>
          998 Noth St <br></br>
          Greenwich, CT 06830
        </p>
        <br></br>
        <h3>For The Plants </h3>
        <p>
          6 Oak St W <br></br>
          Greenwich, CT 06830
        </p>
      </section>
      <section className="storeMap">
        <p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d96243.41968240301!2d-73.62925297712188!3d41.07758535331165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1snursery%20in%20greenwich%20ctT!5e0!3m2!1sen!2sus!4v1702331569874!5m2!1sen!2sus"
            width="600"
            height="450"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </p>
      </section>
      <br></br>
      <section className="storeOnline">
        <h2>
          If you cannot find any store near you here are the online stores that
          will deliver:
        </h2>
        <br></br>
        <ul className="storeUL">
          <li className="storeList">
            <a href="https://houseplantshop.com/">House Plants Shop</a>
          </li>
          <li className="storeList">
            <a href="https://www.thesill.com/">The Sill</a>
          </li>
          <li className="storeList">
            <a href="https://www.plantvine.com/">The Plant Vine</a>
          </li>
        </ul>
      </section>
    </main>
  );
}
