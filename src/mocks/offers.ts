import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f00',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
    'price': 120,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4,
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'bedrooms': 3,
    'goods': [
      'Heating'
    ],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': false
    },
    'images': [
      'https://url-to-image/image.png'
    ],
    'maxAdults': 4
  },
  {
    'id': 'a1b2c3d4-e5f6-4a5b-8c7d-9e0f1a2b3c4d',
    'title': 'Modern loft in the heart of the design district',
    'type': 'loft',
    'price': 210,
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.856613,
        'longitude': 2.352222,
        'zoom': 10
      }
    },
    'location': {
      'latitude': 48.865633,
      'longitude': 2.358322,
      'zoom': 10
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 5,
    // eslint-disable-next-line quotes
    'description': "Spacious artist's loft with original wooden beams and floor-to-ceiling windows. Located in a vibrant area full of galleries and trendy bistros.",
    'bedrooms': 2,
    'goods': [
      'Wi-Fi',
      'Kitchen',
      'Washer',
      'Coffee machine'
    ],
    'host': {
      'name': 'Claire Dubois',
      'avatarUrl': 'https://randomuser.me/api/portraits/women/22.jpg',
      'isPro': true
    },
    'images': [
      'https://img.freepik.com/free-photo/cozy-house-with-garden-chairs-terrace_1150-10854.jpg',
      'https://img.freepik.com/free-photo/living-room-with-cozy-armchairs-fireplace_1150-10855.jpg'
    ],
    'maxAdults': 4
  },
  {
    'id': 'b2c3d4e5-f6g7-5b6c-9d8e-0f1a2b3c4d5e',
    'title': 'Cozy cottage with garden and mountain view',
    'type': 'house',
    'price': 95,
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.937531,
        'longitude': 6.960279,
        'zoom': 9
      }
    },
    'location': {
      'latitude': 50.927531,
      'longitude': 6.970279,
      'zoom': 9
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4,
    'description': 'A charming little house on the outskirts of the city. Perfect for nature lovers, with direct access to hiking trails and a lovely terrace.',
    'bedrooms': 1,
    'goods': [
      'Wi-Fi',
      'Parking',
      'Garden',
      'Pets allowed'
    ],
    'host': {
      'name': 'Hans Mueller',
      'avatarUrl': 'https://randomuser.me/api/portraits/men/45.jpg',
      'isPro': false
    },
    'images': [
      'https://img.freepik.com/free-photo/cozy-house-with-garden-chairs-terrace_1150-10854.jpg',
      'https://img.freepik.com/free-photo/living-room-with-cozy-armchairs-fireplace_1150-10855.jpg'
    ],
    'maxAdults': 2
  },
  {
    'id': 'c3d4e5f6-g7h8-6c7d-8e9f-0a1b2c3d4e5f',
    'title': 'Luxury penthouse with rooftop terrace',
    'type': 'apartment',
    'price': 350,
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.850346,
        'longitude': 4.351721,
        'zoom': 10
      }
    },
    'location': {
      'latitude': 50.845346,
      'longitude': 4.361721,
      'zoom': 10
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 5,
    'description': 'Stunning penthouse with a private 50m² terrace offering panoramic city views. Modern interior, high ceilings, and smart home features.',
    'bedrooms': 3,
    'goods': [
      'Wi-Fi',
      'Elevator',
      'Air conditioning',
      'Terrace',
      'Smart TV'
    ],
    'host': {
      'name': 'Thomas Lefebvre',
      'avatarUrl': 'https://randomuser.me/api/portraits/men/68.jpg',
      'isPro': true
    },
    'images': [
      'https://img.freepik.com/free-photo/cozy-house-with-garden-chairs-terrace_1150-10854.jpg',
      'https://img.freepik.com/free-photo/living-room-with-cozy-armchairs-fireplace_1150-10855.jpg'
    ],
    'maxAdults': 6
  },
  {
    'id': 'd4e5f6g7-h8i9-7d8e-9f0a-1b2c3d4e5f6g',
    'title': 'Student-friendly studio near university',
    'type': 'studio',
    'price': 65,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.367573,
        'longitude': 4.904139,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.357573,
      'longitude': 4.914139,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3,
    'description': 'Compact but functional studio, ideal for students or solo travelers. Just a 5-minute walk from the metro and local supermarkets.',
    'bedrooms': 1,
    'goods': [
      'Wi-Fi',
      'Desk',
      'Microwave',
      'Fridge'
    ],
    'host': {
      'name': 'Emma Bakker',
      'avatarUrl': 'https://randomuser.me/api/portraits/women/56.jpg',
      'isPro': false
    },
    'images': [
      'https://img.freepik.com/free-photo/cozy-house-with-garden-chairs-terrace_1150-10854.jpg',
      'https://img.freepik.com/free-photo/living-room-with-cozy-armchairs-fireplace_1150-10855.jpg'
    ],
    'maxAdults': 1
  },
  {
    'id': 'e5f6g7h8-i9j0-8e9f-0a1b-2c3d4e5f6g7h',
    'title': 'Historic canal house with authentic details',
    'type': 'house',
    'price': 280,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.355149,
        'longitude': 4.673877,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.365149,
      'longitude': 4.683877,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 5,
    // eslint-disable-next-line quotes
    'description': "Step back in time in this beautifully preserved 17th-century merchant's house. Original stained glass windows and fireplace, combined with modern comforts.",
    'bedrooms': 4,
    'goods': [
      'Wi-Fi',
      'Fireplace',
      'Dishwasher',
      'Dryer',
      'High chair'
    ],
    'host': {
      'name': 'Willem van den Berg',
      'avatarUrl': 'https://randomuser.me/api/portraits/men/81.jpg',
      'isPro': true
    },
    'images': [
      'https://img.freepik.com/free-photo/cozy-house-with-garden-chairs-terrace_1150-10854.jpg',
      'https://img.freepik.com/free-photo/living-room-with-cozy-armchairs-fireplace_1150-10855.jpg'
    ],
    'maxAdults': 8
  }
];
