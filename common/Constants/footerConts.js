import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineWifi } from "react-icons/md";

export const footerContent = [
    {
        linkLink: "Domov",
        idLink: "home",
        linkContact: <FaPhoneAlt /> + "+421 919 999 999",
        linkIcon: <RiFacebookFill />
    },
    {
        linkLink: "Najlepšie ponuky",
        idLink: "bestOffers",
        linkContact: <MdOutlineWifi /> + "www.webdavid.sk",
    },
    {
        linkLink: "O Nás",
        idLink: "aboutus",
        linkContact: <BsEnvelopeOpen /> + "info@webdavid.sk",
    },
    {
        linkLink: "Agenti",
        idLink: "agents"
    },
    {
        linkLink: "Kontakt",
        idLink: "contact"
    },
]