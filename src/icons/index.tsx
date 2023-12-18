import EfreiIcon from "./efrei";
import PlanetIcon from "./planet";
import TcmSecurityIcon from "./tcmsecurity";
import OffensiveSecurityIcon from "./offsec";
import BankIcon from "./bank";
import BrainIcon from "./brain";
import CgiIcon from "./cgi";
import CodeIcon from "./code";
import DicesIcon from "./dices";
import IceIcon from "./ice";
import OpciIcon from "./opci";
import PhoneIcon from "./phone";
import PillsIcon from "./pills";
import RgpdIcon from "./rgpd";
import ServerIcon from "./server";
import TreecommerceIcon from "./treecommerce";
import {FC} from "react";

export const get_icon = (name?: string):FC => {
    switch (name) {
        case 'efrei':
            return EfreiIcon;
        case 'planet':
            return PlanetIcon;
        case 'tcmsecurity':
            return TcmSecurityIcon;
        case 'offsec':
            return OffensiveSecurityIcon;
        case 'bank':
            return BankIcon;
        case 'brain':
            return BrainIcon;
        case 'cgi':
            return CgiIcon;
        case 'code':
            return CodeIcon;
        case 'dices':
            return DicesIcon;
        case 'ice':
            return IceIcon;
        case 'opci':
            return OpciIcon;
        case 'phone':
            return PhoneIcon;
        case 'pills':
            return PillsIcon;
        case 'rgpd':
            return RgpdIcon;
        case 'server':
            return ServerIcon;
        case 'treecommerce':
            return TreecommerceIcon;
        default:
            return (() => <></>) as FC;
    }
}
