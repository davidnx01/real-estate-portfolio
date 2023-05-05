import { BsEnvelopeOpen } from "react-icons/bs";
import { FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { MdOutlineWifi } from "react-icons/md";
import { RiFacebookFill, RiInstagramFill } from "react-icons/ri";
import { RxLinkedinLogo } from "react-icons/rx";

export const footerContent = [
    {
        linkLink: "Domov",
        idLink: "home",
        linkContact: <FaPhoneAlt /> + "+421 919 999 999",
        linkIcon: <RiFacebookFill />,
        idIcon: "www.facebook.sk"
    },
    {
        linkLink: "Najlepšie ponuky",
        idLink: "bestOffers",
        linkContact: <MdOutlineWifi /> + "www.webdavid.sk",
        linkIcon: <RxLinkedinLogo />,
        idIcon: "www.linkedin.com"
    },
    {
        linkLink: "O Nás",
        idLink: "aboutus",
        linkContact: <BsEnvelopeOpen /> + "info@webdavid.sk",
        linkIcon: <RiInstagramFill />,
        idIcon: "www.instagram.com"
    },
    {
        linkLink: "Agenti",
        idLink: "agents",
        linkIcon: <FaTwitter />,
        idIcon: "www.twitter.com"
    },
    {
        linkLink: "Kontakt",
        idLink: "contact"
    },
]