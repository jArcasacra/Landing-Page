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
        <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare  size={30}/>
            <FaGithubSquare size={30} />
            <FaLinkedin size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul>
                <li className="py-2 text-sm">Analytics</li>
                <li className="py-2 text-sm">Marketings</li>
                <li className="py-2 text-sm">Commerce</li>
                <li className="py-2 text-sm">Insides</li>
            </ul>
        </div>
        <div>
            <h6 className="font-medium text-gray-400">Support</h6>
            <ul>
                <li className="py-2 text-sm">Pricing</li>
                <li className="py-2 text-sm">Documentation</li>
                <li className="py-2 text-sm">Guides</li>
                <li className="py-2 text-sm">API Status</li>
            </ul>
        </div>
        <div>
            <h6 className="font-medium text-gray-400">Company</h6>
            <ul>
                <li className="py-2 text-sm">About</li>
                <li className="py-2 text-sm">Blog</li>
                <li className="py-2 text-sm">Jobs</li>
                <li className="py-2 text-sm">Careers</li>
            </ul>
        </div>
        
        <div>
            <h6 className="font-medium text-gray-400">Legal</h6>
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
