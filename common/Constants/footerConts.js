import { BsEnvelopeOpen } from "react-icons/bs";
import { FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { MdOutlineWifi } from "react-icons/md";
import { RiFacebookFill, RiInstagramFill } from "react-icons/ri";
import { RxLinkedinLogo } from "react-icons/rx";

export const footerNavLinks = [
    {
        link: "Domov", id: "#header",
    },
    {
        link: "Najlepšie ponuky", id: "#bestOffers"
    },
    {
        link: "O nás", id: "#aboutUs",
    },
    {
        link: "Agenti", id: "#agents"
    },
    {
        link: "Kontakt", id: "#contact",
    },
]

export const footerContactLinks = [
    {
        infoIcon: <FaPhoneAlt />, infoText: "+421 919 999 999",
    },
    {
        infoIcon: <MdOutlineWifi />, infoText: "www.webdavid.sk",
    },
    {
        infoIcon: <BsEnvelopeOpen />, infoText: "info@webdavid.sk",
    },
]

export const footerFollowLinks = [
    {
        linkIcon: <RxLinkedinLogo size={24} />, idIcon: "www.linkedin.com"
    },
    {
        linkIcon: <RiFacebookFill size={24} />, idIcon: "www.facebook.sk"
    },
    {
        linkIcon: <RiInstagramFill size={24} />, idIcon: "www.instagram.com"
    },
    {
        linkIcon: <FaTwitter size={24} />, idIcon: "www.twitter.com"
    },
]