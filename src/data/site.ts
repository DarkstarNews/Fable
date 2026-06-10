export const site = {
  name: 'New Marigold Secondary School',
  nameNe: 'न्यू मेरिगोल्ड माध्यमिक विद्यालय',
  shortName: 'New Marigold',
  tagline: 'A small school under the biggest sky on Earth.',
  locality: 'Kaski District, Gandaki Province, Nepal',
  altitudeM: 1650,
  founded: 2004,
  students: 214,
  teachers: 11,
  seePassRate: 96,
  email: 'hello@newmarigold.edu.np',
  phone: '+977 61 555 014',
  instagram: 'https://www.instagram.com/heavenhillacademy/',
  // Hillside above Pokhara, used for the OpenStreetMap embed on the contact page.
  map: { lat: 28.3072, lon: 83.8203, zoom: 12 },
};

export const nav = [
  { label: 'Our Story', path: 'story/' },
  { label: 'Academics', path: 'academics/' },
  { label: 'Teach With Us', path: 'teach/' },
  { label: 'Visit Nepal', path: 'visit/' },
  { label: 'Support', path: 'support/' },
  { label: 'Contact', path: 'contact/' },
];

/** Join a path to the configured base (works at / locally and /Fable/ on Pages). */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL;
  return (base.endsWith('/') ? base : base + '/') + path.replace(/^\//, '');
}
