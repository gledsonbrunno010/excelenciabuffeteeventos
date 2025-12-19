
import { HeroSlide, ServiceItem, GalleryItem } from './types';

export const COLORS = {
  primary: '#fce4be',
  text: '#575048',
  accent: '#1c090b',
  white: '#fcfdff',
};

export const CONTACT = {
  phone: '+55 61 9172-9741',
  whatsappUrl: 'https://wa.me/556191729741?text=Ol%C3%A1.%20Estive%20em%20seu%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20meu%20evento...',
  location: 'Brasília – DF',
  owner: 'Dione Genesis',
  yearsExperience: 15,
};

// High-quality imagery provided by user
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: '/images/hero-1.jpg',
    title: 'Casamentos de Alta Qualidade',
    subtitle: 'Gastronomia refinada e cenários deslumbrantes para o seu "sim" em Brasília.',
  },
  {
    id: 2,
    image: '/images/hero-2.jpg',
    title: 'Aniversários Vibrantes',
    subtitle: 'Celebrações vibrantes que unem sofisticação, sabor e alegria em cada detalhe.',
  },
  {
    id: 3,
    image: '/images/hero-3.jpg',
    title: 'Churrasco Premium',
    subtitle: 'A tradição do fogo aliada a cortes nobres e acompanhamentos exclusivos.',
  },
  {
    id: 4,
    image: '/images/hero-4.jpg',
    title: 'Buffet Corporativo',
    subtitle: 'Excelentes refeições para empresariais que exigem perfeição.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'casamentos',
    title: 'Casamentos',
    description: 'Transformamos sonhos em realidade com menus personalizados e serviço de protocolo internacional.',
    image: '/images/hero-4.jpg', // Swapped with Corporativo (hero-4)
    alt: 'Buffet de casamento luxuoso Brasília',
  },
  {
    id: 'aniversarios',
    title: 'Aniversários',
    description: 'De festas intimistas a grandes recepções, garantimos o frescor e a elegância em cada prato.',
    image: '/images/hero-3.jpg', // Swapped with Churrasco (hero-3)
    alt: 'Evento de aniversário premium',
  },
  {
    id: 'churrascos',
    title: 'Churrascos',
    description: 'O melhor churrasco de Brasília com carnes selecionadas e mestre churrasqueiro dedicado.',
    image: '/images/hero-2.jpg', // Swapped with Aniversarios (hero-2)
    alt: 'Churrasco gourmet para eventos',
  },
  {
    id: 'corporativo',
    title: 'Corporativo',
    description: 'Soluções ágeis e sofisticadas para coffee breaks, almoços e jantares de negócios.',
    image: '/images/hero-1.jpg', // Swapped with Casamentos (hero-1)
    alt: 'Catering para eventos corporativos Brasília',
  },
];

export const GALLERY_IMAGES: GalleryItem[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=75&w=600', title: 'Salão de Festas Luxuoso' },
  { id: '2', url: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=75&w=600', title: 'Apresentação de Pratos' },
  { id: '3', url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=75&w=600', title: 'Buffet Gourmet' },
  { id: '4', url: 'https://images.unsplash.com/photo-1532635241-17e820acc59f?auto=format&fit=crop&q=75&w=600', title: 'Serviço de Garçom' },
  { id: '5', url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=75&w=600', title: 'Brinde Casamento' },
  { id: '6', url: 'https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&q=75&w=600', title: 'Mesa de Frios' },
  { id: '7', url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=75&w=600', title: 'Carnes Grelhadas' },
  { id: '8', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=75&w=600', title: 'Decoração Floral' },
];
