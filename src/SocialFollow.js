import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
    faInstagram, faSlack, faXTwitter
} from "@fortawesome/free-brands-svg-icons"; 

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3>See what we're up to: </h3>
      <a href = "https://www.instagram.com/bccssociety/" 
        className = "instagram social">
        <FontAwesomeIcon icon = {faInstagram} size="2x"/>
      </a>
      <a href = "https://join.slack.com/t/bccss/shared_invite/zt-28c2m7i78-Ex5vhng4MIwRUCdwPeNMbQ" 
        className = "slack social">
        <FontAwesomeIcon icon = {faSlack} size="2x"/>
      </a>
      <a href = "https://twitter.com/bccssociety" 
        className = "twitter social">
        <FontAwesomeIcon icon = {faXTwitter} size="2x"/>
      </a>
      <a href = "https://www.facebook.com/bostoncollegecss/" 
        className = "facebook social">
        <FontAwesomeIcon icon = {faFacebook} size="2x"/>
      </a>
    </div>
  );
}