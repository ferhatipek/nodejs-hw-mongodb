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
          name: "Test User1",
          phoneNumber: "5555555555",
          email: "user1@example.com",
          contactType: "personal"
        },
        {
          name: "Test User2",
          phoneNumber: "1111111111",
          email: "user2@example.com",
          contactType: "work"
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