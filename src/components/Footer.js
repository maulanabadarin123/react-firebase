import React from "react";
import { Button, Form } from "react-bootstrap";
import { BiPhoneCall } from "react-icons/bi";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="bg-[#181818] text-gray-300">
      <div className="container-lg">
        <div class="p-4 grid md:grid-cols-2 gap-3 py-5">
          <div class="w-3/4">
            <h2 class="text-xl fw-bold mb-2 text-yellow-500">Newslatter</h2>
            <p class="leading-relaxed">
              Get a voucher worth IDR 100,000 by subscribing to the newsletter. And immediately
              enjoy vouchers only at Jamtangan.com
            </p>
            <div className="flex items-center justify-between  w-[400px] mt-3 rounded-md">
              <Form.Control type="email" placeholder="Enter email" className="rounded-md" />
              <Button variant="danger" className="ml-2">
                Subscribe
              </Button>
            </div>
          </div>
          <div class="w-3/4">
            <h2 class="text-xl fw-bold mb-2 text-yellow-500">Download Apps</h2>
            <div className="flex">
              <p class="leading-relaxed mb-2">
                Free Unconditional Shipping For Purchases Via Mobile-App. Download the Jamtangan.Com
                Application Now and Enjoy Unlimited Benefits!
              </p>
              <div className="app">
                <Link href="#">
                  <img
                    src="https://cdn.eraspace.com/pub/media/wysiwyg/footer/Ic_Apple_App_Store.png"
                    alt="appstore"
                    className="img-fluid mb-2"
                  />
                </Link>
                <Link href="#">
                  <img
                    src="https://cdn.eraspace.com/pub/media/wysiwyg/footer/Ic_Google_Play_Store.png"
                    alt="playstore"
                    className="img-fluid"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="p-4 grid grid-cols-2 md:grid-cols-5 gap-3 py-5">
          <div className="information">
            <h1 className="text-yellow-400 text-xl fw-bold mb-3">Information</h1>
            <ul className="text-sm">
              <li className="hover:text-yellow-600 cursor-pointer">How to Shop</li>
              <li className="hover:text-yellow-600 cursor-pointer">Payment method</li>
              <li className="hover:text-yellow-600 cursor-pointer">Shipping Method</li>
              <li className="hover:text-yellow-600 cursor-pointer">0% Installment</li>
              <li className="hover:text-yellow-600 cursor-pointer">Kredivo</li>
              <li className="hover:text-yellow-600 cursor-pointer">Buyer's Guide</li>
              <li className="hover:text-yellow-600 cursor-pointer">Machtwatchpedia</li>
            </ul>
          </div>
          <div className="policy">
            <h1 className="text-yellow-400 text-xl fw-bold mb-3">Our Policy</h1>
            <ul className="text-sm">
              <li className="hover:text-yellow-600 cursor-pointer">Terms and Conditions</li>
              <li className="hover:text-yellow-600 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-yellow-600 cursor-pointer">Cookie Policy</li>
              <li className="hover:text-yellow-600 cursor-pointer">Return Policy</li>
              <li className="hover:text-yellow-600 cursor-pointer">Refund Policy</li>
            </ul>
          </div>
          <div className="contact">
            <h1 className="text-yellow-400 text-xl fw-bold mb-3">Contact</h1>
            <ul className="text-sm">
              <li className="hover:text-yellow-600 cursor-pointer">Help Center</li>
              <li className="hover:text-yellow-600 cursor-pointer">About Us</li>
              <li className="hover:text-yellow-600 cursor-pointer">Contact us</li>
              <li className="hover:text-yellow-600 cursor-pointer">Offline Shop</li>
              <li className="hover:text-yellow-600 cursor-pointer">Corporate Orders</li>
            </ul>
          </div>
          <div className="cs">
            <h1 className="text-yellow-400 text-xl fw-bold mb-3">Customer Service</h1>
            <p className="text-sm">Every Day: 07.30 - 23.59 WIB</p>
            <div className="flex mt-2 items-center text-white cursor-pointer group">
              <BiPhoneCall size={20} className="group-hover:text-yellow-600" />
              <span className="px-3 group-hover:text-yellow-600">0012342378999</span>
            </div>
            <div className="flex mt-2 items-center text-white cursor-pointer group">
              <AiOutlineMail size={20} className="group-hover:text-yellow-600" />
              <span className="px-3 group-hover:text-yellow-600">depottch@email.com</span>
            </div>
          </div>
          <div className="social media">
            <h1 className="text-yellow-400 text-xl fw-bold mb-3">Follow Us</h1>
            <div className="flex mt-2 items-center text-white cursor-pointer group gap-2">
              <AiOutlineInstagram size={25} />
              <AiOutlineFacebook size={25} />
              <AiOutlineYoutube size={25} />
              <AiOutlineTwitter size={25} />
              <FaTiktok size={25} />
            </div>
          </div>
        </div>
        <hr />
        <div className="flex text-white lead p-4 justify-between">
          <p>Copyright © 2023 Yuni Safitri. All Rights Reserved</p>
          <p className="hidden md:block">DEPOTWATCH</p>
        </div>
      </div>
    </footer>
  );
}
