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
        info: <FaPhoneAlt /> + "+421 919 999 999",
    },
    {
        info: <MdOutlineWifi /> + "www.webdavid.sk",
    },
    {
        info: <BsEnvelopeOpen /> + "info@webdavid.sk",
    },
]

export const footerFollowLinks = [
    {
        linkIcon: <RxLinkedinLogo />, idIcon: "www.linkedin.com"
    },
    {
        linkIcon: <RiFacebookFill />, idIcon: "www.facebook.sk"
    },
    {
        linkIcon: <RiInstagramFill />, idIcon: "www.instagram.com"
    },
    {
        linkIcon: <FaTwitter />, idIcon: "www.twitter.com"
    },
]