import Privacy from "../assets/shield.png";
import Strong_Ethics from "../assets/nature.png";
import Partnership from "../assets/social-care.png";
import Respect from "../assets/value.png";
import Transparency from '../assets/transparencia.png';
import Equality from '../assets/equilibrar.png';
import Nurture from '../assets/care.png';
import { ValuesCard } from "../models/ValuesCard";
import Tech from '../assets/pexels-luis-gomes-546819.jpg';
import Music from '../assets/pexels-pixabay-257904.jpg';
import Marketing from '../assets/pexels-dominika-roseclay-905163.jpg';
import { Services } from "../models/Services";
import { LinkModel } from "../models/LinkModel";

const valuesDesc: ValuesCard[] = [
    {icono: Privacy, titulo: 'Privacy', descripcion: 'In ARCASACRA, we respect your right to privacy on a free Internet. Our dedication is to provide you the right tools and communication channels in order to achieve a collaborative, transparent and ethical economy not focused in the profit but in honesty and solidarity.'},
    {icono: Strong_Ethics, titulo: 'Strong Ethics', descripcion: 'ARCASACRA will always strive to be an ethical company and environmentally respectful, with a minimum ecological impact and carbon footprint. We will always aim to use green energy and to reduce to a minimum our energetic impact.'},
    {icono: Partnership, titulo: 'Partnership', descripcion: 'ARCASACRA as a company is organised as a “Limited Liability Partnership” and every partner is on an equal level in their rights and obligations. What we don’t tolerate against our members we won’t tolerate against our partners. We won’t discriminate, harass or threaten anybody and if this happens we will act accordingly to stop and amend any kind of abuse.'},
    {icono: Respect, titulo: 'Respect', descripcion: 'ARCASACRA understands everybody is unique and has the right to have different thoughts, beliefs and needs. We won’t tolerate any act against this Human Right or any form of discrimination against anyone based on gender, race, sexuality, wealth, politics, nationality, etc.'},
    {icono: Equality, titulo: 'Equality', descripcion: 'ARCASACRA will negotiate, mediate with our members in case of disputes as stablished in our Terms of Service and always will try to get a friendly solution between the parts. Whenever this is not possible, we will collaborate with both sides of the issue in case they would like to escalate the dispute to the authorities.' },
    {icono: Transparency, titulo: 'Transparency', descripcion: 'ARCASACRA is a transparent company and we will always have our economic data publicly available. If you want to have a look at it just get in touch! We won’t use any method, legal or illegal, to evade or avoid paying taxes in the countries and territories we do our business. We won’t tolerate any association of our name with an ilegal or unethical activity or entity.'},
    {icono: Nurture, titulo: 'Nurture', descripcion: 'ARCASACRA firmly believes that the most important and valuable asset of the company are the Creators and Collectors. As they are our key element, our main goal is to protect them and provide them with a safe and secure environment where they can freely trade and socialise: Creators can showcase their creations, and Collectors can acquire high quality, unique and personalised products and services.' }

  ]

  const servicesDesc: Services[] = [
    {id: 1, image: Tech, title: 'Development', description: 'test'},
    {id: 2, image: Music, title: 'Music Production', description: 'test'},
    {id: 3, image: Marketing, title: 'Marketing', description: 'test'},
  ]

  const links: LinkModel[] = [
    { id:'company', title: 'Company'},
    { id:'principles', title: 'Principles'},
    { id:'services', title: 'Services'},
    { id:'contact', title: 'Contact'}
  ]

  export {valuesDesc, servicesDesc, links}