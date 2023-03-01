import { useState } from "react";
import "./Contact.css";
import Loading from "../Loading/Loading";

function Contact() {
  const [contactLoading, setContactLoading] = useState(false);

  return (
    <>
      {contactLoading ? (
        <Loading
          title="Contact"
          setLoading={setContactLoading}
          loading={contactLoading}
        />
      ) : (
        <section id="contact" className="section">
          <div className="contact__container container">
            {/* contactus */}
            <div className="title">
              <h1 className="contact__title">
                <span aria-hidden="true">04</span>Contact
              </h1>
            </div>
            <div className="box">
              {/* form box */}
              <div className="contact form">
                <form>
                  <div className="formBox">
                    <div className="row50">
                      <div className="inputBox">
                        <span>Frist Name</span>
                        <input type="text" placeholder="John"></input>
                      </div>
                      <div className="inputBox">
                        <span>Last Name</span>
                        <input type="text" placeholder="Doh"></input>
                      </div>
                    </div>
                    <div className="row50">
                      <div className="inputBox">
                        <span>Email</span>
                        <input
                          type="text"
                          placeholder="johndoe@email.com"
                        ></input>
                      </div>
                      <div className="inputBox">
                        <span>Phone</span>
                        <input type="text" placeholder="123-456-789"></input>
                      </div>
                    </div>

                    <div className="row100">
                      <div className="inputBox">
                        <span>Message</span>
                        <textarea placeholder="Write your message here..."></textarea>
                      </div>
                    </div>
                    <div className="row100">
                      <div className="inputBox">
                        <input type="submit" value="Send"></input>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/* info box */}
              <div className="contact info">
                <h3>Contact Info</h3>
                <div className="infoBox">
                  <div>
                    <span>
                      <i class="fa-solid fa-house"></i>
                    </span>
                    <p>
                      Jersey City, NJ <br />
                      USA
                    </p>
                  </div>
                  <div>
                    <span>
                      <i class="fa-sharp fa-solid fa-envelope"></i>
                    </span>
                    <a href="mailto:s.reitiger@gmail.com">
                      s.reitiger@gmail.com
                    </a>
                  </div>
                  <div>
                    <span>
                      <i class="fa-solid fa-phone"></i>
                    </span>
                    <a href="mailto:s.reitiger@gmail.com">+1 979-661-4280</a>
                  </div>
                  {/* social media */}
                  <ul className="sci">
                    <li>
                      <a>
                        <i class="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i class="fa-brands fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i class="fa-brands fa-medium"></i>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i class="fa-solid fa-file"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* map box */}
              <div className="contact map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48385.97124838279!2d-74.10383605669709!3d40.71530423970881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250d225bfafdd%3A0x249f013a2cd25d9!2sJersey%20City%2C%20NJ!5e0!3m2!1sen!2sus!4v1677694214750!5m2!1sen!2sus"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Contact;
