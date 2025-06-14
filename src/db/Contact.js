const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  isFavourite: {
    type: Boolean,
    default: false,
  },
  contactType: {
    type: String,
    enum: ['work', 'home', 'personal'],
    default: 'personal',
    required: true,
  },
}, { 
  timestamps: true,
  collection: 'contacts'
});

const Contact = mongoose.model('Contact', contactSchema);

const initializeContacts = async () => {
  try {
    const count = await Contact.countDocuments();
    if (count === 0) {      
      const sampleContacts = [

        {
          "name": "Akçiçek Yılmaz",
          "phoneNumber": "+380000000001",
          "email": "yılmaz1@example.com",
          "isFavourite": false,
          "contactType": "personal",
          "createdAt": "2024-05-08T16:12:14.954151",
          "updatedAt": "2024-05-08T16:12:14.954158"
        },
        {
          "name": "Fatma Kaya",
          "phoneNumber": "+380000000002",
          "email": null,
          "isFavourite": false,
          "contactType": "personal",
          "createdAt": "2024-05-08T16:12:14.954163",
          "updatedAt": "2024-05-08T16:12:14.954164"
        },
        {
          "name": "Gülüm Demir",
          "phoneNumber": "+380000000003",
          "email": "demir3@example.com",
          "isFavourite": false,
          "contactType": "home",
          "createdAt": "2024-05-08T16:12:14.954168",
          "updatedAt": "2024-05-08T16:12:14.954170"
        },
        {
          "name": "Güzel Çelik",
          "phoneNumber": "+380000000004",
          "email": null,
          "isFavourite": false,
          "contactType": "personal",
          "createdAt": "2024-05-08T16:12:14.954173",
          "updatedAt": "2024-05-08T16:12:14.954174"
        },
        {
          "name": "Hayat Kaplan",
          "phoneNumber": "+380000000005",
          "email": "kaplan5@example.com",
          "isFavourite": false,
          "contactType": "personal",
          "createdAt": "2024-05-08T16:12:14.954178",
          "updatedAt": "2024-05-08T16:12:14.954179"
        },
        {
          "name": "Ceren Şahin",
          "phoneNumber": "+380000000006",
          "email": null,
          "isFavourite": false,
          "contactType": "home",
          "createdAt": "2024-05-08T16:12:14.954182",
          "updatedAt": "2024-05-08T16:12:14.954184"
        },
        {
          "name": "Gönül Yıldırım",
          "phoneNumber": "+380000000007",
          "email": "yıldırım7@example.com",
          "isFavourite": false,
          "contactType": "personal",
          "createdAt": "2024-05-08T16:12:14.954187",
          "updatedAt": "2024-05-08T16:12:14.954189"
        },
        {
          "name": "Ergem Öztürk",
          "phoneNumber": "+380000000008",
          "email": null,
          "isFavourite": false,
          "contactType": "personal",
          "createdAt": "2024-05-08T16:12:14.954196",
          "updatedAt": "2024-05-08T16:12:14.954198"
        },
        {
          "name": "Çiğdem Aydın",
          "phoneNumber": "+380000000009",
          "email": "aydın9@example.com",
          "isFavourite": false,
          "contactType": "home",
          "createdAt": "2024-05-08T16:12:14.954203",
          "updatedAt": "2024-05-08T16:12:14.954205"
        },
        {
          "name": "Erden Özdemir",
          "phoneNumber": "+3800000000010",
          "email": null,
          "isFavourite": false,
          "contactType": "personal",
          "createdAt": "2024-05-08T16:12:14.954208",
          "updatedAt": "2024-05-08T16:12:14.954211"
        }
      
      ];
      await Contact.insertMany(sampleContacts);
      console.log('Sample contacts added successfully');
    }
  } catch (error) {
    console.error('Error initializing contacts:', error);
  }
};

initializeContacts();

module.exports = Contact; 