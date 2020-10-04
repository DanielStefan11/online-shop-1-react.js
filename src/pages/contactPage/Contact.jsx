import React from "react";
// Components
import Layout from "../../components/layout/Layout";
// Icons
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
// CSS
import "./Contact.css";

export default function Contact() {
  return (
    <Layout>
      <div className="container">
        <h1 className="text-center mt-3">Contactează-ne</h1>
        <div className="form-container d-flex justify-content-between">
          <form className="container">
            <div className="form-group">
              <label htmlFor="name">
                <strong>Nume și prenume</strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Introdu numele și prenumele"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">
                <strong>Subiect</strong>
              </label>
              <select className="form-control" name="subject">
                <option value="1">Informații despre produs</option>
                <option value="2">Informații/livrare comandă </option>
                <option value="3">Întrebări cu privire la cont </option>
                <option value="4">Modificare comandă </option>
                <option value="5">Procedură de retur </option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <strong>Adresa de email</strong>
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Introdu adresa de email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">
                <strong>Mesaj</strong>
              </label>
              <textarea
                className="form-control"
                name="message"
                rows="5"
              ></textarea>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                <strong>Client</strong>
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                <strong>Colaborator</strong>
              </label>
            </div>
            <button className="btn btn-primary">Trimite</button>
          </form>
          <div className="contact-info">
            <h4>SC Tech store SRL</h4>
            <Phone /> <strong>Telefon</strong>
            <p>+4076645****</p>
            <Mail /> <strong>Email</strong>
            <p>dannielstefan592@gmail.com</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
