import React, { useEffect } from "react";
import "../components/Privacy.css";
import { Container, Col } from "react-bootstrap";

function Privacy() {
  useEffect(() => {
    // Scroll Spy implementation
    const sections = document.querySelectorAll("h2, h3");
    const navLi = document.querySelectorAll("nav ul li");

    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
          current = section.getAttribute("id");
        }
      });

      navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
          li.classList.add("active");
        }
      });
    });
  }, []);

  return (
    <div className="privacy-policy-container">
      <nav className="toc">
        <ul>
          <li className="Introduction toc-color">
            <a href="#Introduction">Introduction</a>
          </li>
          <li className="InformationWeCollect toc-color">
            <a href="#InformationWeCollect">Information We Collect</a>
          </li>
          <ul>
            <li className="PersonalInformation toc-color">
              <a href="#PersonalInformation">Personal Information</a>
            </li>
            <li className="UsageData toc-color">
              <a href="#UsageData">Usage Data</a>
            </li>
            <li className="CommunicationData toc-color">
              <a href="#CommunicationData">Communication Data</a>
            </li>
          </ul>
          <li className="DataStorage toc-color">
            <a href="#DataStorage">Data Storage</a>
          </li>
          <li className="DataProtection toc-color">
            <a href="#DataProtection">Data Protection</a>
          </li>
          <li className="DataSharing toc-color">
            <a href="#DataSharing">Data Sharing</a>
          </li>
          <li className="YourRights toc-color">
            <a href="#YourRights">Your Rights</a>
          </li>
          <li className="ChangesToThisPolicy toc-color">
            <a href="#ChangesToThisPolicy">Changes to This Policy</a>
          </li>
          <li className="ContactUs toc-color">
            <a href="#ContactUs">Contact Us</a>
          </li>
        </ul>
      </nav>
      <Container>
        <Col>
          <div className="privacy-policy-content">
            <h1 className="sub-title">Privacy Policy</h1>
            <p className="undertitle">Last Updated: June 11, 2024</p>

            <h2 id="Introduction">Introduction</h2>
            <p>
              Welcome to Slapscored! Your privacy is important to us. This
              Privacy Policy outlines the types of information we collect from
              you, where we store this data, and how we protect it.
            </p>

            <h2 id="InformationWeCollect">Information We Collect</h2>
            <h3 id="PersonalInformation">1. Personal Information:</h3>
            <p>
              <strong>Account Information:</strong> When you create an account
              on Slapscored, we collect your name, email address, and password.
              <br />
              <strong>Profile Information:</strong> You may also provide
              additional information such as a profile picture, favorite team,
              and other optional details.
            </p>

            <h3 id="UsageData">2. Usage Data:</h3>
            <p>
              <strong>Activity Information:</strong> We collect data about your
              activity within the app, such as your team selections, league
              participation, and achievements.
              <br />
              <strong>Device Information:</strong> We collect information about
              the device you use to access Slapscored, including your IP
              address, browser type, and operating system.
            </p>

            <h3 id="CommunicationData">3. Communication Data:</h3>
            <p>
              <strong>Contact Information:</strong> When you contact us for
              support or feedback, we collect your name, email address, and the
              content of your message.
            </p>

            <h2 id="DataStorage">Data Storage</h2>
            <h3 id="CloudStorage">1. Cloud Storage:</h3>
            <p>
              Your data is stored securely in the cloud using industry-standard
              cloud service providers. We ensure that these providers comply
              with applicable data protection regulations.
            </p>

            <h3 id="DatabaseSecurity">2. Database Security:</h3>
            <p>
              All user data is stored in a secured database with strict access
              controls to prevent unauthorized access.
            </p>

            <h2 id="DataProtection">Data Protection</h2>
            <h3 id="Encryption">1. Encryption:</h3>
            <p>
              We use SSL/TLS encryption to protect data transmitted between your
              device and our servers.
              <br />
              Sensitive information, such as passwords, is encrypted both in
              transit and at rest.
            </p>

            <h3 id="AccessControls">2. Access Controls:</h3>
            <p>
              Only authorized personnel have access to the data, and we
              regularly review access permissions to maintain security.
            </p>

            <h3 id="RegularAudits">3. Regular Audits:</h3>
            <p>
              We conduct regular security audits and vulnerability assessments
              to identify and address potential security threats.
            </p>

            <h3 id="DataMinimization">4. Data Minimization:</h3>
            <p>
              We only collect data that is necessary for providing our services
              and enhancing your user experience.
            </p>

            <h2 id="DataSharing">Data Sharing</h2>
            <h3 id="ThirdPartyServices">1. Third-Party Services:</h3>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties without your consent, except as
              necessary to provide our services (e.g., using third-party
              analytics tools).
            </p>

            <h3 id="LegalRequirements">2. Legal Requirements:</h3>
            <p>
              We may disclose your data if required to do so by law or in
              response to valid requests by public authorities.
            </p>

            <h2 id="YourRights">Your Rights</h2>
            <h3 id="AccessAndCorrection">1. Access and Correction:</h3>
            <p>
              You have the right to access the personal data we hold about you
              and request corrections if necessary.
            </p>

            <h3 id="Deletion">2. Deletion:</h3>
            <p>
              You can request the deletion of your account and personal data at
              any time. Please note that some data may be retained for legal or
              administrative purposes.
            </p>

            <h3 id="DataPortability">3. Data Portability:</h3>
            <p>
              Upon request, we can provide you with a copy of your personal data
              in a structured, commonly used, and machine-readable format.
            </p>

            <h2 id="ChangesToThisPolicy">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any significant changes by posting the new policy on
              our website and updating the date at the top of this document.
            </p>

            <h2 id="ContactUs">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data
              practices, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> support@slapscored.com
            </p>
            <p>
              Thank you for trusting Slapscored with your fantasy hockey
              experience. We are committed to protecting your privacy and
              ensuring the security of your data.
            </p>
          </div>
        </Col>
      </Container>
    </div>
  );
}

export default Privacy;
