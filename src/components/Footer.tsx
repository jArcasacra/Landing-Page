import React from "react";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import Arcasacra from "../assets/ARCASACRA.png";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <img className="w-20 mx-auto ml-0 pt-1 " src={Arcasacra} alt="/" />
        <p className="py-4 text-[12px]">ARCASACRA™ is registered through IPO UK and OEPM Spain.</p>
        <div className="flex justify-between md:w-[75%] my-3">
            <a href="https://www.facebook.com/arcasacra/" target="_blank"><FaFacebookSquare size={30} /></a>
            <a href="https://www.instagram.com/arcasacra/" target="_blank"><FaInstagram size={30} /></a>
            <a href="https://twitter.com/arcasacra_" target="_blank"><FaTwitterSquare  size={30}/></a>
            <a href="https://es.linkedin.com/company/arcasacra" target="_blank"><FaLinkedin size={30} /></a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between">
        <div>
            <h6 className="font-bold text-white">Solutions</h6>
            <ul>
                <li className="py-2 text-sm">Analytics</li>
                <li className="py-2 text-sm">Marketings</li>
                <li className="py-2 text-sm">Commerce</li>
                <li className="py-2 text-sm">Insides</li>
            </ul>
        </div>
        <div>
            <h6 className="font-bold text-white">Support</h6>
            <ul>
                <li className="py-2 text-sm">Pricing</li>
                <li className="py-2 text-sm">Documentation</li>
                <li className="py-2 text-sm">Guides</li>
                <li className="py-2 text-sm">API Status</li>
            </ul>
        </div>
        <div>
            <h6 className="font-bold text-white">Company</h6>
            <ul>
                <li className="py-2 text-sm">About</li>
                <li className="py-2 text-sm">Blog</li>
                <li className="py-2 text-sm">Jobs</li>
                <li className="py-2 text-sm">Careers</li>
            </ul>
        </div>
        
        <div>
            <h6 className="font-bold text-white">Legal</h6>
            <ul>
                <li className="py-2 text-sm">Claim</li>
                <li className="py-2 text-sm">Policy</li>
                <li className="py-2 text-sm">Terms</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
