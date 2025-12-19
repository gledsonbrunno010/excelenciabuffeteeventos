
import { HeroSlide, ServiceItem, GalleryItem } from './types';

export const COLORS = {
  primary: '#fce4be', 
  text: '#575048',    
  accent: '#1c090b',  
  white: '#fcfdff',   
};

export const CONTACT = {
  phone: '+55 61 9172-9741',
  whatsappUrl: 'https://wa.me/556191729741',
  location: 'Brasília – DF',
  owner: 'Dione Genesis',
  yearsExperience: 15,
};

// High-quality imagery focusing on brightness and luxury as requested
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=90&w=1920',
    title: 'Casamentos de Alta Estirpe',
    subtitle: 'Gastronomia refinada e cenários deslumbrantes para o seu "sim" em Brasília.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=90&w=1920',
    title: 'Celebrações Vibrantes',
    subtitle: 'Aniversários que unem sofisticação, sabor e alegria em cada detalhe.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=90&w=1920',
    title: 'Churrasco Gourmet Premium',
    subtitle: 'A tradição do fogo aliada a cortes nobres e acompanhamentos exclusivos.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1556624441-424706718d71?auto=format&fit=crop&q=90&w=1920',
    title: 'Excelência Corporativa',
    subtitle: 'Catering profissional para eventos empresariais que exigem perfeição.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'casamentos',
    title: 'Casamentos',
    description: 'Transformamos sonhos em realidade com menus personalizados e serviço de protocolo internacional.',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200',
    alt: 'Buffet de casamento luxuoso Brasília',
  },
  {
    id: 'aniversarios',
    title: 'Aniversários',
    description: 'De festas intimistas a grandes recepções, garantimos o frescor e a elegância em cada prato.',
    image: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=1200',
    alt: 'Evento de aniversário premium',
  },
  {
    id: 'churrascos',
    title: 'Churrascos',
    description: 'O melhor churrasco de Brasília com carnes selecionadas e mestre churrasqueiro dedicado.',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf958378?auto=format&fit=crop&q=80&w=1200',
    alt: 'Churrasco gourmet para eventos',
  },
  {
    id: 'corporativo',
    title: 'Corporativo',
    description: 'Soluções ágeis e sofisticadas para coffee breaks, almoços e jantares de negócios.',
    image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1200',
    alt: 'Catering para eventos corporativos Brasília',
  },
];

export const GALLERY_IMAGES: GalleryItem[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800', title: 'Salão de Festas Luxuoso' },
  { id: '2', url: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800', title: 'Apresentação de Pratos' },
  { id: '3', url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800', title: 'Buffet Gourmet' },
  { id: '4', url: 'https://images.unsplash.com/photo-1532635241-17e820acc59f?auto=format&fit=crop&q=80&w=800', title: 'Serviço de Garçom' },
  { id: '5', url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=800', title: 'Brinde Casamento' },
  { id: '6', url: 'https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&q=80&w=800', title: 'Mesa de Frios' },
  { id: '7', url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', title: 'Carnes Grelhadas' },
  { id: '8', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800', title: 'Decoração Floral' },
];
